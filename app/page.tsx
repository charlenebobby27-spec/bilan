const LIEN_PAIEMENT = "https://buy.stripe.com/bJe6oH13j52H2q4aAMbjW01";

const questions = [
  {
    q: "Est-ce que ça marche pour mon activité ?",
    r: "Bilan est conçu pour les prestataires de création de contenu facturés au mois : vidéo, réseaux sociaux, rédaction, design. Vous saisissez vos chiffres, le rapport se met en page seul.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ une minute par client pour saisir les chiffres du mois. Le reste (mise en page, envoi) est automatique.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Vous résiliez quand vous voulez, sans justification. Dans les 14 premiers jours, vous êtes remboursé sur simple demande.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À suivre jusqu'à dix clients : un rapport mensuel à vos couleurs, envoyé le 1er de chaque mois, avec confirmation que votre client l'a lu.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-braise">
        Bilan
      </p>

      <h1 className="font-titre mt-4 text-4xl font-extrabold leading-tight">
        Le bilan mensuel de vos clients, envoyé sans y penser.
      </h1>

      <p className="mt-4 text-lg">
        Vos clients veulent savoir ce qu&apos;ils ont eu pour leur argent. Si le
        bilan arrive en retard ou pas du tout, c&apos;est là que le contrat
        s&apos;arrête.
      </p>

      <a
        href={LIEN_PAIEMENT}
        className="mt-6 block rounded-md bg-braise px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Payer 39 € et commencer
      </a>
      <p className="mt-2 text-center text-sm">
        Sans engagement, résiliable à tout moment.
      </p>

      <div className="mt-5 rounded-md border-2 border-encre p-4">
        <p className="font-semibold">Satisfait ou remboursé, 14 jours.</p>
        <p className="mt-1 text-sm">
          Écrivez-nous par email dans les 14 jours suivant votre paiement : vous
          êtes remboursé intégralement sous 5 jours ouvrés, sans question.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-extrabold">
          Ce que le bilan à la main vous coûte
        </h2>
        <p className="mt-3">
          À 45 minutes par client, dix bilans représentent 7 h 30 chaque mois.
          Bilan coûte 39 € par mois, soit 1,30 € par jour.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-extrabold">
          Trois choses qui changent
        </h2>
        <ul className="mt-3 space-y-3">
          <li className="rounded-md bg-sable p-4">
            <span className="font-semibold">Une minute de saisie.</span> Vous
            entrez les chiffres du mois, c&apos;est tout.
          </li>
          <li className="rounded-md bg-sable p-4">
            <span className="font-semibold">À vos couleurs.</span> Le rapport
            est mis en page automatiquement, à l&apos;image de votre activité.
          </li>
          <li className="rounded-md bg-sable p-4">
            <span className="font-semibold">Envoyé le 1er du mois.</span> Vous
            savez quand votre client l&apos;a lu.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-extrabold">
          Vos questions
        </h2>
        <div className="mt-3 divide-y divide-sable border-y border-sable">
          {questions.map((item) => (
            <details key={item.q} className="py-3">
              <summary className="cursor-pointer font-semibold">
                {item.q}
              </summary>
              <p className="mt-2">{item.r}</p>
            </details>
          ))}
        </div>
      </section>

      <a
        href={LIEN_PAIEMENT}
        className="mt-10 block rounded-md bg-braise px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Payer 39 € et commencer
      </a>
      <p className="mt-2 text-center text-sm">
        Sans engagement, résiliable à tout moment. Accès envoyé par email après
        paiement.
      </p>
    </main>
  );
}
