const colorCollection = {
  blueBayoux: "#4F6272",
  ebonyClay: "#202933",
  riverBed: "#404E5C",
  snowDrift: "#F2F7F2",
};

export const theme = {
  colors: {
    background: {
      box: colorCollection.riverBed,
      alternativeBox: colorCollection.blueBayoux,
      page: colorCollection.blueBayoux,
      item: colorCollection.ebonyClay,
      dark: colorCollection.ebonyClay,
    },
    text: colorCollection.snowDrift,
    button: colorCollection.ebonyClay,
  },
  shadows: {
    nav: "0px 4px 10px 2px rgba(64, 78, 92, 0.50)",
    item: "1px 1px 2px 1px rgba(0, 0, 0, 0.25)",
  },
  breakpoints: {
    mobileMax: "767px",
    desktopMid: "1440px",
  },
};
