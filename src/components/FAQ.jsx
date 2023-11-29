import { useLoaderData } from "react-router-dom";
import Places from "./Places";
import icon from "../assets/faq.json";
import Lottie from "lottie-react";

const Faq = () => {
  const results = JSON.parse(useLoaderData());

  return (
    <>
      <h1 className="lg:text-3xl font-bold text-center pb-10">
        Some Frequently Asked Question(FAQ) About Few Historical Place
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 items-start">
        <div className="lg:w-[40%] lg:sticky lg:top-10">
          <Lottie animationData={icon} className="h-full w-full"></Lottie>
        </div>
        <div className="mx-3 lg:w-[60%]">
          {results.map((data) => (
            <Places data={data}></Places>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
