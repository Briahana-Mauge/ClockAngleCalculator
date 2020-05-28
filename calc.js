// Create a function or method that when given a time (a string in HH:MM format) give this smallest angle created between the hour and minute hands. Please provide a https://repl.it/ link and a github

const findAngle = (time) => {
    splitTime = time.split(':');
    let hour = splitTime[0];
    let minute = splitTime[1];
  
    let circle = 360;
    let hourOnClock = 12;
    let minuteOnClock = 60;
    let totalClockHours = circle / hourOnClock;
  
    //hour hands dont stay still when the the minute hand moves so we need to keep track of that
    let hourAngle = hour * (circle / hourOnClock) + minute * (totalClockHours / minuteOnClock);
    let minuteAngle = minute * (circle / minuteOnClock);
  
    let angle = Math.abs(hourAngle - minuteAngle)
   
  //return the smaller angle
  // if(angle <180){
  //   return angle
  // }else{
  //   return circle - angle
  // }
  
    return Math.min(angle, circle - angle)
  }
  
  
  findAngle('1:50')
  