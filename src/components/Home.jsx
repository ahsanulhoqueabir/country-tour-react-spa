import Lottie from "lottie-react";
import map from "../assets/map.json";
import { Link, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import Search from "./Search";
const Home = () => {
  const loading = useNavigation();
  if (loading.state === "loading") {
    return <LoadingPage />;
  }
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 items-center">
      <div className="px-3 lg:w-[90%]">
        <p className="font-sans text-lg">
          <span className="text-5xl font-bold">T</span>he world, a complex
          tapestry of diverse landscapes, cultures, and ecosystems, orbits the
          sun in the vastness of space. <br /> <br /> With over 7.9 billion
          inhabitants, it encompasses continents, oceans, and varied climates,
          from Antarctica's icy expanses to the Amazon's tropical rainforests.
          Human civilization, connected by global exchanges, weaves together a
          rich fabric of cultures and traditions. <br /> <br /> Yet, challenges
          loom—climate change, socio-economic disparities, and political
          conflicts. Advances in technology reshape societies, offering both
          opportunities and ethical dilemmas. The world is a dynamic,
          interconnected entity, where collective actions today shape its
          future, demanding global cooperation for a sustainable existence.
        </p>
        <div className="py-6 flex gap-3 items-center">
          <Link
            className="btn rounded-md bg-green-200 hover:bg-green-400"
            to="countries"
          >
            See All Countries
          </Link>
          <Link to="about" className="text-lg">
            About Us
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Lottie animationData={map}></Lottie>
      </div>
    </div>
  );
};

export default Home;
