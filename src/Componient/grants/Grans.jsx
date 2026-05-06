import React, { useEffect } from "react";
import { Grant } from "./grants.js";
import {
  FaHandHoldingUsd,
  FaArrowRight,
  FaHome,
  FaHeart,
} from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { IoMdCheckmark, IoIosPeople } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { RiHealthBookFill } from "react-icons/ri";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Grants = () => {
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
          <FaHandHoldingUsd /> {t("FinancialAssistance")}
        </span>
        <h1>{t("GrantsAndFinancialAid")}</h1>
        <p>{t("SupportingYourDreams")}</p>
      </div>

      <div className="Available">
        <div className="headey">
          <h1>{t("AvailableGrantPrograms")}</h1>
          <p>{t("ExploreGrantPrograms")}</p>
        </div>

        <div className="boxs">
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
            >
              <MdBusinessCenter />
            </span>
            <h4 style={{ color: "#2563eb" }}>{t("SmallBusinessGrant")}</h4>
            <p className="thep">{t("UpToFunding")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("NoCollateralRequired")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FlexibleRepaymentTerms")}
              </span>
              <span>
                <IoMdCheckmark /> {t("BusinessMentorshipIncluded")}
              </span>
            </div>

            <a href="#applys" style={{ color: "#2563eb" }}>
              {t("LearnMore")} <FaArrowRight />
            </a>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
            >
              <GiGraduateCap />
            </span>
            <h4 style={{ color: "#9333ea" }}>{t("EducationGrant")}</h4>
            <p className="thep">{t("FinancialAssistanceForEducation")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("UpToYear")}
              </span>
              <span>
                <IoMdCheckmark /> {t("MeritBasedSelection")}
              </span>
              <span>
                <IoMdCheckmark /> {t("CareerGuidanceSupport")}
              </span>
            </div>
            <a href="#applys" style={{ color: "#9333ea" }}>
              {t("LearnMore")} <FaArrowRight />
            </a>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
            >
              <FaHome />
            </span>
            <h4 style={{ color: "#16a34a" }}>{t("HomeOwnershipGrant")}</h4>
            <p className="thep">{t("DownPaymentAssistance")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("UpToAssistance")}
              </span>
              <span>
                <IoMdCheckmark /> {t("FirstTimeBuyerPriority")}
              </span>
              <span>
                <IoMdCheckmark /> {t("HomebuyerEducation")}
              </span>
            </div>
            <a href="#applys" style={{ color: "#16a34a" }}>
              {t("LearnMore")} <FaArrowRight />
            </a>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
            >
              <FaHeart />
            </span>
            <h4 style={{ color: "#dc2626" }}>{t("EmergencyReliefGrant")}</h4>
            <p className="thep">{t("ImmediateFinancialAssistance")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("QuickApprovalProcess")}
              </span>
              <span>
                <IoMdCheckmark /> {t("UpToImmediate")}
              </span>
              <span>
                <IoMdCheckmark /> {t("ApplicationSupport")}
              </span>
            </div>
            <a href="#applys" style={{ color: "#dc2626" }}>
              {t("LearnMore")} <FaArrowRight />
            </a>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
            >
              <IoIosPeople />
            </span>
            <h4 style={{ color: "#ea580c" }}>{t("CommunityDevelopment")}</h4>
            <p className="thep">{t("SupportForCommunityProjects")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("UpToFundingCommunity")}
              </span>
              <span>
                <IoMdCheckmark /> {t("CommunityImpactFocus")}
              </span>
              <span>
                <IoMdCheckmark /> {t("OngoingProjectSupport")}
              </span>
            </div>
            <a href="#applys" style={{ color: "#ea580c" }}>
              {t("LearnMore")} <FaArrowRight />
            </a>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
            >
              <RiHealthBookFill />
            </span>
            <h4 style={{ color: "#0d9488" }}>{t("HealthcareGrant")}</h4>
            <p className="thep">{t("MedicalExpenseAssistance")}</p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> {t("MedicalBillAssistance")}
              </span>
              <span>
                <IoMdCheckmark /> {t("PrescriptionDrugSupport")}
              </span>
              <span>
                <IoMdCheckmark /> {t("HealthInsuranceHelp")}
              </span>
            </div>
            <a href="#applys" style={{ color: "#0d9488" }}>
              {t("LearnMore")} <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      <div className="howtoapply" id="applys">
        <div className="applys">
          <h1>{t("HowToApply")}</h1>
          <p>{t("SimpleStepsToGetAssistance")}</p>
        </div>

        <div className="applyboxs">
          <div className="applybox">
            <span className="numes">1</span>
            <h4>{t("ChooseProgram")}</h4>
            <p>{t("SelectGrantProgram")}</p>
          </div>
          <div className="applybox">
            <span className="numes">2</span>
            <h4>{t("SubmitApplication")}</h4>
            <p>{t("CompleteApplication")}</p>
          </div>

          <div className="applybox">
            <span className="numes">3</span>
            <h4>{t("ReviewProcess")}</h4>
            <p>{t("ApplicationReview")}</p>
          </div>

          <div className="applybox">
            <span className="numes">4</span>
            <h4>{t("ReceiveFunding")}</h4>
            <p>{t("ApprovedGrantsDisbursed")}</p>
          </div>
        </div>
      </div>

      <div className="readytoapply">
        <h1>{t("ReadyToApplyForGrant")}</h1>
        <p>{t("FirstStepTowardsGoals")}</p>
        <div className="div">
          <button onClick={() => (window.location.href = "/open-account")}>
            <VscGitStashApply /> {t("StartApplication")}
          </button>
          <button onClick={() => (window.location.href = "/contact-us")}>
            <MdAddIcCall /> {t("SpeakWithAdvisor")}
          </button>
        </div>
      </div>
    </Grant>
  );
};

