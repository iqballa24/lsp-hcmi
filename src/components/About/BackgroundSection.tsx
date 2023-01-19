import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Section } from '@/components/UI';

import { BackgroundLSP } from '@/constant/picture';
import data from '@/data';

const BackgroundSection = () => {
  return (
    <Section className="background-section">
      <Container>
        <Row>
          <Col lg={6} className="align-self-center text-center mb-5">
            <img className="fluid" src={BackgroundLSP} alt="service section" width={550} height="100%"/>
          </Col>
          <Col lg={6}>
            <h1 className="h1-custom mb-5" tabIndex={0}>
              Latar Belakang Pendirian LSP HCMI
            </h1>
            <ul className="background-section-list">
              {data.background.map((item) => (
                <li key={item.id} tabIndex={0}>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ fontSize: 1.6 + 'rem', color: '#E74C3C' }}
                    />{' '}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <p tabIndex={0}>{data.about.desc}</p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(BackgroundSection);
