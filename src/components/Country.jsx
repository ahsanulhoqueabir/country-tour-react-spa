import { Link } from "react-router-dom";

const Country = ({ country }) => {
  //   console.log(country);
  const { flags, maps, name, population, cca3, capital, currencies } = country;
  return (
    <div className=" w-full text-center h-full lg:p-2 bg-blue-100 relative">
      <div>
        <figure className="px-10 pt-10">
          <img src={flags.svg} alt={cca3} className=" h-40" />
        </figure>
        <div className="pl-3 py-4 items-center text-left">
          <h2 className="text-2xl text-center">
            <span className="font-bold">{name.official}</span>{" "}
          </h2>
        </div>
      </div>
      <div>
        <div className="absolute opacity-0 hover:opacity-100 bg-opacity-80 text-2xl bg-slate-700 inset-0 flex justify-center items-center">
          <Link to={name.common} key={cca3} className="btn">
            Learn More About <span className="font-bold">{name.common}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
