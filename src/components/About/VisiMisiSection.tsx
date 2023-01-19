import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { Section } from '@/components/UI';
import { VisiMisiLSP } from '@/constant/picture';
import data from '@/data';

const VisiMisiSection = () => {
  return (
    <Section className="visimisi-section">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <Row>
              <Col lg={12} className="mb-5">
                <h1 className="h1-custom mb-5" tabIndex={0}>Visi</h1>
                <p tabIndex={0}>{data.visi}</p>
              </Col>
              <Col>
                <h1 className="h1-custom mb-5" tabIndex={0}>Misi</h1>
                <ul className="visimisi-section-list">
                  {data.misi.map((item) => (
                    <li key={item.id} tabIndex={0}>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{
                            fontSize: 1.6 + 'rem',
                            color: '#E74C3C',
                          }}
                        />{' '}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="mb-5">
            <img
              className="fluid"
              src={VisiMisiLSP}
              alt=""
              width={550}
              height="100%"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(VisiMisiSection);
