import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-transparent/10 bg-white py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded p-1 bg-amber-50">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12C4 8 7 5 11 5C13 5 15 6 16.5 8C18 10 20 11 21 12" stroke="#A44A11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-zinc-900">BakeryWeb</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link className="text-zinc-700 hover:text-zinc-900" href="/">Accueil</Link>
          <Link className="text-zinc-700 hover:text-zinc-900" href="/offres">Offres</Link>
          <Link className="rounded-full border border-amber-700 bg-amber-700 px-4 py-2 text-sm font-medium text-white hover:opacity-95" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
