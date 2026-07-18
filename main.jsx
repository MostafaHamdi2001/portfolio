import React from "react";

function Main() {
  return (
    <div>
      {/* {// <!-- start Main -->} */}
      <main>
        <section
          className="hero d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <div className="hero-title-wrap d-flex align-items-center mb-4">
                    <img
                      src="/images/IMG_20230618_150316_066.jpg"
                      className="avatar-image avatar-image-large img-fluid"
                      alt=""
                    />

                    <h1 className="hero-title ms-3 mb-0">Hello friend!</h1>
                  </div>

                  <h2 className="mb-4">I’m available for freelance work.</h2>
                  <p className="mb-4">
                    <a className="custom-btn btn custom-link" href="#section_2">
                      Let's begin
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-12 position-relative">
                <div className="hero-image-wrap"></div>
                <img
                  src="/images/IMG_20230618_150316_747.jpg"
                  className="hero-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#535da1"
              fill-opacity="1"
              d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
        </section>

        <section className="about section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img
                  src="/images/IMG_20230618_150316_747.jpg"
                  className="about-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                    <h2 className="text-white me-4 mb-0">My Story</h2>

                    <img
                      src="/images/IMG_20230618_150316_066.jpg"
                      className="avatar-image img-fluid"
                      alt=""
                    />
                  </div>

                  <h3 className="pt-2 mb-3">a little bit about Mostafa</h3>

                  <p>
                    Mostafa is a professional front_end web developer. Feel free
                    to get in touch with me. You can also check my GitHub
                    profile
                    <a
                      rel="sponsored"
                      href="https://github.com/MostafaHamdi2001"
                      target="_blank"
                      for
                      more
                      information
                    >
                      <strong>here</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="profile-thumb">
                  <div className="profile-title">
                    <h4 className="mb-0">Information</h4>
                  </div>

                  <div className="profile-body">
                    <p>
                      <span className="profile-small-title">Name</span>
                      <span>Mostafa Hamdi</span>
                    </p>

                    <p>
                      <span className="profile-small-title">Birthday</span>
                      <span>feb 9, 2001</span>
                    </p>

                    <p>
                      <span className="profile-small-title">Phone</span>
                      <span>
                        <a href="tel: 305-240-9671">01090953863</a>
                      </span>
                    </p>

                    <p>
                      <span className="profile-small-title">Email</span>
                      <span>
                        <a href="mailto:mosatfahamdi689@gmail.com">
                          mosatfahamdi689@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="row">
                    <div className="col-lg-6 col-6 featured-border-bottom py-2">
                      <strong className="featured-numbers">+2</strong>

                      <p className="featured-text">Years of Experiences</p>
                    </div>

                    <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                      <strong className="featured-numbers">20</strong>

                      <p className="featured-text">Happy Customers</p>
                    </div>

                    <div className="col-lg-6 col-6 pt-4 text-center">
                      <strong className="featured-numbers pl-5 ml-5">15</strong>
                      <p className="featured-text pl-5  ml-5">
                        Project Finished
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clients section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Companies I've had worked</h3>
              </div>

              <div className="col-lg-2 col-4 ms-auto clients-item-height">
                <img
                  src="/images/clients/cachet.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="/images/clients/guitar-center.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="/images/clients/tokico.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="/images/clients/shopify.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 me-auto clients-item-height">
                <img
                  src="/images/clients/profil-rejser.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="/images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Services</h2>
                </div>

                <div className="row pt-lg-5">
                  <div className="col-lg-6 col-12">
                    <div className="services-thumb">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Websites</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$2,400</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        You may want to explore Too CSS for great collection of
                        free HTML CSS templates.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-globe"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb services-thumb-up">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Branding</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$1,200</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        You can explore more CSS templates on TemplateMo website
                        by browsing through different tags.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-lightbulb"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Ecommerce</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$3,600</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        If you need a customized ecommerce website for your
                        business, feel free to discuss with me.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-phone"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb services-thumb-up">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">SEO</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$1,450</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        To list your website first on any search engine, we will
                        work together. First Portfolio is one-page CSS Template
                        for free download.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-google"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-12 ms-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <img
                    src="/images/white-desk-work-study-aesthetics.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Projects</h2>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="projects-thumb">
                  <div className="projects-info">
                    <small className="projects-tag">Branding</small>

                    <h3 className="projects-title">Zoik agency</h3>
                  </div>

                  <a
                    href="/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg"
                    className="popup-image"
                  >
                    <img
                      src="/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg"
                      className="projects-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="projects-thumb">
                  <div className="projects-info">
                    <small className="projects-tag">Photography</small>

                    <h3 className="projects-title">The Watch</h3>
                  </div>

                  <a
                    href="/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"
                    className="popup-image"
                  >
                    <img
                      src="/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"
                      className="projects-image img-fluid"
                      alt=""
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="projects-thumb">
                  <div className="projects-info">
                    <small className="projects-tag">Website</small>

                    <h3 className="projects-title">Polo</h3>
                  </div>

                  <a
                    href="/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg"
                    className="popup-image"
                  >
                    <img
                      src="/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg"
                      className="projects-image img-fluid"
                      alt=""
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="/images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                <div className="contact-info contact-info-border-start d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">
                    Services
                  </strong>

                  <ul className="footer-menu">
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Websites
                      </a>
                    </li>

                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Branding
                      </a>
                    </li>

                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Ecommerce
                      </a>
                    </li>

                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        SEO
                      </a>
                    </li>
                  </ul>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Stay connected
                  </strong>

                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a
                        href="https://www.facebook.com/share/19CVDpZfUB/"
                        className="social-icon-link bi-facebook"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://github.com/MostafaHamdi2001?tab=overview&from=2026-07-01&to=2026-07-07"
                        className="social-icon-link bi-github"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://wa.me/+201090953863"
                        className="social-icon-link bi-whatsapp"
                      ></a>
                    </li>
                  </ul>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Start a project
                  </strong>

                  <p className="mb-0">I’m available for freelance projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                <div className="contact-info d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">
                    About
                  </strong>

                  <p className="mb-2">
                    Mostafa is a professional front_end web developer. Feel free
                    to get in touch with me.
                  </p>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Email
                  </strong>

                  <p>
                    <a href="mailto:mosatfahamdi689@gmail.com">
                      mosatfahamdi689@gmail.com
                    </a>
                  </p>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Call
                  </strong>

                  <p className="mb-0">
                    <a href="tel: 01090953863">01090953863</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <form
                  action="#"
                  method="get"
                  className="custom-form contact-form"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />

                        <label for="floatingInput">Name</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required=""
                        />

                        <label for="floatingInput">Email address</label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline">
                        <input
                          name="website"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox1"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          for="inlineCheckbox1"
                        >
                          <i className="bi-globe form-check-icon"></i>
                          <span className="form-check-label-text">
                            Websites
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline">
                        <input
                          name="branding"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox2"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          for="inlineCheckbox2"
                        >
                          <i className="bi-lightbulb form-check-icon"></i>
                          <span className="form-check-label-text">
                            Branding
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline">
                        <input
                          name="ecommerce"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox3"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          for="inlineCheckbox3"
                        >
                          <i className="bi-phone form-check-icon"></i>
                          <span className="form-check-label-text">
                            Ecommerce
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline me-0">
                        <input
                          name="seo"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox4"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          for="inlineCheckbox4"
                        >
                          <i className="bi-google form-check-icon"></i>
                          <span className="form-check-label-text">SEO</span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Tell me about the project"
                        ></textarea>

                        <label for="floatingTextarea">
                          Tell me about the project
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-12 ms-auto">
                      <button type="submit" className="form-control">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- end Main --> */}
    </div>
  );
}

export default Main;
