import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import parse from "html-react-parser";
import { Trans, useTranslation } from "react-i18next";
import { handleRedirect } from "../../utils/appRedirect";
const Terms = () => {
  const { t } = useTranslation();
  return (
    <div className="sofia-pro relative max-lg:mb-20">
      <h1 className="text-[#141415] pl-[112px] max-lg:pl-[64px] pt-[80px] max-md:pt-[61px] max-md:pl-[28px] leading-[64px] text-[64px] max-md:text-[44px] max-md:leading-[44px] mb-[30px]">
        <Trans i18nKey={"termsAndConditionsBr"} />
      </h1>
      <div className="text-[#6C6C6C] pl-[112px] max-lg:pl-[64px] text-[32px] max-lg:text-[24px] max-md:pl-[28px] pr-2">
        <div className="mx-auto rounded-lg mt-10 md:pr-20 ">
          <h1 className="text-xl font-bold mb-2">{t("ttitle")}</h1>
          <p className="text-sm text-gray-500 mb-6">{t("tdate")}</p>

          <p className="mb-4 text-[16px]">{t("tintro")}</p>
<hr />
          <div className="space-y-6 text-[16px]">
            <section>
              <h2 className="text-2xl font-semibold mb-2 mt-5">
                {t("tsections.eligibility.title")}
              </h2>
              <p>{t("tsections.eligibility.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.userAccounts.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("tsections.userAccounts.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.ugcPolicy.title")}
              </h2>
              <p className="mb-2">{t("tsections.ugcPolicy.description")}</p>

              <h3 className="text-lg font-semibold mb-2">
                {t("tsections.ugcPolicy.prohibitionsTitle")}
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-2">
                {t("tsections.ugcPolicy.prohibitions", {
                  returnObjects: true,
                }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="font-bold">
                {t("tsections.ugcPolicy.zeroTolerance")}
              </p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.contentModeration.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("tsections.contentModeration.items", {
                  returnObjects: true,
                }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.privacyPolicyRef.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("tsections.privacyPolicyRef.points", {
                  returnObjects: true,
                }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.intellectualProperty.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("tsections.intellectualProperty.points", {
                  returnObjects: true,
                }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.prohibitedConduct.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("tsections.prohibitedConduct.items", {
                  returnObjects: true,
                }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.termination.title")}
              </h2>
              <p>{t("tsections.termination.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.disclaimers.title")}
              </h2>
              <p>{t("tsections.disclaimers.points")}</p>
            </section>

            <hr />
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.limitationOfLiability.title")}
              </h2>
              <p>{t("tsections.limitationOfLiability.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.changesToTerms.title")}
              </h2>
              <p>{t("tsections.changesToTerms.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("tsections.contact.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("tsections.contact.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{parse(item)}</li>
                  )
                )}
              </ul>
            </section>
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

export default Terms;
