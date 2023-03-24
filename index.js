const express = require('express');
const app = express();
const port = 'https://admirable-mochi-4b5a88.netlify.app/';
const path = require('path');
const bodyParser = require('body-parser');

//---------------------------------------
const passport = require('passport');
const session = require('express-session');

// Setting for Pugjs
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Livereload
var livereload = require('livereload');
var watchServer = livereload.createServer();

// Connect-livereload
const connectLivereload = require('connect-livereload');
app.use(connectLivereload());
watchServer.watch(path.join(__dirname, 'public'));

// This is reset pug
watchServer.server.once('connection', () => {
  setTimeout(() => {
    watchServer.refresh('/');
  }, 500);
});

//- Luôn đặt nó ở vị trí này, do có hàm serializeUser, deserializeUser
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// require('./db.js') //db
//- KÍCH HOẠT GOOGLE STRATEGY
app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  }),
);
//- NẾU FAIL THÌ TRỞ LẠI LOGIN (CÓ THỂ XÓA failureRedirect VÀ CUSTOM THÔNG QUA CALLBACK FUNCTION)
app.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
  }),
  function (req, res) {
    res.redirect('/');
  },
);

//- REQUIRE PASSPORT
require('./config/passport');

//- IN RA THÔNG TIN USER KHI VỪA MỚI ĐĂNG NHẬP
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/phongban', (req, res) => {
  res.render('department');
});

app.get('/thongbao', (req, res) => {
  res.render('list-notification');
});

app.get('/chitietthongbao', (req, res) => {
  res.render('notification-details');
});

app.get('/trangcanhan', (req, res) => {
  res.render('personal');
});

//- LOGIN, REGISTER
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

//- MANAGE
app.get('/quanlyphongban', (req, res) => {
  res.render('manage-department');
});

app.get('/quanlylop', (req, res) => {
  res.render('manage-classes');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
