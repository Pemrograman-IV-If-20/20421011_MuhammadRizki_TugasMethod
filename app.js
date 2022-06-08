const express = require('express')
const app = express()

app.use (express.json())
app.use (express.urlencoded({
  extended: true

}))


//get
app.get('/', function (req, res) {
  res.send('Selamat Datang di API')
})

//query
app.get('/data-mahasiswa-query', function (req, res) {
  res.json({
    npm : req.query.npm,
    nama : req.query.nama,
    alamat : req.query.alamat

  })
})

//post
app.post('/data-mahasiswa/:hp-query', function (req, res) {
  res.json({
    npm       : req.body.npm,
    nama      : req.body.nama,
    alamat    : req.body.alamat,
    hobi      : req.query.hobi,
    hp        : req.params.hp,
    email     : req.body.email,
    agama     : req.body.agama,
    gender    : req.body.gender,
    nik       : req.body.nik,
    kewarganegaraan: req.body.kewarganegaraan

  })
})

app.listen(3000)