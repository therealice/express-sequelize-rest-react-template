const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite:./database.sqlite');

exports.Model = Model;
exports.DataTypes = DataTypes;
exports.sequelize = sequelize;