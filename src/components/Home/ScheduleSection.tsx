import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Section, ModalCalendar } from '@/components/UI';

import Calendar from '@/assets/img/calendar.jpg';
import data from '@/data';
import UiContext from '@/store/ui-context';

const ScheduleSection = () => {
  const UiCtx = useContext(UiContext);
  const { isShowCalendar, toggleCalendar } = UiCtx;

  return (
    <React.Fragment>
      <Section className="schedule-section">
        <Container>
          <Row>
            <Col lg={12} sm={12} className="mb-5 text-center">
              <h1 className="mb-5" tabIndex={0}>
                Jadwal Uji kompetensi
              </h1>
              <img
                className="schedule-calendar"
                src={Calendar}
                alt="jadwal uji kompetensi"
                onClick={toggleCalendar}
                style={{ cursor: 'zoom-in' }}
                loading="lazy"
                width="100%"
                height="100%"
              />
            </Col>
            <Col lg={12} sm={12} className="mb-5">
              <h1 className="mb-5" tabIndex={0}>
                Syarat Berkas Pendaftaran
              </h1>
              <ul className="list-syarat">
                {data.requirements.map((requirement) => (
                  <li key={requirement.id} className="list-item" tabIndex={0}>
                    {requirement.text}
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={12} sm={12}>
              <h1 id="apl" className="mb-5 text-center" tabIndex={0}>
                Dokumen APL 01 & APL 02
              </h1>
              <Row>
                {data.scheme.list.map((scheme) => (
                  <Col key={scheme.id} md={4} className="text-center">
                    <a
                      href="404.pdf"
                      className="button button-skema"
                      download
                      target={'_blank'}
                    >
                      {scheme.name}
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
      {isShowCalendar && (
        <ModalCalendar toggleCalendar={toggleCalendar} image={Calendar} />
      )}
    </React.Fragment>
  );
};

export default React.memo(ScheduleSection);
