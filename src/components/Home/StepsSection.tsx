import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '@/components/UI';

import IconUnduh from "@/assets/img/vector/icon-unduh.svg";
import IconBerkas from "@/assets/img/vector/icon-berkas.svg";
import IconDaftar from "@/assets/img/vector/icon-daftar.svg";

const StepsSection = () => {
  return (
    <Section isCenteredContent className="step-section">
      <Container>
        <Row>
          <Col lg={12} sm={12} className="mb-5">
            <h1 className="h1-custom" tabIndex={0}>3 Tahap Mudah Untuk Mendaftar</h1>
          </Col>
          <Col lg={12} sm={12}>
            <Row>
              <Col lg={4} className="step-box">
                <object
                  className="step-icon"
                  type="image/svg+xml"
                  data={IconUnduh}
                  tabIndex={-1}
                ></object>
                <h1 tabIndex={0}>Unduh Form APL 01 & APL02</h1>
                <p tabIndex={0}>
                  Unduh sesuai dengan skema
                  <br /> yang ingin di ambil
                </p>
              </Col>
              <Col lg={4} className="step-box">
                <object
                  className="step-icon"
                  type="image/svg+xml"
                  data={IconBerkas}
                  tabIndex={-1}
                ></object>
                <h1 tabIndex={0}>Melengkapi Berkas</h1>
                <p tabIndex={0}>
                  Lengkapi berkas syarat <br /> pendaftaran
                </p>
              </Col>
              <Col lg={4} className="step-box">
                <object
                  className="step-icon"
                  type="image/svg+xml"
                  data={IconDaftar}
                  tabIndex={-1}
                ></object>
                <h1 tabIndex={0}>Klik button daftar</h1>
                <p tabIndex={0}>
                  Klik button daftar yang <br /> terdapat di kanan atas
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(StepsSection);
