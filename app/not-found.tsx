export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-16 text-center">
      <h1 className="font-titre text-4xl font-extrabold">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-4 text-lg">
        Le lien est peut-être erroné ou a changé.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-md bg-braise px-6 py-4 text-lg font-semibold text-white"
      >
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
