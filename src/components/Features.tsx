function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-8 text-left shadow-sm">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="text-zinc-700">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-zinc-900">Pourquoi choisir BakeryWeb ?</h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <FeatureCard
          title="Designs personnalisés"
          description="Des sites modernes et chaleureux qui reflètent l'identité de votre boulangerie"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10C3 6 6 3 10 3C12 3 13.5 4 15 6C16.5 8 18.5 9 20 10" stroke="#A44A11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <FeatureCard
          title="Simple à utiliser"
          description="Gérez vos horaires, produits et promotions en quelques clics, sans compétences techniques"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1046 2 14 2.89543 14 4V6" stroke="#A44A11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12C20 16 16 20 12 20C8 20 4 16 4 12" stroke="#A44A11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <FeatureCard
          title="Optimisé pour les ventes"
          description="Attirez plus de clients locaux avec le SEO, Google Maps, et les mises en avant produits"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#A44A11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3V21" stroke="#A44A11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>
    </section>
  );
}
