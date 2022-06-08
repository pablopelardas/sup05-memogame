const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require("morgan")

const videogames= [
        {
            id: 1,
            name: 'Pacman',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/283px-Pac-Man_Cutscene.svg.png',
            isGuessed: false,
        },
        {
            id: 2,
            name: 'Mario',
            img: 'https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad-1024x576.jpg',
            isGuessed: false,
        },
        {
            id: 3,
            name: 'Galaga',
            img: 'https://play-lh.googleusercontent.com/6wgqRZPm-mrGSGiScuUfL5qOgSMYHpeA9fLsa4Jah3NYDSUYukDQDAdvoLuDkrz9TMc',
            isGuessed: false,
        },
        {
            id: 4,
            name: 'Metal Slug',
            img: 'https://www3.minijuegosgratis.com/v3/games/thumbnails/4897_1.jpg',
            isGuessed: false,
        },
        {
            id: 5,
            name: 'Street Fighter',
            img: 'https://cdn.akamai.steamstatic.com/steam/apps/1172540/ss_ae8ae2947e0789d322ffc1cdddf0671888336da8.1920x1080.jpg?t=1574816940',
            isGuessed: false,
        },
    ]
const sup = [
        {
            id: 1,
            name: 'Pablo',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U035TF88WNA-ee559b8f2f08-512',
            isGuessed: false,
        },
        {
            id: 2,
            name: 'Diego',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U036CNU6S2D-156b2cf3b9df-512',
            isGuessed: false,
        },
        {
            id: 3,
            name: 'German',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U036Q16010R-ef416568d3d0-512',
            isGuessed: false,
        },
        {
            id: 4,
            name: 'Mauricio',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U02KSNEKML2-e79eefed051e-512',
            isGuessed: false,
        },
        {
            id: 5,
            name: 'Arnold',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U0382HANVSB-d4f64abc0602-512',
            isGuessed: false,
        },
        {
            id: 6,
            name: 'Alejandro',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U03206HE0NQ-3c368efb11d2-512',
            isGuessed: false,
        },
        {
            id: 7,
            name: 'Sebastian',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U039Z1JRWMQ-g6b53b83e8df-512',
            isGuessed: false,
        },
        {
            id: 8,
            name: 'Nuria',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U037NEWNETG-3dbae932dc3b-512',
            isGuessed: false,
        },
        {
            id: 9,
            name: 'Melany',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U02SNUE980P-28dc20644c83-512',
            isGuessed: false,
        },
        {
            id: 10,
            name: 'Felipe',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U0356MVERJ8-5bcc67b9bdad-512',
            isGuessed: false,
        },
        {
            id: 11,
            name: 'Enrique',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U038AFLSU5U-e380667e2e71-512',
            isGuessed: false,
        },
        {
            id: 12,
            name: 'Nelson',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U039Z0NR0JX-e2b3d5431ab8-512',
            isGuessed: false,
        },
        {
            id: 13,
            name: 'Geronimo',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U0381MSUY3B-1eb28520382d-512',
            isGuessed: false,
        },
        {
            id: 14,
            name: 'Heider',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U02AD4L7DFD-f0b59b0225ad-512',
            isGuessed: false,
        },
        {
            id: 15,
            name: 'Lionel',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U03BE96808L-4a81e1a53022-512',
            isGuessed: false,
        },
        {
            id: 16,
            name: 'Daniel',
            img: 'https://ca.slack-edge.com/TPRS7H4PN-U03BT7PTD6V-23e6c770e7a8-512',
            isGuessed: false,
        },
        
]


const app = express()
const router = express.Router()

app.use(express.urlencoded({extended: true, limit: '50mb'}))
app.use(express.json({limit: '50mb'}))
app.use(cookieParser());
app.use(morgan('dev'))

router.get("/videogames", (req, res) => {

    res.status(200).send(videogames)
})

router.get("/sup", (req,res) => {

    res.status(200).send(sup)
})

app.use("/", router)

module.exports = app;