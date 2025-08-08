const LandingPage = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/game.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em HTML5.
      </video>

      {/* 🔝 Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-center md:justify-start md:px-190 py-4 bg-black/40 backdrop-blur-sm z-20">
        <ul className="flex gap-12 text-white font-medium text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Página Inicial
            </a>
          </li>
          <li>
            <a href="traducoes" className="hover:text-yellow-400 transition">
              Traduções
            </a>
          </li>
          <li>
            <a href="filmes" className="hover:text-yellow-400 transition">
              Filmes
            </a>
          </li>
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <div className="relative z-10 mt-16">
        {/* Logo */}
        <div className="w-28 h-28 bg-white rounded-full overflow-hidden shadow-lg mx-auto">
          <img
            src="/vm.png"
            alt="Logo Roberto Móveis"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <h1 className="text-3xl font-bold mt-4">VM GAMES</h1>
        <p className="text-lg mt-2">
          SITE DE REPOSITÓRIO DE JOGOS.{" "}
          <span className="text-yellow-500">SEJA BEM-VINDO(A)</span>
        </p>

        {/* Seta animada */}
        <div className="mt-8 animate-bounce flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 30 30"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
