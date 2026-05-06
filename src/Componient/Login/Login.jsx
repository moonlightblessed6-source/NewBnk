import React, { useState, useEffect } from "react";
import { Logon } from "./Login";
import Logo from "../../assets/Logo/logo.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMobileScreenButton, FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoTerminal } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Overlay from "../overlay.jsx";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [step, setStep] = useState("login"); // login | verify
  const [verificationCode, setVerificationCode] = useState("");
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const Handlesumit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload =
      step === "login"
        ? { ...formData }
        : {
            username: formData.username,
            verification_code: verificationCode,
          };

    try {
      const res = await fetch("https://geochain.app/south/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setTimeout(() => {
          window.location.href = "/login";
        }, 5000);
        return;
      }

      // 🔐 Step 1 → show verification input
      if (data.step === "verify") {
        setStep("verify");
        return;
      }
      setStep(false);
      // ✅ Step 2 → login complete
      if (data.step === "done") {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);

        setMessage(true);
        setTimeout(() => {
          window.location.href = "/profile";
        }, 4000);
      }
    } catch (err) {
      setError(data.error || "Login failed");
      setTimeout(() => {
        window.location.href = "/login";
      }, 10000);
    }
  };

  const handleResendOTP = async () => {
    if (!formData.username) return;

    setResending(true);
    setResendMessage("");

    try {
      const res = await fetch("https://geochain.app/south/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: formData.username, resend: true }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResendMessage(data.detail || "Could not resend OTP");
      } else {
        setResendMessage("Code resent.");
      }
    } catch (err) {
      setResendMessage("Server error. Please try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <Logon>
      {loading && <Overlay />}

      <div className="mainlogin">
        <div className="first">
          <div className="imagspan">
            <div>
              <img src={Logo} alt={t("LogoAlt")} />
            </div>
          </div>

          <div className="heade">
            <h1>{t("WelcomeBack")}</h1>
            <p>{t("CreditUnionName")}</p>
            <span>{t("LoginHeroDesc")}</span>
          </div>

          <div className="boxss">
            <div className="boxmaon">
              <span className="icos">
                <RiSecurePaymentLine />
              </span>
              <div className="writes">
                <p>{t("BankGradeSecurity")}</p>
                <span>{t("Encryption256")}</span>
              </div>
            </div>

            <div className="boxmaon">
              <span className="icos">
                <FaMoneyBillTransfer />
              </span>
              <div className="writes">
                <p>{t("InstantTransfers")}</p>
                <span>{t("RealTimeProcessing")}</span>
              </div>
            </div>

            <div className="boxmaon">
              <span className="icos">
                <AiOutlineGlobal />
              </span>
              <div className="writes">
                <p>{t("GlobalReach")}</p>
                <span>{t("CountriesSupported")}</span>
              </div>
            </div>

            <div className="boxmaon">
              <span className="icos">
                <FaMobileScreenButton />
              </span>
              <div className="writes">
                <p>{t("MobileFirst")}</p>
                <span>{t("MobilePlatforms")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="seconds">
          <form action="" onSubmit={Handlesumit}>
            {message && <p className="success-msg">{t("LoginSuccessful")}</p>}

            {error && <p className="errormessgae">{error}</p>}

            <p className="signin">{t("SignIn")}</p>

            <span className="topis">{t("AccessAccount")}</span>

            <div className="formslogin">
              <div>
                <label htmlFor="username">{t("UserID")}</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder={t("UserID")}
                  required
                />
              </div>

              <div>
                <div className="mylabel">
                  <label htmlFor="Password">{t("Password")}</label>
                  <span>{t("ForgotPassword")}</span>
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder={t("EnterPassword")}
                  required
                />
              </div>
            </div>

            <div className="satyligin">
              <div>
                <input type="checkbox" name="checkbox" id="checkbox" />
              </div>
              <span>{t("KeepSignedIn")}</span>
            </div>

            <div className="signinp">
              <button type="submit">
                <FaSignInAlt /> {t("SignInToAccount")}
              </button>
            </div>

            <p className="neswest">{t("NewToCreditUnion")}</p>

            <div className="signins">
              <button
                type="button"
                onClick={() => (window.location.href = "/open-account")}
              >
                <IoIosPersonAdd /> {t("CreateNewAccount")}
              </button>
            </div>

            {step === "verify" && (
              <div className="otp-box">
                <div className="closes">
                  <label>{t("VerificationCode")}</label>
                  <p
                    onClick={() => {
                      setStep(false);
                      setLoading(false);
                    }}
                  >
                    <MdOutlineClose />
                  </p>
                </div>

                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder={t("Enter6DigitCode")}
                  maxLength={6}
                  required
                />

                <button type="submit" className="otp-btn">
                  {t("VerifyOTP")}
                </button>

                <div className="resend-otp">
                  <button
                    className="btns"
                    type="button"
                    onClick={handleResendOTP}
                    disabled={resending}
                  >
                    {resending ? t("Resending") : t("ResendOTP")}
                  </button>

                  {resendMessage && (
                    <p className="resend-message">{resendMessage}</p>
                  )}
                </div>
              </div>
            )}
          </form>

          <div className="last">
            <span>
              <RiSecurePaymentLine /> {t("Security")}
            </span>
            <span>
              <BiSupport /> {t("Support")}
            </span>
            <span>
              <IoTerminal /> {t("Terms")}
            </span>
          </div>

          <div className="lastlast">
            <span>{t("LoginFooterText")}</span>
          </div>
        </div>
      </div>
    </Logon>
  );
};

export default Login;

// <Logon>
//   {loading && <Overlay />}

//   <div className="mainlogin">
//     <div className="first">
//       <div className="imagspan">
//         <div>
//           <img src={Logo} alt="Logo" />
//         </div>
//       </div>
//       <div className="heade">
//         <h1>Welcome Back</h1>
//         <p>SouthVent Community Credit Union</p>
//         <span>
//           Swift and secure money transfers worldwide. Experience banking
//           reimagined.
//         </span>
//       </div>

//       <div className="boxss">
//         <div className="boxmaon">
//           <span className="icos">
//             <RiSecurePaymentLine />
//           </span>
//           <div className="writes">
//             <p>Bank-Grade Security</p>
//             <span>256-bit encryption</span>
//           </div>
//         </div>
//         <div className="boxmaon">
//           <span className="icos">
//             <FaMoneyBillTransfer />
//           </span>
//           <div className="writes">
//             <p>Instant Transfers</p>
//             <span>Real-time processing</span>
//           </div>
//         </div>
//         <div className="boxmaon">
//           <span className="icos">
//             <AiOutlineGlobal />
//           </span>
//           <div className="writes">
//             <p>Global Reach</p>
//             <span>200+ countries</span>
//           </div>
//         </div>
//         <div className="boxmaon">
//           <span className="icos">
//             <FaMobileScreenButton />
//           </span>
//           <div className="writes">
//             <p>Mobile First</p>
//             <span>iOS & Android</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="seconds">
//       <form action="" onSubmit={Handlesumit}>
//         {message && <p className="success-msg">Login Successful!</p>}
//         {error && <p className="errormessgae">{error}</p>}
//         <p className="signin">Sign In</p>
//         <span className="topis">
//           Access your SouthVent Community Credit Union account
//         </span>

//         <div className="formslogin">
//           <div>
//             <label htmlFor="username">User ID</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               value={formData.username}
//               onChange={(e) =>
//                 setFormData({ ...formData, username: e.target.value })
//               }
//               placeholder="User ID"
//               required
//             />
//           </div>
//           <div>
//             <div className="mylabel">
//               <label htmlFor="Password">Password</label>
//               <span>Forgot Password?</span>
//             </div>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//         </div>
//         <div className="satyligin">
//           <div>
//             <input type="checkbox" name="checkbox" id="checkbox" />
//           </div>
//           <span>Keep me signed in</span>
//         </div>

//         <div className="signinp">
//           <button type="submit">
//             <FaSignInAlt /> Sign In to Account
//           </button>
//         </div>
//         <p className="neswest">New to SouthVent Community Credit Union?</p>

//         <div className="signins">
//           <button
//             type="button"
//             onClick={() => (window.location.href = "/open-account")}
//           >
//             <IoIosPersonAdd /> Create New Account
//           </button>
//         </div>

//         {step === "verify" && (
//           <div className="otp-box">
//             <div className="closes">
//               <label>Verification Code</label>
//               <p
//                 onClick={() => {
//                   setStep(false);
//                   setLoading(false);
//                 }}
//               >
//                 <MdOutlineClose />
//               </p>
//             </div>

//             <input
//               type="text"
//               value={verificationCode}
//               onChange={(e) => setVerificationCode(e.target.value)}
//               placeholder="Enter 6-digit code"
//               maxLength={6}
//               required
//             />
//             <button type="submit" className="otp-btn">
//               Verify OTP
//             </button>

//             <div className="resend-otp">
//               <button
//                 className="btns"
//                 type="button"
//                 onClick={handleResendOTP}
//                 disabled={resending}
//               >
//                 {resending ? "Resending..." : "Resend OTP"}
//               </button>
//               {resendMessage && (
//                 <p className="resend-message">{resendMessage}</p>
//               )}
//             </div>
//           </div>
//         )}
//       </form>
//       <div className="last">
//         <span>
//           <RiSecurePaymentLine /> Security
//         </span>
//         <span>
//           <BiSupport /> Support
//         </span>
//         <span>
//           <IoTerminal /> Terms
//         </span>
//       </div>
//       <div className="lastlast">
//         <span>
//           By signing in, you agree to our Terms of Service and Privacy
//           Policy. Your data is protected with bank-grade security.
//         </span>
//       </div>
//     </div>
//   </div>
// </Logon>
