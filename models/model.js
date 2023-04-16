'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const movies = require('./movies_model');
const boxoffice = require('./boxoffice_model');
const Collection = require('./collection');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
const sequelize = new Sequelize(SQL_URL);

const moviesModel = movies(sequelize);
const boxofficeModel = boxoffice(sequelize);



// create our associations / relationships (from sequelize model method)
moviesModel.hasMany(boxofficeModel, { foreignKey: 'movieId', sourceKey: 'id' });
boxofficeModel.belongsTo(moviesModel, { foreignKey: 'movieId', targetKey: 'id' });



module.exports = {
  sequelize,
  DataTypes,
  Movie: new Collection(moviesModel),
  Boxoffice: new Collection(boxofficeModel),
};