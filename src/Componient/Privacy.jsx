import React, { useEffect } from "react";
import { MdPrivacyTip } from "react-icons/md";
import { detectAndSetLanguage } from "../languageDetector.js";
import { useTranslation } from "react-i18next";
import { Term } from "./Term.js";

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  return (
    <Term>
      <div className="main">
        <span
          className="fisi"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <MdPrivacyTip /> {t("PrivacyAndSecurity")}
        </span>
        <h1>{t("PrivacyPolicy")}</h1>
        <p>{t("PrivacyIntro")}</p>
      </div>

      <div className="termsbody">
        <div>
          <h1>{t("Section1Title")}</h1>
          <p>{t("Section1Desc")}</p>
          <ul>
            <li>
              <strong>{t("PersonalInformation")}:</strong>{" "}
              {t("PersonalInfoDetails")}
            </li>
            <li>
              <strong>{t("FinancialInformation")}:</strong>{" "}
              {t("FinancialInfoDetails")}
            </li>
            <li>
              <strong>{t("TechnicalInformation")}:</strong>{" "}
              {t("TechnicalInfoDetails")}
            </li>
            <li>
              <strong>{t("CommunicationRecords")}:</strong>{" "}
              {t("CommunicationInfoDetails")}
            </li>
          </ul>
        </div>

        <div>
          <h1>{t("Section2Title")}</h1>
          <p>{t("Section2Desc")}</p>
          <ul>
            <li>{t("UseInfo1")}</li>
            <li>{t("UseInfo2")}</li>
            <li>{t("UseInfo3")}</li>
            <li>{t("UseInfo4")}</li>
            <li>{t("UseInfo5")}</li>
            <li>{t("UseInfo6")}</li>
          </ul>
        </div>

        <div>
          <h1>{t("Section3Title")}</h1>
          <p>{t("Section3Desc")}</p>
          <ul>
            <li>{t("ShareInfo1")}</li>
            <li>{t("ShareInfo2")}</li>
            <li>{t("ShareInfo3")}</li>
            <li>{t("ShareInfo4")}</li>
            <li>{t("ShareInfo5")}</li>
          </ul>
        </div>

        <div>
          <h1>{t("Section4Title")}</h1>
          <p>{t("Section4Desc")}</p>
          <ul>
            <li>
              <strong>{t("Encryption")}:</strong> {t("EncryptionDetails")}
            </li>
            <li>
              <strong>{t("AccessControls")}:</strong>{" "}
              {t("AccessControlDetails")}
            </li>
            <li>
              <strong>{t("Monitoring")}:</strong> {t("MonitoringDetails")}
            </li>
            <li>
              <strong>{t("Audits")}:</strong> {t("AuditDetails")}
            </li>
          </ul>
        </div>

        <div>
          <h1>{t("Section5Title")}</h1>
          <p>{t("Section5Desc")}</p>
          <ul>
            <li>{t("Rights1")}</li>
            <li>{t("Rights2")}</li>
            <li>{t("Rights3")}</li>
            <li>{t("Rights4")}</li>
            <li>{t("Rights5")}</li>
          </ul>
        </div>

        <div>
          <h1>{t("Section6Title")}</h1>
          <p>{t("Section6Desc")}</p>
          <ul>
            <li>{t("Cookies1")}</li>
            <li>{t("Cookies2")}</li>
            <li>{t("Cookies3")}</li>
            <li>{t("Cookies4")}</li>
          </ul>
        </div>

        <div>
          <h1>{t("Section7Title")}</h1>
          <p>{t("Section7Desc")}</p>
        </div>

        <div>
          <h1>{t("Section8Title")}</h1>
          <p>{t("Section8Desc")}</p>
        </div>

        <div>
          <h1>{t("Section9Title")}</h1>
          <p>{t("Section9Desc")}</p>
        </div>

        <div>
          <h1>{t("Section10Title")}</h1>
          <p>{t("Section10Desc")}</p>
        </div>

        <div className="contact">
          <span>{t("PrivacyOfficer")}</span>
          <span>{t("Email")}: info@southventcommunity.org</span>
          <span>{t("Phone")}: 1-800-BANKING</span>
          <span>
            {t("Address")}: 123 Banking Street, Financial District, New York, NY
            10001
          </span>
        </div>

        <span style={{ fontSize: "11px" }}>
          {t("LastUpdated", { date: "February 11, 2026" })}
        </span>
      </div>
    </Term>
  );
};

export default Privacy;

// <Term>
//   <div className="main">
//     <span
//       className="fisi"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "5px",
//       }}
//     >
//       <MdPrivacyTip /> Privacy & Security
//     </span>
//     <h1>Privacy Policy</h1>
//     <p>
//       Your privacy is our priority. Learn how we protect and handle your
//       personal information
//     </p>
//   </div>

