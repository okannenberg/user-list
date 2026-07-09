import Link from 'next/link';

async function buscarUsuarioPorId(id) {
    const resposta = await fetch("https://randomuser.me/api/?results=10&seed=preparacao-next");

    if (!resposta.ok) {
        throw new Error("Erro ao carregar os dados do perfil");
    }

    const dados = await resposta.json();

    const usuarioEncontrado = dados.results.find((u) => u.login.uuid === id);

    return usuarioEncontrado;
}

export default async function DetalhesUsuarioPage({ params }) {
    const { id } = await params;
    const user = await buscarUsuarioPorId(id);

    if (!user) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-12 text-center">
                <p className="text-xl font-bold text-red-500">Usuário não encontrado.</p>
                <Link href="/" className="text-blue-600 underline mt-4 inline-block">Voltar para a listagem</Link>
            </div>
        );
    }

    return (
        <section className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <Link href="/" className="text-sm font-extrabold text-app-primary hover:text-blue-800">
                    ← Voltar para usuários
                </Link>

                <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
                    <aside className="rounded-2xl border border-slate-200 bg-white p-6">
                        <img
                            src={user.picture.large}
                            alt={`Foto de ${user.name.first}`}
                            className="h-40 w-40 rounded-3xl object-cover"
                        />
                        <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
                            Nacionalidade {user.nat}
                        </p>
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-app-dark">
                            {user.name.first} {user.name.last}
                        </h1>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{user.email}</p>
                    </aside>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 className="text-2xl font-bold tracking-tight text-app-dark">Informações do perfil</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Telefone</p>
                                <p className="mt-1 font-bold text-app-dark">{user.phone}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Celular</p>
                                <p className="mt-1 font-bold text-app-dark">{user.cell}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Cidade</p>
                                <p className="mt-1 font-bold text-app-dark">{user.location.city}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Estado</p>
                                <p className="mt-1 font-bold text-app-dark">{user.location.state}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">País</p>
                                <p className="mt-1 font-bold text-app-dark">{user.location.country}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Idade</p>
                                <p className="mt-1 font-bold text-app-dark">{user.dob.age} anos</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </section>
    );
}