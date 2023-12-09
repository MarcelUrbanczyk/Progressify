const colorCollection = {
  crimson: "#DC143C",
  sauvignon: "#FFF6F4",
  fairPink: "#ffeae8",
  kabul: "#574240",
};

export const theme = {
  colors: {
    dominant: colorCollection.crimson,
    background: colorCollection.sauvignon,
    box: colorCollection.fairPink,
    text: colorCollection.kabul,
  },
  shadows: {
    nav: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
    item: " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
  },
  breakpoints: {
    mobileMax: "767px",
    desktopMid: "1440px",
  },
};
