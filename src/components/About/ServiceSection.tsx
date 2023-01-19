import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { Section } from '@/components/UI';
import { ServiceLSP } from '@/constant/picture';
import data from '@/data';

const ServiceSection = () => {
  return (
    <Section className="about-section">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6} className="align-self-center">
            <h1 className="h1-custom mb-5">{data.longTitle}</h1>
            <p className="mb-5">{data.about.desc}</p>
            <ul className="service-section-list">
              {data.about.letters.map((letter) => (
                <li key={letter.id}>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ fontSize: 1.6 + 'rem', color: '#E74C3C' }}
                    />{' '}
                    {letter.text}
                  </p>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={6} className="mb-5 text-center">
            <img className="fluid" src={ServiceLSP} alt="service section" width={550} height="100%"/>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(ServiceSection);
