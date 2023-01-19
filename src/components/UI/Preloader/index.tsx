import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '@/assets/img/Ripple-1.3s-211px.gif';

const portalElement = document.getElementById('overlays') as HTMLElement;

const Preloader = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div id="preloader" className="preloader">
          <div id="precontent" className="preloader-content">
            <img src={Loader} alt="preloader" width="85rem" />
          </div>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Preloader;
