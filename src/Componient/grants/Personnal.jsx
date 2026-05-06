import React, { useEffect } from "react";
import { Grant } from "./grants.js";
import {
  FaArrowRight,
  FaCertificate,
  FaChartBar,
  FaUmbrella,
} from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { IoMdCheckmark } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import {
  FaPiggyBank,
  FaPerson,
  FaBell,
  FaMobileScreenButton,
  FaMoneyBills,
} from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLaptopChromebook } from "react-icons/md";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Personalbnk = () => {
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
          <IoMdPerson /> {t("ForIndividuals")}
        </span>
        <h1>{t("PersonalBanking")}</h1>
        <p>{t("PersonalBankingDesc")}</p>
      </div>

      <div className="Available">
        <div className="headey">
          <h1>{t("PersonalAccounts")}</h1>
          <p>{t("PersonalAccountsDesc")}</p>
        </div>

        <div className="boxs">
          {/* Checking Account */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
            >
              <CiBank />
            </span>
            <h4 style={{ color: "#2563eb" }}>{t("CheckingAccount")}</h4>
            <p className="thep">{t("CheckingAccountDesc")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("NoMonthlyFee")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FreeOnlineBanking")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FreeDebitCard")}
              </span>
              <span>
                <IoMdCheckmark /> {t("OverdraftProtection")}
              </span>
            </div>
            <Link to="/open-account" style={{ color: "#2563eb" }}>
              {t("OpenAccount")} <FaArrowRight />
            </Link>
          </div>

          {/* High Yield Savings */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
            >
              <FaPiggyBank />
            </span>
            <h4 style={{ color: "#9333ea" }}>{t("HighYieldSavings")}</h4>
            <p className="thep">{t("HighYieldSavingsDesc")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("SavingsInterestRate")}
              </span>
              <span>
                <IoMdCheckmark /> {t("NoMinimumBalance")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FDICInsured")}
              </span>
              <span>
                <IoMdCheckmark /> {t("MobileBankingAccess")}
              </span>
            </div>
            <Link to="/open-account" style={{ color: "#9333ea" }}>
              {t("OpenAccount")} <FaArrowRight />
            </Link>
          </div>

          {/* Money Market */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
            >
              <FaChartBar />
            </span>
            <h4 style={{ color: "#16a34a" }}>{t("MoneyMarket")}</h4>
            <p className="thep">{t("MoneyMarketDesc")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("MoneyMarketRate")}
              </span>
              <span>
                <IoMdCheckmark /> {t("MinimumBalance2500")}
              </span>
              <span>
                <IoMdCheckmark /> {t("LimitedCheckWriting")}
              </span>
              <span>
                <IoMdCheckmark /> {t("DebitCardIncluded")}
              </span>
            </div>
            <Link to="/open-account" style={{ color: "#16a34a" }}>
              {t("OpenAccount")} <FaArrowRight />
            </Link>
          </div>

          {/* CD */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
            >
              <FaCertificate />
            </span>
            <h4 style={{ color: "#dc2626" }}>{t("CertificateDeposit")}</h4>
            <p className="thep">{t("CertificateDepositDesc")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("CDRate")}
              </span>
              <span>
                <IoMdCheckmark /> {t("CDTerms")}
              </span>
              <span>
                <IoMdCheckmark /> {t("CDMinimumDeposit")}
              </span>
              <span>
                <IoMdCheckmark /> {t("GuaranteedReturn")}
              </span>
            </div>
            <Link to="/open-account" style={{ color: "#dc2626" }}>
              {t("OpenAccount")} <FaArrowRight />
            </Link>
          </div>

          {/* IRA */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
            >
              <FaUmbrella />
            </span>
            <h4 style={{ color: "#ea580c" }}>{t("IRAAccounts")}</h4>
            <p className="thep">{t("IRAAccountsDesc")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("TraditionalRoth")}
              </span>
              <span>
                <IoMdCheckmark /> {t("TaxAdvantages")}
              </span>
              <span>
                <IoMdCheckmark /> {t("InvestmentOptions")}
              </span>
              <span>
                <IoMdCheckmark /> {t("RetirementTools")}
              </span>
            </div>
            <Link to="/open-account" style={{ color: "#ea580c" }}>
              {t("OpenAccount")} <FaArrowRight />
            </Link>
          </div>

          {/* Youth Savings */}
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
            >
              <FaPerson />
            </span>
            <h4 style={{ color: "#0d9488" }}>{t("YouthSavings")}</h4>
            <p className="thep">{t("YouthSavingsDesc")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("AgesEligible")}
              </span>
              <span>
                <IoMdCheckmark /> {t("NoMonthlyFees")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FinancialEducation")}
              </span>
              <span>
                <IoMdCheckmark /> {t("ParentOversight")}
              </span>
            </div>
            <Link to="/open-account" style={{ color: "#0d9488" }}>
              {t("OpenAccount")} <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Digital Features */}
      <div className="howtoapply">
        <div className="applys">
          <h1>{t("DigitalBankingFeatures")}</h1>
          <p>{t("DigitalBankingFeaturesDesc")}</p>
        </div>

        <div className="applyboxs">
          <div className="applybox">
            <span className="numes">
              <FaMobileScreenButton />
            </span>
            <h4>{t("MobileBanking")}</h4>
            <p>{t("MobileBankingDesc")}</p>
          </div>

          <div className="applybox">
            <span className="numes">
              <MdLaptopChromebook />
            </span>
            <h4>{t("OnlineBanking")}</h4>
            <p>{t("OnlineBankingDesc")}</p>
          </div>

          <div className="applybox">
            <span className="numes">
              <FaBell />
            </span>
            <h4>{t("AccountAlerts")}</h4>
            <p>{t("AccountAlertsDesc")}</p>
          </div>

          <div className="applybox">
            <span className="numes">
              <FaMoneyBills />
            </span>
            <h4>{t("BillPay")}</h4>
            <p>{t("BillPayDesc")}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="readytoapply">
        <h1>{t("StartBankingJourney")}</h1>
        <p>{t("StartBankingJourneyDesc")}</p>
        <div className="div">
          <button onClick={() => (window.location.href = "/open-account")}>
            <VscGitStashApply /> {t("OpenAccount")}
          </button>
          <button onClick={() => (window.location.href = "/contact-us")}>
            <MdAddIcCall /> {t("SpeakWithAdvisor")}
          </button>
        </div>
      </div>
    </Grant>
  );
};

export default Personalbnk;

// <Grant>
//   <div className="main">
//     <span className="fisi">
//       <IoMdPerson /> For Individuals
//     </span>
//     <h1>Personal Banking</h1>
//     <p>
//       Choose from our range of personal banking accounts designed for your
//       lifestyle
//     </p>
//   </div>

//   <div className="Available">
//     <div className="headey">
//       <h1>Personal Accounts</h1>
//       <p>
//         Explore our comprehensive grant programs designed to support various
//         financial needs
//       </p>
//     </div>

//     <div className="boxs">
//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
//         >
//           <CiBank />
//         </span>
//         <h4 style={{ color: "#2563eb" }}>Checking Account</h4>
//         <p className="thep">
//           Everyday banking made easy with no monthly fees and unlimited
//           transactions.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> No monthly maintenance fee
//           </span>
//           <span>
//             <IoMdCheckmark /> Free online and mobile banking
//           </span>
//           <span>
//             <IoMdCheckmark /> Free debit card
//           </span>
//           <span>
//             <IoMdCheckmark /> Overdraft protection available
//           </span>
//         </div>

//         <Link to="/open-account" style={{ color: "#2563eb" }}>
//           Open Account
//           <FaArrowRight />
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
//         >
//           <FaPiggyBank />
//         </span>
//         <h4 style={{ color: "#9333ea" }}>High-Yield Savings</h4>
//         <p className="thep">
//           Grow your money with competitive interest rates and flexible
//           access.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> 2.50% APY interest rate
//           </span>
//           <span>
//             <IoMdCheckmark /> No minimum balance
//           </span>
//           <span>
//             <IoMdCheckmark /> FDIC insured up to $250K
//           </span>
//           <span>
//             <IoMdCheckmark /> Mobile banking access
//           </span>
//         </div>
//         <Link to="/open-account" style={{ color: "#9333ea" }}>
//           Open Account
//           <FaArrowRight />
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
//         >
//           <FaChartBar />
//         </span>
//         <h4 style={{ color: "#16a34a" }}>Money Market</h4>
//         <p className="thep">
//           Higher interest rates with check-writing privileges and debit card
//           access.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> 3.25% APY interest rate
//           </span>
//           <span>
//             <IoMdCheckmark /> $2,500 minimum balance
//           </span>
//           <span>
//             <IoMdCheckmark /> Limited check writing
//           </span>
//           <span>
//             <IoMdCheckmark /> Debit card included
//           </span>
//         </div>

//         <Link to="/open-account" style={{ color: "#16a34a" }}>
//           Open Account
//           <FaArrowRight />
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
//         >
//           <FaCertificate />
//         </span>
//         <h4 style={{ color: "#dc2626" }}>Certificate of Deposit</h4>
//         <p className="thep">
//           Lock in guaranteed returns with our competitive CD rates and
//           terms.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Up to 4.50% APY
//           </span>
//           <span>
//             <IoMdCheckmark /> Terms from 3 months to 5 years
//           </span>
//           <span>
//             <IoMdCheckmark /> $1,000 minimum deposit
//           </span>
//           <span>
//             <IoMdCheckmark /> Guaranteed rate of return
//           </span>
//         </div>
//         <Link to="/open-account" style={{ color: "#dc2626" }}>
//           Open Account
//           <FaArrowRight />
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
//         >
//           <FaUmbrella />
//         </span>
//         <h4 style={{ color: "#ea580c" }}>IRA Accounts</h4>
//         <p className="thep">
//           Plan for retirement with traditional and Roth IRA options.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Traditional and Roth options
//           </span>
//           <span>
//             <IoMdCheckmark /> Tax advantages
//           </span>
//           <span>
//             <IoMdCheckmark /> Investment options available
//           </span>
//           <span>
//             <IoMdCheckmark /> Retirement planning tools
//           </span>
//         </div>
//         <Link to="/open-account" style={{ color: "#ea580c" }}>
//           Open Account
//           <FaArrowRight />
//         </Link>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
//         >
//           <FaPerson />
//         </span>
//         <h4 style={{ color: "#0d9488" }}>Youth Savings</h4>
//         <p className="thep">
//           Help young savers build good financial habits with our youth
//           accounts.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Ages 13-17 eligible
//           </span>
//           <span>
//             <IoMdCheckmark /> No monthly fees
//           </span>
//           <span>
//             <IoMdCheckmark /> Financial education resources
//           </span>
//           <span>
//             <IoMdCheckmark /> Parent/guardian oversight
//           </span>
//         </div>

//         <Link to="/open-account" style={{ color: "#0d9488" }}>
//           Open Account
//           <FaArrowRight />
//         </Link>
//       </div>
//     </div>
//   </div>

//   <div className="howtoapply" id="applys">
//     <div className="applys">
//       <h1>Digital Banking Features</h1>
//       <p>
//         Bank anywhere, anytime with our comprehensive digital banking
//         platform
//       </p>
//     </div>

//     <div className="applyboxs">
//       <div className="applybox">
//         <span className="numes">
//           <FaMobileScreenButton />
//         </span>
//         <h4>Mobile Banking</h4>
//         <p>Full-featured mobile app for iOS and Android devices</p>
//       </div>
//       <div className="applybox">
//         <span className="numes">
//           <MdLaptopChromebook />
//         </span>
//         <h4>Online Banking</h4>
//         <p>Secure web portal for all your banking needs</p>
//       </div>

//       <div className="applybox">
//         <span className="numes">
//           <FaBell />
//         </span>
//         <h4>Account Alerts</h4>
//         <p>Real-time notifications for account activity</p>
//       </div>
//       <div className="applybox">
//         <span className="numes">
//           <FaMoneyBills />
//         </span>
//         <h4>Bill Pay</h4>
//         <p>Schedule and manage all your bill payments online</p>
//       </div>
//     </div>
//   </div>

//   <div className="readytoapply">
//     <h1>Ready to Start Your Banking Journey?</h1>
//     <p>
//       Open your personal account today and experience modern banking at its
//       best
//     </p>
//     <div className="div">
//       <button onClick={() => (window.location.href = "/open-account")}>
//         <VscGitStashApply /> Open Account
//       </button>
//       <button onClick={() => (window.location.href = "/contact-us")}>
//         <MdAddIcCall /> Speak with Advisor
//       </button>
//     </div>
//   </div>
// </Grant>
