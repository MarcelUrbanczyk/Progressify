import * as React from "react";
import { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#700"
    viewBox="0 0 24 24"
    width="100%"
    {...props}
  >
    <path
      stroke="#dc143c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
export default Menu;
