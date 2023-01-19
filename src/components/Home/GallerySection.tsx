import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '@/components/UI';

import {
  pelatihanImg,
  Ujikom1Img,
  Pelatihan2Img,
  Ujikom2Img,
} from '@/constant/picture';

const GallerySection = () => {
  return (
    <Section isCenteredContent className="galery-section">
      <Container>
        <h1 className="h1-custom mb-5" tabIndex={0}>Dokumentasi Kegiatan</h1>
        <Row className="mb-5">
          <Col lg={5} className="mb-5" style={{ overflow: 'hidden' }}>
            <img
              className="fluid img-hover__zoom-colorize"
              src={pelatihanImg}
              alt="pelatihan"
              loading="lazy"
            />
          </Col>
          <Col lg={7}>
            <Row>
              <Col lg={12} className="mb-5" style={{ overflow: 'hidden' }}>
                <img
                  className="fluid img-hover__zoom-colorize"
                  src={Ujikom1Img}
                  alt="ujikom1"
                  loading="lazy"
                />
              </Col>
              <Col lg={12} className="mb-5" style={{ overflow: 'hidden' }}>
                <img
                  className="fluid img-hover__zoom-colorize"
                  src={Pelatihan2Img}
                  alt="pelatihan2"
                  loading="lazy"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={12} style={{ overflow: 'hidden' }}>
            <img
              className="fluid img-hover__zoom-colorize"
              src={Ujikom2Img}
              alt="ujikom2"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row>
          <p>
            <a href="/" className="galery-p">
              See more
            </a>
          </p>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(GallerySection);
