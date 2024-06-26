import { PrivateRoute } from "../../Router/PrivateRoute"; // Importa PrivateRoute
import { Navigation1 } from "../../Components/Navigation-menus/Navigation1";
import { Navigation2 } from "../../Components/Navigation-menus/Navigation2";
import { useMediaQuery } from "@mui/material";
import Tweets from "../../Components/Tweet";
import TweetList from "../../Components/TweetList";
import SearchBar from "../../Components/SearchBar"; // Importa SearchBar

const Home = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="p-3 w-screen h-full dark:bg-gray-900 flex flex-col items-center">
      <div className="w-full flex justify-end p-2">
        <SearchBar /> {/* Barra de búsqueda en la parte superior derecha */}
      </div>
      <div className="w-full flex-grow flex">
        {isLargeScreen ? (
          <div className="w-full h-full flex">
            <div className="fixed left-0 top-0 h-full">
              <Navigation2 />
            </div>
            <div className="ml-[250px] flex items-center flex-col w-full h-full">
              {" "}
              {/* Ajusta el margen izquierdo para dar espacio a Navigation2 */}
              <div>
                <h1 className="text-3xl font-bold underline dark:text-white p-6">
                  Home!
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <TweetList />
              </div>
              <div className="flex justify-center items-center">
                <Tweets />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-screen">
            <div className="flex-none">
              <Navigation1 />
            </div>
            <div className="flex justify-center items-center flex-col w-full">
              <div>
                <h1 className="text-3xl font-bold underline dark:text-white">
                  Home!
                </h1>
              </div>
              <div className="h-[calc(100vh - 20px)] justify-center items-center">
                <TweetList />
                <Tweets />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
