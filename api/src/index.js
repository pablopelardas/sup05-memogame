var express = require("express")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require("morgan")

var {sup, videogames} = require('./mockData.js')

var app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


// app.post('/body',(req,res)=>{
//     //logica

//     const respuesta = req.body.nombre.split("")
//     res.send(respuesta)
// })

app.get('/sup', (req, res)=>{
    res.send(sup)
})

app.get('/videogames',(req,res)=>{
    res.send(videogames)
})
app.listen(3001, () => 
    console.log("listening at port 3001")
)


