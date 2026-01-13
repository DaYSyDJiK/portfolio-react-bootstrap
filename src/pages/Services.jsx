import usePageMeta from "../hooks/usePageMeta";

export default function Services() {
  usePageMeta({
    title: "Services — John Doe | Développement Web",
    description: "Services de John Doe : développement web, intégration responsive, UI/UX et optimisation SEO. Des sites modernes, rapides et accessibles.",
  });

  return (
    <section className="p-5">
      <div className="container">
        <h1 className="mb-4">Services</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h2 className="card-title h4">Développement Web</h2>
                <p className="card-text">Création de sites web modernes et responsives adaptés à vos besoins.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h2 className="card-title h4">UX / UI Design</h2>
                <p className="card-text">Conception d'interfaces utilisateur intuitives et esthétiques pour améliorer l'expérience utilisateur.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h2 className="card-title h4">SEO & Performance</h2>
                <p className="card-text">Optimisation des performances et amélioration du référencement naturel pour augmenter la visibilité de votre site.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h2 className="card-title h4">Maintenance & Support</h2>
                <p className="card-text">Maintenance et support technique pour assurer le bon fonctionnement de votre site web.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h2 className="card-title h4">Intégration Web</h2>
                <p className="card-text">Intégration de vos designs en code HTML/CSS/JS pour un rendu parfait sur tous les navigateurs.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h2 className="card-title h4">Optimisation Mobile</h2>
                <p className="card-text">Optimisation de votre site pour une expérience optimale sur mobile et tablette.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}