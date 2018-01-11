var myData;
var people = [];

function preload() {
    myData = loadJSON("./assets/peopleinspace.json");
    img = loadImage("./assets/icon.png");
    sfondo = loadImage("./assets/sfondo.jpg")
}

function setup() {
  createCanvas(500, 500);
   
  for(var i = 0; i < myData.people.length; i++) {
    var astroData = myData.people[i];
    print(astroData);
    var newAstronaut = new Astronaut(astroData.launchdate, astroData.name, astroData.title);
    people.push(newAstronaut);
  }
}

function draw() {
     
    background(sfondo);
    
    for(var i = 0; i < people.length; i++) {
	  var astronaut = people[i];
	  astronaut.move();
	  astronaut.display();
	}
    
}

function Astronaut(launchDate, name, title) {
    
    this.name = name;
    this.title = title;
    
    
    this.launchDate = Date.parse(launchDate);
   
    var timeInSpace = Date.now() - this.launchDate;
    
    this.radius = floor(timeInSpace / (1000 * 60 * 60 * 24)) / 2;
    
    
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    
    this.incrementX = 1;
    this.incrementY = 1;
    
    this.display = function() {
    
        
    //info
        textAlign(CENTER);
        textSize(20);
        fill(255);
        text('Press any key to see the astronaut name',width/2,30);
        text('Astronaut size represents the time in space',width/2,50);
        
    //astronaut    
      image(img,this.x,this.y,this.radius,this.radius)
        
        pop();
        
    //astronaut name
        if(keyIsPressed) {
        
            textSize(15);
            textAlign(CENTER);
            text(this.name, this.x + 35, this.y - 20);
             fill(255);
    } 
        push();

    }
 
        this.move = function() {
        
        this.x += this.incrementX;
        this.y += this.incrementY;
        
        if (this.x > width - this.radius || this.x < this.radius){
            this.incrementX *= -1
            print(this.x);
            print(this.radius);
        }

        if (this.y > height - this.radius || this.y < this.radius){
            this.incrementY *= -1
            print(this.y);
            print(this.radius);
        }
    }   
    
}