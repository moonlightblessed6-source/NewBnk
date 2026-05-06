import React, { useEffect } from "react";
import { Aboutus } from "./About";
import { CiBank } from "react-icons/ci";
import ourmission from "./../../assets/About/photo-1556742049-0cfed4f6a45d.avif";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  return (
    <Aboutus>
      <div className="mainaboutus">
        <p className="topics">
          <CiBank />
          {t("OurStory")}
        </p>
        <h1>{t("AboutSouthVent")}</h1>
        <span>{t("TrustedBankingPartner")}</span>
      </div>

      <div className="Ourmission">
        <div className="write">
          <h1>{t("OurMission")}</h1>
          <p>{t("MissionParagraph1")}</p>
          <p>{t("MissionParagraph2")}</p>
        </div>

        <div className="imge">
          <img src={ourmission} alt="ourmission" />
        </div>
      </div>

      <div className="ourvalua">
        <div className="mianvalue">
          <h1>{t("OurCoreValues")}</h1>
          <p>{t("ValuesGuideline")}</p>

          <div className="valibox">
            <div className="boxxes">
              <span className="icon">
                <RiSecurePaymentFill />
              </span>
              <h5>{t("TrustSecurity")}</h5>
              <p>{t("TrustSecurityDescription")}</p>
            </div>
            <div className="boxxes">
              <span className="ligh">
                <FaLightbulb />
              </span>
              <h5>{t("Innovation")}</h5>
              <p>{t("InnovationDescription")}</p>
            </div>
            <div className="boxxes">
              <span className="heart">
                <FaHeart />
              </span>
              <h5>{t("CustomerCare")}</h5>
              <p>{t("CustomerCareDescription")}</p>
            </div>
            <div className="boxxes">
              <span className="icon">
                <RiUserCommunityFill />
              </span>
              <h5>{t("Community")}</h5>
              <p>{t("CommunityDescription")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Journeyout">
        <h1>{t("OurJourney")}</h1>
        <p className="myp">{t("JourneySubtitle")}</p>

        <div className="ourjornrybox">
          <div className="ourbox">
            <div className="firsbox">
              <p>1985</p>
              <p>{t("Founded")}</p>
            </div>
            <div className="secodnbx">
              <p>{t("TheBeginning")}</p>
              <span>{t("BeginningDescription")}</span>
            </div>
          </div>
          <div className="ourbox1">
            <div className="secodnbx">
              <p>{t("OnlineBankingLaunch")}</p>
              <span>{t("OnlineBankingDescription")}</span>
            </div>
            <div className="firsbox2">
              <p>2005</p>
              <p>{t("DigitalEra")}</p>
            </div>
          </div>

          <div className="ourbox">
            <div className="firsbox3">
              <p>2015</p>
              <p>{t("MobileFirst")}</p>
            </div>
            <div className="secodnbx">
              <p>{t("MobileBankingRevolution")}</p>
              <span>{t("MobileBankingDescription")}</span>
            </div>
          </div>
          <div className="ourbox1">
            <div className="secodnbx">
              <p>{t("LeadingTheFuture")}</p>
              <span>{t("LeadingDescription")}</span>
            </div>
            <div className="firsbox4">
              <p>{t("Today")}</p>
              <p>{t("Innovation")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="buythnumber">
        <p>{t("ByTheNumbers")}</p>
        <span className="tops">{t("GrowthReflectsTrust")}</span>

        <div className="bythnumberbox">
          <div>
            <p>50K+</p>
            <span>{t("ActiveCustomers")}</span>
          </div>
          <div>
            <p>$2.5B</p>
            <span>{t("AssetsUnderManagement")}</span>
          </div>
          <div>
            <p>25</p>
            <span>{t("BranchLocations")}</span>
          </div>
          <div>
            <p>99.9%</p>
            <span>{t("UptimeGuarantee")}</span>
          </div>
        </div>
      </div>

      <div className="joinourfamily">
        <h1>{t("ReadyToJoinOurFamily")}</h1>
        <p>{t("JoinFamilySubtitle")}</p>
        <div className="btn">
          <button onClick={() => (window.location.href = "/open-account")}>
            <IoIosPersonAdd /> {t("OpenAccount")}
          </button>
          <button onClick={() => (window.location.href = "/contact-us")}>
            <IoMdCall /> {t("ContactUs")}
          </button>
        </div>
      </div>
    </Aboutus>
  );
};

export default About;

// <Aboutus>
//   <div className="mainaboutus">
//     <p className="topics">
//       <CiBank />
//       {t("OurStory")}
//     </p>
//     <h1>About SouthVent Community Credit Union</h1>
//     <span>
//       Trusted banking partner committed to your financial success since our
//       founding
//     </span>
//   </div>

//   <div className="Ourmission">
//     <div className="write">
//       <h1>Our Mission</h1>
//       <p>
//         At SouthVent Community Credit Union, we're dedicated to empowering
//         individuals, families, and businesses to achieve their financial
//         goals through innovative banking solutions, personalized service,
//         and unwavering commitment to excellence.
//       </p>
//       <p>
//         We believe that banking should be simple, secure, and accessible to
//         everyone, which is why we continuously invest in technology and
//         training to deliver the best possible experience for our customers.
//       </p>
//     </div>

//     <div className="imge">
//       <img src={ourmission} alt="ourmission" />
//     </div>
//   </div>

//   <div className="ourvalua">
//     <div className="mianvalue">
//       <h1>Our Core Values</h1>
//       <p>
//         These values guide everything we do and shape our commitment to our
//         customers and community
//       </p>

//       <div className="valibox">
//         <div className="boxxes">
//           <span className="icon">
//             <RiSecurePaymentFill />
//           </span>
//           <h5>Trust & Security</h5>
//           <p>
//             Your financial security is our top priority with
//             industry-leading protection measures.
//           </p>
//         </div>
//         <div className="boxxes">
//           <span className="ligh">
//             <FaLightbulb />
//           </span>
//           <h5>Innovation</h5>
//           <p>
//             We embrace cutting-edge technology to deliver modern banking
//             solutions.
//           </p>
//         </div>
//         <div className="boxxes">
//           <span className="heart">
//             <FaHeart />
//           </span>
//           <h5>Customer Care</h5>
//           <p>
//             Personalized service and support whenever you need it, however
//             you prefer.
//           </p>
//         </div>
//         <div className="boxxes">
//           <span className="icon">
//             <RiUserCommunityFill />
//           </span>
//           <h5>Community</h5>
//           <p>
//             Supporting local communities and contributing to economic
//             growth.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="Journeyout">
//     <h1>Our Journey</h1>
//     <p className="myp">
//       From humble beginnings to becoming a trusted financial institution
//     </p>

//     <div className="ourjornrybox">
//       <div className="ourbox">
//         <div className="firsbox">
//           <p>1985</p>
//           <p>Founded</p>
//         </div>
//         <div className="secodnbx">
//           <p>The Beginning</p>
//           <span>
//             SouthVent Community Credit Union was founded with a simple
//             mission: to provide honest, reliable banking services to our
//             local community.
//           </span>
//         </div>
//       </div>
//       <div className="ourbox1">
//         <div className="secodnbx">
//           <p>Online Banking Launch</p>
//           <span>
//             We embraced the digital revolution, launching our first online
//             banking platform to serve customers 24/7.
//           </span>
//         </div>
//         <div className="firsbox2">
//           <p>2005</p>
//           <p>Digital Era</p>
//         </div>
//       </div>

//       <div className="ourbox">
//         <div className="firsbox3">
//           <p>2015</p>
//           <p>Mobile First</p>
//         </div>
//         <div className="secodnbx">
//           <p>Mobile Banking Revolution</p>
//           <span>
//             Launched our award-winning mobile app, making banking accessible
//             anywhere, anytime.
//           </span>
//         </div>
//       </div>
//       <div className="ourbox1">
//         <div className="secodnbx">
//           <p>Leading the Future</p>
//           <span>
//             Continuing to innovate with AI-powered services, advanced
//             security, and sustainable banking practices.
//           </span>
//         </div>
//         <div className="firsbox4">
//           <p>Today</p>
//           <p>Innovation</p>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="buythnumber">
//     <p>By the Numbers</p>
//     <span className="tops">
//       Our growth reflects the trust our customers place in us
//     </span>

//     <div className="bythnumberbox">
//       <div>
//         <p>50K+</p>
//         <span>Active Customers</span>
//       </div>
//       <div>
//         <p>$2.5B</p>
//         <span>Assets Under Management</span>
//       </div>
//       <div>
//         <p>25</p>
//         <span>BBRANCH Locations</span>
//       </div>
//       <div>
//         <p>99.9%</p>
//         <span>Uptime Guarantee</span>
//       </div>
//     </div>
//   </div>

//   <div className="joinourfamily">
//     <h1>Ready to Join Our Family?</h1>
//     <p>
//       Experience the difference of banking with a trusted partner who puts
//       your financial success first.
//     </p>
//     <div className="btn">
//       <button onClick={() => (window.location.href = "/open-account")}>
//         <IoIosPersonAdd /> Open an Account
//       </button>
//       <button onClick={() => (window.location.href = "/contact-us")}>
//         <IoMdCall /> Contact Us
//       </button>
//     </div>
//   </div>
// </Aboutus>
