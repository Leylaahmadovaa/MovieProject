import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ3MDk3MzhmMWMwNzg3NTk5NjZkNDgzZGZkYzkxNSIsIm5iZiI6MTcyODQwODMyMi4yNTMxNjEsInN1YiI6IjY3MDU2YTYyMWI5NmI4ZWY0YzY5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaCRMWLaaxtpRI3i_qbPC78rwbmdQku4iDcCQfDNPMw",
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
   
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="h-[1820px] bg-[#39445a] flex items-center flex-col">
      <h2 className="text-white font-title text-4xl font-thin mt-[155px] mb-[12px]">
        TRENDING TODAY
      </h2>
      <div className="grid grid-cols-5 gap-x-9 gap-y-3">
        {movies.length > 0 &&
          movies.map((element) => {
            return (
              <NavLink
                key={element.id}
                to={`${element.id}`}
                className="bg-[#21262b96] p-2 rounded-lg h-[370px] text-white w-[210px] relative hover:bg-white hover:text-gray-800 duration-500"
              >
                <p className="absolute right-[-7px] top-[-7px] text-white font-title font-medium bg-[#3f51b5] rounded-full px-[6px] py-[1px] text-[12px]">
                  {element.vote_average}
                </p>
                <img
                  className="rounded-lg"
                  src={"https://image.tmdb.org/t/p/w200" + element.poster_path}
                  alt="movie"
                />
                <h3 className="text-center  font-title mt-1">
                  {element.title}
                </h3>
                <div className="flex justify-between mt-2">
                  <p className="text-right font-thin font-title">
                    Movie
                  </p>
                  <p className="text-right font-thin font-title">
                    {element.release_date}
                  </p>
                </div>
              </NavLink>
            );
          })}
      </div>
     
    </div>
  );
}
