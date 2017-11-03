const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Hanoi {
  constructor(){
    this.stack1 = [3,2,1];
    this.stack2 = [];
    this.stack3 = [];
  }

  run(){
    console.log(this);
    if(this.winningCondition()){
      console.log("Winner!");
    }else{
      this.promptMove(this.makeMove.bind(this), this.run.bind(this));
    }
  }

  winningCondition(){
    console.log(JSON.stringify(this.stack2));
    if((JSON.stringify(this.stack2) === JSON.stringify([3,2,1])) || (JSON.stringify(this.stack3) === JSON.stringify([3,2,1]))){
      return true;
    }else{
      return false;
    }
  }

  promptMove(makeMove, run){
    this.printTowers();
    reader.question("Which tower do you want to move from?", function(response){
      let fromTower = parseInt(response);
      console.log(`You choose tower ${response}`);
      reader.question("Which tower do you want to move to?", function(response2){
        let toTower = parseInt(response2);
        console.log(`You choose tower ${response2}`);
        makeMove(fromTower, toTower, run);
      });
    });
  }

  makeMove(fromTowerNum, toTowerNum, run){
    let fromTower = undefined;
    if (fromTowerNum===1){
      fromTower = this.stack1;
    }else if(fromTowerNum===2){
      fromTower = this.stack2;
    }else if(fromTowerNum===3){
      fromTower = this.stack3;
    }

    let toTower = undefined;
    if (toTowerNum===1){
      toTower = this.stack1;
    }else if(toTowerNum===2){
      toTower = this.stack2;
    }else if(toTowerNum===3){
      toTower = this.stack3;
    }
    console.log(fromTower);
    console.log(toTower);
    let el = fromTower.pop();
    toTower.push(el);
    run();
  }

  printTowers(){
    console.log(`Stack1: ${this.stack1}`);
    console.log(`Stack2: ${this.stack2}`);
    console.log(`Stack3: ${this.stack3}`);
  }

}

const hanoi = new Hanoi;
hanoi.run();
