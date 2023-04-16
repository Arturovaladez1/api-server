'use strict';

const express = require('express');
const router = express.Router();
const { Boxoffice } = require('../models/model');

router.get('/', getboxoffice);
router.get('/:id', getAboxoffice);
router.post('/', postAboxoffice);
router.put('/:id', putAboxoffice);
router.delete('/:id', deleteAboxoffice);

async function getboxoffice(request, response, next) {
  try {
    let boxoffice = await Boxoffice.read();
    response.status(200).json(boxoffice);
  } catch (e) {
    console.log(e);
  }
}

async function getAboxoffice(request, response, next) {
  try {
    let id = request.params.id;
    let aboxoffice = await Boxoffice.read(id);
    response.status(200).json(aboxoffice);
  } catch (e) {
    console.log(e);
  }
}

async function postAboxoffice(request, response, next) {
  try {
    const boxoffice = await Boxoffice.create(request.body);
    response.status(200).json(boxoffice);
  } catch (e) {
    console.log(e);
  }
}

async function putAboxoffice(request, response, next) {
  try {
    let id = request.params.id;
    const boxoffice = {
      boxoffice: request.body.boxoffice,
      ticket: request.body.ticket,
      id: id,
    };
    // await boxoffice_model.findByPk(id);
    await Boxoffice.update(request.body, id);
    response.status(200).json(boxoffice);
  } catch (e) {
    console.log(e);
  }
}

async function deleteAboxoffice(request, response, next) {
  try {
    let id = request.params.id;
    const boxoffice = await Boxoffice.delete(id);
    response.status(200).send(Boxoffice.read(id));
  } catch (e) {
    console.log(e);
  }
}


module.exports = router;