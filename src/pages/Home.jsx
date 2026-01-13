import { useEffect, useState } from "react";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {

  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Meta tags
  usePageMeta({
    title: "John Doe — Développeur Web | Portfolio",
    description: "Portfolio de John Doe, développeur web. Projets, compétences, services et contact.",
  });

  // Fetch GitHub user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users/github-johndoe");
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError("Erreur de chargement des données");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <section className="hero justify-content-center d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="fw-bold">John Doe</h1>
          <h2 className="h4 fw-semibold mb-4">Développeur Web</h2>

          <button type="button" className="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#githubModal">En savoir plus</button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2>À propos</h2>

          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <p>Je suis un développeur web passionné, spécialisé dans la création de sites web modernes et performants.</p>
            </div>
            <div className="col-12 col-md-6">
              <img src="/images/web-developer.jpg" alt="Web Developer" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2>Compétences</h2>
          <div className="skills-wrapper">
            <div className="mb-3">
              <p>HTML</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>CSS</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}>
                  70%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>JavaScript</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "65%" }}>
                  65%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>React</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "60%" }}>
                  60%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>Bootstrap</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}>
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Modal */}
      <div className="modal fade" id="githubModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h3 className="modal-title">Profil GitHub</h3>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>

            <div className="modal-body">
              {loading && <p>Chargement...</p>}
              {error && <p className="text-danger">{error}</p>}
              {user && (
                <div className="text-center">
                  <img src={user.avatar_url} alt={user.login} className="img-fluid rounded-circle mb-3" width="100" />
                  <h4>{user.name ?? user.login}</h4>
                  {user.name && (
                    <p className="text-muted mb-2">@{user.login}</p>
                  )}
                  {user.bio && <p className="mb-3">{user.bio}</p>}
                  <a href={user.html_url} target="_blank" rel="nofollow noopener noreferrer" className="btn btn-primary">
                    Voir le profil GitHub
                  </a>
                  <div className="my-4 d-flex justify-content-center gap-3 flex-wrap">
                    <div className="border rounded px-3 py-2">
                      Repos: {user.public_repos}
                    </div>

                    <div className="border rounded px-3 py-2">
                      Followers: {user.followers}
                    </div>

                    <div className="border rounded px-3 py-2">
                      Following: {user.following}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}