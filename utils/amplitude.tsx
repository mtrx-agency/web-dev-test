// declare global {
//   interface Window {
//     env?: string;
//     pageGroup?: string;
//     amplitude?: any;
//   }
// }

// export const trackAmplitudePageViewed = () => {
//   trackAmplitudeEvent("Page Viewed", {
//     "Page URL": window.location.href,
//     "Page Title": window.pageGroup || "Unknown",
//     "Device Category": window.innerWidth < 992 ? "Mobile" : "Desktop",
//     "Is Landing": window.location.pathname === "/" ? "Yes" : "No",
//   });
// };

// export const trackCTAClick = (elem: HTMLElement) => {
//   const isCTA = elem.getAttribute("data-a-cta");
//   if (!isCTA) {
//     return;
//   }
//
//   const position = elem.getAttribute("data-a-position");
//   if (!position) {
//     return;
//   }
//
//   trackAmplitudeEvent("Create Order Clicked", {
//     Position: position,
//     "Page URL": window.location.href,
//     "Page Title": window.pageGroup || "Unknown",
//     "Button Label": elem.innerText,
//   });
// };

// export const calculateScrollPercentage = () => {
//   const scrollTop = window.scrollY;
//   const scrollHeight = document.documentElement.scrollHeight;
//   const clientHeight = document.documentElement.clientHeight;
//
//   return (scrollTop / (scrollHeight - clientHeight)) * 100;
// };

// const trackAmplitudeEvent = (eventName: string, eventProperties: any) => {
//   if (!window.amplitude) {
//     window.console.log(`Skip Amplitude: track: ${eventName}`, eventProperties);
//     return;
//   }
//
//   window.amplitude.track(eventName, eventProperties);
// };
