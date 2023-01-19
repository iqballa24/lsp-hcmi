import React from 'react';
import { Section } from '@/components/UI';
import { Container, Row, Col } from 'react-bootstrap';
import { Table } from '@/components/UI';
import { schemeContainerProps } from '@/types';

const SchemeContainer: React.FC<schemeContainerProps> = ({
  columnTable,
  dataTable,
  title,
  desc,
  filePdf,
}) => {
  return (
    <Section className="skema-menu-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="mb-3">
            <h1 className="h1-custom mb-5" tabIndex={0}>{title}</h1>
            <p tabIndex={0}>{desc}</p>
          </Col>
          <Col lg={10} className="mb-5">
            <Table column={columnTable} data={dataTable} />
          </Col>
          <Col lg={10} className="text-center mt-5">
            <object
              data={filePdf}
              type="application/pdf"
              width="80%"
              height="500px"
            >
              <p>
                This browser does not support PDFs. Please download the PDF to
                view it
              </p>
            </object>
            <a
              href={filePdf}
              className="button button-pdf mt-5"
              download
              target="_blank"
              rel="noreferrer"
            >
              Unduh {title}
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SchemeContainer;
