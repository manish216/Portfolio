import React from "react";
import "./footer.style.css";


const FooterPanel =() =>{
    return(
        <footer  >
          <h7>© Manish.Ch &nbsp;{new Date().getFullYear()}</h7>
        </footer>
    );
};

export default FooterPanel;
