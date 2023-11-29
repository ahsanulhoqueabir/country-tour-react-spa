import { Link, useLoaderData } from "react-router-dom";
import NativeName from "./NativeName";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  MapPinIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Translations from "./Translations";
import Currencies from "./Currencies";

const CountryDetails = () => {
  const details = useLoaderData()[0];
  // console.log(details);
  const {
    flags,
    maps,
    name,
    population,
    cca3,
    cca2,
    ccn3,
    capital,
    currencies,
    independent,
    unMember,
    translations,
    timezones,
    continents,
    startOfWeek,
    borders,
    area,
  } = details;
  return (
    <div className="px-3">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center mb-11 underline decoration-wavy	underline-offset-8	">
        All About <span className="text-teal-500">{name.common}</span>
      </h1>
      <div className="flex flex-col lg:flex-row my-5 gap-2">
        <div className="lg:w-[40%] flex flex-col gap-3  border-r-2 ">
          <figure className="text-center">
            <img className=" lg:max-w-md" src={flags.svg} alt="" />
            <figcaption>National Flag of {name.common}</figcaption>
          </figure>
          <div className="flex flex-col gap-2 lg:text-2xl">
            <h1>
              <span className="font-bold">Common Name: </span> {name.common}
            </h1>
            <h1>
              <span className="font-bold">Official Name: </span> {name.official}
            </h1>
            <div className="flex items-center gap-2">
              <span className="font-bold">Independent: </span>
              {independent ? (
                <span>
                  {" "}
                  <CheckBadgeIcon className="h-6 w-6 text-green-600"></CheckBadgeIcon>{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <XCircleIcon className="h-6 w-6 text-red-600"></XCircleIcon>{" "}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 ">
              <span className="font-bold">United Nation Member: </span>
              {unMember ? (
                <CheckIcon className="h-6 w-6 text-green-600"></CheckIcon>
              ) : (
                <XMarkIcon className="h-6 w-6 text-red-600"></XMarkIcon>
              )}
            </div>
            <h1>
              <span className="font-bold">Native Name: </span>
              <ol className="list-decimal	">
                {Object.keys(name.nativeName).map((lan) => (
                  <NativeName
                    key={lan}
                    lan={lan}
                    details={details}
                  ></NativeName>
                ))}
              </ol>
            </h1>
            <p>
              <span className="font-bold">Total Population: </span>{" "}
              <span>{population}</span>
            </p>
            <p>
              {" "}
              <span className="font-bold">Area: </span>
              {area}
            </p>
            <p>
              {" "}
              <span className="font-bold">TimeZone: </span>
              {timezones}
            </p>
            <p>
              {" "}
              <span className="font-bold">Continents: </span>
              {continents}
            </p>
            <p className=" capitalize">
              {" "}
              <span className="font-bold">Start of Week: </span>
              {startOfWeek}
            </p>
            <p>
              {" "}
              <span className="font-bold">Border With: </span>
              <span>{borders ? borders.join() : "No Border Country! "}</span>
            </p>
            <p className="">
              <span className="font-bold">Currency: </span>
              <div className="mr-5">
                <table className="table border-2 divide-y-2">
                  <thead className="text-lg">
                    <th className="border-r-2">Acronym</th>
                    <th className="border-r-2"> Name</th>
                    <th>Symbol</th>
                  </thead>
                  <tbody>
                    {Object.keys(currencies).map((curr) => (
                      <Currencies
                        key={ccn3}
                        curr={curr}
                        details={details}
                      ></Currencies>
                    ))}
                  </tbody>
                </table>
              </div>
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              <span>{capital ? capital.join() : "No Capital! "}</span>
            </p>
            <p className="flex m-auto">
              <Link  className="flex items-center gap-1 border-2 justify-start transition-transform	 p-2 bg-slate-100 border-blue-100" to={maps.googleMaps}>
                {" "}
                Google Map <MapPinIcon className="h-6"></MapPinIcon>
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:w-[60%] flex flex-col gap-4 lg:mx-10">
          <div>
            <p className="text-center text-2xl font-semibold">
              Name Translations in Different Language
            </p>
            <div className="overflow-x-auto">
              <table className="table my-5  m-auto border-2 break-all	">
                <thead className="text-xl bg-blue-50 break-all	">
                  <th className="border-r-2 break-all	">Language</th>
                  <th className="border-r-2 break-all	">Common Name</th>
                  <th>Official Name</th>
                </thead>
                <tbody>
                  {Object.keys(translations).map((data) => (
                    <Translations
                      key={cca3}
                      data={data}
                      details={details}
                    ></Translations>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold">Flag Details</h1>
            <div className="flex  items-start">
              <p className="text-xl "> {flags.alt ? flags.alt : "No Data!"} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
