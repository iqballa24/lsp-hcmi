import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/UI';
import { Col, Container, Row } from 'react-bootstrap';

import Logo from '@/assets/img/vector/logo-lsp.svg';
import data from '@/data';

const AboutSection = () => {
  return (
    <Section className="about-section">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6} className="align-self-center about-text">
            <h1 className="h1-custom" tabIndex={0}>Tentang LSP HCMI</h1>
            <p className="mt-5" tabIndex={0}>{data.about.desc}
            </p>
            <Link to="/about" className="button button-secondary mt-5">
              Selengkapnya
            </Link>
          </Col>
          <Col lg={6} className="about-img text-center">
            <img
              className="fluid"
              src={Logo}
              alt="logo LSP HCMI"
              loading="lazy"
              width="100%"
              height="100%"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(AboutSection);
