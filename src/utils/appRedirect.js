export const handleRedirect = (os) => {
  const iosAppLink = "https://apps.apple.com/us/app/uniic/id6742906894";
  const androidAppLink = "https://play.google.com/store/apps/details?id=com.uniic";

  if (os === "android") {
    window.location.href = androidAppLink;
  } else if (os === "ios") {
    window.location.href = iosAppLink;
  } else {
    const userAgent = navigator.userAgent || window.opera;
    if (/android/i.test(userAgent)) {
      window.location.href = androidAppLink;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = iosAppLink;
    } else {
      window.location.href = "/app";
    }
  }
};
