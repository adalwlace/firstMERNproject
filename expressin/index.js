import express from 'express';

const app= express();
app.use(express.json()); //to make app understand json


app.get('/',(req,res)=>{
    return res.status(200).send('my first api...');
});
app.get('/hi',(req,res)=>{
    return res.status(200).send('eyy how r ya');
    
})
let userlist=[
    {   id:1,
        name:"shrey",
        age:22,
    },
    {
        id:2,
        name:"arya",
        age:34,
    }
];
//add user
app.post("/user/add",(req,res)=>{
    const newUser = req.body;
    userlist.push(newUser);
    return res.status(200).send({message:'user is added successfully'});
    
});
//get users
app.get("/user/list",(req,res)=>{
    return res.status(200).send(userlist);
})

//delete user
app.delete("/user/delete/:userId",(req,res)=>{
    //extract user id to be deleted
    const userId=Number(req.params.userId);//change into num
    //find user
    const requiredUser=userlist.find((item,index,self)=>{
        if(item.id === userId){
            //=== so needs number
            return item;
        }
    });
    //if not user,throw error
    if(!requiredUser){
        return res.status(404).send({message:"User does not exist"});//obj ko form ma pathako so that dherai ota msg pathauna milos
    }
    //delete user
    const newUserList=userlist.filter((item)=> item.id!== userId);
    //replace userlist with new user list
    userlist = structuredClone(newUserList);
    
    //send response
    return res.status(200).send({message:"user is deleted successfully"});
    
});

//netwprk port and server
const PORT=8000; //4000 to 8000 dina pauxa

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
});

