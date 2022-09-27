import React from 'react'
import translate from '../component/i18n/messages/translate'


const Menu = () => {


  const handleClick = event => {
    document.querySelector('.header-top').classList.add('open')
  };
  const removeClick = event => {
    document.querySelector('.header-top').classList.remove('open')
  };
  const handleClick1 = event => {
    document.querySelector('.search-area').classList.add('open')
  };
  const removeClick1 = event => {
    document.querySelector('.search-area').classList.remove('open')
  };

  const handleClick2 = event => {
    document.querySelector('.main-menu-wrap').classList.add('open')
  };
  const removeClick2 = event => {
    document.querySelector('.main-menu-wrap').classList.remove('open')
  }
  return (
    <>
         <header className="header-wrap style1">
          <div className="header-top">
            <button onClick={removeClick} type="button" className="close-sidebar">
              <i className="ri-close-fill"></i>
            </button>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="header-top-left">
                    <ul className="contact-info list-style">
                      <li><i className="flaticon-call"></i> <a href="tel:02459271449">(+024) 592 71 449</a></li>
                      <li><i className="flaticon-email-1"></i> <a href = "mailto: info@bnpconto.com"><span className="__cf_email__" >info@bnpconto.com</span></a></li>
                      <li><i className="flaticon-pin"></i><p>Via Filippo Sassetti, 32 - 20124 Milan </p></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="header-top-right">
                    <ul className="header-top-menu list-style">
                      <li><a href="contact.html">{translate('menu.support')}</a></li>
                      <li><a href="contact.html">{translate('menu.help')}</a></li>
                    </ul>
                    <div className="select-lang">
                      <i className="ri-global-line"></i>
                      <div className="navbar-option-item navbar-language dropdown language-option">
                        <button  className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="lang-name">English
                          <i style={{marginLeft: "65px"}} className="ri-arrow-down-s-line"></i>
                          </span>
                          
                        </button>
                        <div className="dropdown-menu language-dropdown-menu">
                          <a className="dropdown-item" href="#">
                            <img src="./assets/img/uk.png" alt="flag" />
                            English
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src="../assets/img/china.png" alt="flag" />
                            简体中文
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src="../assets/img/uae.png" alt="flag" />
                            العربيّة
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img className="logo-light" src="assets/img/logo.png" alt="logo" />
                  <img className="logo-dark" src="assets/img/logo-white.png" alt="logo" />
                </a>
                <div  className=" navbar-collapse main-menu-wrap " id="navbarSupportedContent">
                  <div className="menu-close xl-none">
                    <a onClick={removeClick2} href="javascript:void(0)"> <i className="ri-close-line"></i></a>
                  </div>
                  <ul className="navbar-nav ms-auto">
                   
                    <li className="nav-item has-dropdown">
                      <a href="#services" className="nav-link">
                      {translate('menu.lien2')}
                      </a>
                    </li>
                    
                    <li className="nav-item has-dropdown">
                      <a href="#services" className="nav-link">
                      {translate('menu.lien31')}
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <ul className="dropdown-menu">
                      <li className="nav-item has-dropdown">
                      <a href="#services" className="nav-link">
                      {translate('menu.lien3')}
                      </a>
                    </li>
                        <li className="nav-item">
                          <a href="#online" className="nav-link">
                          {translate('menu.lien32')}
                            <i className="ri-arrow-down-s-line"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="#send" className="nav-link">{translate('menu.lien322')}</a>
                            </li>
                            <li className="nav-item">
                              <a href="online" className="nav-link">{translate('menu.lien323')}</a>
                            </li>
                            
                          </ul>
                        </li>
                        <li className="nav-item has-dropdown">
                      <a href="#credit" className="nav-link">
                      {translate('menu.lien4')}
                      </a>
                    </li>
                    
                      </ul>
                    </li>
                   
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">Contact Us</a>
                    </li>
                    <li className="nav-item xl-none">
                      <a href="/aprililconto" className="btn style1 w-32 p-2">Register Now</a>
                    </li>
                    <li className="nav-item xl-none">
                      <a href="/login" className="btn style1 w-32 p-2">Login</a>
                    </li>
                  </ul>
                  <div className="others-options  lg-none">
                    <div className="searchbox">
                      <input type="search" placeholder="Search" />
                      <button type="button">
                        <i className="flaticon-search"></i>
                      </button>
                    </div>
                    <div className="header-btn lg-none">
                      <a href="/aprililconto" className="btn style1 w-32 p-2">Register Now</a>
                    </div>
                    <div className="header-btn lg-none">
                      <a href="/login" className="btn style1 w-32 ml-2 p-2">Login</a>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="mobile-bar-wrap">
                <div onClick={handleClick} className="mobile-sidebar">
                  <i className="ri-menu-4-line"></i>
                </div>
                <button onClick={handleClick1} className="searchbtn xl-none" type="button">
                  <i className="flaticon-search"></i>
                </button>
                <div  className="mobile-menu xl-none">
                  <a onClick={handleClick2} href="javascript:void(0)"><i className="ri-menu-line"></i></a>
                </div>
              </div>
            </div>
            <div className="search-area">
              <div className="container">
                <form action="#">
                  <div className="form-group">
                    <input type="search" placeholder="Search Here" autofocus />
                  </div>
                </form>
                <button onClick={removeClick1} type="button" className="close-searchbox">
                  <i className="ri-close-line"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Menu;