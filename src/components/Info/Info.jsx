import React from "react";
import { useTranslation, Trans } from "react-i18next";
import uniic from "../../assets/uniic.svg";
import Button from "../Button/Button";
import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import { handleRedirect } from "../../utils/appRedirect";

const Info = () => {
  const { t } = useTranslation();
  const paragraphs = t("info.paragraphs", { returnObjects: true });
  const categories = t("info.categories", { returnObjects: true });

  return (
    <div>
      <div className="flex justify-center relative">
        <img
          src={uniic}
          alt="uniic"
          className="max-md:absolute md:py-24 top-[-90px]"
        />
      </div>
      <div className="bg-black rounded-[57px]   py-[90px] pb-[50px]">
        <div className="pl-[127px] pr-[161px] max-md:px-[40px] text-white">
          <h3 className="text-[44px] leading-[44px] mb-16 ">
            {t("info.heading")}
          </h3>

          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`sofia-extralight text-2xl ${
                i === 0
                  ? "md:border max-md:border-b border-white md:rounded-[34px] md:py-[32px] md:pl-[38px] pb-5"
                  : i === 1
                  ? "py-5 md:py-[32px] md:pl-[38px] text-2xl md:border max-md:border-b border-white md:rounded-[34px] md:my-5 sofia-extralight"
                  : "md:px-[38px] md:border  border-white py-5 sofia-extralight md:rounded-[28px] md:my-5"
              }`}
            >
              <Trans
                i18nKey={`info.paragraphs.${i}`}
                components={{ bold: <b className="sofia-bold" /> }}
              />
            </p>
          ))}

          <div className="md:pt-[32px] md:border md:border-white rounded-[34px]">
            <div className="max-md:block hidden">
              {categories.map(({ title, desc }, idx) => (
                <React.Fragment key={idx}>
                  <h3 className="sofia-bold text-2xl mt-2 ">{title}</h3>
                  <p className="sofia-extralight pt-1 py-5 text-2xl">{desc}</p>
                </React.Fragment>
              ))}
            </div>

            <div className="max-md:hidden block">
              <ul className="list-disc md:px-[70px] pr-[250px] md:pb-[70px] sofia-extralight text-2xl text-white space-y-2">
                {categories.map(({ title, desc }, idx) => (
                  <li key={idx}>
                    <strong className="sofia-bold">{title}</strong> – {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[80px] max-md:px-[20px]">
          <Button
            className="bg-white rounded-full text-black py-[15px] px-[70px] max-md:w-full"
            text={t("info.buttonText")}
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-[14px] py-20 items-center max-md:hidden">
        <img
          onClick={() => handleRedirect("android")}
          src={android}
          alt="android"
          className="cursor-pointer"
        />
        <img
          onClick={() => handleRedirect("ios")}
          src={ios}
          alt="ios"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Info;
