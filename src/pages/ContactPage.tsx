import React, { useState } from 'react';
import { Toast, Section } from '@/components/UI';
import { ContactLSP } from '@/constant/picture';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxgeknhjdnQ6Gb8PL1rRjBKrZC5Dp0r8_Jqr2Snb3fw2J0wD224qFCHe7jW52Hvd72C/exec';
    const form = document.forms[1];

    setIsLoading(true);

    fetch(scriptURL, {
      mode: 'no-cors',
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        setShowMessage(true);
        setMessage('Your message was delivered');
        setTimeout(() => {
          setShowMessage(false);
          (e.target as HTMLFormElement).reset();
        }, 3000);
      })
      .catch((error) => {
        setMessage('Something went wrong');
        console.error('Error!', error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Section className="contact-section">
        <div className="contact-formBx">
          <form id="contactForm" name="1" onSubmit={onSubmitHandler}>
            <h1 className="h1-custom">Get in touch</h1>
            <div className="inputBox">
              <input type="text" name="nama" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox">
              <textarea
                name="pesan"
                id=""
                cols={30}
                rows={10}
                required
              ></textarea>
              <span>Type Your Message Here...</span>
            </div>
            {isLoading ? (
              <button
                type="submit"
                className="button button-primary button-loading"
              >
                <span
                  className="spinner-border spinner-border-md"
                  role="status"
                  aria-hidden="true"
                ></span>{' '}
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="button button-primary button-kirim"
              >
                Submit
              </button>
            )}
          </form>
        </div>
        <div className="contact-imgBx">
          <img src={ContactLSP} alt="Contact" />
        </div>
      </Section>
      {showMessage && <Toast message={message} />}
    </React.Fragment>
  );
};

export default ContactPage;
