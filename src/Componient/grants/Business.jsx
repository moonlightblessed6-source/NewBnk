import React, { useEffect } from "react";
import { Grant } from "./grants.js";
import { FaHandshake, FaChartBar } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { IoIosPeople, IoMdCheckmark } from "react-icons/io";
import { VscGitStashApply } from "react-icons/vsc";
import { CiBank } from "react-icons/ci";
import { FaPiggyBank } from "react-icons/fa6";
import { detectAndSetLanguage } from "../../languageDetector.js";
import { useTranslation } from "react-i18next";

import {
  MdLaptopChromebook,
  MdAddIcCall,
  MdBusinessCenter,
  MdOutlineSecurity,
} from "react-icons/md";

const Businessbnk = () => {
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
          <MdBusinessCenter /> {t("ForBusinesses")}
        </span>
        <h1>{t("BusinessBankingSolutions")}</h1>
        <p>{t("ComprehensiveFinancialServices")}</p>
      </div>

      <div className="Available">
        <div className="headey">
          <h1>{t("BusinessBankingServices")}</h1>
          <p>{t("ExploreGrantPrograms")}</p>
        </div>

        <div className="boxs">
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
            >
              <CiBank />
            </span>
            <h4 style={{ color: "#2563eb" }}>{t("BusinessChecking")}</h4>
            <p className="thep">{t("FlexibleCheckingAccounts")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("NoMonthlyMaintenanceFees")}
              </span>
              <span>
                <IoMdCheckmark /> {t("UnlimitedTransactions")}
              </span>
              <span>
                <IoMdCheckmark /> {t("OnlineBankingIncluded")}
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
            >
              <FaPiggyBank />
            </span>
            <h4 style={{ color: "#9333ea" }}>{t("BusinessSavings")}</h4>
            <p className="thep">{t("CompetitiveInterestRates")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("HighYieldInterestRates")}
              </span>
              <span>
                <IoMdCheckmark /> {t("NoMinimumBalance")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FDICInsured")}
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
            >
              <FaHandshake />
            </span>
            <h4 style={{ color: "#16a34a" }}>{t("BusinessLoans")}</h4>
            <p className="thep">{t("FlexibleFinancingSolutions")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("CompetitiveRates")}
              </span>
              <span>
                <IoMdCheckmark /> {t("QuickApprovalProcess")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FlexibleTerms")}
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
            >
              <IoCard />
            </span>
            <h4 style={{ color: "#dc2626" }}>{t("MerchantServices")}</h4>
            <p className="thep">{t("AcceptPaymentsAnywhere")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("MultiplePaymentMethods")}
              </span>
              <span>
                <IoMdCheckmark /> {t("SecureTransactions")}
              </span>
              <span>
                <IoMdCheckmark /> {t("RealTimeReporting")}
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
            >
              <FaChartBar />
            </span>
            <h4 style={{ color: "#ea580c" }}>{t("CashManagement")}</h4>
            <p className="thep">{t("OptimizeCashFlow")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("AutomatedClearing")}
              </span>
              <span>
                <IoMdCheckmark /> {t("WireTransfers")}
              </span>
              <span>
                <IoMdCheckmark /> {t("AccountReconciliation")}
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
            >
              <IoCard />
            </span>
            <h4 style={{ color: "#0d9488" }}>{t("BusinessCreditCards")}</h4>
            <p className="thep">{t("BuildBusinessCredit")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("CashbackRewards")}
              </span>
              <span>
                <IoMdCheckmark /> {t("ExpenseTracking")}
              </span>
              <span>
                <IoMdCheckmark /> {t("EmployeeCards")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="howtoapply" id="applys">
        <div className="applys">
          <h1>{t("WhyBusinessesChooseUs")}</h1>
          <p>{t("WeUnderstandTheChallenges")}</p>
        </div>

        <div className="applyboxs">
          <div className="applybox">
            <span className="numes">
              <IoIosPeople />
            </span>
            <h4>{t("DedicatedSupport")}</h4>
            <p>{t("PersonalRelationshipManagers")}</p>
          </div>
          <div className="applybox">
            <span className="numes">
              <MdLaptopChromebook />
            </span>
            <h4>{t("DigitalBanking")}</h4>
            <p>{t("AdvancedBankingPlatforms")}</p>
          </div>

          <div className="applybox">
            <span className="numes">
              <FaChartBar />
            </span>
            <h4>{t("FinancialInsights")}</h4>
            <p>{t("DetailedReportingAndAnalytics")}</p>
          </div>
          <div className="applybox">
            <span className="numes">
              <MdOutlineSecurity />
            </span>

            <h4>{t("SecurityFirst")}</h4>
            <p>{t("EnterpriseGradeSecurity")}</p>
          </div>
        </div>
      </div>

      <div className="readytoapply">
        <h1>{t("ReadyToBankWithUs")}</h1>
        <p>{t("LetsDiscussHowWeCanSupportYourBusiness")}</p>
        <div className="div">
          <button onClick={() => (window.location.href = "/open-account")}>
            <VscGitStashApply /> {t("OpenBusinessAccount")}
          </button>
          <button onClick={() => (window.location.href = "/contact-us")}>
            <MdAddIcCall /> {t("SpeakWithAdvisor")}
          </button>
        </div>
      </div>
    </Grant>
  );
};

export default Businessbnk;

//  <Grant>
//     <div className="main">
//       <span className="fisi">
//         <MdBusinessCenter /> For Businesses
//       </span>
//       <h1>Business Banking Solutions</h1>
//       <p>
//         Comprehensive financial services designed to help your business grow
//         and thrive
//       </p>
//     </div>

//     <div className="Available">
//       <div className="headey">
//         <h1>Business Banking Services</h1>
//         <p>
//           Explore our comprehensive grant programs designed to support various
//           financial needs
//         </p>
//       </div>

//       <div className="boxs">
//         <div className="box">
//           <span
//             className="spamsss"
//             style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
//           >
//             <CiBank />
//           </span>
//           <h4 style={{ color: "#2563eb" }}>Business Checking</h4>
//           <p className="thep">
//             Flexible checking accounts with low fees and high transaction
//             limits.
//           </p>
//           <div className="goods">
//             <span>
//               <IoMdCheckmark /> No monthly maintenance fees
//             </span>
//             <span>
//               <IoMdCheckmark /> Unlimited transactions
//             </span>
//             <span>
//               <IoMdCheckmark /> Online banking included
//             </span>
//           </div>
//         </div>

//         <div className="box">
//           <span
//             className="spamsss"
//             style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
//           >
//             <FaPiggyBank />
//           </span>
//           <h4 style={{ color: "#9333ea" }}>Business Savings</h4>
//           <p className="thep">
//             Competitive interest rates to help your business funds grow.
//           </p>
//           <div className="goods">
//             <span>
//               <IoMdCheckmark /> High-yield interest rates
//             </span>
//             <span>
//               <IoMdCheckmark /> No minimum balance
//             </span>
//             <span>
//               <IoMdCheckmark /> FDIC insured
//             </span>
//           </div>
//         </div>

//         <div className="box">
//           <span
//             className="spamsss"
//             style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
//           >
//             <FaHandshake />
//           </span>
//           <h4 style={{ color: "#16a34a" }}>Business Loans</h4>
//           <p className="thep">
//             Flexible financing solutions for expansion, equipment, and working
//             capital.
//           </p>
//           <div className="goods">
//             <span>
//               <IoMdCheckmark /> Competitive rates
//             </span>
//             <span>
//               <IoMdCheckmark /> Quick approval process
//             </span>
//             <span>
//               <IoMdCheckmark /> Flexible terms
//             </span>
//           </div>
//         </div>

//         <div className="box">
//           <span
//             className="spamsss"
//             style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
//           >
//             <IoCard />
//           </span>
//           <h4 style={{ color: "#dc2626" }}>Merchant Services</h4>
//           <p className="thep">
//             Accept payments anywhere with our secure payment processing
//             solutions.
//           </p>
//           <div className="goods">
//             <span>
//               <IoMdCheckmark /> Multiple payment methods
//             </span>
//             <span>
//               <IoMdCheckmark /> Secure transactions
//             </span>
//             <span>
//               <IoMdCheckmark /> Real-time reporting
//             </span>
//           </div>
//         </div>

//         <div className="box">
//           <span
//             className="spamsss"
//             style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
//           >
//             <FaChartBar />
//           </span>
//           <h4 style={{ color: "#ea580c" }}>Cash Management</h4>
//           <p className="thep">
//             Optimize your cash flow with advanced treasury management tools.
//           </p>
//           <div className="goods">
//             <span>
//               <IoMdCheckmark /> Automated clearing
//             </span>
//             <span>
//               <IoMdCheckmark /> Wire transfers
//             </span>
//             <span>
//               <IoMdCheckmark /> Account reconciliation
//             </span>
//           </div>
//         </div>

//         <div className="box">
//           <span
//             className="spamsss"
//             style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
//           >
//             <IoCard />
//           </span>
//           <h4 style={{ color: "#0d9488" }}>Business Credit Cards</h4>
//           <p className="thep">
//             Build business credit while earning rewards on everyday purchases.
//           </p>
//           <div className="goods">
//             <span>
//               <IoMdCheckmark /> Cashback rewards
//             </span>
//             <span>
//               <IoMdCheckmark /> Expense tracking
//             </span>
//             <span>
//               <IoMdCheckmark /> Employee cards
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="howtoapply" id="applys">
//       <div className="applys">
//         <h1>Why Businesses Choose Us</h1>
//         <p>
//           We understand the unique challenges businesses face and provide
//           tailored solutions
//         </p>
//       </div>

//       <div className="applyboxs">
//         <div className="applybox">
//           <span className="numes">
//             <IoIosPeople />
//           </span>
//           <h4>Dedicated Support</h4>
//           <p>Personal relationship managers for your business</p>
//         </div>
//         <div className="applybox">
//           <span className="numes">
//             <MdLaptopChromebook />
//           </span>
//           <h4>Digital Banking</h4>
//           <p>Advanced online and mobile banking platforms s</p>
//         </div>

//         <div className="applybox">
//           <span className="numes">
//             <FaChartBar />
//           </span>
//           <h4>Financial Insights</h4>
//           <p>Detailed reporting and analytics tools</p>
//         </div>
//         <div className="applybox">
//           <span className="numes">
//             <MdOutlineSecurity />
//           </span>

//           <h4>Security First</h4>
//           <p>Enterprise-grade security for all transactions</p>
//         </div>
//       </div>
//     </div>

//     <div className="readytoapply">
//       <h1>Ready to Bank with Us?</h1>
//       <p>
//         Let's discuss how we can support your business growth and financial
//         success
//       </p>
//       <div className="div">
//         <button onClick={() => (window.location.href = "/open-account")}>
//           <VscGitStashApply /> Open Business Account
//         </button>
//         <button onClick={() => (window.location.href = "/contact-us")}>
//           <MdAddIcCall /> Speak with Advisor
//         </button>
//       </div>
//     </div>
//   </Grant>
