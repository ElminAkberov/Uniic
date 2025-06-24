import React from "react";
import { useTranslation, Trans } from "react-i18next";
import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import { handleRedirect } from "../../utils/appRedirect";

const Features = () => {
  const { t } = useTranslation();

  const features = t("features", { returnObjects: true });

  return (
    <div className="max-md:mb-[180px]">
      <div className=" ">
        <div>
          <h2 className="text-[#141415] max-md:text-[44px] text-[64px] leading-[64px] max-md:leading-[44px] pr-[30px] pt-[120px] whitespace-pre-line   max-md:whitespace-normal">
            <Trans
              i18nKey={"problemHeading"}
              components={{ span: <span style={{ whiteSpace: "nowrap" }} /> }}
            />
          </h2>
          <p className="text-[26px] text-[#141414] leading-[30px] pt-[25px] md:pt-[30px] pb-[30px] md:pb-[20px]">
            {t("problemSub")}
          </p>
          <div className="flex gap-x-[14px] items-center">
            <img
              onClick={() => handleRedirect("android")}
              src={android}
              className="cursor-pointer"
              alt="android"
            />
            <img
              onClick={() => handleRedirect("ios")}
              src={ios}
              alt="ios"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-[52px] w-[70%] max-lg:w-[80%] max-md:w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border text-2xl border-[#CCCCCC] max-md:mr-[20px] rounded-[16px] px-[27px] py-4 mb-[5px] max-md:mb-[14px]"
            >
              <b>{feature.title} </b>
              <span className="sofia-light text-[#6C6C6C]">
                {feature.description}
              </span>
            </div>
          ))}
          <p className="sofia-light text-[#6C6C6C] text-xl max-md:mr-[20px] mt-[24px] max-md:mt-[32px]">
            <Trans
              i18nKey="rightPeople"
              components={{ bold: <b className="sofia-bold" /> }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
