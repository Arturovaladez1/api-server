'use strict';

const  { DataTypes } = require('sequelize');
// const { DataTypes } = require('sequelize');

// defines a table
const boxoffice_model = (sequelize) => sequelize.define('Boxoffice', {
  // each of these is a column in the table
  boxoffice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticket: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = boxoffice_model;