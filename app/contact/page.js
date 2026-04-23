import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientEffects from "@/components/ClientEffects";

export default function ContactPage() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <SiteHeader />

      <main className="contact-main">
        <div className="page-header">
          <div className="section-label fade-up">Get In Touch</div>
          <h1 className="fade-up" style={{ transitionDelay: "0.1s" }}>Contact Us</h1>
        </div>

        <section className="contact-layout">
          <div className="contact-copy">
            <p className="fade-up">Please fill out the form below to request a quote for a project, inquire about a collaboration, or simply say hello.</p>
            <a className="contact-email fade-up" style={{ transitionDelay: "0.08s" }} href="mailto:hello@rebornstudios.com">hello@rebornstudios.com</a>
          </div>

          <form className="contact-form fade-up" style={{ transitionDelay: "0.12s" }}>
            <div className="form-row two-col">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-fill">Send</button>
          </form>
        </section>
      </main>

      <SiteFooter />
      <ClientEffects />
    </>
  );
}