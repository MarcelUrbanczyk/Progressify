const colorCollection = {
  riverBed: "#404E5C",
  blueBayoux: "#4F6272",
  snowDrift: "#F2F7F2",
};

export const theme = {
  colors: {
    background: {
      box: colorCollection.riverBed,
      page: colorCollection.blueBayoux,
    },
    text: colorCollection.snowDrift,
  },
  shadows: {
    nav: "0px 4px 10px 2px rgba(64, 78, 92, 0.50)",
    item: "1px 1px 2px 1px rgba(0, 0, 0, 0.25)",
  },
};
