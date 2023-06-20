import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../Api/fetchMovies';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    fetchMovies(url)
      .then(results => {
        setCredits(results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);
