import React from 'react';
import Layout from './Layout';
import { Container } from 'react-bootstrap';

const ViewFaculty = () => {
    return (
        <Layout >
        <div>
        <section id="sec1" className="block contact-block">
          <Container fluid>
            <div className="title-holder">
              <h2> ViewFaculty Details</h2>
            </div>
        </Container>
        </section>
        </div>
       </Layout>
    );
};

export default ViewFaculty;