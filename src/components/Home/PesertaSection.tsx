import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { Section, Card } from '@/components/UI';

import users from '@/constant/users';
import CompetenceImg from '@/assets/img/vector/img-competens.svg';

const PesertaSection = () => {
  return (
    <Section className="peserta-section">
      <Container>
        <Row>
          <Col lg={6} className="align-self-center">
            <h1 className="h1-custom mb-5" tabIndex={0}>
              Peserta <br /> Uji kompetensi
            </h1>
            <div className="overflow-y">
              {users.map((user) => (
                <div key={user.id}>
                  <Card className="card-peserta">
                    <Row className="card-body">
                      <Col lg={2} sm={2} className="icon align-self-center">
                        <FontAwesomeIcon
                          icon={user.icon}
                          style={{ fontSize: 1.6 + 'rem' }}
                        />
                      </Col>
                      <Col lg={10} sm={10} className="align-self-center">
                        <p className="mt-auto mb-auto" tabIndex={0}>
                          {user.desc}
                        </p>
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} className="right-side">
            <img
              className="fluid"
              src={CompetenceImg}
              alt=""
              loading="lazy"
              width="420px"
              height="100%"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default PesertaSection;
