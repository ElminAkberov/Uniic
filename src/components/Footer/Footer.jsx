import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import world from "../../assets/world_black.svg";
import { FaCaretDown } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { useEmailSendMutation } from "../../features/emailSend/emailSend";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../Button/Button";

const Footer = () => {
  const [emailSend, { isLoading, error }] = useEmailSendMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMessage, setIsMessage] = React.useState(false);
  const { t, i18n } = useTranslation();
  const language = [
    { id: 1, lng: "EN", code: "en" },
    { id: 2, lng: "PT", code: "pt" },
    { id: 3, lng: "ES", code: "es" },
  ];
  const handleLanguageChange = (e) => {
    const selectedLang = language.find(
      (l) => l.id === parseInt(e.target.value)
    );
    if (selectedLang) {
      i18n.changeLanguage(selectedLang.code);
    }
  };
  const onSubmit = async (data) => {
    try {
      await emailSend(data).unwrap();
      setIsMessage(true);
      setTimeout(() => {
        setIsMessage(false);
      }, 2000);
      reset();
    } catch (err) {
      console.error("Error:", err);
    }
  };
  useEffect(() => {
    reset();
  }, [i18n.language, reset]);
  const selectedLang =
    language.find((l) => l.code === i18n.language) || language[0];
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function onSelect(lang) {
    handleLanguageChange({ target: { value: lang.id } });
    setIsOpen(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center max-lg:items-center max-[1024px]:flex-col md:justify-between mx-[114px]  max-md:mx-[22px] mt-[110px]"
      >
        <div
          className={`flex flex-col max-lg:mb-10 ${
            (pathname == "/privacy-policy" ||
              pathname == "/terms-and-conditions") &&
            "opacity-0 max-lg:hidden pointer-events-none"
          } `}
        >
          <p className="text-[32px] leading-[40px] sofia-light  pb-8">
            <Trans
              i18nKey="footerText"
              components={{ bold: <strong className="sofia-bold" /> }}
            />
          </p>
          <Button
            className={
              "px-[23px] py-4 rounded-full font-[500] text-black bg-[#BFD0DD]"
            }
            text={t("buttonText")}
          />
        </div>
        <div className="bg-[#F2F2F2] rounded-[14px]  max-w-[480px] w-full px-[25px] max-md:!mx-[22px] py-[34px] ">
          <h3 className="sofia-light text-[22px] mb-[33px]">
            <b className="sofia-bold">{t("questionBold")}</b> {t("question")}
          </h3>
          <div className="flex flex-col gap-y-[7px]">
            <div>
              <input
                {...register("senderEmail", {
                  required: t("emailRequired") || "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("invalidEmail") || "Invalid email address",
                  },
                })}
                type="email"
                placeholder={t("emailPlaceholder")}
                className="placeholder:text-[#9999A5] sofia-pro bg-white rounded-[10px] pl-[20px] py-2 w-full"
              />
              {errors.senderEmail && (
                <p className="text-red-500 text-sm ">
                  {errors.senderEmail.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("description", {
                  required: t("messageRequired"),
                  minLength: {
                    value: 5,
                    message: t("messageTooShort"),
                  },
                })}
                placeholder={t("messagePlaceholder")}
                className="placeholder:text-[#9999A5] sofia-pro bg-white rounded-[10px] pl-[20px] py-2 w-full"
              />
              {errors.description && (
                <p className="text-red-500 text-sm ">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>{" "}
          {isMessage && (
            <div className=" mt-2 rounded-lg  text-center">
              <p className="text-lg sofia-pro">{t("thanksForContact")}</p>
            </div>
          )}
          {error && (
            <div className=" mt-2 rounded-lg  text-center">
              <p className="text-lg sofia-pro">{t("errorContact")}</p>
            </div>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className=" sofia-pro cursor-pointer hover:opacity-85 active:opacity-75 duration-300 bg-black rounded-[7px] text-white px-[30px] py-[10px] mt-[15px]"
              disabled={isLoading}
            >
              {isLoading ? t("loading") : t("sendButton")}
            </button>
          </div>
        </div>
      </form>

      <div
        ref={dropdownRef}
        className="md:hidden !cursor-pointer mt-10 pl-[9px] pr-1 py-1 max-md:mx-[22px] w-fit rounded-md flex gap-x-1 items-center shadow-[1px_1px_6px_0px_#00000040] relative bg-white"
      >
        <img src={world} alt="world_Logo" />
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="sofia-pro text-black cursor-pointer select-none"
        >
          {selectedLang.lng}
        </div>
        <FaCaretDown
          className={`pointer-events-none   transform  transition-transform duration-300 ${
            !isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        {isOpen && (
          <ul className="absolute px-1 bottom-full mb-1 left-[25px] w-full max-w-[48px] bg-white rounded-md shadow-lg max-h-40 overflow-auto z-50">
            {language.map((lang, index) => (
              <li
                key={lang.id}
                onClick={() => onSelect(lang)}
                className={`px-2 py-1 text-center hover:bg-gray-100 cursor-pointer flex justify-center gap-2 sofia-pro ${
                  index !== language.length - 1
                    ? "border-b border-[#EDEDED] "
                    : ""
                }`}
              >
                {lang.lng}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="text-[#6C6C6C] sofia-pro flex max-md:flex-col items-center max-lg:justify-center lg:ml-[114px] gap-x-7 gap-y-3  py-[35px]">
        <span className="lg:mr-12">© {new Date().getFullYear()} Uniic</span>
        <div>
          <NavLink to="/privacy-policy">{t("privacyPolicy")}</NavLink>
        </div>
        <div>
          <NavLink to="/terms-and-conditions">
            {t("termsAndConditions")}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
