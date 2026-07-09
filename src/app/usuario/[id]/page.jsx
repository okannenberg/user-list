import ActionLink from '@/components/ActionLink';
import InfoBlock from '@/components/InfoBlock';

async function buscarUsuarioPorId(id) {
    const resposta = await fetch("https://randomuser.me/api/?results=10&seed=preparacao-next");
    if (!resposta.ok) throw new Error("Erro ao carregar os dados do perfil");
    const dados = await resposta.json();
    return dados.results.find((u) => u.login.uuid === id);
}

export default async function DetalhesUsuarioPage({ params }) {
    const { id } = await params;
    const user = await buscarUsuarioPorId(id);

    if (!user) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-12 text-center">
                <p className="text-xl font-bold text-red-500">Usuário não encontrado.</p>
                <ActionLink href="/">Voltar para a listagem</ActionLink>
            </div>
        );
    }

    return (
        <section className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-12">

                <ActionLink href="/">
                    ← Voltar para usuários
                </ActionLink>

                <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">

                    <aside className="rounded-2xl border border-slate-200 bg-white p-6">
                        <img src={user.picture.large} alt={`Foto de ${user.name.first}`} className="h-40 w-40 rounded-3xl object-cover" />
                        <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">Nacionalidade {user.nat}</p>
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-app-dark">{user.name.first} {user.name.last}</h1>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{user.email}</p>
                    </aside>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 className="text-2xl font-bold tracking-tight text-app-dark">Informações do perfil</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <InfoBlock label="Telefone" value={user.phone} />
                            <InfoBlock label="Celular" value={user.cell} />
                            <InfoBlock label="Cidade" value={user.location.city} />
                            <InfoBlock label="Estado" value={user.location.state} />
                            <InfoBlock label="País" value={user.location.country} />
                            <InfoBlock label="Idade" value={`${user.dob.age} anos`} />
                        </div>
                    </section>

                </div>
            </div>
        </section>
    );
}