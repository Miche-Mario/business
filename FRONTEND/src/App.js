import Menu from './component/Menu';
import translate from './component/i18n/messages/translate'
import { FormattedMessage} from 'react-intl';
import Accordion from './component/Accordion';
import { accordionData } from './utils/accor';
 import background from "./img/back.png";
 import Pdf1 from './Document/FI-1207 fr.pdf';
 import { AiOutlineFilePdf } from 'react-icons/ai'
function App() {
  return (
    <div>

      <div className="loader js-preloader">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Menu/>
      <div className="switch-theme-mode">
        <label id="switch" className="switch">
          <input type="checkbox" onchange="toggleTheme()" id="slider" />
          <span className="slider round"></span>
        </label>
      </div>


      <div className="page-wrapper">

       


        <section className="hero-wrap style3 bg-squeeze">
          <img src="./assets/img/hero/hero-shape-10.png" alt="Image" className="hero-shape-one" />
          <img src="./assets/img/hero/hero-shape-15.png" alt="Image" className="hero-shape-two" />
          <img src="./assets/img/hero/hero-shape-14.png" alt="Image" className="hero-shape-three" />
          <img src="../assets/img/hero/hero-shape-11.png" alt="Image" className="hero-shape-four animationFramesTwo" />
          <div className="hero-slider-one">
            <div className="hero-slide-item">
              <div className="container">
                <div className="row gx-5 align-items-center">
                  <div className="col-md-6">
 
                    <div className="hero-content" data-speed="0.10" data-revert="true">
                      <span style={{fontSize: 20}}>{translate('hero.span1')}</span>
                      <h3>{translate('hero.h3')}</h3>
                      <p>{translate('hero.p1')}</p>
                      <div className="hero-btn">
                        <a href="service-one.html" className="btn style1">Get Started</a>
                        <a className="play-video" data-fancybox href="https://www.youtube.com/watch?v=DGo-OhDWIKQ">
                          <span className="play-btn"> <i className="flaticon-play-button-arrowhead"></i></span>
                          <span className="sm-none">Watch Video</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="hero-img-wrap">
                      <img src="../assets/img/hero/hero-shape-13.png" alt="Image" className="hero-shape-five bounce" />
                      <img src="../assets/img/hero/hero-shape-12.png" alt="Image" className="hero-shape-six moveHorizontal" />
                      <img src="../assets/img/hero/hero-slide-3.png" alt="Image" className="hero-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='about' style={{marginTop: "60px"}} className="why-choose-wrap style1 pb-100 bg-bunting">
          <div  className="container">
            <div  className="row gx-5 align-items-center">
              <div  className="col-lg-6">
                <div className="wh-img-wrap">
                  <img src="../assets/img/why-choose-us/wh-img-1.png" alt="Image" />
                  <img className="wh-shape-one bounce" src="assets/img/why-choose-us/wh-shape-1.png" alt="Image" />
                  <img className="wh-shape-two animationFramesTwo" src="assets/img/why-choose-us/wh-shape-2.png" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wh-content">
                  <div className="content-title style1">
                    <h2>{translate('whychoose.h21')}</h2>
                    <p>{translate('whychoose.p1')}</p>
                  </div>
                  <div className="feature-item-wrap">
                    <div className="feature-item">
                      <span className="feature-icon">
                        <i className="flaticon-graph"></i>
                      </span>
                      <div className="feature-text">
                        <h3>Low Costing</h3>
                        <p>{translate('whychoose.p2')}</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">
                        <i className="flaticon-loan-1"></i>
                      </span>
                      <div className="feature-text">
                        <h3>Safe &amp; Secure</h3>
                        <p>{translate('whychoose.p3')}</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">
                        <i className="flaticon-computer"></i>
                      </span>
                      <div className="feature-text">
                        <h3>Live Support</h3>
                        <p>{translate('whychoose.p4')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className="service-wrap style3 ptb-100 bg-rock">
          <div className="container">
            <img src="../assets/img/service-shape-1.png" alt="Image" className="service-shape-one" />
            <img src="../assets/img/service-shape-2.png" alt="Image" className="service-shape-two" />
            <div className="section-title style1 text-center mb-40">
              <span>{translate('services.span1')}</span>
              <h2 className="text-white">{translate('services.h21')}</h2>
            </div>
            <div className="row gx-5 align-items-center">
              <div className="col-md-6">
                <div className="service-card style3">
                  <span className="service-icon">
                    <i className="flaticon-payment-method"></i>
                  </span>
                  <div className="service-info">
                    <h3><a href="service-details.html">{translate('services.h31')}</a></h3>
                    <p>{translate('services.p1')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-card style3">
                  <span className="service-icon">
                    <i className="flaticon-computer"></i>
                  </span>
                  <div className="service-info">
                    <h3><a href="service-details.html">{translate('services.h32')}</a></h3>
                    <p>{translate('services.p2')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-card style3">
                  <span className="service-icon">
                    <i className="flaticon-credit-card"></i>
                  </span>
                  <div className="service-info">
                    <h3><a href="service-details.html">{translate('services.h33')}</a></h3>
                    <p>{translate('services.p3')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-card style3">
                  <span className="service-icon">
                    <i className="flaticon-loan-1"></i>
                  </span>
                  <div className="service-info">
                    <h3><a href="service-details.html">{translate('services.h34')}</a></h3>
                    <p>{translate('services.p4')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-20">
              <a href="service-one.html" className="btn style1">{translate('services.a')}</a>
            </div>
          </div>
        </section>

        


        <section id="send" className="feature-wrap pt-100 pb-75">
          <div className="container">
          <div className="section-title style1 text-center mb-40">
              <h2 className="text-black">{translate('step.h21')}</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="feature-card style3">
                  <div className="feature-info">
                    <div className="feature-title">
                      <span><img src="../assets/img/feature/feature-icon-1.png" alt="Image" /></span>
                      <h3>{translate('step.h31')}</h3>
                    </div>
                    <p style={{textAlign : 'center'}}>{translate('step.p1')}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="feature-card style3">
                  <div className="feature-info">
                    <div className="feature-title">
                      <span><img src="../assets/img/feature/feature-icon-2.png" alt="Image" /></span>
                      <h3>{translate('step.h32')}</h3>
                    </div>
                    <p style={{textAlign: 'center'}}>{translate('step.p2')}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="feature-card style3">
                  <div className="feature-info">
                    <div className="feature-title">
                      <span><img src="../assets/img/feature/feature-icon-3.png" alt="Image" /></span>
                      <h3>{translate('step.h33')}</h3>
                    </div>
                    <p style={{textAlign: 'center'}}>{translate('step.p3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    

        <div id="online" className="counter-wrap">
          <div className="container">
            <div className="counter-card-wrap">
              <div className="counter-card">
                <div className="counter-text">
                  <div className="counter-num">
                    <span className="odometer" >5432</span>
                  </div>
                  <p>{translate('proof.p1')}</p>
                </div>
              </div>
              <div className="counter-card">
                <div className="counter-text">
                  <div className="counter-num">
                    <span className="odometer" >14</span>
                  </div>
                  <p>{translate('proof.p2')}</p>
                </div>
              </div>
              <div className="counter-card">
                <div className="counter-text">
                  <div className="counter-num">
                    <span className="odometer" >07</span>
                  </div>
                  <p>{translate('proof.p3')}</p>
                </div>
              </div>
              <div className="counter-card">
                <div className="counter-text">
                  <div className="counter-num">
                    <span className="odometer">3349</span>
                  </div>
                  <p>{translate('proof.p4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="shopping-wrap ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 order-lg-1 order-2">
                <div className="shopping-content">
                  <img src="../assets/img/shopping/shopping-shape-1.png" alt="Image" className="shopping-shape-one moveHorizontal" />
                  <img src="../assets/img/shopping/shopping-shape-2.png" alt="Image" className="shopping-shape-two bounce" />
                  <div className="content-title style1 ">
                    <span>{translate('online.span1')}</span>
                    <h2>{translate('online.h21')}</h2>
                    <p>{translate('online.p1')}</p>
                  </div>
                  <ul className="content-feature-list list-style">
                    <li><i className="ri-check-double-line"></i>{translate('online.li1')}</li>
                    <li><i className="ri-check-double-line"></i>{translate('online.li2')}</li>
                    <li><i className="ri-check-double-line"></i>{translate('online.li3')}</li>
                  </ul>
                  <a href="register.html" className="btn style1">{translate('online.a')}</a>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-lg-2 order-1">
                <div className="shopping-img-wrap">
                  <img src="../assets/img/shopping/shopping-1.png" alt="Image" />
                  <img src="../assets/img/shopping/shopping-shape-3.png" alt="Image" className="shopping-shape-three" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="credit" className="app-wrap  ptb-100 bg-rock">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-8">
                <div className="app-content sm-center">
                  <div className="content-title style2">
                    <h2>{translate('app.h2')}</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-4 text-md-end sm-center">
                <div className="app-btn">
                  <a href="https://play.google.com/store/apps"><img src="../assets/img/play-store.png" alt="Image" /></a>
                  <a href="https://www.apple.com/app-store/"><img src="../assets/img/apple-store.png" alt="Image" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="goal-wrap ptb-100">
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="goal-img-wrap">
                  <img src="../assets/img/goal/goal-shape-1.png" alt="Image" className="goal-shape-three bounce" />
                  <img src="../assets/img/goal/goal-shape-2.png" alt="Image" className="goal-shape-one" />
                  <img src="../assets/img/goal/goal-shape-3.png" alt="Image" className="goal-shape-two" />
                  <img src="../assets/img/goal/goal-1.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="goal-content">
                  <div className="content-title style1">
                    <span>Goal Setting</span>
                    <h2>{translate('goal.h2')}</h2>
                    <p>{translate('goal.p2')}</p>
                  </div>
                  <ul className="content-feature-list style1 list-style">
                    <li><span><i className="flaticon-tick"></i></span>{translate('goal.li1')}</li>
                    <li><span><i className="flaticon-tick"></i></span>{translate('goal.li2')}</li>
                    <li><span><i className="flaticon-tick"></i></span>{translate('goal.li3')}</li>
                    <li><span><i className="flaticon-tick"></i></span>{translate('goal.li1')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="counter-wrap">
         
          <div className="container">
          <div  className="text-center mb-20">
              <a style={{backgroundColor: "#030734"}} href="service-one.html" className="btn style1">{translate('doc.a')}</a>
            </div>
            <div className="counter-card-wrap">
              
              <div className="counter-card">
                
                <div className="counter-text">
                  <div style={{color: "white"}} >
                    <AiOutlineFilePdf style={{color: 'white', fontSize: '32px'}}/>
                    <a className='apdf' href = {Pdf1} target = "_blank">Guida alla chiusura del conto corrente - FI-1430</a>
                  </div>
                  
                </div>
              </div>
              <div className="counter-card">
                <div className="counter-text">
                <div style={{color: "white"}} >
                    <AiOutlineFilePdf style={{color: 'white', fontSize: '32px'}}/>
                    <a className='apdf' href = {Pdf1} target = "_blank">Guida alla chiusura del conto corrente - FI-1430</a>
                  </div>
                </div>
              </div>
              <div className="counter-card">
                <div className="counter-text">
                  <div style={{color: "white"}} >
                      <AiOutlineFilePdf style={{color: 'white', fontSize: '32px'}}/>
                      <a className='apdf' href = {Pdf1} target = "_blank">Guida alla chiusura del conto corrente - FI-1430</a>
                    </div>
                </div>
              </div>
              <div className="counter-card">
                <div className="counter-text">
                  <div style={{color: "white"}} >
                      <AiOutlineFilePdf style={{color: 'white', fontSize: '32px'}}/>
                      <a className='apdf' href = {Pdf1} target = "_blank">Guida alla chiusura del conto corrente - FI-1430</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='ac' style={{backgroundImage: `url(${background})`,padding: "12px"}}>
        
          
          <div className="accordionn">
          <div style={{flex: 1, justifyContent: 'center',alignContent:'center',backgroundColor: "white", padding:"15px"}}>
          <h3 style={{textAlign: 'center', padding: "10px"}}>{translate('accor.h1')}</h3>
            
              <Accordion 
                title={translate('accor.title1')} 
                content={translate('accor.content1',{path:<br/>})} 
              />
              <Accordion 
                title={translate('accor.title2')} 
                content={translate('accor.content2',{path: <br/>})} 
              />
              <Accordion 
                title={translate('accor.title3')} 
                content={translate('accor.content3',{path: <br/>})} 
              />
         
          </div>
        </div>
        
    </div>



        <footer className="footer-wrap bg-rock">
          <div className="container">
            <img src="../assets/img/footer-shape-1.png" alt="Image" className="footer-shape-one" />
            <img src="../assets/img/footer-shape-2.png" alt="Image" className="footer-shape-two" />
            <div className="row pt-100 pb-75">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <a href="index.html" className="footer-logo">
                    <img src="../assets/img/logo-white.png" alt="Image" />
                  </a>
                  <p className="comp-desc">
                    On the other hand, we denounce whteous indig nation and dislike men wh beguiled moraized er hand consec teturus adipis iscing elit eiusmod tempordunt labore dolore magna aliqua consector tetur adip iscing.
                  </p>
                  <div className="social-link">
                    <ul className="social-profile list-style style1">
                      <li>
                        <a target="_blank" href="https://facebook.com/">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="ri-pinterest-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Our Company</h3>
                  <ul className="footer-menu list-style">
                    <li>
                      <a href="about.html">
                        <i className="flaticon-next"></i>
                        Company &amp; Team
                      </a>
                    </li>
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="team.html">
                        <i className="flaticon-next"></i>
                        News &amp; Blog
                      </a>
                    </li>
                    <li>
                      <a href="pricing.html">
                        <i className="flaticon-next"></i>
                        Pricing Plan
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="flaticon-next"></i>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">
                        <i className="flaticon-next"></i>
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Products</h3>
                  <ul className="footer-menu list-style">
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Online Payment
                      </a>
                    </li>
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Deposit Skim
                      </a>
                    </li>
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Online Shopping
                      </a>
                    </li>
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Master Card
                      </a>
                    </li>
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Receive Money
                      </a>
                    </li>
                    <li>
                      <a href="service-one.html">
                        <i className="flaticon-next"></i>
                        Affiliate Program
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Subscribe</h3>
                  <p className="newsletter-text">Tablished fact that a reader will be distrated by the readable content</p>
                  <form action="#" className="newsletter-form">
                    <input type="email" placeholder="Your Email" />
                    <button type="button">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-text">
            <p> <i className="ri-copyright-line"></i><script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear())</script> Raxa. All Rights Reserved By <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
