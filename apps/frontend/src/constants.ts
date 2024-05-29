// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData

export const IS_IOS =
  [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ].some((v) => navigator.userAgent.includes(v)) ||
  (navigator.userAgent.includes("Mac") && "ontouchend" in document)
