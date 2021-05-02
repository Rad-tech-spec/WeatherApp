/********************************************************************************* 
* BTI425 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students.  
* Name: Rad Eshghi Student ID: 123348195 Date: 1/26/2021 
* ********************************************************************************/
function CssStyle()
{
   $("#header").css({
       "color": "#F6694B", 
       "text-decoration" : "none", 
       "padding-left": "20px"});

   $("#find").css("border-radius","10px")


   $(".nav1").css({"background-color": "#1a1919", "border-radius": "20px" })
  
   $("#footer").css({
       "background-color":"#1a1919",
       "color":"#F68F79",
       "border-radius": "20px",
       "position": "absolute",
       "bottom": "10px",
       "width" : "100%", 
       "hight" : "2.5rem",
   });

   $("#body").css({
       "padding" : "10px", 
       "float": "center", 
       "text-align":"left", 
       "border": "1px", 
       "margin": "auto", 
       "width": "1100px", 
       "height":"550px", 
       "border-radius":"5px",
       "overflow":"auto"
   });

   $("body").css("background-color", "#272526")


}