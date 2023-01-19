import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Section } from '@/components/UI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

import data from '@/data';

const Footer = () => {
  return (
    <footer>
      <Section className="footer-section">
        <Container fluid>
          <Row>
            <Col lg={5} className="footer-section-map">
              <iframe
                title="mapLSP"
                className="map"
                src={data.address.map}
                style={{ border: 0, width: 100 + '%', height: 354 + 'px' }}
              ></iframe>
            </Col>
            <Col lg={7} className="footer-section-info align-self-center">
              <Row>
                <Col lg={6} tabIndex={0}>
                  <h1 className="mb-4">{data.title}</h1>
                  <p>{data.about.desc}</p>
                </Col>
                <Col lg={6} tabIndex={0}>
                  <h1 className="mb-4">Hubungi Kami</h1>
                  <p className="mb-4">
                    <FontAwesomeIcon icon={faMapMarker} /> {data.address.text}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> {data.telp}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} /> {data.email}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={12} className="footer-section-cprt">
              <p style={{ color: '#' + 444444 }} tabIndex={0}>
                Copyright 2021 LSP HCMI. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
    </footer>
  );
};

export default React.memo(Footer);
