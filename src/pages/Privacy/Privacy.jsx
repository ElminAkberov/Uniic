import React from "react";
import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import { Trans, useTranslation } from "react-i18next";
import { handleRedirect } from "../../utils/appRedirect";
const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="sofia-pro relative max-lg:mb-20">
      <h1 className="text-[#141415] pl-[112px] max-lg:pl-[64px] pt-[80px] max-md:pt-[61px] max-md:pl-[28px] leading-[64px] text-[64px] max-md:text-[44px] max-md:leading-[44px] mb-[30px]">
        <Trans i18nKey={"privacyPolicyBr"} />
      </h1>
      <div className="text-[#6C6C6C] pl-[112px] max-lg:pl-[64px] text-[32px] max-lg:text-[24px] max-md:pl-[28px] md:w-[740px] pr-2">
        <span>
          Loborti aut felis dolore ad dolore metu facilis o sunt eos cras
          reprehende mi. Semper metu illa. Adipisicin do laborum. Egesta non
          incepto in eu porro ut necessita maecena. Tempus quaerat blandi orci
          elit vero mi suspendis illa ubi esse donec. Similiqu tristiqu? Magna
          si iste at a omnis at elit aliqui.
        </span>
        <p>Eiusm sed te ad e labore ubi. Omnis et. Te’i Morbi.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center max-md:justify-center gap-[14px] mt-[100px]  max-lg:mt-[60px] pl-[112px]  max-lg:pl-[64px] max-md:pl-0 w-full absolute">
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
  );
};

export default Privacy;
