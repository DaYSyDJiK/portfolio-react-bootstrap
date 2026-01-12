export default function Home() {
  return (
    <>
      <section className="hero justify-content-center d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="fw-bold">John Doe</h1>
          <h2 className="h4 fw-semibold mb-4">Développeur Web</h2>

          <button className="btn btn-primary">En savoir plus</button>
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
      </section >
    </>
  );
}