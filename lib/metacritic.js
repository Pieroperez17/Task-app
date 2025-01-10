export async function getLatestGames() {
  // Simulando la respuesta de la API con datos de películas reconocidas
  const simulatedData = [
    {
      description: "Una historia de venganza y redención ambientada en el México del siglo XIX.",
      releaseDate: "2003-11-14",
      score: 87,
      slug: "el-zorro",
      title: "El Zorro: La Leyenda Continúa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7q8DVhtuwmti_QXgdl8ij78CU6E4ktwHLC2zVB7yiF3FyCRmnKoLzCFbTEkGt9jnisE&usqp=CAU",
    },
    {
      description: "The unforgettable tale of a young lion finding his place in the circle of life.",
      releaseDate: "1994-06-24",
      score: 93,
      slug: "the-lion-king",
      title: "The Lion King",
      image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      description: "Un épico enfrentamiento entre el bien y el mal en la Tierra Media.",
      releaseDate: "2001-12-19",
      score: 96,
      slug: "el-senor-de-los-anillos",
      title: "El Señor de los Anillos: La Comunidad del Anillo",
      image: "https://pics.filmaffinity.com/El_seanor_de_los_anillos_La_comunidad_del_anillo-744631610-large.jpg",
    },
    {
      description: "A gripping story of hope and resilience in a notorious prison.",
      releaseDate: "1994-09-23",
      score: 98,
      slug: "shawshank-redemption",
      title: "The Shawshank Redemption",
      image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      description: "La revolución de un luchador clandestino contra un régimen opresivo.",
      releaseDate: "2006-03-17",
      score: 89,
      slug: "v-for-vendetta",
      title: "V de Venganza",
      image: "https://static.wikia.nocookie.net/doblaje/images/7/7c/V.jpg/revision/latest?cb=20200330000059&path-prefix=es",
    },
    {
      description: "A magical journey into the wizarding world of Hogwarts.",
      releaseDate: "2001-11-16",
      score: 91,
      slug: "harry-potter-stone",
      title: "Harry Potter and the Sorcerer's Stone",
      image: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      description: "Una emocionante historia de supervivencia en un parque de dinosaurios.",
      releaseDate: "1993-06-11",
      score: 93,
      slug: "jurassic-park",
      title: "Parque Jurásico",
      image: "https://www.penguinlibros.com/pe/3135087/parque-jurasico-jurassic-park.jpg",
    },
    {
      description: "A galaxy-spanning adventure that redefined space operas.",
      releaseDate: "1977-05-25",
      score: 94,
      slug: "star-wars",
      title: "Star Wars: A New Hope",
      image: "https://images.cdn1.buscalibre.com/fit-in/360x360/93/d1/93d145bf27fca2074a89b8f64250328c.jpg",
    },
  ];

  return simulatedData;
}

export async function getGameDetails(slug) {
  // Simulando detalles de una película específica basada en el slug
  const simulatedDetails = {
    img: "https://via.placeholder.com/300/0000FF/FFFFFF?text=Movie+Image",
    title: "Example Movie Title",
    slug,
    description: "A compelling story of adventure, love, and the human spirit.",
    score: Math.floor(Math.random() * 20) + 80, // Puntuación aleatoria entre 80 y 100
    reviews: [
      {
        quote: "A cinematic masterpiece that resonates through generations.",
        score: 98,
        date: "2024-05-13",
        publicationName: "Critic Magazine",
        author: "Jane Doe",
      },
      {
        quote: "A thrilling experience that pushes the boundaries of storytelling.",
        score: 95,
        date: "2024-05-14",
        publicationName: "Cinema Insider",
        author: "John Smith",
      },
      {
        quote: "Un clásico instantáneo que permanecerá en la memoria del público.",
        score: 94,
        date: "2024-05-15",
        publicationName: "Revista de Cine",
        author: "María Pérez",
      },
    ],
  };

  return simulatedDetails;
}
