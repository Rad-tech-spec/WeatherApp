# About
This simple application is designed to show the weather condition base on the city and country entered in the search bar.\

This application has been divided into three javascript files and an HTML file:

### 1. Main.js:
The main functions are included inside this file that the **Weather.html** will use to call each function to pass the data as an XML and extract data to pass for formatting and appending back to **Weather.html body**.

### 2. Pagination.js:
This js file is responsible to calculate the number of data has received and format to have three results per page and divide the rest of the results into different pages. This application will also append all the data back to the **Weather.html body**.

### 3. jQueryCss.js:
This js file is responsible for the look and formatting of the page, all the colors and classes have been called and initialized in this file using CSS.

### 4. Weather.html:
This is the main file that will make the **API** call using the fetch jQuery and pass the data to the above methods then publish the outcome.

## Languages and Libraries used:
* JavaScript (jQuery)
* CSS (General Formating)
* BootStrap (Pagination, Formating)

## Author: 
> Rad Eshghi

