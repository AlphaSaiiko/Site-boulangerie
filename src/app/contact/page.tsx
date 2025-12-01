import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-zinc-900">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold">Contactez-moi</h1>
          <p className="mt-3 text-zinc-700">Une question ? Vous êtes intéressé ? Parlons de votre projet !</p>
        </section>

        <section className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-amber-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="rounded bg-amber-50 p-3 text-amber-800">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L12 13L21 8" stroke="#A44A11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <div className="mt-2 text-sm text-zinc-600">saiiko.offers@gmail.com</div>
                  <div className="mt-1 text-xs text-zinc-400">Réponse en quelques heures</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="rounded bg-amber-50 p-3 text-amber-800">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 5.11 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75 12.27 12.27 0 0 0 .7 2.38 1 1 0 0 1-.24 1L8.91 10.09a16 16 0 0 0 6 6l1.95-1.95a1 1 0 0 1 1-.24 12.27 12.27 0 0 0 2.38.7 1 1 0 0 1 .75 1V21z" stroke="#A44A11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <div className="mt-2 text-sm text-zinc-600">+33 6 52 83 69 26</div>
                  <div className="mt-1 text-xs text-zinc-400">Disponible lun–ven 9h–18h</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 flex justify-center">
          <ContactForm />
        </section>

        <section className="mt-20 bg-amber-50 p-12">
          <div className="mx-auto max-w-3xl">
					  <h2 className="text-center text-2xl font-bold">À quoi m&apos;attendre ?</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100 font-semibold">1</div>
                <div>
                  <div className="font-semibold">Je vous recontacterai rapidement</div>
                  <div className="text-sm text-zinc-600">Vous recevrez une réponse en moins de 24h pour discuter de vos besoins</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100 font-semibold">2</div>
                <div>
                  <div className="font-semibold">On définit votre offre idéale</div>
					<div className="text-sm text-zinc-600">On parlera de votre boulangerie, vos objectifs, et je recommanderai l&apos;offre parfaite</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100 font-semibold">3</div>
                <div>
                  <div className="font-semibold">Je crée votre site</div>
                  <div className="text-sm text-zinc-600">Après signature et paiement, je commencerai immédiatement votre site web</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100 font-semibold">4</div>
                <div>
                  <div className="font-semibold">Vous prenez la main</div>
                  <div className="text-sm text-zinc-600">Vous recevez votre site prêt à l&apos;emploi avec une formation simple à l&apos;utilisation</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
