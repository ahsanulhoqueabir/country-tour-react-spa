import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Country from "./Country";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import LoadingPage from "./LoadingPage";

const Countries = () => {
    const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
  const alldata = useLoaderData();
  console.log(alldata);
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="px-3 lg:px-0 my-10">
      <p className="text-3xl text-center font-bold pb-6">
        Total Country:{" "}
        <span className="text-4xl text-teal-600">{alldata.length}</span>{" "}
      </p>
      <div>
        {showAll ? (
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alldata.map((country) => (
              <Country key={country.cca3} country={country}></Country>
            ))}
          </div>

            <div className=" flex justify-center my-8">
              <button className=" border-none bg-blue-200 hover:bg-green-600 hover:text-white btn rounded" onClick={() => setShowAll(!showAll)}>
<EyeSlashIcon className="h-5 "></EyeSlashIcon>
                Show Less
              </button>
            </div>
        </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {alldata.slice(0, 12).map((country) => (
                <Country key={country.cca3} country={country}></Country>
              ))}
            </div>
            <div className=" flex justify-center my-8">
              <button className="border-none btn bg-green-600 hover:bg-blue-200 text-white hover:text-black rounded" onClick={() => setShowAll(!showAll)}>
                <EyeIcon className="h-5"></EyeIcon>
                Show All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
