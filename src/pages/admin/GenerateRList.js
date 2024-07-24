import React from 'react';
import Layout from './Layout';
import { Container } from 'react-bootstrap';

const GenerateRList = () => {
    return (
        <Layout >
        <div>
        <section id="sec1" className="block contact-block">
          <Container fluid>
            <div className="title-holder">
              <h2> Generate Roll List</h2>
            </div>
        </Container>
        </section>
        </div>
       </Layout>
    );
};

export default GenerateRList;