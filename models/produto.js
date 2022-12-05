const Sequelize = require('sequelize');
const db = require('./db' );

const produto = db.define('produtos', {
id:{
type: Sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},
nome:{
type: Sequelize.STRING,
allowNull: false
},
preco: {
type: Sequelize.DOUBLE,
allowNull: false
},
categoria: {
type: Sequelize.STRING,
allowNull: false
}
});


produto.sync();

module.exports = produto
