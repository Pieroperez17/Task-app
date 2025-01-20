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
  const details = {
    "el-zorro": {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7q8DVhtuwmti_QXgdl8ij78CU6E4ktwHLC2zVB7yiF3FyCRmnKoLzCFbTEkGt9jnisE&usqp=CAU",
      title: "El Zorro: La Leyenda Continúa",
      description: "Tras ayudar con su espada a que California se convierta en el estado número 31 de la Unión, el Zorro (Antonio Banderas) debe cumplir la promesa que le hizo a su mujer Elena (Catherine Zeta-Jones): abandonar su identidad secreta y llevar una vida normal como Alejandro de la Vega.",
      score: 87,
      reviews: [
        {
          quote: "A thrilling journey of courage and justice.",
          score: 92,
          date: "2024-05-01",
          publicationName: "Historical Tales",
          author: "Ana Rivera",
        },
        {
          quote: "Unforgettable characters and breathtaking action.",
          score: 90,
          date: "2024-05-03",
          publicationName: "Cinema Now",
          author: "Luis Gómez",
        },
      ],
    },
    "the-lion-king": {
      img: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      title: "The Lion King",
      description: "El joven Simba, hijo del rey Mufasa, debe luchar contra su malvado tío Scar para ocupar el trono que dejó su padre asesinado.",
      score: 93,
      reviews: [
        {
          quote: "A timeless masterpiece that defines animated storytelling.",
          score: 98,
          date: "2024-06-01",
          publicationName: "Animation Weekly",
          author: "Sara Lin",
        },
        {
          quote: "Incredible visuals and heartwarming moments.",
          score: 95,
          date: "2024-06-02",
          publicationName: "Family Film Journal",
          author: "Peter Lee",
        },
      ],
    },
    "el-senor-de-los-anillos": {
      img: "https://pics.filmaffinity.com/El_seanor_de_los_anillos_La_comunidad_del_anillo-744631610-large.jpg",
      title: "El Señor de los Anillos: La Comunidad del Anillo",
      description: "La novela narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el señor oscuro Sauron. Tres Anillos para los Reyes Elfos bajo el cielo.",
      score: 96,
      reviews: [
        {
          quote: "A grand epic that stands the test of time.",
          score: 99,
          date: "2024-07-01",
          publicationName: "Fantasy World",
          author: "Nathan Woods",
        },
        {
          quote: "Stunning visuals and a masterful adaptation.",
          score: 97,
          date: "2024-07-03",
          publicationName: "Epic Cinema",
          author: "Emily Stone",
        },
      ],
    },
    "shawshank-redemption": {
      img: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "The Shawshank Redemption",
      description: "En 1947, Andy Dufresne (Tim Robbins), un joven banquero, es condenado a cadena perpetua por asesinar a su esposa y su amante. A pesar de declararse inocente, es encarcelado en Shawshank, el penitenciario más duro del estado de Maine. Allí se encontrará con Red Redding (Morgan Freeman), un hombre desilusionado, encarcelado desde hace más de veinte años. Es cuando empieza una gran historia de amistad entre los dos hombres, sin un pasado, un presente y un futuro. Andy Dufresne no tendrá más remedio que ir haciéndose a la idea de su terrible situación, donde, por lo menos, su compañero Redding le será de gran ayuda.",
      score: 98,
      reviews: [
        {
          quote: "A cinematic masterpiece that resonates deeply.",
          score: 99,
          date: "2024-08-01",
          publicationName: "Classic Films",
          author: "John Doe",
        },
        {
          quote: "Emotional and unforgettable storytelling.",
          score: 98,
          date: "2024-08-02",
          publicationName: "Cinema Greats",
          author: "Jane Smith",
        },
      ],
    },
    "v-for-vendetta": {
      img: "https://static.wikia.nocookie.net/doblaje/images/7/7c/V.jpg/revision/latest?cb=20200330000059&path-prefix=es",
      title: "V de Venganza",
      description: "La revolución de un luchador clandestino contra un régimen opresivo.",
      score: 89,
      reviews: [
        {
          quote: "A powerful story of resistance and courage.",
          score: 90,
          date: "2024-09-01",
          publicationName: "Revolutionary Films",
          author: "Carlos Perez",
        },
        {
          quote: "Stylish and thought-provoking cinema.",
          score: 91,
          date: "2024-09-02",
          publicationName: "Film Aesthetics",
          author: "Sophia Hill",
        },
      ],
    },
    "harry-potter-stone": {
      img: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Harry Potter and the Sorcerer's Stone",
      description: "A magical journey into the wizarding world of Hogwarts.",
      score: 91,
      reviews: [
        {
          quote: "An enchanting start to an iconic saga.",
          score: 92,
          date: "2024-10-01",
          publicationName: "Wizarding Weekly",
          author: "Alice Green",
        },
        {
          quote: "Perfectly captures the magic of the books.",
          score: 93,
          date: "2024-10-02",
          publicationName: "Fantasy Cinema",
          author: "Tom White",
        },
      ],
    },
    "jurassic-park": {
      img: "https://www.penguinlibros.com/pe/3135087/parque-jurasico-jurassic-park.jpg",
      title: "Parque Jurásico",
      description: "Una emocionante historia de supervivencia en un parque de dinosaurios.",
      score: 93,
      reviews: [
        {
          quote: "A groundbreaking adventure that thrills.",
          score: 94,
          date: "2024-11-01",
          publicationName: "Dino Review",
          author: "Chris Pratt",
        },
        {
          quote: "A classic tale of science and danger.",
          score: 95,
          date: "2024-11-02",
          publicationName: "Science Cinema",
          author: "Laura Bright",
        },
      ],
    },
    "star-wars": {
      img: "https://images.cdn1.buscalibre.com/fit-in/360x360/93/d1/93d145bf27fca2074a89b8f64250328c.jpg",
      title: "Star Wars: A New Hope",
      description: "A galaxy-spanning adventure that redefined space operas.",
      score: 94,
      reviews: [
        {
          quote: "An epic space opera for the ages.",
          score: 96,
          date: "2024-12-01",
          publicationName: "Sci-Fi Times",
          author: "Luke Skywriter",
        },
        {
          quote: "Timeless storytelling and unforgettable characters.",
          score: 97,
          date: "2024-12-02",
          publicationName: "Galactic Journal",
          author: "Leia Organa",
        },
      ],
    },
  };

  return details[slug] || null;
}

