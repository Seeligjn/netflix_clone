import React from "react";
import { useMovies } from "../context/MovieProvider.jsx";
import Movie from "./Movie.jsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function MyList({ title, id }) {
  const { myList } = useMovies();

  console.log(myList[0]);

  // Filter movies by type for popular movies
  const myListMovies = myList.map((movie, id) => {
    return (
      <>
        <Movie key={id} movie={movie} />
      </>
    );
  });

  myList.map((movie, id) => console.log(movie));

  return (
    <div className="flex flex-col items-center justify-start w-full h-screen p-0 m-0 bg-black bg-opacity-90">
      <div className="flex justify-start w-full mt-24 mb-10 ml-10">
        <h2 className="text-2xl font-bold text-white">My List</h2>
      </div>
      <div id={"slider" + id} className="grid grid-cols-2 gap-4">
        {myListMovies}
      </div>
    </div>
  );
}

export default MyList;
