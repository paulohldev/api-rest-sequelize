const { Sequelize } = require('sequelize');
// const Post = require('../models/Post');
const Usuario = require('../models/Usuario');
const configdb = require('../config/database');

const models = [Usuario];

const connection = new Sequelize(configdb);

models.forEach((model) => model.init(connection));
