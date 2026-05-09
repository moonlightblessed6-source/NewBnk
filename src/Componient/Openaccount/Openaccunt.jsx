import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/logo.png";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { Craeteaccount } from "./Openaccunt";
import { CiGlobe } from "react-icons/ci";

import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

import {
  MdOutlineAccessTime,
  MdAccountCircle,
  MdContactPhone,
  MdOutlinePersonalInjury,
} from "react-icons/md";

const Openaccunt = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  const [acreateaccount, setAcreateaccount] = useState("Personal");

  const [message, setMessage] = useState(false);

  const Countries = {
    USA: "USA",
    Canada: "Canada",
    UK: "United Kingdom",
    Australia: "Australia",
    Germany: "Germany",
  };

  const currencies = ["USD", "EUR", "GBP", "CAD", "AUD"];
  const accountTypes = ["Savings", "Current", "Business", "Investment"];

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    username: "",
    email: "",
    phone: "",
    country: "",
    currency: "",
    Account_Type: "",
    pin: "",
    password: "",
    password1: "",
    agree: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // final validation
    if (!formData.first_name) return alert("Enter first_name");
    if (!formData.last_name) return alert("Enter last_name");
    if (!formData.username) return alert("Enter username");
    if (!formData.email) return alert("Enter email");
    if (!formData.phone) return alert("Enter phone");
    if (!formData.country) return alert("Enter country");
    if (!formData.currency) return alert("Enter currency");
    if (!formData.Account_Type) return alert("Enter account Type");
    if (!formData.pin) return alert("Enter pin");
    if (!formData.agree) return alert("You must agree to the terms");
    if (formData.password !== formData.password1)
      return alert("Passwords do not match");

    // Map frontend keys to Django model fields
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      middle_name: formData.middle_name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      currency: formData.currency,
      account_type: formData.Account_Type, // matches Django field
      pin: formData.pin,
      password: formData.password,
      agreed_terms: formData.agree, // matches Django field
    };

    try {
      const res = await fetch("https://geochain.app/southvent/api/save/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 5000);
      // Optional: reset form or redirect
      setFormData({
        first_name: "",
        last_name: "",
        middle_name: "",
        username: "",
        email: "",
        phone: "",
        country: "",
        currency: "",
        Account_Type: "",
        pin: "",
        password: "",
        password1: "",
        agree: false,
      });
      setAcreateaccount("Personal");
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  return (
    <Craeteaccount>
      <div className="mainlogin">
        <div className="first">
          <div className="imagspan">
            <div>
              <img src={Logo} alt={t("LogoAlt")} />
            </div>
          </div>

          <div className="heade">
            <h1>{t("JoinCreditUnion")}</h1>
            <p>{t("CreateBankingAccount")}</p>
            <span>{t("RegisterHeroDesc")}</span>
          </div>

          <div className="boxss">
            <div className="boxmaon">
              <span className="icos">
                <RiSecurePaymentLine />
              </span>
              <div className="writes">
                <p>{t("SecurePlatform")}</p>
                <span>{t("BankGradeSecurity")}</span>
              </div>
            </div>

            <div className="boxmaon">
              <span className="icos">
                <FaMoneyBillTransfer />
              </span>
              <div className="writes">
                <p>{t("FastTransfers")}</p>
                <span>{t("InstantPayments")}</span>
              </div>
            </div>

            <div className="boxmaon">
              <span className="icos">
                <MdOutlineAccessTime />
              </span>
              <div className="writes">
                <p>{t("Access247")}</p>
                <span>{t("AlwaysAvailable")}</span>
              </div>
            </div>

            <div className="boxmaon">
              <span className="icos">
                <CiGlobe />
              </span>
              <div className="writes">
                <p>{t("GlobalBanking")}</p>
                <span>{t("WorldwideAccess")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="seconds">
          <form action="" onSubmit={handleSubmit}>
            {message && (
              <p className="messageshow">{t("RegistrationSuccessMessage")}</p>
            )}

            <p>{t("CreateAccount")}</p>

            <div className="infosslide">
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
                >
                  <MdOutlinePersonalInjury />
                </span>
                <p>{t("Personal")}</p>
              </div>

              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
                >
                  <MdContactPhone />
                </span>
                <p>{t("Contact")}</p>
              </div>

              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
                >
                  <MdAccountCircle />
                </span>
                <p>{t("Account")}</p>
              </div>

              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
                >
                  <RiLockPasswordFill />
                </span>
                <p>{t("Security")}</p>
              </div>
            </div>

            {/* PERSONAL STEP */}
            {acreateaccount === "Personal" && (
              <div className="pos">
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
                  >
                    <MdOutlinePersonalInjury />
                  </span>
                  <p className="mytop">{t("PersonalInformations")}</p>
                  <span>{t("TellUsAboutYourself")}</span>
                </div>

                <div className="formespersonal">
                  <div>
                    <label htmlFor="first_name">{t("FirstName")} *</label>
                   <input
  type="text"
  name="first_name"
  id="first_name"
  value={formData.first_name}
  onChange={(e) =>
    setFormData({ ...formData, first_name: e.target.value })
  }
  placeholder={t("FirstNamePlaceholder")}
  required
/>
                  </div>

                  <div>
                    <label htmlFor="last_name">{t("LastName")} *</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      placeholder={t("LastNamePlaceholder")}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="middle_name">{t("MiddleName")}</label>
                    <input
                      type="text"
                      name="middle_name"
                      id="middle_name"
                      value={formData.middle_name}
onChange={(e) => setFormData({ ...formData, middle_name: e.target.value })}
                      placeholder={t("MiddleNamePlaceholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="username">{t("UserID")} *</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder={t("UserIDPlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div className="btn">
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Contact")}
                  >
                    {t("Next")}
                  </button>
                </div>

                <p className="alreadymemeber">
                  {t("AlreadyHaveAccount")}{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    {t("SignIn")}
                  </span>
                </p>

                <span className="reserved">{t("Copyright")}</span>
              </div>
            )}

            {/* CONTACT STEP */}
            {acreateaccount === "Contact" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
                  >
                    <MdContactPhone />
                  </span>
                  <p className="mytop">{t("ContactInformation")}</p>
                  <span>{t("HowCanWeReachYou")}</span>
                </div>

                <div className="formespersonal">
                  <div>
                   <input
  type="text"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  placeholder={t("EmailPlaceholder")}
  required
/>
                  </div>

                  <div>
                    <label>{t("PhoneNumber")} *</label>
                   <input
  type="text"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  placeholder={t("PhonePlaceholder")}
  required
/>
                  </div>

                  <div>
                    <label>{t("Country")} *</label>
                    <select
  value={formData.country}
  onChange={(e) =>
    setFormData({ ...formData, country: e.target.value })
  }
  required
>
                      <option value="country">{t("SelectCountry")}</option>
                      {Object.entries(Countries).map(([key, value]) => (
                        <option key={key} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="btn1">
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Personal")}
                  >
                    {t("Previous")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Account")}
                  >
                    {t("Next")}
                  </button>
                </div>

                <p className="alreadymemeber">
                  {t("AlreadyHaveAccount")}{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    {t("SignIn")}
                  </span>
                </p>

                <span className="reserved">{t("Copyright")}</span>
              </div>
            )}

            {/* ACCOUNT STEP */}
            {acreateaccount === "Account" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
                  >
                    <MdAccountCircle />
                  </span>
                  <p className="mytop">{t("AccountSetup")}</p>
                  <span>{t("ChoosePreferences")}</span>
                </div>

                <div className="formespersonal">
                  <div>
                    <label>{t("Currency")} *</label>
                    <select
  value={formData.currency}
  onChange={(e) =>
    setFormData({ ...formData, currency: e.target.value })
  }
  required
>
                      <option value="currency">{t("SelectCurrency")}</option>
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>{t("AccountType")} *</label>
                   <select
  value={formData.Account_Type}
  onChange={(e) =>
    setFormData({
      ...formData,
      Account_Type: e.target.value,
    })
  }
  required
>
                      <option value="Account_Type">
                        {t("SelectAccountType")}
                      </option>
                      {accountTypes.map((Account_Type) => (
                        <option key={Account_Type} value={Account_Type}>
                          {Account_Type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>{t("TransactionPIN")} *</label>
                    <input
  type="password"
  value={formData.pin}
  onChange={(e) =>
    setFormData({ ...formData, pin: e.target.value })
  }
  placeholder={t("PINPlaceholder")}
  required
/>
                  </div>
                </div>

                <div className="btn1">
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Contact")}
                  >
                    {t("Previous")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Security")}
                  >
                    {t("Next")}
                  </button>
                </div>

                <p className="alreadymemeber">
                  {t("AlreadyHaveAccount")}{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    {t("SignIn")}
                  </span>
                </p>

                <span className="reserved">{t("Copyright")}</span>
              </div>
            )}

            {/* SECURITY STEP */}
            {acreateaccount === "Security" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
                  >
                    <RiLockPasswordFill />
                  </span>
                  <p className="mytop">{t("SecuritySetup")}</p>
                  <span>{t("SecureYourAccount")}</span>
                </div>

                <div className="formespersonal">
                  <div>
                    <label>{t("Password")} *</label>
                    <input
  type="password"
  value={formData.password}
  onChange={(e) =>
    setFormData({ ...formData, password: e.target.value })
  }
  placeholder={t("Password")}
  required
/>
                  </div>

                  <div>
                    <label>{t("ConfirmPassword")} *</label>
                   <input
  type="password"
  value={formData.password1}
  onChange={(e) =>
    setFormData({ ...formData, password1: e.target.value })
  }
  placeholder={t("ConfirmPasswordPlaceholder")}
  required
/>
                  </div>
                </div>

                <div className="agreedtoterm">
                  <div>
                   <input
  type="checkbox"
  name="agree"
  id="agree"
  checked={formData.agree}
  onChange={(e) =>
    setFormData({ ...formData, agree: e.target.checked })
  }
/>
                  </div>
                  <p>
                    {t("AgreeTo")} <span>{t("TermsOfService")}</span> {t("And")}{" "}
                    <span>{t("PrivacyPolicy")}</span>
                  </p>
                </div>

                <div className="btn1">
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Account")}
                  >
                    {t("Previous")}
                  </button>
                  <button type="submit">{t("Register")}</button>
                </div>

                <p className="alreadymemeber">
                  {t("AlreadyHaveAccount")}{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    {t("SignIn")}
                  </span>
                </p>

                <span className="reserved">{t("Copyright")}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </Craeteaccount>
  );
};

export default Openaccunt;

//  <Craeteaccount>
//     <div className="mainlogin">
//       <div className="first">
//         <div className="imagspan">
//           <div>
//             <img src={Logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="heade">
//           <h1>Join SouthVent Community Credit Union</h1>
//           <p>Create Your Banking Account</p>
//           <span>
//             Start your financial journey with SouthVent Community Credit
//             Union. Secure, fast, and reliable banking at your fingertips.
//           </span>
//         </div>

//         <div className="boxss">
//           <div className="boxmaon">
//             <span className="icos">
//               <RiSecurePaymentLine />
//             </span>
//             <div className="writes">
//               <p>Secure Platform</p>
//               <span>Bank-grade security</span>
//             </div>
//           </div>
//           <div className="boxmaon">
//             <span className="icos">
//               <FaMoneyBillTransfer />
//             </span>
//             <div className="writes">
//               <p>Fast Transfers</p>
//               <span>Instant payments</span>
//             </div>
//           </div>
//           <div className="boxmaon">
//             <span className="icos">
//               <MdOutlineAccessTime />
//             </span>
//             <div className="writes">
//               <p>24/7 Access</p>
//               <span>Always available</span>
//             </div>
//           </div>
//           <div className="boxmaon">
//             <span className="icos">
//               <CiGlobe />
//             </span>
//             <div className="writes">
//               <p>Global Banking</p>
//               <span>Worldwide access</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="seconds">
//         <form action="" onSubmit={handleSubmit}>
//           {message && (
//             <p className="messageshow">
//               Your registration details have been submitted successfully and
//               are currently under review. You will be notified once your
//               account is ready to use."
//             </p>
//           )}

//           <p>Create Account</p>

//           <div className="infosslide">
//             <div className="parts">
//               <span
//                 className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
//               >
//                 <MdOutlinePersonalInjury />
//               </span>
//               <p>Personal</p>
//             </div>
//             <div className="parts">
//               <span
//                 className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
//               >
//                 <MdContactPhone />
//               </span>
//               <p>Contact</p>
//             </div>
//             <div className="parts">
//               <span
//                 className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
//               >
//                 <MdAccountCircle />
//               </span>
//               <p>Account</p>
//             </div>
//             <div className="parts">
//               <span
//                 className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
//               >
//                 <RiLockPasswordFill />
//               </span>
//               <p>Security</p>
//             </div>
//           </div>

//           {acreateaccount === "Personal" && (
//             <div className="pos">
//               <div className="persoanlinf">
//                 <span
//                   className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
//                 >
//                   <MdOutlinePersonalInjury />
//                 </span>
//                 <p className="mytop">Personal Information</p>
//                 <span>Tell us about yourself</span>
//               </div>

//               <div className="formespersonal">
//                 <div>
//                   <label htmlFor="first_name">First Name *</label>
//                   <input
//                     type="text"
//                     name="first_name"
//                     id="first_name"
//                     value={formData.first_name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, first_name: e.target.value })
//                     }
//                     placeholder="John "
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="last_name">Last Name *</label>
//                   <input
//                     type="text"
//                     name="last_name"
//                     id="last_name"
//                     value={formData.last_name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, last_name: e.target.value })
//                     }
//                     placeholder="Smith"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="last_name">Middle Name</label>
//                   <input
//                     type="text"
//                     name="middle_name"
//                     id="middle_name"
//                     value={formData.middle_name}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         middle_name: e.target.value,
//                       })
//                     }
//                     placeholder="Stone"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="Username">User ID *</label>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     value={formData.username}
//                     onChange={(e) =>
//                       setFormData({ ...formData, username: e.target.value })
//                     }
//                     placeholder="johnsmith232"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="btn">
//                 <button
//                   type="button"
//                   onClick={() => setAcreateaccount("Contact")}
//                 >
//                   Next
//                 </button>
//                 {/* <button type="button" onClick={goToContact}>Next</button> */}
//               </div>

//               <p className="alreadymemeber">
//                 Already have an account?{" "}
//                 <span onClick={() => (window.location.href = "/login")}>
//                   Sign In
//                 </span>
//               </p>
//               <span className="reserved">
//                 © 2026 SouthVent Community Credit Union. All Rights Reserved.
//               </span>
//             </div>
//           )}

//           {acreateaccount === "Contact" && (
//             <div>
//               <div className="persoanlinf">
//                 <span
//                   className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
//                 >
//                   <MdContactPhone />
//                 </span>
//                 <p className="mytop">Contact Information</p>
//                 <span>How can we reach you?</span>
//               </div>

//               <div className="formespersonal">
//                 <div>
//                   <label htmlFor="first_name">Email Address *</label>
//                   <input
//                     type="text"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     placeholder="johnsmile@example.com "
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="last_name">Phone Number *</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     placeholder="+1 (234) 567-8990 "
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="last_name">Country *</label>
//                   <select
//                     onChange={(e) =>
//                       setFormData({ ...formData, country: e.target.value })
//                     }
//                     required
//                   >
//                     <option value="country">Select country</option>
//                     {Object.entries(Countries).map(([key, value]) => (
//                       <option key={key} value={value}>
//                         {value}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="btn1">
//                 <button
//                   type="button"
//                   onClick={() => setAcreateaccount("Personal")}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setAcreateaccount("Account")}
//                 >
//                   Next
//                 </button>
//               </div>

//               <p className="alreadymemeber">
//                 Already have an account?{" "}
//                 <span onClick={() => (window.location.href = "/login")}>
//                   Sign In
//                 </span>
//               </p>
//               <span className="reserved">
//                 © 2026 SouthVent Community Credit Union. All Rights Reserved.
//               </span>
//             </div>
//           )}

//           {acreateaccount === "Account" && (
//             <div>
//               <div className="persoanlinf">
//                 <span
//                   className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
//                 >
//                   <MdAccountCircle />
//                 </span>
//                 <p className="mytop">Account Setup</p>
//                 <span>Choose your account preferences</span>
//               </div>

//               <div className="formespersonal">
//                 <div>
//                   <label htmlFor="last_name">Currency *</label>
//                   <select
//                     onChange={(e) =>
//                       setFormData({ ...formData, currency: e.target.value })
//                     }
//                     required
//                   >
//                     <option value="currency">Currency</option>
//                     {currencies.map((currency) => (
//                       <option key={currency} value={currency}>
//                         {currency}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="last_name">Account Type * *</label>
//                   <select
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         Account_Type: e.target.value,
//                       })
//                     }
//                     required
//                   >
//                     <option value="Account_Type">
//                       Select Account Type *
//                     </option>
//                     {accountTypes.map((Account_Type) => (
//                       <option key={Account_Type} value={Account_Type}>
//                         {Account_Type}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="last_name">Transaction PIN *</label>
//                   <input
//                     type="password"
//                     name="pin"
//                     id="pin"
//                     value={formData.pin}
//                     onChange={(e) =>
//                       setFormData({ ...formData, pin: e.target.value })
//                     }
//                     placeholder="Pin "
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="btn1">
//                 <button onClick={() => setAcreateaccount("Contact")}>
//                   Previous
//                 </button>
//                 <button onClick={() => setAcreateaccount("Security")}>
//                   Next
//                 </button>
//               </div>

//               <p className="alreadymemeber">
//                 Already have an account?{" "}
//                 <span onClick={() => (window.location.href = "/login")}>
//                   Sign In
//                 </span>
//               </p>
//               <span className="reserved">
//                 © 2026 SouthVent Community Credit Union. All Rights Reserved.
//               </span>
//             </div>
//           )}
//           {acreateaccount === "Security" && (
//             <div>
//               <div className="persoanlinf">
//                 <span
//                   className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
//                 >
//                   <RiLockPasswordFill />
//                 </span>
//                 <p className="mytop">Security Setup</p>
//                 <span>Secure your account</span>
//               </div>
//               <div className="formespersonal">
//                 <div>
//                   <label htmlFor="last_name">Password *</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                     placeholder="Password "
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="Confirm_Password">Confirm Password *</label>
//                   <input
//                     type="password"
//                     name="password1"
//                     id="password1"
//                     value={formData.password1}
//                     onChange={(e) =>
//                       setFormData({ ...formData, password1: e.target.value })
//                     }
//                     placeholder="Confirm your Password "
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="agreedtoterm">
//                 <div>
//                   <input
//                     type="checkbox"
//                     name="agree"
//                     id="agree"
//                     checked={formData.agree}
//                     onChange={(e) =>
//                       setFormData({ ...formData, agree: e.target.checked })
//                     }
//                   />
//                 </div>
//                 <p>
//                   I agree to the <span>Terms of Service</span> and{" "}
//                   <span>Privacy Policy</span>
//                 </p>
//               </div>

//               <div className="btn1">
//                 <button
//                   type="button"
//                   onClick={() => setAcreateaccount("Account")}
//                 >
//                   Previous
//                 </button>
//                 {/* <button onClick={() => setAcreateaccount("Security")}>Next</button> */}
//                 <button type="submit">Register</button>
//               </div>

//               <p className="alreadymemeber">
//                 Already have an account?{" "}
//                 <span onClick={() => (window.location.href = "/login")}>
//                   Sign In
//                 </span>
//               </p>
//               <span className="reserved">
//                 © 2026 SouthVent Community Credit Union. All Rights Reserved.
//               </span>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   </Craeteaccount>
