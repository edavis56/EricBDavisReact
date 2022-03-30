function ContactMe() {
  return (
    <section id="contact-me">
      <h1 className="section-title">Contact Me</h1>

      <div className="section-details" >
        <div >
          <a className="my-link" href="mailto:ericdavisdevelopment@gmail.com" alt="E-Mail">
          ericdavisdevelopment@gmail.com
          </a>
        </div>

        <div className="contact-github">
          <a
            className="my-link"
            href="https://github.com/edavis56"
            alt="Git Hub URL"
          >
            GitHub
          </a>
        </div>

        <div className="contact-linkedin">
          <a
            className="my-link"
            href="https://www.linkedin.com/in/ericbdavis00/"
            alt="LinkedIn URL"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
