import React from "react";
import Button from "../Button/Button";
import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import main from "../../assets/main_img_max-md.svg";
import main_md from "../../assets/main-md.svg";
import { Trans, useTranslation } from "react-i18next";
import { handleRedirect } from "../../utils/appRedirect";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="max-md:block hidden">
        <div className="bg-black rounded-b-[50px] relative">
          <div className="min-h-[386px] max-md:pt-[61px] max-md:pl-7">
            <h1 className="text-[#D9D9D9] leading-[64px] max-md:text-[44px] max-md:leading-[44px] whitespace-pre-line">
              {t("betterConnections")}
            </h1>
            <div className="flex gap-x-[14px] pt-4 items-center">
              <img
                onClick={() => handleRedirect("android")}
                src={android}
                alt=""
                className="cursor-pointer"
              />
              <img
                onClick={() => handleRedirect("ios")}
                src={ios}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="absolute bottom-[-100px] right-0">
            <img src={main} alt="" />
          </div>
        </div>
        <div className="mt-[150px] pl-7 pr-9">
          <h4 className="text-[#6C6C6C] font-[900] sofia-extralight">
            <Trans i18nKey={"findingPerson"}></Trans>
          </h4>
          <p className="py-4 text-[#6C6C6C] sofia-extralight">
            {t("sucksText")}
          </p>
          <div className="text-[#6C6C6C] ">
            <div>
              <span className="sofia-extralight">{t("thereIsWay")} </span>
              <span className="!font-bold"> Uniic.</span>
            </div>
          </div>
          <Button
            text={t("testUnique")}
            className="px-[29px] mt-4 w-full py-[19px] rounded-full font-[500] text-[18px] tracking-[1.25px] text-black bg-[#BFD0DD]"
          />
        </div>
      </div>

      <div className="max-md:hidden block pl-[112px] max-lg:pl-[64px] pt-[80px]">
        <div className="flex gap-x-[112px] max-[1250px]:gap-x-[20px] items-center">
          <div className="max-[1200px]:w-1/2">
            <h1 className="text-[#141415] leading-[64px] text-[60px] whitespace-pre-line">
              {t("betterConnections")}
            </h1>
            <div className="mt-[30px] ml-[2px]">
              <h4 className="text-[#6C6C6C]  text-[28px] max-[1250px]:text-[24px] max-lg:text-[18px] font-[600] sofia-light">
                <Trans i18nKey={"findingPerson"}></Trans>
              </h4>
              <p className="py-3 text-[22px] max-[1250px]:text-[18px] max-lg:text-[16px] text-[#6C6C6C] sofia-extralight">
                {t("sucksText")}
              </p>
              <div className="text-[#6C6C6C] text-[22px] max-[1250px]:text-[18px] max-lg:text-[16px]">
                <span className="sofia-extralight"> {t("thereIsWay")} </span>
                <span className="!font-bold"> Uniic.</span>
              </div>
              <Button
                text={t("testUnique")}
                className="px-[23px] mt-4 py-[16px] rounded-full font-[500] text-[16px] tracking-[1.25px] text-black bg-[#BFD0DD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-end">
              <img
                src={main_md}
                alt=""
                className="min-[1200px]:min-w-[660px] h-auto mt-[50px]"
              />
            </div>
            <div className="flex justify-center mt-[70px] pl-20 max-[1250px]:pl-10 gap-[14px]  items-center ">
              <img
                onClick={() => handleRedirect("android")}
                src={android}
                alt=""
                className="cursor-pointer"
              />
              <img
                onClick={() => handleRedirect("ios")}
                src={ios}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
