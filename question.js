class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Are You Sure??');
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz");
      title.position(130, 0);
  
      this.input.position(displayWidth/2,displayHeight/2);
      this.button.position(displayWidth/2+30,displayHeight/2+40);
  
      this.button.mousePressed(()=>{
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index =contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      })
  
    }
  }
  