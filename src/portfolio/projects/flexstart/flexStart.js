import "./flexStart.css"
import React from "react";
import { Link } from "react-router-dom";

function FlexStart(){

    return(
        <>
<header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="#" className="logo d-flex align-items-center">
        <img src={require(`../projectImages/flexstart-logo.png`)} alt=""/>
        <span>FlexStart</span>
      </Link>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
          <li><Link className="nav-link scrollto" to="#about">About</Link></li>
          <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
          <li><Link className="nav-link scrollto" to="#portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" to="#team">Team</Link></li>
          <li><Link to="#blog" classNameName="nav-link scrollto">Blog</Link></li>
          <li className="dropdown"><Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="#" className="nav-link">Drop Down 1</Link></li>
              <li className="dropdown"><Link to="#" className="nav-link"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="#">Deep Drop Down 1</Link></li>
                  <li><Link to="#">Deep Drop Down 2</Link></li>
                  <li><Link to="#">Deep Drop Down 3</Link></li>
                  <li><Link to="#">Deep Drop Down 4</Link></li>
                  <li><Link to="#">Deep Drop Down 5</Link></li>
                </ul>
              </li>
              <li><Link to="#">Drop Down 2</Link></li>
              <li><Link to="#">Drop Down 3</Link></li>
              <li><Link to="#">Drop Down 4</Link></li>
            </ul>
          </li>

          <li className="dropdown megamenu"><Link to="#" className="nav-link"><span>Mega Menu</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li>
                <Link to="#">Column 1 link 1</Link>
                <Link to="#">Column 1 link 2</Link>
                <Link to="#">Column 1 link 3</Link>
              </li>
              <li>
                <Link to="#">Column 2 link 1</Link>
                <Link to="#">Column 2 link 2</Link>
                <Link to="#">Column 3 link 3</Link>
              </li>
              <li>
                <Link to="#">Column 3 link 1</Link>
                <Link to="#">Column 3 link 2</Link>
                <Link to="#">Column 3 link 3</Link>
              </li>
              <li>
                <Link to="#">Column 4 link 1</Link>
                <Link to="#">Column 4 link 2</Link>
                <Link to="#">Column 4 link 3</Link>
              </li>
            </ul>
          </li>

          <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
          <li><Link className="getstarted scrollto" to="#about">Get Started</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}
    </div>
  </header>
  {/* <!-- End Header --> */}


    {/*<!-- Hero --> */}
    <section id="hero" className="hero d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div className="text-center text-lg-start">
          <Link to="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Get Started</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={require(`../projectImages/flexstart-hero-img.png`)} className="img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>
{/* <!-- End Hero --> */}



<main id="main">
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">

      <div className="container" data-aos="fade-up">
        <div className="row gx-0">

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
              </p>
              <div className="text-center text-lg-start">
                <Link to="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src={require(`../projectImages/flexstart-about.jpg`)} className="img-fluid" alt=""/>
          </div>

        </div>
      </div>

    </section>
    {/* <!-- End About Section --> */}


    {/* <!-- ======= Values Section ======= --> */}
    <section id="values" className="values">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Our Values</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src={require(`../projectImages/flexstart-values-1.png`)} className="img-fluid" alt=""/>
              <h3>Ad cupiditate sed est odio</h3>
              <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <img src={require(`../projectImages/flexstart-values-2.png`)} className="img-fluid" alt=""/>
              <h3>Voluptatem voluptatum alias</h3>
              <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <img src={require(`../projectImages/flexstart-values-3.png`)} className="img-fluid" alt=""/>
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Values Section --> */}


    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" className="features">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Features</h2>
          <p>Laboriosam et omnis fuga quis dolor direda fara</p>
        </header>

        <div className="row">

          <div className="col-lg-6">
            <img src={require(`../projectImages/flexstart-feature.png`)} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Eos aspernatur rem</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Facilis neque ipsa</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Volup amet voluptas</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Rerum omnis sint</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Alias possimus</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Repellendus mollitia</h3>
                </div>
              </div>

            </div>
          </div>

        </div> 
        {/* <!-- / row --> */}

        {/* <!-- Feature Tabs --> */}
        <div className="row feture-tabs" data-aos="fade-up">
          <div className="col-lg-6">
            <h3>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>

            {/* <!-- Tabs --> */}
            <ul className="nav nav-pills mb-3">
              <li>
                <Link className="nav-link active" to="#tab1">Saepe fuga</Link>
              </li>
              <li>
                <Link className="nav-link" to="#tab2">Voluptates</Link>
              </li>
              <li>
                <Link className="nav-link" to="#tab3">Corrupti</Link>
              </li>
            </ul>
            {/* <!-- End Tabs --> */}

            {/* <!-- Tab Content --> */}
            <div className="tab-content">

              <div className="tab-pane fade show active" id="tab1">
                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
              </div>
              {/* <!-- End Tab 1 Content --> */}

              <div className="tab-pane fade show" id="tab2">
                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
              </div>
              {/* <!-- End Tab 2 Content --> */}

              <div className="tab-pane fade show" id="tab3">
                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
              </div>
              {/* <!-- End Tab 3 Content --> */}

            </div>

          </div>

          <div className="col-lg-6">
            <img src={require(`../projectImages/flexstart-features-2.png`)} className="img-fluid" alt=""/>
          </div>

        </div>
        {/* <!-- End Feature Tabs --> */}

        {/* <!-- Feature Icons --> */}
        <div className="row feature-icons" data-aos="fade-up">
          <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

          <div className="row">

            <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
              <img src={require(`../projectImages/flexstart-features-3.png`)} className="img-fluid p-4" alt=""/>
            </div>

            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">

                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <i className="ri-line-chart-line"></i>
                  <div>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="ri-stack-line"></i>
                  <div>
                    <h4>Ullamco laboris nisi</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="ri-brush-4-line"></i>
                  <div>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="ri-magic-line"></i>
                  <div>
                    <h4>Beatae veritatis</h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="ri-command-line"></i>
                  <div>
                    <h4>Molestiae dolor</h4>
                    <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i className="ri-radar-line"></i>
                  <div>
                    <h4>Explicabo consectetur</h4>
                    <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
        {/* <!-- End Feature Icons --> */}

      </div>

    </section>
    {/* <!-- End Features Section --> */}
    </main>



    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Services</h2>
          <p>Veritatis et dolores facere numquam et praesentium</p>
        </header>

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h3>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-box orange">
              <i className="ri-discuss-line icon"></i>
              <h3>Eosle Commodi</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-box red">
              <i className="ri-discuss-line icon"></i>
              <h3>Asperiores Commodi</h3>
              <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
              <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-box purple">
              <i className="ri-discuss-line icon"></i>
              <h3>Velit Doloremque.</h3>
              <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
              <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="service-box pink">
              <i className="ri-discuss-line icon"></i>
              <h3>Dolori Architecto</h3>
              <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
              <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Services Section --> */}



    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div className="row gy-4">

          <div className="col-lg-6">

            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street,<br/>New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p><Link to="/cdn-cgi/l/email-protection" className="__cf_email__"></Link></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form className="php-email-form">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Contact Section --> */}







    {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" class="footer">

    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div class="col-lg-6">
            <form>
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <Link to="#" class="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt=""/>
              <span>FlexStart</span>
            </Link>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div class="social-links mt-3">
              <Link to="#" className="twitter"><i class="bi bi-twitter"></i></Link>
              <Link to="#" className="facebook"><i class="bi bi-facebook"></i></Link>
              <Link to="#" className="instagram"><i class="bi bi-instagram"></i></Link>
              <Link to="#" className="linkedin"><i class="bi bi-linkedin"></i></Link>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Home</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">About us</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Services</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Terms of service</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Web Design</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Web Development</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Product Management</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Marketing</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> <Link to="#" class="__cf_email__" data-cfemail="9bf2f5fdf4dbfee3faf6ebf7feb5f8f4f6">[email&#160;protected]</Link><br/>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <Link to="#">BootstrapMade</Link>
      </div>
    </div>
  </footer>
  {/* <!-- End Footer --> */}
        </>
    )
}

export default FlexStart;