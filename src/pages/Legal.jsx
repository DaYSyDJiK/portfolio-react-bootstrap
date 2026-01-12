import { useEffect } from "react";

export default function Legal() {

  // Pour ne pas indexer cette page
  useEffect (() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");

    return () => {
      meta.setAttribute("content", "index, follow");
    };
  }, []);
  

  return (
    <section className="py-5">
      <div className="container">
        <h1>Mentions légales</h1>
        <div className="accordion" id="legalAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p>John Doe</p>
                <p>Développeur Web</p>
                <p>john.doe@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur du site
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <a href="https://www.ovh.com" target="_blank" rel="nofollow noopener noreferrer" className="text-decoration-none">
                  www.ovh.com
                </a>
                <p>2 rue Kellermann</p>
                <p>59100 Roubaix</p>
                <p>France</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p>Images :  <a href="https://pixabay.com" className="text-decoration-none">pixabay.com</a></p>
                <p>Favicon :  <a href="https://flaticon.com" className="text-decoration-none">flaticon.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}