//   <div className="termsbody">
//     <div>
//       <h1>1. Information We Collect</h1>
//       <p>
//         West Vent Online Bank collects information to provide better
//         services to our customers. We collect information in the following
//         ways:
//       </p>
//       <ul>
//         <li>
//           <strong>Personal Information:</strong> Name, address, phone
//           number, email address, Social Security number, and other
//           identifying information
//         </li>
//         <li>
//           <strong>Financial Information:</strong> Account balances, payment
//           history, credit information, and transaction details
//         </li>
//         <li>
//           <strong>Technical Information:</strong> IP address, browser type,
//           device information, and usage data
//         </li>
//         <li>
//           <strong>Communication Records:</strong> Records of your
//           communications with us, including phone calls and emails
//         </li>
//       </ul>
//     </div>

//     <div>
//       <h1>2. How We Use Your Information</h1>
//       <p>We use the information we collect to:</p>
//       <ul>
//         <li>Provide and maintain our banking services</li>
//         <li>Process transactions and manage your accounts</li>
//         <li>Comply with legal and regulatory requirements</li>
//         <li>Prevent fraud and enhance security</li>
//         <li>Improve our services and customer experience</li>
//         <li>Communicate with you about your accounts and services</li>
//       </ul>
//     </div>

//     <div>
//       <h1>3. Information Sharing</h1>
//       <p>
//         We do not sell, rent, or trade your personal information. We may
//         share your information only in the following circumstances:
//       </p>
//       <ul>
//         <li>With your consent or at your direction</li>
//         <li>With service providers who assist us in our operations</li>
//         <li>To comply with legal obligations or court orders</li>
//         <li>To protect our rights, property, or safety</li>
//         <li>In connection with a merger, acquisition, or sale of assets</li>
//       </ul>
//     </div>

//     <div>
//       <h1>4. Data Security</h1>
//       <p>
//         We implement robust security measures to protect your information:
//       </p>
//       <ul>
//         <li>
//           <strong>Encryption:</strong> All sensitive data is encrypted in
//           transit and at rest
//         </li>
//         <li>
//           <strong>Access Controls:</strong> Strict access controls limit who
//           can view your information
//         </li>
//         <li>
//           <strong>Monitoring:</strong> Continuous monitoring for suspicious
//           activities
//         </li>
//         <li>
//           <strong>Regular Audits:</strong> Regular security audits and
//           assessments
//         </li>
//       </ul>
//     </div>

//     <div>
//       <h1>5. Your Rights and Choices</h1>
//       <p>
//         You have the following rights regarding your personal information:
//       </p>
//       <ul>
//         <li>Access and review your personal information</li>
//         <li>Request corrections to inaccurate information</li>
//         <li>Opt out of certain communications</li>
//         <li>
//           Request deletion of your information (subject to legal
//           requirements)
//         </li>
//         <li>File a complaint with regulatory authorities</li>
//       </ul>
//     </div>

//     <div>
//       <h1>6. Cookies and Tracking Technologies</h1>
//       <p>
//         We use cookies and similar technologies to enhance your experience
//         on our website. These technologies help us:
//       </p>
//       <ul>
//         <li>Remember your preferences and settings</li>
//         <li>Analyze website traffic and usage patterns</li>
//         <li>Provide personalized content and advertisements</li>
//         <li>Improve website functionality and performance</li>
//       </ul>
//     </div>

//     <div>
//       <h1>7. Third-Party Services</h1>
//       <p>
//         Our website may contain links to third-party websites or services.
//         We are not responsible for the privacy practices of these third
//         parties. We encourage you to review their privacy policies.
//       </p>
//     </div>

//     <div>
//       <h1>8. Children's Privacy</h1>
//       <p>
//         Our services are not intended for children under 13 years of age. We
//         do not knowingly collect personal information from children under
//         13.
//       </p>
//     </div>

//     <div>
//       <h1>9. Changes to This Policy</h1>
//       <p>
//         We may update this Privacy Policy from time to time. We will notify
//         you of any material changes by posting the new policy on our website
//         and updating the "Last Updated" date.
//       </p>
//     </div>

//     <div>
//       <h1>10. Contact Us</h1>
//       <p>
//         If you have any questions about this Privacy Policy or our privacy
//         practices, please contact us:
//       </p>
//     </div>

//     <div className="contact">
//       <span>Privacy Officer</span>
//       <span>Email: info@southventcommunity.org</span>
//       <span>Phone: 1-800-BANKING</span>
//       <span>
//         Address: 123 Banking Street, Financial District, New York, NY 10001
//       </span>
//     </div>

//     <span style={{ fontSize: "11px" }}>
//       Last updated: February 11, 2026
//     </span>
//   </div>
// </Term>
