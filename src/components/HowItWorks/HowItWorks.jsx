import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Button from "../Button/Button";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = t("steps", { returnObjects: true });

  return (
    <div className=" ">
      <h2 className="text-[#141415] max-md:text-[44px] text-[64px] leading-[64px] max-md:leading-[44px] pr-[25px] pb-[53px] pt-[120px]">
        {t("title")}
      </h2>

      <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-lg:grid-cols-1 gap-[34px]">
        {steps.map(({ step, header, desc }, idx) => (
          <div
            key={idx}
            className="min-h-[420px] flex flex-col shadow-[0px_6px_16.3px_0px_#00000012] rounded-[39px] overflow-hidden"
          >
            <div
              className={`px-[41px] min-h-[220px] pt-[43px] pb-[40px] ${
                idx === 0
                  ? "bg-[#BFD0DD]"
                  : idx === 1
                  ? "bg-[#D1D3C9]"
                  : "bg-[#D6D0E2]"
              }`}
            >
              <p className="text-[#141414] mb-2 rounded-2xl py-2 px-3 border-[#141414] border w-fit">
                {step}
              </p>
              <h3 className="text-[#141415] leading-[48px] text-[40px] whitespace-pre-line ">
                {header}
              </h3>
            </div>
            <div className="text-[#9999A5] text-[24px] px-[41px] pt-[22px] bg-white flex-grow flex items-start">
              <Trans i18nKey={desc}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
