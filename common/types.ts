export interface ImageData {
  url: string;
  metadata: {
    "aria-label": string;
    alt: string;
    // Include other metadata properties as needed
  };
}

export type ServiceImageData = ImageData & {
  metadata: {
    title: string;
    details: string;
  };
};

const userAgent: string =
  typeof navigator !== "undefined"
    ? navigator.userAgent ||
      navigator.vendor ||
      (window as any).opera ||
      undefined
    : "";

export const isMobileDevice = (): boolean => {
  const regexs = [
    /(Android)(.+)(Mobile)/i,
    /BlackBerry/i,
    /iPhone|iPod/i,
    /Opera Mini/i,
    /IEMobile/i,
  ];
  return regexs.some((b) => userAgent.match(b));
};

export const isDesktopDevice = (): boolean => !isMobileDevice();
