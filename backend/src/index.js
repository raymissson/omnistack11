const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/** 
 * Métodos HTTP
 * get: buscar info backend
 * post: criar info backend
 * put: alterar info backend
 * delete: del info backend
*/

/**
 * Tipos de parâmetros:
 * 
 * Query: parâmetros nomeados enviados na nota após ? (filtros, paginação)
 * Route params: parâmetos utilizados para identificar recursos 
 * Request, Body: corpo da requisição utlizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, Firebase
  * 
  */

  /**
   * Driver: select * from users
   * Query Builder: table('users).select('*').where()
   */


app.listen(3333);