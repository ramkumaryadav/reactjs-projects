import React, { useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    address:"",
    message:"",
  });

  let name, value;
  const postUserData = (event) => {
  name = event.target.name;
  value = event.target.value; 

  setUserData ({...userData, [name]: value });
  };  

  //connect with firebase
  const submitData = async (event) =>
  {
    event.preventDefault();
    const {  firstName, lastName, phoneNumber, email, address, message } = userData;
   const res = await fetch("https://reactwebsite-87219-default-rtdb.firebaseio.com/userDataRecord.json", {
   method : "POST",
   header : {
     "Content-Type" : "application/json",
   },
   body : JSON.stringify({
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    message
   }), 
  }
   );
   if (res){
     alert("Data Stored !!");
   }else{
     alert("Please fill the data")
   }
  };
    return (
        <>
          <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/payment.png"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          defaultValue={userData.firstName}
                          onClick={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onClick={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phoneNumber"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          defaultValue={userData.phoneNumber}
                          onClick={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          defaultValue={userData.email}
                          onClick={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          defaultValue={userData.address}
                          onClick={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          defaultValue={userData.message}
                          onClick={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"  >
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100" onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Contact;
