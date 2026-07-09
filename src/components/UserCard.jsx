import ActionLink from './ActionLink';

export default function UserCard({ user }) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-4">
                <img
                    src={user.picture.large}
                    alt={`Foto de ${user.name.first}`}
                    className="h-20 w-20 rounded-2xl object-cover"
                />
                <div>
                    <span className="rounded-full bg-app-soft px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-app-primary">
                        {user.nat}
                    </span>
                    <h3 className="mt-3 text-xl font-bold leading-tight text-app-dark">
                        {user.name.first} {user.name.last}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{user.email}</p>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">{user.location.city}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">{user.location.state}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">{user.dob.age} anos</span>
            </div>

            <div className="mt-5">
                <ActionLink href={`/usuario/${user.login.uuid}`}>
                    Ver perfil
                </ActionLink>
            </div>
        </article>
    );
}