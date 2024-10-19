//db name
use("ncit");

//create

//insertOne
//to add single document
// db.student.insertOne({
//     name:"Shreya",
//     age:21,
//     address:"ktm",
// })

// insertMany- to add multiple documents

// db.student.insertMany([
//         {
//                 name:"raya",
//                 age:20,
//                 address:"ktm",
//          },
//          {
//             name:"mira",
//             age:13,
//             address:"pokhara",
//          }
// ]);




// db.student.findOne({name:"arya"});
// db.student.findOne({_id:ObjectId("66599534ce3e2752b68cb01e")});

//delete single data
// db.student.deleteOne({name:"arya"});

//delete multiple data
// db.student.deleteMany({name:"Shreya"});


//edit single data





// db.student.updateOne(
    //     {name:"raya"},
//     {
//         $set:{
    //             address:"biratnagar",
    //         }
    
    // }
    // );
    
    // db.student.updateMany(
        //         {age:13},
        //         {
            //             $set:{
                //                 address:"biratnagar",
                //             }
                
                //     }
                //     );
                
                db.student.find();