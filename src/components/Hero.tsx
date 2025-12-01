import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-amber-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800"> Spécialisé en boulangeries</div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-zinc-900">
            Un site web fait pour
            <br />
            votre boulangerie
          </h1>

          <p className="mt-6 text-lg text-zinc-700">
            Des solutions web simples, modernes et efficaces. Attirez plus de clients
            sans vous compliquer la vie.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link className="rounded-full bg-amber-800 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 btn-hover" href="/offres">Voir nos offres ➜</Link>
            <a className="rounded-full border-2 border-amber-800 px-6 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-50 btn-hover" href="/contact">Discuter avec nous</a>
          </div>
        </div>
      </div>
    </section>
  );
}
