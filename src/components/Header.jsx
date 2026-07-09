import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-app-dark">
          UserList
        </Link>

        <nav className="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
          <Link href="/" className="rounded-full bg-app-soft px-3 py-2 text-app-primary">
            Usuários
          </Link>
          <Link href="/about" className="rounded-full px-3 py-2 hover:bg-slate-100">
            Sobre o Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}