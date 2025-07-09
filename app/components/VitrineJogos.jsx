"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function VitrineJogos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const { data, error } = await supabase.from("vitrine").select("*");
      if (error) {
        console.error("Erro ao buscar produtos:", error.message);
      } else {
        setProdutos(data);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10" id="vitrine">
      <h1 className="text-center text-3xl font-bold mb-10 text-gray-800">Vitrine de jogos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => {
          const mensagemWhatsApp = encodeURIComponent(
            `Olá, me interessei por este produto: ${produto.nome}. Poderia me passar mais informações?`
          );

          return (
            <div key={produto.id} className="bg-white rounded-xl p-6 shadow text-center">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-60 object-contain mb-4 rounded"
              />
              <h2 className="text-xl font-semibold">{produto.nome}</h2>
              <p className="text-sm text-gray-600 mt-2">{produto.descrição}</p>
              <a
  href={`${produto.whatszap}&text=${mensagemWhatsApp}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-600 transition"
>
  Chamar no WhatsApp
</a>

            </div>
          );
        })}
      </div>
    </div>
  );
}

