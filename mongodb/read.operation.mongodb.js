use("ncit");
// db.movies.find().count();
// db.movies.find({name:{$ne:"Bitten"}});
// db.movies.find({name:{$not:{$eq:"Bitten"}}});

//alternativeway
// db.movies.find({name:"Bitten"});

// db.movies.find({id:{$lt:10}});// all id
// db.movies.find({id:{$lt:10}},{name:1,id:1});//only name and id
// db.movies.find({id:{$lt:10}},{_id:0,name:1});// no idea

// db.movies.find({id:{$gte:23}},{name:1,id:1,_id:0});

// db.movies.find(
        // {language:{$ne:"English"}});

// db.movies.find(
//     {genres:"Drama",runtime:60},
//     {name:1,genres:1,runtime:1}
// );
// db.movies.find({
//     $nor:[
//         {genres:"Drama"},
//         {runtime:60}
//     ],
// },{name:1,genres:1,runtime:1,_id:0});

// db.movies.find({summary:{$regex:"dance competition",$options:"i"}})

// db.movies.find({genres:{$size:1}});// doesn't accept range

//$all
//array field ma matra used
//alternative to $and if field is same
//find movies whose genres is "Drama" and "Comedy" hunai paryo!
// db.movies.find({$and:
//     [
//         {genres:"Drama"},
//         {genres:"Comedy"}
//     ]
// });
//alternatively
// db.movies.find(
//     {genres:{$all:["Drama","Comedy"]}}
// );

//find movies whose networkk country code is "US"
// db.movies.find({"network.country.code":"US"}
// ,{name:1,network:1,country:1,code:1,_id:0}
// );

// ? 2.  find movies whose rating is greater than 6 and less than 7


// ?3. find movies whose genre includes Drama and Mystery
// ?4. find movies whose language is English and rating is greater than 9
// ?5. find movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9











