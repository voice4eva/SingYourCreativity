import React from "react";
import { useTranslation } from "react-i18next";

const serviceHref = {
  en: {
    therapeutic: "therapeuticsinging.html",
    workshop: "workshop.html",
    choir: "choir.html",
    samples: "musicsamples.html",
    events: "events.html",
    mission: "about.html#mission",
    team: "about.html#team",
    media: "media.html",
    contact: "contact.html",
    register: "register.html",
    lang: "../fr/index.html",
  },
  fr: {
    therapeutic: "chanttherapeutique.html",
    workshop: "atelier.html",
    choir: "chorale.html",
    samples: "echantillonsmusique.html",
    events: "evenements.html",
    mission: "aproposdenous.html#mission",
    team: "aproposdenous.html#team",
    media: "media.html",
    contact: "contact.html",
    register: "inscription.html",
    lang: "../en/index.html",
  },
};

function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "fr" ? "fr" : "en";
  const href = serviceHref[lang];
  const testimonials = t("testimonials", { returnObjects: true });
  const benefits = t("benefits", { returnObjects: true });

  return (
    <>
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#page-top">
              <img src="../img/logos/SYC-logo.png" alt="SYC logo" className="logo-inline" />
              Sing Your Creativity
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right nav-simple">
            <li><a href="#teambuilding">{t("nav.services")}</a></li>
            <li><a href={href.mission}>{t("nav.aboutUs")}</a></li>
            <li><a href={href.register}>{t("nav.register")}</a></li>
            <li><a href={href.lang}>{t("ctaLanguage")}</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="header-content">
          <a href={href.events} className="btn btn-primary btn-xl">{t("heroCta")}</a>
        </div>
      </header>

      <section id="teambuilding" className="bg-primary">
        <div className="container text-center">
          <h2 className="section-heading">{t("whatTitle")}</h2>
          <hr className="light" />
          <h4 className="text-faded">{t("whatText")}</h4>
        </div>
      </section>

      <section id="benefits">
        <div className="container text-center">
          <h2 className="section-heading">{t("whyTitle")}</h2>
          <hr className="primary" />
          <div className="row">
            {benefits.map((item) => (
              <div className="col-lg-4 col-md-4 text-center" key={item.title}>
                <div className="service-box">
                  <h3>{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container text-center">
          <h2 className="section-heading">{t("testimonialsTitle")}</h2>
          <hr className="primary" />
          <div className="row">
            {testimonials.map((item) => (
              <div className="col-lg-4 col-md-4" key={item.name}>
                <strong>{item.name}</strong>
                <br />
                <i className="text-primary">{item.role}</i>
                <p className="text-muted">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="other-lessons">
        <div className="container text-center">
          <p>{t("otherLessonsFr")}</p>
          <p><a href={t("link")} target="_blank">{t("link")}</a></p>
          <p>{t("otherLessonsEn")}</p>
          <p><a href={t("link")} target="_blank">{t("link")}</a></p>
        </div>
      </section>

      <footer>
        <div className="navbar navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-text pull-left">
              <p>Sing Your Creativity</p>
            </div>
            <div className="navbar-text pull-right">
              <a href="https://www.facebook.com/singyourcreativity/" target="_blank"><i className="fa fa-facebook-square fa-2x"></i></a>
              <a href="https://www.linkedin.com/company/sing-your-creativity/" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
