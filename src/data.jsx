export default [
    {
        id:1, 
        name: "Felipe Silva", 
        username: "jf.leiteee",
        profilePicture: "https://i.pinimg.com/originals/6e/0e/08/6e0e08d71047f6279ac4c38fd1316436.png",
        online: true,
        status: "avaliable",
        friends: [
            {
                id: 2,
                name: "Leitee"
            },
            {
                id: 3,
                name: "Zezinho"
            }
        ],
        posts:[
            {
                author: "jf.leiteee",
                authorId: 1,
                id: 1,
                text: "churras hj?",
                likes: 2
            },
            {
                author: "jf.leiteee",
                authorId: 1,
                id: 2,
                text: "vitoria do meu peixãooo!! vamo Santasticooo",
                likes: 121
            },
            {
                author: "jf.leiteee",
                authorId: 1,
                id: 3,
                text: "to triste hj :(",
                likes: 54
            }
        ]
    },
    {
        id:2, 
        name: "Leitee", 
        username: "oPanda243",
        profilePicture: "https://i.pinimg.com/736x/95/49/ca/9549caeda29f17f8986dbea24fe511e9.jpg",
        online: false,
        status: "offline",
        friends: [
            {
                id: 3,
                name: "Zezinho"
            },
        ],
        posts:[
            {
                author: "oPanda243",
                authorId: 2,
                id: 4,
                text: "Mãe, to famoso 🤩",
                likes: 2
            },
            {
                author: "oPanda243",
                authorId: 2,
                id: 5,
                text: "Acredito que o programador que fez isso se esforçou até demais nisso daqui",
                likes: "5k"
            },
            {
                author: "oPanda243",
                authorId: 2,
                id: 6,
                text: "É tão bom aprender React :)",
                likes: 54
            },
            {
                author: "oPanda243",
                authorId: 2,
                id: 7,
                text: "Já passou fml",
                likes: 54
            },
            {
                author: "oPanda243",
                authorId: 2,
                id: 8,
                text: "to triste hj :(",
                likes: 54
            }
        ]
    },
    {
        id:3, 
        name: "Zezinho", 
        username: "joseph_",
        profilePicture: "https://odia.ig.com.br/_midias/jpg/2018/05/04/kanye_west-6632031.jpg?20201213091406",
        online: false,
        status: "offline",
        friends: [
            {
                id: 1,
                name: "Felipe Silva"
            },
        ],
        posts:[
            {
                author: "joseph_",
                authorId: 3,
                id: 9,
                text: "churras hj?",
                likes: 2
            },
            {
                author: "joseph_",
                authorId: 3,
                id: 10,
                text: "vitoria do meu peixãooo!! vamo Santasticooo",
                likes: 121
            },
            {
                author: "joseph_",
                authorId: 3,
                id: 11,
                text: "to triste hj :(",
                likes: 54
            }
        ]
    }
]