let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);



app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);



app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);



app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);



app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);

app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));



//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);
const express = require('express');
const router = express.Router();
app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));



//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;

const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));



//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;

const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});
//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;

const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});


app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));



//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;

const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);



app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
let app = require('./config/server'); //importando config do server
const path = require('path'); //tive que importar pq tava com problemas nas rotas por conta dos diretorios e tals
app.set('views', path.join(__dirname, 'views'));


//importando config das rotas
const rotaHome = require('./routes/rotaHome');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAcervo = require('./routes/rotaAcervo');
//const rotaEmprestimos = require('./routes/rotaEmprestimos'); //criar

app.use('/', rotaHome);
app.use('/home', rotaHome);
app.use('/usuarios', rotaUsuario);
app.use('/acervo', rotaAcervo);
//app.use('/emprestimos', rotaEmprestimos);
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('pages/acervo');
});

module.exports = router;

module.exports = router;




app.listen(3333, function(req, res){
	console.log('Servidor rodando na porta 3333');
});
