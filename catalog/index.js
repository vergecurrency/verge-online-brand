import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Verge Branding",
    content: pageLoader(() => import("./index.md"))
  },
  {
    path: "/logo-specifics",
    title: "Logo Specifics",
    content: pageLoader(() => import("./logo-specifics.md"))
  },
  {
    path: "/typeface-details",
    title: "Typeface Details",
    content: pageLoader(() => import("./typeface-details.md"))
  },
  {
    path: "/color-palette",
    title: "Color Palette",
    content: pageLoader(() => import("./color-palette.md"))
  }
];

const styles = [
  './fonts.css'
]

const theme = {

  //colors
  linkColor : "#647886",


  //font
  fontFamily : '"Avenir Next Regular"',

  //header
  pageHeadingBackground : "#112134",
  navBarBackground : "#112134"
  

}



ReactDOM.render(
  <Catalog 
  title="Verge Branding Guide" 
  logoSrc="verge-color-logo.png"
  pages={pages} 
  theme ={theme}
  styles={styles}
  />,
  document.getElementById("catalog")
);
