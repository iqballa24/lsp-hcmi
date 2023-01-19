import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Section } from '@/components/UI';

import data from '@/data';
import IconLaw from '@/assets/img/vector/codicon_law.svg';

const LawsSection = () => {
  return (
    <Section isCenteredContent className="law-section">
      <Container>
        <Row>
          <Col lg={12} sm={12} className="mb-5">
            <h1 className="h1-custom" tabIndex={0}>
              Dasar Hukum
            </h1>
          </Col>
          <Col lg={12} sm={12}>
            <Row>
              {data.legalBase.map((legal) => (
                <Col lg={4} md={6} key={legal.id}>
                  <Card className="card-law">
                    <img
                      src={IconLaw}
                      className="fluid card-img-top"
                      alt="Dasar hukum"
                      style={{
                        maxWidth: 8 + 'rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                      loading="lazy"
                      width="100%"
                      height="100%"
                    ></img>
                    <div className="card-body">
                      <p className="card-text" tabIndex={0}>
                        {legal.text}
                      </p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(LawsSection);
