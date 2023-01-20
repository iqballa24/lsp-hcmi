import React from 'react';
import Container from '@/components/UI/Modal/Container';

import vector_certificate from "@/assets/img/vector/vector_certificate.svg";
import vector_education from "@/assets/img/vector/vector_education.svg";

const ModalRegister: React.FC<{ toggleRegister: () => void }> = ({
  toggleRegister,
}) => {
  return (
    <Container className="" isRegister>
      <div className="modal-content">
        <span className="close cursor" onClick={toggleRegister} aria-label="close register modal">
          &times;
        </span>
        <div className="row text-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 mb-5 sertifikasi-section">
                <img
                  className="fluid"
                  src={vector_certificate}
                  alt="Sertifikasi LSP HCMI"
                />
              </div>
              <div className="col-12">
                <a
                  href="#"
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sertifikasi
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pelatihan-section">
            <div className="row">
              <div className="col-12 mb-5">
                <img
                  className="fluid"
                  src={vector_education}
                  alt="Pelatihan LSP HCMI"
                />
              </div>
              <div className="col-12">
                <a
                  href="#"
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pelatihan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModalRegister;
