import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDetailsPage,
  MovieDetailsDiv,
  MovieDetailsGenres,
  MovieDetailsLink,
  GoBackLink,
} from './MovieDetails.styled';
import { fetchMovies } from '../../Api/fetchMovies';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  useEffect(() => {
    fetchMovies(url)
      .then(results => {
        setMovie(results);
      })
      .catch(err => console.error('error:' + err));
  }, [url]);
