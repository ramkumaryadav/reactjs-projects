import React from 'react';

const Header = () => {
    return (
        <>
          <header>
              <section className="container main-hero-container">
                <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-centre flex-column align-item-start">
                 <h1 className="display-2">Online payment easy  for you...</h1>
                 <p className="main-hero-para">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                 <h3>Det easyly access for you</h3>
                 <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
                    </div>
                    {/* <!-- main header --> */}
                    <div className="col-12 col-lg-6 header-right-side justify-content-centre align-item-center">
                      <img src="./images/payment.png" alt="payment" className="img-fluid"/>
                    </div>
                </div>
              </section>
          </header>
        </>
    )
}
export default Header;