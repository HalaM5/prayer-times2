


document.getElementById("btn").addEventListener("click",prayer)
function prayer(){
   let city= document.getElementById("Egcity").value;
   let prayerr= document.getElementById("prayer").value;
  // http://api.aladhan.com/v1/timingsByCity?country=Egypt&method=5&city=cairo
let prayerUrl =  "http://api.aladhan.com/v1/timingsByCity?country=Egypt&method=5&city="+city 
  getPrayer(prayerUrl, prayerr)
   console.log(city);
   console.log(prayerr)
   console.log("hi");
}

//GET request fot 5 prayer times
let getPrayer = async(url,prayr)=>{
    const response = await fetch(url);
     
    try{
        let data = await response.json();
        console.log(data.data.timings.Fajr);
        if(prayr=="Fajr"){
        document.getElementById("prayerTimes").innerHTML=`<span class="d">${prayr}</span> :  <span class="dd">${data.data.timings.Fajr}</span>`;
        }
        else if(prayr=="Dhuhr"){
            document.getElementById("prayerTimes").innerHTML=`<span class="d">${prayr}</span> : <span class="dd">${data.data.timings.Dhuhr}</span>`;
            }
        else if(prayr=="Asr"){
            document.getElementById("prayerTimes").innerHTML=`<span class="d">${prayr}</span> : <span class="dd">${data.data.timings.Asr}</span>`;
            }    
        else if(prayr=="Maghrib"){
            document.getElementById("prayerTimes").innerHTML=`<span class="d">${prayr}</span> : <span class="dd">${data.data.timings.Maghrib}</span>`;
            }
        else if(prayr=="Isha"){
             document.getElementById("prayerTimes").innerHTML=`<span class="d">${prayr}</span> : <span class="dd">${data.data.timings.Isha}</span>`;
             }
        else if(prayr=="Sunrise"){
         document.getElementById("prayerTimes").innerHTML=`<span class="d">${prayr}</span> : <span class="dd">${data.data.timings.Sunrise}</span>`;
        }     
        else {

            document.getElementById("prayerTimes").innerHTML=`
            <div class="dispAll">Fajr:    <span class="align">${data.data.timings.Fajr}</span></div><br>
            <div class="dispAll">Sunrise: <span class="align">${data.data.timings.Sunrise}</span></div><br>
            <div class="dispAll">Dhuhr:   <span class="align">${data.data.timings.Dhuhr}</span></div><br>
            <div class="dispAll">Asr:     <span class="align">${data.data.timings.Asr}</span></div><br>
            <div class="dispAll">Maghrib: <span class="align">${data.data.timings.Maghrib}</span></div><br>
            <div class="dispAll">Isha:    <span class="align">${data.data.timings.Isha}</span></div><br>`
            }

    }
    catch(error){
        console.log("error",error)
    }
}



//get request for api of current date (12/11/2022)
let getDate = async(url)=>{
    const response = await fetch(url);
    try{
        const data = await response.json();
        console.log(data.data);
        document.getElementById("date").innerHTML=data.data;
    }
    catch(error){
        console.log("erroe",error);
    }
}  
//Api of current date of Africa/Cairo
let dateUrl =  "http://api.aladhan.com/v1/currentDate?zone=Africa/Cairo "
getDate(dateUrl)//call back function of date


/*
//get request for current time
let getTime = async(url)=>{
    const response = await fetch(url);
    try{
        const data =await response.json()
        console.log(data.data)
        document.getElementById("time").innerHTML=data.data;

    }
    catch(error){
        console.log("error",error)

    }


}
let time="http://api.aladhan.com/v1/currentTime?zone=Africa/Cairo"
getTime(time)  */ 

function newtime(){
    let d =new Date();
    document.getElementById("tim").innerHTML="Time : "+" " + d.getHours()+ ":"+d.getMinutes()+ ":" +d.getSeconds(); 
}

setInterval(newtime, 1000)
/*
function doDate()
{
    var str = "";

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();

    str += "Today is: " + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("time").innerHTML = `${str} <br>`;
}

setInterval(doDate, 1000);
//document.getElementById("time").innerHTML=new Date();
*/