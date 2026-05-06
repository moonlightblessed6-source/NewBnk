import React, { useEffect } from "react";
import { Grant } from "./grants.js";
import { FaUserGraduate } from "react-icons/fa6";
import { VscGitStashApply } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import { MdAddIcCall, MdBusinessCenter, MdAddHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Loan = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  return (
    <Grant>
      <div className="main">
        <span className="fisi">
          <MdBusinessCenter /> {t("LendingSolutions")}
        </span>
        <h1>{t("LoansAndFinancing")}</h1>
        <p>{t("LoansHeroDescription")}</p>
      </div>

      <div className="Available">
        <div className="headey">
          <h1>{t("LoanOptions")}</h1>
          <p>{t("LoanOptionsDescription")}</p>
        </div>

        <div className="boxs">
          {/* Home Loans */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
            >
              <FaHome />
            </span>
            <h4 style={{ color: "#2563eb" }}>{t("HomeLoans")}</h4>
            <p className="thep">{t("HomeLoansDesc")}</p>
            <div className="goodsu">
              <div>
                <span>{t("InterestRate")}:</span>
                <span style={{ color: "#2563eb" }}>{t("HomeLoanRate")}</span>
              </div>
              <div>
                <span>{t("LoanAmount")}:</span>
                <span>{t("HomeLoanAmount")}</span>
              </div>
              <div>
                <span>{t("Term")}:</span>
                <span>{t("HomeLoanTerm")}</span>
              </div>
            </div>
            <Link style={{ color: "#2563eb" }} to="/open-account">
              {t("ApplyNow")}
            </Link>
          </div>

          {/* Auto Loans */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
            >
              <FaCarSide />
            </span>
            <h4 style={{ color: "#9333ea" }}>{t("AutoLoans")}</h4>
            <p className="thep">{t("AutoLoansDesc")}</p>
            <div className="goodsu">
              <div>
                <span>{t("InterestRate")}:</span>
                <span style={{ color: "#9333ea" }}>{t("AutoLoanRate")}</span>
              </div>
              <div>
                <span>{t("LoanAmount")}:</span>
                <span>{t("AutoLoanAmount")}</span>
              </div>
              <div>
                <span>{t("Term")}:</span>
                <span>{t("AutoLoanTerm")}</span>
              </div>
            </div>
            <Link style={{ color: "#9333ea" }} to="/open-account">
              {t("ApplyNow")}
            </Link>
          </div>

          {/* Personal Loans */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
            >
              <IoPerson />
            </span>
            <h4 style={{ color: "#16a34a" }}>{t("PersonalLoans")}</h4>
            <p className="thep">{t("PersonalLoansDesc")}</p>
            <div className="goodsu">
              <div>
                <span>{t("InterestRate")}:</span>
                <span style={{ color: "#16a34a" }}>
                  {t("PersonalLoanRate")}
                </span>
              </div>
              <div>
                <span>{t("LoanAmount")}:</span>
                <span>{t("PersonalLoanAmount")}</span>
              </div>
              <div>
                <span>{t("Term")}:</span>
                <span>{t("PersonalLoanTerm")}</span>
              </div>
            </div>
            <Link style={{ color: "#16a34a" }} to="/open-account">
              {t("ApplyNow")}
            </Link>
          </div>

          {/* Business Loans */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
            >
              <MdBusinessCenter />
            </span>
            <h4 style={{ color: "#dc2626" }}>{t("BusinessLoans")}</h4>
            <p className="thep">{t("BusinessLoansDesc")}</p>
            <div className="goodsu">
              <div>
                <span>{t("InterestRate")}:</span>
                <span style={{ color: "#dc2626" }}>
                  {t("BusinessLoanRate")}
                </span>
              </div>
              <div>
                <span>{t("LoanAmount")}:</span>
                <span>{t("BusinessLoanAmount")}</span>
              </div>
              <div>
                <span>{t("Term")}:</span>
                <span>{t("BusinessLoanTerm")}</span>
              </div>
            </div>
            <Link style={{ color: "#dc2626" }} to="/open-account">
              {t("ApplyNow")}
            </Link>
          </div>

          {/* Student Loans */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
            >
              <FaUserGraduate />
            </span>
            <h4 style={{ color: "#ea580c" }}>{t("StudentLoans")}</h4>
            <p className="thep">{t("StudentLoansDesc")}</p>
            <div className="goodsu">
              <div>
                <span>{t("InterestRate")}:</span>
                <span style={{ color: "#ea580c" }}>{t("StudentLoanRate")}</span>
              </div>
              <div>
                <span>{t("LoanAmount")}:</span>
                <span>{t("StudentLoanAmount")}</span>
              </div>
              <div>
                <span>{t("Term")}:</span>
                <span>{t("StudentLoanTerm")}</span>
              </div>
            </div>
            <Link style={{ color: "#ea580c" }} to="/open-account">
              {t("ApplyNow")}
            </Link>
          </div>

          {/* Home Equity */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
            >
              <MdAddHomeWork />
            </span>
            <h4 style={{ color: "#0d9488" }}>{t("HomeEquity")}</h4>
            <p className="thep">{t("HomeEquityDesc")}</p>
            <div className="goodsu">
              <div>
                <span>{t("InterestRate")}:</span>
                <span style={{ color: "#0d9488" }}>{t("HomeEquityRate")}</span>
              </div>
              <div>
                <span>{t("LoanAmount")}:</span>
                <span>{t("HomeEquityAmount")}</span>
              </div>
              <div>
                <span>{t("Term")}:</span>
                <span>{t("HomeEquityTerm")}</span>
              </div>
            </div>
            <Link style={{ color: "#0d9488" }} to="/open-account">
              {t("ApplyNow")}
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="howtoapply" id="applys">
        <div className="applys">
          <h1>{t("EasyApplicationProcess")}</h1>
          <p>{t("ApplicationProcessDesc")}</p>
        </div>

        <div className="applyboxs">
          <div className="applybox">
            <span className="numes">1</span>
            <h4>{t("ApplyOnline")}</h4>
            <p>{t("ApplyOnlineDesc")}</p>
          </div>

          <div className="applybox">
            <span className="numes">2</span>
            <h4>{t("QuickReview")}</h4>
            <p>{t("QuickReviewDesc")}</p>
          </div>

          <div className="applybox">
            <span className="numes">3</span>
            <h4>{t("GetApproved")}</h4>
            <p>{t("GetApprovedDesc")}</p>
          </div>

          <div className="applybox">
            <span className="numes">4</span>
            <h4>{t("ReceiveFunds")}</h4>
            <p>{t("ReceiveFundsDesc")}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="readytoapply">
        <h1>{t("ReadyToApplyLoan")}</h1>
        <p>{t("ReadyToApplyLoanDesc")}</p>
        <div className="div">
          <button onClick={() => (window.location.href = "/open-account")}>
            <VscGitStashApply /> {t("ApplyNow")}
          </button>
          <button onClick={() => (window.location.href = "/contact-us")}>
            <MdAddIcCall /> {t("SpeakWithAdvisor")}
          </button>
        </div>
      </div>
    </Grant>
  );
};

export default Loan;

// <Grant>
//   <div className="main">
//     <span className="fisi">
//       <MdBusinessCenter /> Lending Solutions
//     </span>
//     <h1>Loans & Financing</h1>
//     <p>
//       Competitive rates and flexible terms to help you achieve your
//       financial goals
//     </p>
//   </div>

//   <div className="Available">
//     <div className="headey">
//       <h1>Loan Options</h1>
//       <p>
//         Find the perfect loan solution for your personal or business needs
//       </p>
//     </div>

//     <div className="boxs">
//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
//         >
//           <FaHome />
//         </span>
//         <h4 style={{ color: "#2563eb" }}>Home Loans</h4>
//         <p className="thep">
//           Competitive mortgage rates for first-time buyers and refinancing.
//         </p>
//         <div className="goodsu">
//           <div>
//             <span>Interest Rate:</span>
//             <span style={{ color: "#2563eb" }}>From 3.25% APR</span>
//           </div>
//           <div>
//             <span>Loan Amount:</span>
//             <span>Up to $1M</span>
//           </div>
//           <div>
//             <span>Term:</span>
//             <span>15-30 years</span>
//           </div>
//         </div>
//         <Link style={{ color: "#2563eb" }} to="/open-account">
//           Apply Now
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
//         >
//           <FaCarSide />
//         </span>
//         <h4 style={{ color: "#9333ea" }}>Auto Loans</h4>
//         <p className="thep">
//           Finance your dream car with our competitive auto loan rates.
//         </p>
//         <div className="goodsu">
//           <div>
//             <span>Interest Rate:</span>
//             <span style={{ color: "#9333ea" }}>From 2.99% APR</span>
//           </div>
//           <div>
//             <span>Loan Amount:</span>
//             <span>Up to $100K</span>
//           </div>
//           <div>
//             <span>Term:</span>
//             <span>3-7 years</span>
//           </div>
//         </div>
//         <Link style={{ color: "#9333ea" }} to="/open-account">
//           Apply Now
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
//         >
//           <IoPerson />
//         </span>
//         <h4 style={{ color: "#16a34a" }}>Personal Loans</h4>
//         <p className="thep">
//           Flexible personal loans for any purpose with quick approval.
//         </p>
//         <div className="goodsu">
//           <div>
//             <span>Interest Rate:</span>
//             <span style={{ color: "#16a34a" }}>From 5.99% APR</span>
//           </div>
//           <div>
//             <span>Loan Amount:</span>
//             <span>Up to $50K</span>
//           </div>
//           <div>
//             <span>Term:</span>
//             <span>2-7 years</span>
//           </div>
//         </div>
//         <Link style={{ color: "#16a34a" }} to="/open-account">
//           Apply Now
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
//         >
//           <MdBusinessCenter />
//         </span>
//         <h4 style={{ color: "#dc2626" }}>Business Loans</h4>
//         <p className="thep">
//           Grow your business with our flexible commercial lending solutions.
//         </p>
//         <div className="goodsu">
//           <div>
//             <span>Interest Rate:</span>
//             <span style={{ color: "#dc2626" }}>From 4.25% APR</span>
//           </div>
//           <div>
//             <span>Loan Amount:</span>
//             <span>Up to $5M</span>
//           </div>
//           <div>
//             <span>Term:</span>
//             <span>1-25 years</span>
//           </div>
//         </div>
//         <Link style={{ color: "#dc2626" }} to="/open-account">
//           Apply Now
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
//         >
//           <FaUserGraduate />
//         </span>
//         <h4 style={{ color: "#ea580c" }}>Student Loans</h4>
//         <p className="thep">
//           Invest in your education with competitive student loan rates.
//         </p>
//         <div className="goodsu">
//           <div>
//             <span>Interest Rate:</span>
//             <span style={{ color: "#ea580c" }}>From 3.75% APR</span>
//           </div>
//           <div>
//             <span>Loan Amount:</span>
//             <span>Up to $200K</span>
//           </div>
//           <div>
//             <span>Term:</span>
//             <span>5-20 years</span>
//           </div>
//         </div>
//         <Link style={{ color: "#ea580c" }} to="/open-account">
//           Apply Now
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
//         >
//           <MdAddHomeWork />
//         </span>
//         <h4 style={{ color: "#0d9488" }}>Home Equity</h4>
//         <p className="thep">
//           Tap into your home's equity for major expenses or investments.
//         </p>
//         <div className="goodsu">
//           <div>
//             <span>Interest Rate:</span>
//             <span style={{ color: "#0d9488" }}>From 4.50% APR</span>
//           </div>
//           <div>
//             <span>Loan Amount:</span>
//             <span>Up to $500K</span>
//           </div>
//           <div>
//             <span>Term:</span>
//             <span>5-30 years</span>
//           </div>
//         </div>
//         <Link style={{ color: "#0d9488" }} to="/open-account">
//           Apply Now
//         </Link>
//       </div>
//     </div>
//   </div>

//   <div className="howtoapply" id="applys">
//     <div className="applys">
//       <h1>Easy Application Process</h1>
//       <p>
//         Get approved in minutes with our streamlined application process
//       </p>
//     </div>

//     <div className="applyboxs">
//       <div className="applybox">
//         <span className="numes">1</span>
//         <h4>Apply Online</h4>
//         <p>Complete our secure online application in minutes</p>
//       </div>
//       <div className="applybox">
//         <span className="numes">2</span>
//         <h4>Quick Review</h4>
//         <p>Our team reviews your application within 24 hours</p>
//       </div>

//       <div className="applybox">
//         <span className="numes">3</span>
//         <h4>Get Approved</h4>
//         <p>Receive your approval decision and loan terms</p>
//       </div>
//       <div className="applybox">
//         <span className="numes">4</span>

//         <h4>Receive Funds</h4>
//         <p>Funds deposited directly into your account</p>
//       </div>
//     </div>
//   </div>

//   <div className="readytoapply">
//     <h1>Ready to Apply for a Loan?</h1>
//     <p>
//       Get started with your loan application today and receive a decision
//       within 24 hours
//     </p>
//     <div className="div">
//       <button onClick={() => (window.location.href = "/open-account")}>
//         <VscGitStashApply /> Apply Now
//       </button>
//       <button onClick={() => (window.location.href = "/contact-us")}>
//         <MdAddIcCall /> Speak with Advisor
//       </button>
//     </div>
//   </div>
// </Grant>
