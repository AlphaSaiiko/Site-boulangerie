export default function ContactForm() {
  return (
    <div className="mx-auto max-w-2xl rounded-lg border-2 border-amber-200 bg-white p-6">
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">Votre nom *</label>
            <input className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm" placeholder="Jean Dupont" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">Email *</label>
            <input className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm" placeholder="jean@exemple.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">Téléphone</label>
            <input className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm" placeholder="+33 X XX XX XX XX" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">Votre boulangerie</label>
            <input className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm" placeholder="Boulangerie du Coin" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700">Votre message *</label>
          <textarea className="h-32 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm" placeholder="Parlez-moi de votre projet, vos attentes, vos questions..." />
        </div>

        <div>
          <button type="submit" className="w-full rounded-full bg-amber-800 py-3 text-sm font-semibold text-white btn-hover">Envoyer →</button>
        </div>

        <p className="text-center text-xs text-zinc-600">Je répondrai à votre demande dans les 24 heures maximum.</p>
      </form>
    </div>
  );
}
