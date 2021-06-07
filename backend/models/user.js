'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Client, {
         foreignKey: 'id_client', as: 'client' });
      User.hasMany(models.Livreurs, {
        foreignKey: 'id_livreur', as: 'livreur' });
      User.hasMany(models.Admin, {
        foreignKey: 'id_admin', as: 'admin' });
      User.hasMany(models.Sup_admin, {
        foreignKey: 'id_Sup_admin', as: 'Sup_admin' });
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,

    role: DataTypes.STRING,
    token:DataTypes.STRING,
    is_active :DataTypes.BOOLEAN,
    is_deleted :DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
