import React from 'react';
import Button from '@/components/UI/Button';
import scrollToTop from '@/utils/scrollToTop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const ButtonToTop = () => {
  let prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const btnToTop = document.getElementById('goto-top');
    if (btnToTop) btnToTop.classList.remove('button');

    if (screen.width >= 1024) {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        if (btnToTop) btnToTop.style.bottom = '-100px';
      } else {
        if (btnToTop) btnToTop.style.bottom = '40px';
      }
      prevScrollpos = currentScrollPos;
    }
  });

  return (
    <Button className="" isFloat id="goto-top" ariaLabel="button-top">
      <FontAwesomeIcon
        icon={faCaretUp}
        className="my-float"
        onClick={scrollToTop}
      />
    </Button>
  );
};

export default React.memo(ButtonToTop);
