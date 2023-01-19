import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '@/components/UI';

const CommitmentSection = () => {
  return (
    <Section isCenteredContent className="komitmen-section">
      <Container>
        <Row>
          <Col lg={12} sm={12} className="mb-5">
            <h1 className="h1-custom" tabIndex={0}>Komitmen Manajemen</h1>
          </Col>
          <Col lg={12} sm={12}>
            <p tabIndex={0}>
              LSP HCMI mempunyai berkomitmen terhadap ketidakberpihakan,
              mengelola konflik kepentingan, dan menjamin obyektivitas kegiatan
              sertifikasi profesi serta mendukung terwujudnya proses sertifikasi
              yg jujur, profesional, dan peduli pada kompetensi insani
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(CommitmentSection);
