import React from "react";
import "./App.css";
import Animal from "./Animal";
import MovieList from "./MovieList";
import CustomTypography from "./CustomTypography";
import CustomButton from "./CustomButton";
import CustomTextfield from "./CustomTextfield";

// const movies = [
//   {
//     name: "Animal",

//     leadActor: "Ranbir",
//   },
//   {
//     name: "Pushpa",
//     leadActor: "Allu Arjun",
//   },
//   {
//     name: "Bahubali",
//     leadActor: "Prabhas",
//   },
// ];

const App = () => {
  return (
    <div>
      {/* <Animal name="Dog" age={15}/>
    <Animal name="cat" age={14}/>
    <Animal name="cow" age={18}/> */}

      {/* {movies.map((item,index)=>{
      return(
    <MovieList key={index} name={item.name} leadActor={item.leadActor} />
      );
    })} */}

      {/* <CustomTypography/> */}
      {/* <CustomButton /> */}
      <CustomTextfield/>
    </div>
  );
};
export default App;
