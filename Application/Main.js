/********************************************************************************* 
* BTI425 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students.  
* Name: Rad Eshghi Student ID: 123348195 Date: 1/29/2021 
* ********************************************************************************/

// Collect attribute from each index and store them into varibale array 
function getData(x, y)
{
    var temps = []; 
    $(y).find("temperature").each(function(){
        $.each(this.attributes,function(i, a){ temps.push(a.value);})
    })

    console.log(temps);
    var speed = [];
    $(y).find("wind").find("speed").each(function(){
        $.each(this.attributes, function(i, a){speed.push(a.value);})
    })

    var humidity = [];
    $(y).find("humidity").each(function(){
        $.each(this.attributes,function(i, a){ humidity.push(a.value);})
    })

    var pressure = [];
    $(y).find("pressure").each(function(){
        $.each(this.attributes,function(i, a){ pressure.push(a.value);})
    })

    var coord = [];
    $(y).find("coord").each(function(){
        $.each(this.attributes,function(i, a){ coord.push(a.value);})
    })

    var sun = [];
    $(y).find("sun").each(function(){
        $.each(this.attributes,function(i, a){ sun.push(new Date (a.value));})
    })
    
    city = $(y).find("city").attr("name");  
    countryCode = $(y).find("city").find("country").text();
    status = $(y).find("weather").attr("value");
    feels = $(y).find("feels_like").attr("value");
    weatherIcon = $(y).find("weather").attr("icon");

    // Pass value to dipaly and add into display
    Display(temps,speed,humidity,pressure,coord,sun,status,feels,countryCode, x+1, weatherIcon)
}

// Append and dipaly the infromation extracted orginized to the screen
// Also extract flag
function Display(temps,speed,humidity,pressure,coord,sun,status,feels,countryCode, count, icon)
{
    $.ajax({ url:'https://restcountries.eu/rest/v2/alpha/' + countryCode,
    }).done(flag1 =>
    { 
        $("#body").append(`${`<br>
        <div class="list-group shadow-sm bg-dark rounded">
            <a href="#" class="list-group-item active"> 
                <img src = "https://openweathermap.org/img/wn/`+ icon +`@2x.png" width = "60"></img>
                <p class = "list-group-item-text">
                ${city},${countryCode} 
                <img id = "imgs" src =` + flag1.flag} width="13px" height="12px" ${`></img>
                ${status} <br> 
                <span class = "badge rounded-pill bg-secondary">${temps[0]}</span>
                ℃ Temperature from  ${temps[1]} to ${temps[2]} ℃, 
                wind ${speed[0] + speed[1]}. Clouds ${humidity[0] + humidity[1]} ${pressure[0]} ${pressure[1]} <br>
                Feels like: ${feels}℃ <br>
                Sunrise: ${sun[0]} | Sunset: ${sun[1]}<br>
                Coords [${coord}]
                </p>
            </a>
        </div>
        `}`);

        if(count >= 3)
        {
            let limit = 3;
            $(".loop .list-group:gt("+(limit - 1)+")").hide();
        }
    
    }).fail(err =>{console.log("Error2: There is an error in display"); alert("Error2: There is an error in display")});
}

//Find API of the city entered
function findCity()
{
    const input = $('#city').val();
    return ("http://api.openweathermap.org/data/2.5/find?q="+ input + "&mode=xml&units=metric&appid=5b5296fa9553512ad9497b34ff14149b");
}



