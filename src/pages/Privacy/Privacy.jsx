import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import parse from "html-react-parser";
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
          <hr />
          <div className="space-y-6 text-[16px]">
            <section>
              <h2 className="text-2xl font-semibold mb-2 mt-5">
                {t("sections.acceptance.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <Trans
                    i18nKey="sections.acceptance.points"
                    components={{ b: <b className="font-extrabold" /> }}
                  />
                </li>
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.privacy.title")}
              </h2>
              <p className="mb-2">{t("sections.privacy.collect.info")}</p>

              {["collect", "usage", "sharing"].map((key) => (
                <div key={key}>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`sections.privacy.${key}.title`)}
                  </h3>
                  <ul className="list-disc pl-5 mb-4">
                    {t(`sections.privacy.${key}.items`, {
                      returnObjects: true,
                    }).map((item, idx) => (
                      <li key={idx}>
                        <Trans
                          i18nKey={`sections.privacy.${key}.items.${idx}`}
                          components={{
                            b: <b className="font-bold" />,
                            a: <a className="text-blue-500" />,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.rights.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("sections.rights.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.sharing.title")}
              </h2>
              <p className="mb-2">{t("sections.sharing.desc")}</p>
              <ul className="list-disc pl-5 space-y-2">
                {t("sections.sharing.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>
                      <Trans
                        i18nKey={`sections.sharing.items.${i}`}
                        components={{ b: <b className="font-bold" /> }}
                      />
                    </li>
                  )
                )}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.userRights.title")}
              </h2>
              <p className="mb-2">{t("sections.userRights.desc")}</p>
              <ul className="list-disc pl-5 space-y-2">
                {t("sections.userRights.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{parse(item)}</li>
                  )
                )}
              </ul>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.dataRetention.title")}
              </h2>
              <p>{t("sections.dataRetention.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.security.title")}
              </h2>
              <p>{t("sections.security.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.international.title")}
              </h2>
              <p>{t("sections.international.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.thirdParty.title")}
              </h2>
              <p>{t("sections.thirdParty.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.policyChanges.title")}
              </h2>
              <p>{t("sections.policyChanges.points")}</p>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("sections.contact.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t("sections.contact.items", { returnObjects: true }).map(
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

export default Privacy;
