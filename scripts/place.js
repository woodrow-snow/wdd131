// getting elements from doc
const temp = document.querySelector(".temp");
const windSpeed = document.querySelector(".windspeed");
const windChill = document.querySelector("#wind-chill");

// getting values from elements
let windSpeedValue = windSpeed.textContent;
let tempValue = temp.textContent;

// cleaning up values for comparison
const extraTemp = ["°", "F"]; 
const extraWind = ["m","p","h"]; //mph

// cleaning up values by isolating nums
windSpeedValue = cleanUpValue(windSpeedValue,extraWind);
tempValue = cleanUpValue(tempValue,extraTemp);

// converting string to int
windSpeedValue = parseInt(windSpeedValue);
tempValue = parseInt(tempValue);

let windChillValue = "";

// checking to see if wind chill function should be run
if (tempValue >= 50 && windSpeedValue > 3){
    windChillValue = calculateWindChill();
    windChillValue.toString();
    windChillValue += "°F";
}
else{
    windChillValue = "N/A";
}

windChill.textContent = windChillValue;

// functions

function calculateWindChill(){
    // calculating and returning results
    let result = 35.74 + (0.6215 * tempValue) - (35.75 * (windSpeedValue) ** 0.16) + (0.4275 * tempValue * windSpeedValue ** 0.16);
    return Math.round(result);
}

function cleanUpValue(string, array) {
    // this function removes any extra bits that aren't wanted in a string
    let strArray = string.split("");
    for (let i=0;i<strArray.length;i++){
        if (strArray[i] == array[i]){
            strArray.splice(i,1);
        }
    }

    return strArray.join("");
}