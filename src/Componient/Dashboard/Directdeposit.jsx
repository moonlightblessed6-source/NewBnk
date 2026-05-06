import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Directdepositt } from "./Directdeposi";
import { DollarSign, Clock } from "lucide-react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoNotificationsOff } from "react-icons/io5";
import useDashboard from "./apifetch";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

<div className="feature">
  <DollarSign size={20} />
  <Clock size={20} />
  <span>Get paid up to 2 days early</span>
</div>;

const Directdeposit = () => {
  const fetchdata = useDashboard();
  const { t } = useTranslation();
  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);
  return (
    <Directdepositt>
      <section className="direct-deposit">
        <div
          className="backedheader"
          onClick={() => (window.location.href = "/profile")}
        >
          <FaArrowLeft />
          <p>{t("DirectDeposit")}</p>
        </div>

        <div className="header">
          <h2>{t("Getmorewithearlydirectdeposit")}</h2>

          <p>{t("depositDescription")}</p>
        </div>

        <div className="ul">
          <div>
            <span>
              <DollarSign />
            </span>
            <div>
              <p className="mymain">
                {t("Getyourpayupto2daysearly")}
                {/* <p className="mywrites">
                  government benefits up to 4 days early
                </p> */}
                <p className="mywrites">{t("earlyPaySubtitle")}</p>
              </p>
            </div>
          </div>
          <div>
            <span>
              <RiSecurePaymentFill />
            </span>
            <div>
              <p className="mymain">
                <strong>
                  {/* Unlock overdraft protection up to $200<sup>2</sup> */}
                  <br />
                </strong>
                <p className="mywrites">{t("overdraftSubtitle")}</p>
              </p>

              {/* <p> with opt in and eligible direct deposit</p> */}
            </div>
          </div>
          <div>
            <span>
              <IoNotificationsOff />
            </span>
            <div>
              <p className="mymain">
                <strong>{t("directDepositAlerts")}</strong>
                <p className="mywrites">{t("Messageanddataratesmayapply")}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="account">
          <p className="mainsnss">{t("directDepositInstructions")}</p>

          <div className="account-details">
            <p>
              <strong>ROUTING #:</strong> 251480576
            </p>
            <p>
              <strong>ACCOUNT #:</strong> {fetchdata?.account?.account_number}
            </p>
            <p>
              <strong>{t("ACCOUNTTYPE")}</strong> Checking
            </p>
            <p>
              <strong>{t("BANKNAMsE")}</strong> SouthVent Community Credit Union
            </p>
            <p>
              <strong>{t("BANKADDRESS")}</strong> 4495 Crossings Boulevard,
              Prince George, VA 23875
            </p>
            <p>
              <strong>{t("SWIFTBIC")}</strong>CHASUS33
            </p>
          </div>

          <div className="disclosures">
            <div>
              <p>{t("1")}</p>
              <p>
                {/* For federal government benefits, enroll by visiting{" "}
                <span>https://godirect.gov/gpw/contactAgency/</span>{" "}
                (godirect.gov in Bing) and calling the appropriate Agency
                number. Contact your relevant state paying agency to enroll in
                direct deposit for your state benefits. This app page contains a
                hyperlink to godirect.gov. . SouthVent Community Credit Union
                does not provide, and is not responsible for, the products,
                services, or overall website content available on godirect.gov.
                . The West Vent Trust Bank Privacy Policy does not apply to
                godirect.gov, and you should consult the privacy disclosures on
                godirect.gov for further information. */}
              </p>
            </div>
            <div>
              <p>{t("2")}</p>
            </div>
            <div>
              <p>
                <strong>3.</strong> {t("3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Directdepositt>
  );
};

export default Directdeposit;
