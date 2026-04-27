"use client";

import Script from "next/script";

const FORM_ACTION =
  "https://884f618f.sibforms.com/serve/MUIFAEH3ibleK7gE7gnPymumUzUwLIxtlo5DbAv43jkJz14h61iPhzxK_9s3lgKbBGTsUno2lJEZyWNNFtSY9aT3f0GZW9L18NKaKPv3BhB0E_ABGefs2VYjBpn_SVcp0-AYOGXTkhAEUsG6eZogw68lHLW_hNG-NBV7rIQ9Y2mjO_BDTYhTh_515PUMgerbw_OcIoCUuqHHRDUv1A==";

export default function BrevoSignupForm() {
  return (
    <>
      {/* Brevo stylesheet */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />

      {/* Dark-theme overrides */}
      <style>{`
        #sib-container {
          background-color: transparent !important;
          border: 1px solid #27272a !important;
          border-radius: 12px !important;
          max-width: 100% !important;
        }
        #sib-container .sib-form-block p,
        #sib-container label.entry__label {
          color: #ffffff !important;
          font-family: inherit !important;
        }
        #sib-container .entry__specification {
          color: #71717a !important;
          font-family: inherit !important;
        }
        #sib-container input.input {
          background-color: #18181b !important;
          border: 1px solid #3f3f46 !important;
          color: #ffffff !important;
          border-radius: 8px !important;
          font-family: inherit !important;
        }
        #sib-container input.input::placeholder {
          color: #52525b !important;
        }
        #sib-container input.input:focus {
          border-color: #3b82f6 !important;
          outline: none !important;
        }
        #sib-container .sib-form-block__button {
          background-color: #2563eb !important;
          border-radius: 10px !important;
          font-family: inherit !important;
          font-weight: 600 !important;
          transition: background-color 0.2s !important;
          width: 100% !important;
          justify-content: center !important;
        }
        #sib-container .sib-form-block__button:hover {
          background-color: #3b82f6 !important;
        }
        .sib-form {
          background-color: transparent !important;
          padding: 0 !important;
        }
        #sib-form-container {
          text-align: left !important;
        }
        #error-message {
          border-radius: 8px !important;
        }
        #success-message {
          border-radius: 8px !important;
        }
      `}</style>

      <div
        className="sib-form"
        style={{ textAlign: "center", backgroundColor: "transparent" }}
      >
        <div id="sib-form-container" className="sib-form-container">
          {/* Error */}
          <div
            id="error-message"
            className="sib-form-message-panel"
            style={{
              fontSize: 16,
              textAlign: "left",
              fontFamily: "inherit",
              color: "#661d1d",
              backgroundColor: "#ffeded",
              borderRadius: 3,
              borderColor: "#ff4949",
              maxWidth: 540,
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <span className="sib-form-message-panel__inner-text">
                Pretplata nije uspjela. Pokušaj ponovo.
              </span>
            </div>
          </div>

          {/* Success */}
          <div
            id="success-message"
            className="sib-form-message-panel"
            style={{
              fontSize: 16,
              textAlign: "left",
              fontFamily: "inherit",
              color: "#085229",
              backgroundColor: "#e7faf0",
              borderRadius: 3,
              borderColor: "#13ce66",
              maxWidth: 540,
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <span className="sib-form-message-panel__inner-text">
                Uspješno! Provjeri inbox.
              </span>
            </div>
          </div>

          {/* Form */}
          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical"
            style={{ textAlign: "center", direction: "ltr", padding: "24px" }}
          >
            <form
              id="sib-form"
              method="POST"
              action={FORM_ACTION}
              data-type="subscription"
            >
              {/* Email field */}
              <div style={{ padding: "8px 0" }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          textAlign: "left",
                          display: "block",
                          marginBottom: 6,
                        }}
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        Email adresa
                      </label>
                      <div className="entry__field">
                        <input
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="tvoj@email.com"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: 14,
                        textAlign: "left",
                        fontFamily: "inherit",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: 3,
                        borderColor: "#ff4949",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div style={{ padding: "8px 0" }}>
                <div className="sib-form-block" style={{ textAlign: "left" }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      backgroundColor: "#2563eb",
                      borderRadius: 10,
                      borderWidth: 0,
                      padding: "12px 24px",
                    }}
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Preuzmi besplatno poglavlje
                  </button>
                </div>
              </div>

              {/* Honeypot + locale */}
              <input
                type="text"
                name="email_address_check"
                value=""
                className="input--hidden"
                readOnly
              />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>

      {/* Brevo config + script */}
      <Script id="brevo-form-config" strategy="lazyOnload">{`
        window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
        window.LOCALE = 'en';
        window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Unesena adresa nije ispravna.";
        window.REQUIRED_ERROR_MESSAGE = "Ovo polje je obavezno.";
        window.GENERIC_INVALID_MESSAGE = "Uneseni podatak nije ispravan.";
        window.translation = {
          common: {
            selectedList: '{quantity} list selected',
            selectedLists: '{quantity} lists selected',
            selectedOption: '{quantity} selected',
            selectedOptions: '{quantity} selected',
          }
        };
        var AUTOHIDE = Boolean(0);
      `}</Script>
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="lazyOnload"
      />
    </>
  );
}