export default Grants;

// <Grant>
//   <div className="main">
//     <span className="fisi">
//       <FaHandHoldingUsd /> Financial Assistance
//     </span>
//     <h1>Grants & Financial Aid</h1>
//     <p>
//       Supporting your dreams with accessible funding opportunities and
//       financial assistance programs
//     </p>
//   </div>

//   <div className="Available">
//     <div className="headey">
//       <h1>Available Grant Programs</h1>
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
//           <MdBusinessCenter />
//         </span>
//         <h4 style={{ color: "#2563eb" }}>Small Business Grant</h4>
//         <p className="thep">
//           Up to $50,000 in funding for small business startups and expansion
//           projects.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> No collateral required
//           </span>
//           <span>
//             <IoMdCheckmark /> Flexible repayment terms
//           </span>
//           <span>
//             <IoMdCheckmark /> Business mentorship included
//           </span>
//         </div>

//         <a href="#applys" style={{ color: "#2563eb" }}>
//           Learn More <FaArrowRight />
//         </a>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
//         >
//           <GiGraduateCap />
//         </span>
//         <h4 style={{ color: "#9333ea" }}>Education Grant</h4>
//         <p className="thep">
//           Financial assistance for higher education, vocational training,
//           and skill development.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Up to $25,000 per year
//           </span>
//           <span>
//             <IoMdCheckmark /> Merit-based selection
//           </span>
//           <span>
//             <IoMdCheckmark /> Career guidance support
//           </span>
//         </div>
//         <a href="#applys" style={{ color: "#9333ea" }}>
//           Learn More <FaArrowRight />
//         </a>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
//         >
//           <FaHome />
//         </span>
//         <h4 style={{ color: "#16a34a" }}>Home Ownership Grant</h4>
//         <p className="thep">
//           Down payment assistance and closing cost support for first-time
//           homebuyers.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Up to $15,000 assistance
//           </span>
//           <span>
//             <IoMdCheckmark /> First-time buyer priority
//           </span>
//           <span>
//             <IoMdCheckmark /> Homebuyer education
//           </span>
//         </div>
//         <a href="#applys" style={{ color: "#16a34a" }}>
//           Learn More <FaArrowRight />
//         </a>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
//         >
//           <FaHeart />
//         </span>
//         <h4 style={{ color: "#dc2626" }}>Emergency Relief Grant</h4>
//         <p className="thep">
//           Immediate financial assistance for unexpected emergencies and
//           hardships.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Quick approval process
//           </span>
//           <span>
//             <IoMdCheckmark /> Up to $10,000 immediate
//           </span>
//           <span>
//             <IoMdCheckmark /> 24/7 application support
//           </span>
//         </div>
//         <a href="#applys" style={{ color: "#dc2626" }}>
//           Learn More <FaArrowRight />
//         </a>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
//         >
//           <IoIosPeople />
//         </span>
//         <h4 style={{ color: "#ea580c" }}>Community Development</h4>
//         <p className="thep">
//           Support for community projects, non-profits, and local development
//           initiatives.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Up to $100,000 funding
//           </span>
//           <span>
//             <IoMdCheckmark /> Community impact focus
//           </span>
//           <span>
//             <IoMdCheckmark /> Ongoing project support
//           </span>
//         </div>
//         <a href="#applys" style={{ color: "#ea580c" }}>
//           Learn More <FaArrowRight />
//         </a>
//       </div>

//       <div className="box">
//         <span
//           className="spamsss"
//           style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
//         >
//           <RiHealthBookFill />
//         </span>
//         <h4 style={{ color: "#0d9488" }}>Healthcare Grant</h4>
//         <p className="thep">
//           Medical expense assistance and healthcare accessibility support
//           programs.
//         </p>
//         <div className="goods">
//           <span>
//             <IoMdCheckmark /> Medical bill assistance
//           </span>
//           <span>
//             <IoMdCheckmark /> Prescription drug support
//           </span>
//           <span>
//             <IoMdCheckmark /> Health insurance help
//           </span>
//         </div>
//         <a href="#applys" style={{ color: "#0d9488" }}>
//           Learn More <FaArrowRight />
//         </a>
//       </div>
//     </div>
//   </div>

//   <div className="howtoapply" id="applys">
//     <div className="applys">
//       <h1>How to Apply</h1>
//       <p>Simple steps to get the financial assistance you need</p>
//     </div>

//     <div className="applyboxs">
//       <div className="applybox">
//         <span className="numes">1</span>
//         <h4>Choose Program</h4>
//         <p>Select the grant program that best fits your needs</p>
//       </div>
//       <div className="applybox">
//         <span className="numes">2</span>
//         <h4>Submit Application</h4>
//         <p>Complete our online application with required documents</p>
//       </div>

//       <div className="applybox">
//         <span className="numes">3</span>
//         <h4>Review Process</h4>
//         <p>Our team reviews your application within 5-7 business days</p>
//       </div>

//       <div className="applybox">
//         <span className="numes">4</span>
//         <h4>Receive Funding</h4>
//         <p>Approved grants are disbursed directly to your account</p>
//       </div>
//     </div>
//   </div>

//   <div className="readytoapply">
//     <h1>Ready to Apply for a Grant?</h1>
//     <p>
//       Take the first step towards achieving your financial goals with our
//       grant programs
//     </p>
//     <div className="div">
//       <button onClick={() => (window.location.href = "/open-account")}>
//         <VscGitStashApply /> Start Application
//       </button>
//       <button onClick={() => (window.location.href = "/contact-us")}>
//         <MdAddIcCall /> Speak with Advisor
//       </button>
//     </div>
//   </div>
// </Grant>
