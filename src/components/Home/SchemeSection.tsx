import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/UI';
import { Container, Row, Col } from 'react-bootstrap';

import data from '@/data';

const SchemeSection = () => {
  return (
    <Section className="skema-section">
      <Container>
        <Row>
          <Col lg={6}>
            <img
              className="fluid text-center"
              src={data.scheme.picture}
              alt=""
              width="100%"
              height="100%"
              loading="lazy"
            />
          </Col>
          <Col lg={6} className="align-self-center skema-text">
            <h1 className="h1-custom mb-5" tabIndex={0}>
              Skema Sertifikasi
            </h1>
            <p tabIndex={0}>{data.scheme.description}</p>
            <Link to="/scheme" className="button button-secondary mt-5">
              Selengkapnya
            </Link>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SchemeSection;
