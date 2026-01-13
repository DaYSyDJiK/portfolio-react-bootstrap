import usePageMeta from "../hooks/usePageMeta";


export default function Portfolio() {
  usePageMeta({
    title: "Réalisations — John Doe | Projets",
    description: "Découvrez les réalisations de John Doe : site vitrine, e-commerce, application mobile, dashboard, portfolio et optimisation SEO.",
  });

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="mb-4">Réalisations</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="project-image">
                <img src="/images/project1.jpg" alt="Site vitrine pour entreprise" className="card-img-top" />
              </div>
              <div className="card-body">
                <h2 className="card-title h5">Site vitrine pour entreprise</h2>
                <p className="card-text">Conception et développement d'un site vitrine moderne et responsive pour une entreprise locale.</p>
              </div>
              <button className="btn btn-primary">Voir le projet</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="project-image">
                <img src="/images/project2.jpg" alt="Site vitrine pour entreprise" className="card-img-top" />
              </div>
              <div className="card-body">
                <h2 className="card-title h5">Plateforme e-commerce</h2>
                <p className="card-text">Création d'une boutique en ligne avec système de paiement et gestion des produits.</p>
              </div>
              <button className="btn btn-primary">Voir le projet</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="project-image">
                <img src="/images/project3.jpg" alt="Site vitrine pour entreprise" className="card-img-top" />
              </div>
              <div className="card-body">
                <h2 className="card-title h5">Application mobile UX</h2>
                <p className="card-text">Conception d'une application mobile avec une interface fluide et intuitive.</p>
              </div>
              <button className="btn btn-primary">Voir le projet</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="project-image">
                <img src="/images/project4.jpg" alt="Site vitrine pour entreprise" className="card-img-top" />
              </div>
              <div className="card-body">
                <h2 className="card-title h5">Dashboard de gestion</h2>
                <p className="card-text">Développement d'un tableau de bord pour visualiser et analyser des données.</p>
              </div>
              <button className="btn btn-primary">Voir le projet</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="project-image">
                <img src="/images/project5.jpg" alt="Site vitrine pour entreprise" className="card-img-top" />
              </div>
              <div className="card-body">
                <h2 className="card-title h5">Portfolio créatif</h2>
                <p className="card-text">Réalisation d'un portfolio personnel pour présenter des projets professionnels.</p>
              </div>
              <button className="btn btn-primary">Voir le projet</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="project-image">
                <img src="/images/project6.jpg" alt="Site vitrine pour entreprise" className="card-img-top" />
              </div>
              <div className="card-body">
                <h2 className="card-title h5">Optimisation SEO</h2>
                <p className="card-text">Optimisation des performances et du référencement naturel d'un site web.</p>
              </div>
              <button className="btn btn-primary">Voir le projet</button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}