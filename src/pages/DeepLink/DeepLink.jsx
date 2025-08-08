import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

const DeeplinkRedirect = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [storeLink, setStoreLink] = React.useState("https://uniic.app");
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    const pathParts = pathname.split("/").filter(Boolean);
    const type = pathParts[1];
    const id = pathParts[2];

    let appDeeplink = "uniic://";
    if (id) {
      appDeeplink += `${type}/${id}`;
    } else {
      appDeeplink += `${type}`;
    }

    const iosStoreLink = "https://apps.apple.com/app/uniic";
    const androidStoreLink = `intent://profile/${id}#Intent;scheme=uniic;package=com.uniic;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.uniic;end`;

    const fallbackLink = isIOS ? iosStoreLink : androidStoreLink;
    setStoreLink(fallbackLink);
    let timeoutId;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeoutId);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (isIOS || isAndroid) {
      window.location.href = appDeeplink;

      timeoutId = setTimeout(() => {
        window.location.href = fallbackLink;
      }, 2500);
    } else {
      window.location.href = fallbackLink;
    }

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return (
    <div className="w-full text-center sofia-pro mt-10 px-2">
      <h2 className="text-2xl">{t("redirecting")}</h2>
      <p className="mt-5">
        
        <NavLink to={storeLink} target="_blank" rel="noopener noreferrer">
         {t("redirectinginfo")}
        </NavLink>
        .
      </p>
    </div>
  );
};

export default DeeplinkRedirect;
