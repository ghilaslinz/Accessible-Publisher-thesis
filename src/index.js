/*
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import $ from 'jquery';
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")


	
);


var pageCount = $('#long-content').height()/800;
var contentLength = $('#long-content').text().length;
var perPageLength = Math.floor(contentLength/pageCount);
console.log(perPageLength)
//var re = new RegExp("(.{1,"+perPageLength+"})",'g'); 
//var chunks = $('#long-content').text().match(re);
var chunks = [];
for(var i=0;i<=pageCount;i++){
    chunks.push($('#long-content').text().substring(i*perPageLength,i*perPageLength+perPageLength))
 //   console.log(i);
     console.log(perPageLength);
      console.log(pageCount);
}
console.log(chunks);
var paged = '<div class="page">'+chunks.join('</div><div class="page">')+'</div>';
$('#long-content').html(paged);
