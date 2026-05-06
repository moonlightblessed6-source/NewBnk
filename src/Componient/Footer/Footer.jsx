import React, { useEffect } from "react";
import { Footers } from "./Footer";
import logo from "../../assets/Logo/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  return (
    <Footers>
      <div className="main-foort">
        <div>
          <div
            className="mainlogo"
            onClick={() => (window.location.href = "/")}
          >
            <img src={logo} alt="logo" />
          </div>
          <p className="testban">{t("BuildingFinancialStrength")}</p>
          <div className="socialmidai">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <BsTwitterX />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>

        <div>
          <ul>
            <li>{t("QuickLinks")}</li>
            <li onClick={() => (window.location.href = "/about-us")}>
              {t("AboutUs")}
            </li>
            <li onClick={() => (window.location.href = "/personal")}>
              {t("Service")}
            </li>
            <li onClick={() => (window.location.href = "/grants-aids")}>
              {t("GrantsAndAids")}
            </li>
            <li onClick={() => (window.location.href = "/contact-us")}>
              {t("Contact")}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{t("Service")}</li>
            <li onClick={() => (window.location.href = "/personal")}>
              {t("PersonalBanking")}
            </li>
            <li onClick={() => (window.location.href = "/business")}>
              {t("BusinessBanking")}
            </li>
            <li onClick={() => (window.location.href = "/loan-credit")}>
              {t("LoansAndCredit")}
            </li>
            <li onClick={() => (window.location.href = "/login")}>
              {t("Cards")}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{t("MemberService")}</li>
            <li onClick={() => (window.location.href = "/login")}>
              {t("OnlineBanking")}
            </li>
            <li>{t("MobileApp")}</li>
            <li onClick={() => (window.location.href = "/find-atm")}>
              {t("ATMLocations")}
            </li>
            <li onClick={() => (window.location.href = "/login")}>
              {t("SecurityCenter")}
            </li>
          </ul>
        </div>
      </div>

      <div className="last">
        <div className="samll">
          <span>
            {t("Copyright")} 2026 {t("SouthVentCommunityCreditUnion")}.{" "}
            {t("AllRightsReserved")}
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <RiSecurePaymentFill style={{ color: "green", fontSize: "20px" }} />{" "}
            {t("FDICInsured")}
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CiLock style={{ color: "green", fontSize: "20px" }} />{" "}
            {t("SSL256Bit")}
          </span>
        </div>
        <div className="lasts">
          <span onClick={() => (window.location.href = "/privacy")}>
            {t("PrivacyPolicy")}
          </span>
          <span onClick={() => (window.location.href = "/terms-of-service")}>
            {t("TermsOfService")}
          </span>
          <span onClick={() => (window.location.href = "/contact-us")}>
            {t("Accessibility")}
          </span>
          <span onClick={() => (window.location.href = "/")}>
            {t("Sitemap")}
          </span>
        </div>
      </div>
    </Footers>
  );
};

export default Footer;

// <Footers>
//   <div className="main-foort">
//     <div>
//       <div
//         className="mainlogo"
//         onClick={() => (window.location.href = "/")}
//       >
//         <img src={logo} alt="logo" />
//       </div>
//       <p className="testban">
//         Building financial strength together with personalized banking
//         solutions for every member. Your trusted partner in financial
//         growth.
//       </p>
//       <div className="socialmidai">
//         <span>
//           <FaFacebookF />
//         </span>
//         <span>
//           <BsTwitterX />
//         </span>
//         <span>
//           <FaLinkedin />
//         </span>
//         <span>
//           <FaInstagram />
//         </span>
//       </div>
//     </div>

//     <div>
//       <ul>
//         <li>Quick Links</li>
//         <li onClick={() => (window.location.href = "/about-us")}>
//           About us
//         </li>
//         <li onClick={() => (window.location.href = "/personal")}>
//           Service
//         </li>
//         <li onClick={() => (window.location.href = "/grants-aids")}>
//           Grants and Aids
//         </li>
//         <li onClick={() => (window.location.href = "/contact-us")}>
//           Contact
//         </li>
//       </ul>
//     </div>
//     <div>
//       <ul>
//         <li>Service</li>
//         <li onClick={() => (window.location.href = "/personal")}>
//           Personal Banking
//         </li>
//         <li onClick={() => (window.location.href = "/business")}>
//           Business Banking
//         </li>
//         <li onClick={() => (window.location.href = "/loan-credit")}>
//           Loans & Credit
//         </li>
//         <li onClick={() => (window.location.href = "/login")}>Cards</li>
//       </ul>
//     </div>
//     <div>
//       <ul>
//         <li>Member Service</li>
//         <li onClick={() => (window.location.href = "/login")}>
//           Online Banking
//         </li>
//         <li>Mobile App</li>
//         <li onClick={() => (window.location.href = "/find-atm")}>
//           ATM Locations
//         </li>
//         <li onClick={() => (window.location.href = "/login")}>
//           Security Center
//         </li>
//       </ul>
//     </div>
//   </div>

//   <div className="last">
//     <div className="samll">
//       <span>
//         © 2026 SouthVent Community Credit Union. All rights reserved.
//       </span>
//       <span
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         <RiSecurePaymentFill style={{ color: "green", fontSize: "20px" }} />{" "}
//         FDIC Insured
//       </span>
//       <span
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         <CiLock style={{ color: "green", fontSize: "20px" }} /> 256-bit SSL
//       </span>
//     </div>
//     <div className="lasts">
//       <span onClick={() => (window.location.href = "/privacy")}>
//         Privacy Policy
//       </span>
//       <span onClick={() => (window.location.href = "/terms-of-service")}>
//         Terms of Service
//       </span>
//       <span onClick={() => (window.location.href = "/contact-us")}>
//         Accessibility
//       </span>
//       <span onClick={() => (window.location.href = "/")}>Sitemap</span>
//     </div>
//   </div>
// </Footers>
