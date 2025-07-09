import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vpvvnetnoxcxahzhpedp.supabase.co"; // Pegue no Supabase
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdnZuZXRub3hjeGFoemhwZWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMTU4MDcsImV4cCI6MjA2NjY5MTgwN30.oZWfbUkWu6J3XM2T11MynaeGOGk_BbzxyMWOzNPas44"; // Pegue no Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Testando conexão
(async () => {
  const { data, error } = await supabase.from("vitrine").select("*");
  if (error) console.error("Erro ao conectar ao Supabase:", error.message);
  else console.log("Conexão com Supabase bem-sucedida!", data);
})();
