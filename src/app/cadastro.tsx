import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Cadastrar — Crie sua conta" },
      { name: "description", content: "Crie sua conta informando CPF, nome, data de nascimento, email e senha." },
      { property: "og:title", content: "Cadastrar — Crie sua conta" },
      { property: "og:description", content: "Crie sua conta informando CPF, nome, data de nascimento, email e senha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CadastroPage,
});

const campos = [
  { id: "cpf", label: "CPF", type: "text", autoComplete: "off" },
  { id: "nome", label: "Nome", type: "text", autoComplete: "name" },
  { id: "nascimento", label: "Data de Nascimento", type: "date", autoComplete: "bday" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "senha", label: "Senha", type: "password", autoComplete: "new-password" },
  { id: "confirma", label: "Confirma Senha", type: "password", autoComplete: "new-password" },
] as const;

function CadastroPage() {
  const [dados, setDados] = useState<Record<string, string>>({});
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dados["senha"] !== dados["confirma"]) {
      setErro("As senhas não coincidem.");
      return;
    }
    setErro("");
    console.log("Cadastro:", dados);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-8">
      <div className="w-full max-w-sm">
        <div className="mb-4 flex items-center gap-3">
          <Link to="/" aria-label="Voltar" className="text-2xl font-black text-foreground hover:opacity-80">
            ←
          </Link>
          <h1 className="text-3xl font-black text-foreground">Cadastrar</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {campos.map((c) => (
            <div key={c.id} className="mb-3">
              <label htmlFor={c.id} className="mb-1 block text-sm font-extrabold text-foreground">
                {c.label}
              </label>
              <input
                id={c.id}
                type={c.type}
                autoComplete={c.autoComplete}
                value={dados[c.id] ?? ""}
                onChange={(e) => setDados({ ...dados, [c.id]: e.target.value })}
                className="h-10 w-full rounded-md bg-secondary px-3 text-[15px] text-secondary-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          ))}

          {erro && <p className="text-sm font-semibold text-destructive">{erro}</p>}

          <button
            type="submit"
            className="mt-5 h-11 w-full rounded-md bg-primary text-base font-black tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            CADASTRAR
          </button>
        </form>
      </div>
    </main>
  );
}
