import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OfferCard from "../../components/OfferCard";

export default function OffresPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-zinc-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold">Nos offres</h1>
          <p className="mt-4 text-zinc-700">Choisissez la formule parfaite pour votre boulangerie</p>
        </section>

        <section className="mt-12">
          <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-3">
            <OfferCard
              title="Essentielle"
              subtitle="Pour les petites boulangeries qui veulent juste une présence propre en ligne."
              price="19–29"
              priceSuffix="€/mois"
              features={[
                "Site vitrine 3 pages (Accueil, Produits, Contact)",
                "Design simple et moderne (modèle réutilisable)",
                "Horaires + infos de contact",
                "Carte Google Maps intégrée",
                "1 mise à jour par mois (horaires, photos, prix)",
                "Hébergement + nom de domaine inclus",
                "Maintenance & sécurité",
              ]}
            />

            <OfferCard
              title="Professionnelle"
              subtitle="Pour les boulangeries qui veulent attirer plus de clients et mettre en avant leurs produits."
              price="39–59"
              priceSuffix="€/mois"
              popular
              highlighted
              features={[
                "Tout de l'offre Essentielle +",
                "Page catalogue des produits (photos, prix, description)",
                "Mise à jour illimitée des produits",
                "Optimisation Google (SEO local)",
                "Gestion des avis Google (intégration + mise en valeur)",
                "Support prioritaire (réponse < 24h)",
                "2 séances photos par an",
              ]}
            />

            <OfferCard
              title="Premium Click & Collect"
              subtitle="Pour les boulangeries modernes qui veulent augmenter leurs ventes."
              price="79–129"
              priceSuffix="€/mois"
              features={[
                "Tout de l'offre Professionnelle +",
                "Click & Collect simple (commande en ligne + retrait)",
                "Catalogue dynamique avec filtres",
                "Gestion des commandes (page admin)",
                "Statistiques mensuelles (produits populaires, heures de visite)",
                "Mise à jour illimitée + support 7j/7",
                "Newsletter automatique 'nouveau produit'",
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
