import React from 'react';
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  // Check if movies is undefined before using map
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}          
        </div>
      </section>
    </main>
  );
};
