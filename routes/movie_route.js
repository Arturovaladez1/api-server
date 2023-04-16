'use strict';

const express = require('express');
const router = express.Router();
const { Movie } = require('../models/model');

router.get('/', getMovies);
router.get('/:id', getAMovie);
router.post('/', postAMovie);
router.put('/:id', putAMovie);
router.delete('/:id', deleteAMovie);


async function getMovies(request, response, next) {
  try {
    let movies = await Movie.read();
    response.status(200).json(movies);
  } catch (e) {
    console.log(e);
  }
}

async function getAMovie(request, response, next) {
  try {
    let id = request.params.id;
    let aMovie = await Movie.read(id);
    response.status(200).json(aMovie);
  } catch (e) {
    console.log(e);
  }
}

async function postAMovie(request, response, next) {
  try {
    const movie = await Movie.create(request.body);
    response.status(200).json(movie);
  } catch (e) {
    console.log(e);
  }
}

async function putAMovie(request, response, next) {
  try {
    let id = request.params.id;
    const movie = {
      title: request.body.title,
      year: request.body.year,
      runtime: request.body.runtime,
      id: id,
    };
    // await movies_model.findByPk(id);
    await Movie.update(request.body, id);
    response.status(200).json(movie);
  } catch (e) {
    console.log(e);
  }
}

async function deleteAMovie(request, response, next) {
  try {
    let id = request.params.id;
    await Movie.delete(id);
    response.status(200).send(Movie.read(id));
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;