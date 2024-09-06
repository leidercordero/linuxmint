const express = require("express");
const app = express();
const puerto = 5000;

app.set('view engine','ejs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname +"/public"))

app.get('/', (req,res)=>{
    //__dirname indica la ubicación del proyecto
    res.render("index", {Variable:"Este es el contenido de la variable."})
});
//Captura de información usando post

app.listen(puerto, () => {console.log("Ejecutando express");});