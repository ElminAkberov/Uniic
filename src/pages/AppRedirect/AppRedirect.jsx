import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import { handleRedirect } from "../../utils/appRedirect";
import { useTranslation } from "react-i18next";
const AppRedirect = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[15dvh] w-full my-24 max-md:my-5 max-md:mb-24 sofia-pro">
      <h1 className="text-center text-2xl md:text-3xl my-10">
        {t("appRedirect")}
      </h1>
      <div className="flex max-md:flex-col justify-center gap-[14px] items-center">
        <img
          onClick={() => handleRedirect("android")}
          src={android}
          className="cursor-pointer w-[200px]"
          alt="android"
        />
        <img
          onClick={() => handleRedirect("ios")}
          src={ios}
          alt="ios"
          className="cursor-pointer w-[200px]"
        />
      </div>
    </div>
  );
};

export default AppRedirect;
