import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import world from "../../assets/world_black.svg";
import { FaCaretDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const language = [
    { id: 1, lng: "EN", code: "en" },
    { id: 2, lng: "PT", code: "pt" },
    { id: 3, lng: "ES", code: "es" },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const handleLanguageChange = (e) => {
    const selectedLang = language.find(
      (l) => l.id === parseInt(e.target.value)
    );
    if (selectedLang) {
      i18n.changeLanguage(selectedLang.code);
    }
  };
  return (
    <>
      <div className="flex justify-center md:justify-end md:mr-[60px] max-md:mx-[22px] mt-[110px]">
        <div className="bg-[#F2F2F2] rounded-[14px] w-[478px] px-[25px] py-[34px]">
          <h3 className="sofia-light text-[22px] mb-[33px]">
            <b className="sofia-bold">{t("questionBold")}</b> {t("question")}
          </h3>
          <div className="flex flex-col gap-y-[7px]">
            <input
              type="text"
              placeholder={t("emailPlaceholder")}
              className="placeholder:text-[#9999A5] sofia-pro bg-white rounded-[10px] pl-[20px] py-2"
            />
            <textarea
              placeholder={t("messagePlaceholder")}
              className="placeholder:text-[#9999A5] sofia-pro bg-white rounded-[10px] pl-[20px] py-2"
            />
          </div>
          <div className="flex justify-end">
            <Button
              text={t("sendButton")}
              className="bg-black rounded-[7px] text-white px-[30px] py-[10px] mt-[15px]"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden !cursor-pointer mt-10 pl-[9px] pr-1 py-1 max-md:mx-[22px] w-fit rounded-md flex gap-x-2 items-center shadow-[1px_1px_6px_0px_#00000040] relative bg-white">
        <img src={world} alt="world_Logo" />
        <select
          value={language.find((l) => l.code === i18n.language)?.id || 1}
          className="appearance-none bg-transparent pr-6 cursor-pointer outline-none sofia-pro text-black text-center"
          onBlur={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          onChange={handleLanguageChange}
        >
          {language.map((lang) => (
            <option key={lang.id} value={lang.id} className="text-black">
              {lang.lng}
            </option>
          ))}
        </select>
        <FaCaretDown
          className={`pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
            !isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className="text-[#6C6C6C] sofia-pro max-md:flex justify-center gap-x-7 md:ml-[90px] py-[35px]">
        <span className="mr-12">© {new Date().getFullYear()} Uniic</span>
        <NavLink to="/privacy-policy">{t("privacyPolicy")}</NavLink>
      </div>
    </>
  );
};

export default Footer;
