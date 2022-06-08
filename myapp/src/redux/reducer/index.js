const initialState = {
    tarjetas: [
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
}


export default function rootReducer (state=initialState,action){
    switch(action.type){
        case "GET_TARJETAS":
            return{...state}
        default:
            return {...state}
    }
}

