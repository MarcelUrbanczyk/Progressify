import * as React from "react";
import { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="28px"
    height="28px"
    fill="none"
  >
    <g
      stroke="#F2F7F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path d="M7 13h12M7 16.5h12M7 9.5h12" />
    </g>
    <rect
      width={24}
      height={24}
      x={1}
      y={1}
      stroke="#fff"
      strokeLinejoin="round"
      rx={5}
    />
    <defs>
      <clipPath id="a">
        <rect width={24} height={24} x={1} y={1} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);
export default Menu;
