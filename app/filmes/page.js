export default function FilmesPage() {
  // Aqui futuramente você vai buscar os dados do Supabase
  const filmes = [
    {
      id: 1,
      titulo: "Spider-Man: No Way Home",
      descricao: "Filme completo em Full HD.",
      imagem: "/filmes/spiderman.jpg",
      link: "#"
    },
    {
      id: 2,
      titulo: "The Batman",
      descricao: "Filme completo em Full HD.",
      imagem: "/filmes/batman.jpg",
      link: "#"
    },
    {
      id: 3,
      titulo: "Avengers: Endgame",
      descricao: "Filme completo em Full HD.",
      imagem: "/filmes/avengers.jpg",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Vitrine de Filmes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filmes.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden p-4 text-center">
            <img src={item.imagem} alt={item.titulo} className="w-full h-64 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{item.titulo}</h2>
            <p className="text-gray-600 mb-4">{item.descricao}</p>
            <a
              href={item.link}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Link do filme
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
