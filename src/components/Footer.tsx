import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded p-1 bg-amber-800">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12C4 8 7 5 11 5C13 5 15 6 16.5 8C18 10 20 11 21 12" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-zinc-50">BakeryWeb</span>
            </div>
            <p className="mt-4 text-sm text-zinc-300">Des sites web pour les boulangeries locales</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-50">Produit</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/offres" className="hover:underline">Offres</Link></li>
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-50">Support</h4>
              <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="#faq" className="hover:underline">Questions fréquentes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-50">Contact</h4>
            <div className="text-sm text-zinc-300">
              <div>saiiko.offers@gmail.com</div>
              <div className="mt-2">+33 6 52 83 69 26</div>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-zinc-800"></div>

        <div className="text-center text-sm text-zinc-400">© {new Date().getFullYear()} BakeryWeb. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
