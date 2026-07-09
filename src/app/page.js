import UserCard from "@/components/UserCard";

async function buscarUsuarios() {
  const resposta = await fetch("https://randomuser.me/api/?results=10&seed=preparacao-next");
  
  if (!resposta.ok) {
    throw new Error("Erro ao carregar os dados da API");
  }

  const dados = await reply.json();
  return dados.results;
}

export default async function HomePage() {
  const usuarios = await buscarUsuarios();

  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">Prática com API</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-app-dark md:text-6xl">
              Perfis fictícios para praticar Next.js
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Esta aplicação consome dados reais da API pública Random User Generator para renderizar perfis dinamicamente.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" id="usuarios">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">Usuários</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-app-dark">Lista de perfis</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {usuarios.map((item) => (
            <UserCard key={item.login.uuid} user={item} />
          ))}
        </div>
      </section>
    </div>
  );
}