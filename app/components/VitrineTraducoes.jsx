"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function VitrineTraducoes() {
  const [traducoes, setTraducoes] = useState([]);

  useEffect(() => {
    const fetchTraducoes = async () => {
      const { data, error } = await supabase
        .from("traducoes")
        .select("*");

      if (error) {
        console.error("Erro ao buscar traduções:", error);
      } else {
        setTraducoes(data);
      }
    };

    fetchTraducoes();
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Traduções</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {traducoes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                className="w-48 h-64 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold">{item.titulo}</h3>
              <p className="mt-2 text-gray-600">{item.descricao}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Link da tradução
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
