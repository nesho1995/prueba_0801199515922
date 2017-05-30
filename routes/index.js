var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PROYECTO DE PRUEBA HECTOR DOBLADO' });

router.get('/contacto', function(req, res, next) {
  res.render('contacto',{"img": "/images/imagen1.jpg" });
  });
});

router.get('/api/usuarios', function(req,res,next){
  var usuarios = [
    {
      "Nombre":"Hector",
      "Apellido":"Doblado",
      "Identidad": "0801199607333",
      "Correo": "hectorydoblado@gmail.com",
      "Areas":[
          {"Area1":"Programación"},
          {"Area2":"Base de Datos"},
          {"Area3":"Inteligencia de Negocios"}
        ]
    }

              ];
  res.json(usuarios);

});

router.get('/prueba',function(req,res,next){
res.render('mensaje',{"txtmensaje":"","msg":""});
});

var mensajes = [];

router.post('/prueba',function(req,res,next){
console.log(req.body);
mensajes.push(req.body.txtmensaje);
var prueba = mensajes.join("Prueba");
var msgs = {"txtmensaje": req.body.txtmensaje,"msg": prueba };

res.render('mensaje',msgs);
});
module.exports = router;
