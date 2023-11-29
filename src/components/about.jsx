import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import anim from "../assets/dot-ani.json";
import Lottie from "lottie-react";

const About = () => {
  const allData = JSON.parse(useLoaderData());
  //   console.log(allData);
  return (
    <div className="my-10">
      <div className="my-10 flex justify-center">

        <h1 className="px-3 text-xl flex flex-col lg:flex-row items-center relative lg:text-4xl font-bold text-center lg:w-[75%]">
        <Lottie animationData={anim} className=" h-96 absolute -mt-48 lg:-mt-0  lg:-ml-40 opacity-60"></Lottie>

          Exploring the Global Landscape: A Tapestry of Cultures, Challenges,
          and Collaborations
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5 lg:px-10 px-3">
        {allData.map((data) => (
          <Post key={data.index} data={data}></Post>
        ))}
      </div>
    </div>
  );
};

export default About;
