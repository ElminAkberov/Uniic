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
      <div className="text-[#6C6C6C] pl-[112px] max-lg:pl-[64px] text-[32px] max-lg:text-[24px] max-md:pl-[28px] pr-2">
        <div className="mx-auto rounded-lg mt-10 md:pr-20">
          <h1 className="text-xl font-bold mb-2">{t("ptitle")}</h1>
          <p className="text-sm text-gray-500 mb-6">{t("date")}</p>

          <p className="mb-4 text-[16px]">{t("intro")}</p>

          <div className="space-y-6 text-[16px]">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.acceptance.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("sections.acceptance.points", { returnObjects: true }).map(
                  (point, i) => (
                    <li key={i}>{point}</li>
                  )
                )}
              </ul>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.privacy.title")}
              </h2>

              {["collect", "usage", "sharing", "rights"].map((section) => (
                <div key={section}>
                  <h3 className="text-lg font-semibold">
                    {t(`sections.privacy.${section}.title`)}
                  </h3>
                  <ul className="list-disc pl-5 mb-4">
                    {t(`sections.privacy.${section}.items`, {
                      returnObjects: true,
                    }).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.beta.title")}
              </h2>

              {["ios", "android"].map((platform) => (
                <div key={platform}>
                  <h3 className="text-lg font-semibold">
                    {t(`sections.beta.${platform}.title`)}
                  </h3>
                  <p className="mb-2">{t(`sections.beta.${platform}.desc`)}</p>
                </div>
              ))}

              <h3 className="text-lg font-semibold">
                {t("sections.beta.limitations.title")}
              </h3>
              <ul className="list-disc pl-5">
                {t("sections.beta.limitations.items", {
                  returnObjects: true,
                }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.email.title")}
              </h2>
              <ul className="list-disc pl-5">
                {t("sections.email.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.global.title")}
              </h2>
              <p>{t("sections.global.desc")}</p>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.liability.title")}
              </h2>
              <ul className="list-disc pl-5">
                {t("sections.liability.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.ip.title")}
              </h2>
              <ul className="list-disc pl-5">
                {t("sections.ip.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.termination.title")}
              </h2>
              <ul className="list-disc pl-5">
                {t("sections.termination.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.amendments.title")}
              </h2>
              <p>{t(`sections.amendments.desc`)}</p>
            </div>

            <hr />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.contact.title")}
              </h2>
              <p>{t("sections.contact.desc")}</p>
            </div>
          </div>
        </div>
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
