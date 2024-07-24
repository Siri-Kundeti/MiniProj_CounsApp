import React, { useState } from 'react';
import '../../styles/section3.css' // Import the CSS file
import Layout from './Layout';
import { Container } from 'react-bootstrap';

const Section3 = () => {
  // Step 2: Define the state
  const [formData, setFormData] = useState({
    email: '',
    uname: '',
    pwd: '',
    cpwd: '',
    fname: '',
    lname: '',
    phno: '',
    phno_2: '',
    pic: null,
    pic2: null
  });
  const [currentStep, setCurrentStep] = useState(1);
  const steps = 4;

  // Step 3: Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  // Step 4: Handle navigation
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  const setProgressBar = () => {
    const percent = (currentStep / steps) * 100;
    return {percent};
  };

  return (
    <div id='sec'>
    <Container fluid>
    {/* <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sign Up Your User Account</h2>
            <p>Fill all form fields to go to the next step</p>
            <form id="msform" onSubmit={handleSubmit}>
              <ul id="progressbar">
                <li className={currentStep >= 1 ? 'active' : ''} id="account"><strong>Account</strong></li>
                <li className={currentStep >= 2 ? 'active' : ''} id="personal"><strong>Personal</strong></li>
                <li className={currentStep >= 3 ? 'active' : ''} id="payment"><strong>Image</strong></li>
                <li className={currentStep >= 4 ? 'active' : ''} id="confirm"><strong>Finish</strong></li>
              </ul>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: setProgressBar() }}></div>
              </div>
              <br />
              {currentStep === 1 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Account Information:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 1 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">Email: *</label>
                    <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
                    <label className="fieldlabels">Username: *</label>
                    <input type="text" name="uname" placeholder="UserName" value={formData.uname} onChange={handleChange} />
                    <label className="fieldlabels">Password: *</label>
                    <input type="password" name="pwd" placeholder="Password" value={formData.pwd} onChange={handleChange} />
                    <label className="fieldlabels">Confirm Password: *</label>
                    <input type="password" name="cpwd" placeholder="Confirm Password" value={formData.cpwd} onChange={handleChange} />
                  </div>
                  <input type="button" name="next" className="next action-button" value="Next" onClick={nextStep} />
                </fieldset>
              )}
              {currentStep === 2 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Personal Information:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 2 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">First Name: *</label>
                    <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} />
                    <label className="fieldlabels">Last Name: *</label>
                    <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
                    <label className="fieldlabels">Contact No.: *</label>
                    <input type="text" name="phno" placeholder="Contact No." value={formData.phno} onChange={handleChange} />
                    <label className="fieldlabels">Alternate Contact No.: *</label>
                    <input type="text" name="phno_2" placeholder="Alternate Contact No." value={formData.phno_2} onChange={handleChange} />
                  </div>
                  <input type="button" name="next" className="next action-button" value="Next" onClick={nextStep} />
                  <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={prevStep} />
                </fieldset>
              )}
              {currentStep === 3 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Image Upload:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 3 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">Upload Your Photo:</label>
                    <input type="file" name="pic" accept="image/*" onChange={handleChange} />
                    <label className="fieldlabels">Upload Signature Photo:</label>
                    <input type="file" name="pic2" accept="image/*" onChange={handleChange} />
                  </div>
                  <input type="button" name="next" className="next action-button" value="Next" onClick={nextStep} />
                  <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={prevStep} />
                </fieldset>
              )}
              {currentStep === 4 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Finish:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 4 - 4</h2>
                      </div>
                    </div>
                    <br />
                    <br />
                    <h2 className="purple-text text-center"><strong>SUCCESS!</strong></h2>
                    <br />
                    <div className="row justify-content-center">
                      <div className="col-3">
                        <img src="https://i.imgur.com/GwStPmg.png" className="fit-image" alt="Success" />
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row justify-content-center">
                      <div className="col-7 text-center">
                        <h5 className="purple-text text-center">You Have Successfully Signed Up</h5>
                      </div>
                    </div>
                  </div>
                </fieldset>
              )}
            </form>
          </div>
        </div>
      </div>
    </div> */}
   
      <div className="title-holder">
          <h2>WELCOME TO student PAGE..!! </h2>
          
        </div>

    </Container>
    </div>
   
  );
};

export default Section3;