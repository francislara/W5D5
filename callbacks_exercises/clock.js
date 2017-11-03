

class Clock{
  constructor(){
    this.dt = new Date;
    this.currentTime = this.dt.getTime();
    this.printTime(this.currentTime);
    setInterval(this.increment.bind(this), 1000);
  }

  increment(){
    this.currentTime += 1000;
    this.printTime(this.currentTime);
  }

  printTime(ms){
    let seconds = ms/1000;
    let hours = parseInt((seconds/3600)%24);
    seconds = seconds%3600;
    let minutes = parseInt(seconds/60);
    seconds = parseInt(seconds%60);
    console.log(`${hours}:${minutes}:${seconds}`);
  }


}

let clock = new Clock;
