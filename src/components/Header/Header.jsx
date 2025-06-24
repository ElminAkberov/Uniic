import React from "react";
import logo from "../../assets/logo.svg";
import white_logo from "../../assets/white_logo.svg";
import world from "../../assets/lng.svg";
import Button from "../Button/Button";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
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
    <header className="flex justify-between items-center header shadow">
      <div className="max-md:block hidden">
        <NavLink to={"/"}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="max-md:hidden block">
        <NavLink to={"/"}>
          <img src={white_logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="flex  gap-x-5 items-center">
        <div className="relative max-md:hidden w-fit">
          <div className="border border-white pl-[9px] py-1 rounded-md flex items-center gap-2  text-white relative">
            <img src={world} alt="world_Logo" />
            <select
              value={language.find((l) => l.code === i18n.language)?.id || 1}
              className="appearance-none bg-transparent pr-6 cursor-pointer outline-none sofia-pro text-white"
              onBlur={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
              onChange={handleLanguageChange}
            >
              {language.map((lang) => (
                <option
                  key={lang.id}
                  value={lang.id}
                  className={`text-black sofia-pro bg-[#EDEDED] shadow-[0px_1px_7px_1px_#00000021] outline-none max-w-[50px] text-center`}
                >
                  {lang.lng}
                </option>
              ))}
            </select>
            <FaCaretDown
              className={`pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <Button
          className={
            "w-[140px] px-[23px] py-4 rounded-full font-[500] text-black bg-[#BFD0DD]"
          }
          text={t("getStarted")}
        />
      </div>
    </header>
  );
};

export default Header;
