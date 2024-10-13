import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieDetail() {
  const params = useParams();
  const [movies, setMovies] = useState();
  async function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ3MDk3MzhmMWMwNzg3NTk5NjZkNDgzZGZkYzkxNSIsIm5iZiI6MTcyODQwODMyMi4yNTMxNjEsInN1YiI6IjY3MDU2YTYyMWI5NmI4ZWY0YzY5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaCRMWLaaxtpRI3i_qbPC78rwbmdQku4iDcCQfDNPMw",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="h-[750px] bg-[#39445a] flex items-center flex-col">
      {movies && (
        <div className="flex mt-[170px] justify-center gap-[4%] w-full">
          <img
            src={"https://image.tmdb.org/t/p/w300" + movies.poster_path}
            alt="movie"
          />
          <div className="w-[55%] text-white font-title ">
            <h2 className="text-center text-6xl">{movies.original_title}</h2>
            <p className="text-center my-[5px] italic">{movies.tagline}</p>
            <div className="rounded-xl p-4 overflow-y-scroll shadow-4xl h-[50%] text-xl">
              {movies.overview}
            </div>

            <div>
              <Carousel
                className="flex justify-center items-center"
                dots={false}
                autoplaySpeed={2500}
                slidesToShow={movies.production_companies.length > 2 ? 3 : movies.production_companies.length > 1 ? 2 : 1}
                autoplay
                infinite={true}
              >
                {movies.production_companies.length > 0 &&
                  movies.production_companies.map((element) => {
                    return element.logo_path ? (
                      <div
                        key={element.id}
                        className="font-title text-white font-bold"
                      >
                        <div className="flex flex-col justify-center items-center h-[100px]">
                        <img
                          className="h-[50px]"
                          src={
                            "https://image.tmdb.org/t/p/w200" +
                            element.logo_path
                          }
                          alt="logo"
                          />
                        <p>{element.name}</p>
                          </div>
                      </div>
                    ) : (
                      <div key={element.id}>
                        <p className="font-title text-white font-bold text-[18px] h-[100px] flex justify-center items-center">
                          {element.name}
                        </p>
                      </div>
                    );
                  })}
              </Carousel>
            </div>

            <button className="mt-[10px] text-center w-full bg-[#F50049] hover:bg-[#f5004aad] duration-500 rounded-sm py-[6px] font-semibold">
              <i className="fa-brands fa-youtube"></i> &nbsp; WATCH THE TRAILER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

