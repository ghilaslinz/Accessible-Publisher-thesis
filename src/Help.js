import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import NavBarNew from "./components/NavBarNew";

import { Helmet } from 'react-helmet';
import './help.css';
export default function Help() {
	const TITLE = 'Accessible Publisher : Help'
    const data = {
        title: "HELP",
        rows: [
            {
                title: "How can i create new document ?",
                content: `You have to click in "Create new document" that is located in the navigation bar`,
            },
            {
                title: "Can i change my password ? ",
                content:` "Yes, you have to click in "Profile" that is located in the navigation bar` ,
            },
           
        ],
    };
    const styles = {
        // bgColor: 'white',
       // titleTextColor: "blue",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
         tabFocus: true
    };
    return (
        <div>
            		<ul class="skip-links">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
 <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

		<div className="" >
		
		 <NavBarNew />
		</div>
        <main id="maincontent">
              <Faq
              
                data={data}
                styles={styles}
                config={config}
            />
        </main>
        </div>
    )
}
