export default function Contact() {
  return (

    <section className="p-5">
      <div className="container">
        <h1 className="mb-4">Contact</h1>
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nom</label>
                <input id="name" type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Courriel</label>
                <input id="email" type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Téléphone</label>
                <input id="phone" type="tel" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Sujet</label>
                <input id="subject" type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <h4>Coordonnées</h4>
            <p>Vous pouvez nous contacter par email à <a href="mailto:john.doe@gmail.com" className="text-decoration-none">john.doe@gmail.com</a></p>
            <p>ou par téléphone au <a href="tel:+33123456789" className="text-decoration-none">01 23 45 67 89</a></p>
            <p>Notre adresse postale est :
              <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924356!2d4.7964039768472935!3d45.77866197108083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1768241553338!5m2!1sfr!2sfr" className="text-decoration-none"> 40 Rue Laure Diebold, 69009 Lyon, France</a></p>
            <div className="ratio ratio-16x9 mt-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924356!2d4.7964039768472935!3d45.77866197108083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1768241553338!5m2!1sfr!2sfr" allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localisation"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}