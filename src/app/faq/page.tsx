import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-zinc-900">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-center text-3xl font-extrabold">Questions fréquentes</h1>

        <section className="mt-8 space-y-6">
          <details className="rounded border border-amber-100 bg-white p-4">
            <summary className="font-semibold">Comment ça marche ?</summary>
            <p className="mt-2 text-sm text-zinc-700">Je crée un site adapté à votre boulangerie et je vous forme à l'utilisation.</p>
          </details>

          <details className="rounded border border-amber-100 bg-white p-4">
            <summary className="font-semibold">Quels sont les délais ?</summary>
            <p className="mt-2 text-sm text-zinc-700">Les délais dépendent de l'offre choisie et du contenu à fournir, généralement quelques semaines.</p>
          </details>
        </section>
      </main>

      <Footer />
    </div>
  );
}
