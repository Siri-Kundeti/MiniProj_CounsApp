import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from './Layout';

const AddStudent = () => {
 const navigate = useNavigate();
  const [form, setForm] = useState({
    applyingFor: '',
    admissionType: '',
    rollNumber: '',
    entryType: '',
    specialization: '',
    aadharNumber: '',
    studentName: '',
    gender: '',
    dateOfBirth: '',
    category: '',
    caste: '',
    religion: '',
    bloodGroup: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, dateOfBirth: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(form);
  };

  return (

    <Layout>
      <div >
        <section id="sec1" className="block contact-block">
          <Container fluid>
            <div className="title-holder">
              <h2>Student Details</h2>
              <div className="subtitle">Fill the form below</div>
            </div>
            <Container className="signup-container">
              <Row className="justify-content-center">
                <Col md={10} className="signup-form" style={{ marginTop: '1cm' }}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formApplyingFor">
                      <Form.Label>Applying for*</Form.Label>
                      <Form.Control as="select" name="applyingFor" value={form.applyingFor} onChange={handleChange} className='custom-select' required>
                        <option value="">Select Option</option>
                        <option value="1 B.Tech"> 1 B.Tech</option>
                        <option value="2 B.Tech">2 B.Tech</option>
                        <option value="2 B.Tech">3 B.Tech</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formAdmissionType">
                      <Form.Label>Type of Admission*</Form.Label>
                      <Form.Control as="select" name="admissionType" value={form.admissionType} onChange={handleChange} className='custom-select' required >
                      <option value="Convenor">Convenor</option>
                        <option value="Managemnet"> Management</option>
                        <option value="Spot">Spot</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formRollNumber">
                      <Form.Label>Roll Number</Form.Label>
                      <Form.Control type="text" name="rollNumber" value={form.rollNumber} onChange={handleChange} className='custom-text' />
                    </Form.Group>

                    <Form.Group controlId="formEntryType">
                      <Form.Label>Entry Type*</Form.Label>
                      <Form.Control as="select" name="entryType" value={form.entryType} onChange={handleChange} className='custom-select' >
                        <option value="">Select Option</option>
                        <option value="1 B.Tech"> 1 B.Tech</option>
                        <option value="2 B.Tech">2 B.Tech</option>
                        <option value="2 B.Tech">3 B.Tech</option>
                      </Form.Control> 
                    </Form.Group>

                    <Form.Group controlId="formSpecialization">
                      <Form.Label>Specialization*</Form.Label>
                      <Form.Control type="text" name="specialization" value={form.specialization} onChange={handleChange} className='custom-text' />
                    </Form.Group>

                    <Form.Group controlId="formAadharNumber">
                      <Form.Label>Aadhar Number*</Form.Label>
                      <Form.Control type="text" name="aadharNumber" value={form.aadharNumber} onChange={handleChange} className='custom-text'/>
                    </Form.Group>

                    <Form.Group controlId="formStudentName">
                      <Form.Label>Name of the student (As per SSC certificate)*</Form.Label>
                      <Form.Control type="text" name="studentName" value={form.studentName} onChange={handleChange} className='custom-text' />
                    </Form.Group>

                    <Form.Group controlId="formGender">
                      <Form.Label>Gender*</Form.Label>
                      <div>
                        <Form.Check
                          type="radio"
                          name="gender"
                          label="Male"
                          value="Male"
                          checked={form.gender === 'Male'}
                          className='custom-radio'
                          onChange={handleChange}
                        />
                        <Form.Check
                          type="radio"
                          name="gender"
                          label="Female"
                          value="Female"
                          checked={form.gender === 'Female'}
                          className='custom-radio'
                          onChange={handleChange}
                        />
                        <Form.Check
                          type="radio"
                          name="gender"
                          label="TransGender"
                          value="TransGender"
                          checked={form.gender === 'TransGender'}
                          className='custom-radio'
                          onChange={handleChange}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formDateOfBirth">
                      <Form.Label>Date of Birth*</Form.Label>
                      <Form.Control type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleDateChange} className='custom-date' />
                    </Form.Group>

                    <Form.Group controlId="formCategory">
                      <Form.Label>Category*</Form.Label>
                      <Form.Control type="text" name="category" value={form.category} onChange={handleChange} className='custom-text' />
                    </Form.Group>

                    <Form.Group controlId="formCaste">
                      <Form.Label>Caste*</Form.Label>
                      <Form.Control type="text" name="caste" value={form.caste} onChange={handleChange} className='custom-text'/>
                    </Form.Group>

                    <Form.Group controlId="formReligion">
                      <Form.Label>Religion*</Form.Label>
                      <Form.Control type="text" name="religion" value=" " className='custom-text'/>
                    </Form.Group>

                    <Form.Group controlId="formBloodGroup">
                      <Form.Label>Blood Group*</Form.Label>
                      <Form.Control type="text" name="bloodGroup" value=" " className='custom-text'/>
                    </Form.Group>

                    <div className="text-center" style={{ marginTop:'0.3cm'}}>
                      <Button variant="primary" type="submit">
                          Submit
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </div>
    </Layout> 
  );
};

export default AddStudent;