import React from 'react';
import Layout from './Layout';
import { Container } from 'react-bootstrap';

const ViewStudent = () => {
    return (
        <Layout >
        <div>
        <section id="sec1" className="block contact-block">
          <Container fluid>
            <div className="title-holder">
              <h2> ViewStudent Student Details</h2>
            </div>
        </Container>
        </section>
        </div>
       </Layout>
    );
};

export default ViewStudent;