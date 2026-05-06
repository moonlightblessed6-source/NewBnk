import React, { useEffect } from "react";
import { Contact } from "./Contactus";
import { FaArrowLeft } from "react-icons/fa";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Contactus = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  return (
    <Contact>
      <section className="sections">
        <div
          className="header"
          onClick={() => (window.location.href = "/profile")}
        >
          <FaArrowLeft />
          <p>{t("ContactUs")}</p>
        </div>

        <div className="healp">
          <h3>{t("GetHelpInSeconds")}</h3>
          <p>{t("CheckFAQs")}</p>
        </div>

        <div className="healp">
          <h3>{t("StillHaveQuestionChat")}</h3>
          <p>{t("ChatHours")}</p>
          <p>{t("TapGetHelpChat")}</p>
        </div>

        <div className="healp">
          <h3>{t("StillCantFindCallUs")}</h3>
          <p>{t("ContactCustomerSupport")}</p>
          {/* <p>(866) 795-7597</p> */}
          <p>{t("SupportEmail")}</p>
          <p>{t("CallHours")}</p>
        </div>

        <div className="healp">
          <h3>{t("MailUs")}</h3>
          <p>{t("CompanyName")}</p>
          <p>{t("MailAddressLine1")}</p>
          <p>{t("MailAddressLine2")}</p>
        </div>
      </section>
    </Contact>
  );
};

export default Contactus;

// <Contact>
//   <section className="sections">
//     <div
//       className="header"
//       onClick={() => (window.location.href = "/profile")}
//     >
//       <FaArrowLeft />
//       <p>Contact Us</p>
//     </div>

//     <div className="healp">
//       <h3>Get help in seconds</h3>
//       <p>Check out our FAQs.</p>
//     </div>
//     <div className="healp">
//       <h3>Still have a question? Chat with us</h3>
//       <p>5am–9pm PST, 7 days a week</p>
//       <p>Tap on Get Help from the home screen then tap Chat with Us.</p>
//     </div>
//     <div className="healp">
//       <h3>Still can't find your answer? Call us</h3>
//       <p>Contact Customer Support at</p>
//       {/* <p>(866) 795-7597</p> */}
//       <p>info@southventcommunity.org</p>
//       <p>5am–9pm PST, 7 days a week.</p>
//     </div>
//     <div className="healp">
//       <h3>Mail us</h3>
//       <p>SouthVent Community Credit Union</p>
//       <p>4495 Crossings Boulevard</p>
//       <p>Prince George, VA 23875</p>
//     </div>
//   </section>
// </Contact>
