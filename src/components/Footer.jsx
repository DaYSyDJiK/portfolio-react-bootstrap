import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row gy-4">

          {/* Colonne 1 */}
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">John Doe</h5>
            <p className="mb-1">40 Rue de Bordeaux</p>
            <p className="mb-1">33000 Bordeaux</p>
            <p className="mb-3">06 00 00 00 00</p>

            <div className="d-flex gap-3">
              <a
                className="text-white"
                href="https://github.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github fs-4"></i>
              </a>

              <a
                className="text-white"
                href="https://twitter.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>

              <a
                className="text-white"
                href="https://linkedin.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">Navigation</h5>
            <ul className="list-unstyled mb-0 footer-links">
              <li>
                <NavLink to="/" className="footer-link text-white text-decoration-none link-hover">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="footer-link text-white text-decoration-none link-hover">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="footer-link text-white text-decoration-none link-hover">
                  Réalisations
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="footer-link text-white text-decoration-none link-hover">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentions-legales" className="footer-link text-white text-decoration-none link-hover">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">Dernières réalisations</h5>
            <ul className="list-unstyled mb-0 footer-links">
              <li>
                <NavLink to="/portfolio" className="footer-link text-white text-decoration-none link-hover">
                  Projet 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="footer-link text-white text-decoration-none link-hover">
                  Projet 2
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="footer-link text-white text-decoration-none link-hover">
                  Projet 3
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
