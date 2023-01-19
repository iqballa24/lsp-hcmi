import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Section, ModalImage } from '@/components/UI';

import { StructureLSP } from '@/constant/picture';
import UiContext from '@/store/ui-context';

const StructureSection = () => {
  const uiCtx = useContext(UiContext);
  const { isShowStructure, toggleStructure } = uiCtx;

  return (
    <React.Fragment>
      <Section className="structure-section text-center">
        <Container>
          <Row>
            <Col lg={12} className="mb-5">
              <h1>Struktur Organisasi</h1>
            </Col>
            <Col>
              <img
                className="fluid"
                src={StructureLSP}
                alt="structure section"
                onClick={toggleStructure}
                style={{ cursor: 'zoom-in' }}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      {isShowStructure && (
        <ModalImage
          altText="Organizational structure"
          image={StructureLSP}
          toggleModal={toggleStructure}
        />
      )}
    </React.Fragment>
  );
};

export default React.memo(StructureSection);
