export default [
    {
        id:1, 
        name: "Felipe Silva", 
        username: "Felipe.S",
        profilePicture: "https://www.ceupe.mx/images/pexelsandreapiacquadio716411.jpg",
        online: true,
        status: "avaliable",
        friends: [
            {
                id: 2,
                name: "José Leite"
            },
            {
                id: 3,
                name: "Maria A."
            }
        ],
        posts:[
            {
                author: "Felipe.S",
                authorId: 1,
                id: 1,
                text: "Winning against procrastination. I'm proud of myself. ",
                likes: 2
            },
            {
                author: "Felipe.S",
                authorId: 1,
                id: 2,
                text: "Preparing my portfolio. It will be awesome.",
                likes: 121
            },
            {
                author: "Felipe.S",
                authorId: 1,
                id: 3,
                text: "Thanks for today's meeting, team!! Let's keep going 👊",
                likes: 54
            }
        ]
    },
    {
        id:2, 
        name: "José Leite", 
        username: "JLeitee_",
        profilePicture: "https://jsousacertificados.com.br/wp-content/uploads/sites/251/2020/04/5-dicas-de-administracao-que-todo-empresario-deve-saber.jpg",
        online: false,
        status: "offline",
        friends: [
            {
                id: 3,
                name: "Maria A."
            },
        ],
        posts:[
            {
                author: "JLeitee_",
                authorId: 2,
                id: 4,
                text: "What do you think about Java?",
                likes: 2
            },
            {
                author: "JLeitee_",
                authorId: 2,
                id: 5,
                text: "I should use TypeScript??",
                likes: "5k"
            },
            {
                author: "JLeitee_",
                authorId: 2,
                id: 6,
                text: "Learn React is so good.",
                likes: 54
            },
            {
                author: "JLeitee_",
                authorId: 2,
                id: 7,
                text: "Bought a new monitor. Now it will become serious.",
                likes: 54
            },
            {
                author: "JLeitee_",
                authorId: 2,
                id: 8,
                text: "Excited for today's project.",
                likes: 54
            }
        ]
    },
    {
        id:3, 
        name: "Maria A.", 
        username: "mari.oficial",
        profilePicture: "https://img.freepik.com/fotos-premium/negocios-financas-e-emprego-conceito-de-empresarias-de-sucesso-feminino-sorridente-empresaria-profissional-corretora-de-imoveis-mostrando-um-bom-negocio-aos-clientes-carrega-o-laptop-na-mao_1258-59119.jpg",
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
                author: "mari.oficial",
                authorId: 3,
                id: 9,
                text: "Who already lost hours because of a semicolon? 🤣",
                likes: 2
            },
            {
                author: "mari.oficial",
                authorId: 3,
                id: 10,
                text: "CSS is such an awesome tool.",
                likes: 121
            },
            {
                author: "mari.oficial",
                authorId: 3,
                id: 11,
                text: "I'm loving this new plataform!! 😍",
                likes: 54
            }
        ]
    }
]