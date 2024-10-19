use("ncit-data");
//creates database 
// db.student.insertMany([
//   {
//     name: "Shreya Khanal",
//     address: "Kathmandu",
//     age: 21,
//     isGraduated: false,
//   },
//   {
//     name: "Kuber Pathak",
//     address: "Lalitpur",
//     age: 21,
//     isGraduated: true,
//   },

//   {
//     name: "Rajiv Khadka",
//     address: "Bhaktapur",
//     age: 21,
//     isGraduated: false,
//   },
// ]);
// db.student.find();

// //delete whose name == Shreya 
// db.student.deleteOne(
//     {
//         name: "Milan Kundra",
//     },
// );
// db.student.find();

// db.student.deleteMany({});

//update "Shreya Kahnal" to "Seyoo"
// db.student.updateOne(
//     {
//         name: "Rajiv Karki"
//     },{
//         $set:{age:40}
//     }
// );
// db.student.find();
    //alternately
// db.student.deleteMany({
//         isGraduated:true,
//         age:{$gt:30}
//     }
// );
// db.student.find();

//divide age of Rajiv by 2 times
// db.student.updateOne(
//     {
//         name: "Rajiv Karki"
//     },{
//         $mul:{age:1/2}
//     }
// );
// db.student.find();

// db.student.updateOne(
//     {name: "Milan Kundra"},
//     {$set:{
//             address: "Lalitpur",
//             age: 21,

//     }},
//     {upsert:true}
// );
// db.student.find();


