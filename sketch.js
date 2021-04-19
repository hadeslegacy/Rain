const Engine= Matter.Engine


var engine, world;
var maxDrops=102
var drops=[]
var bMax=101

function preload(){
    
}

function setup(){
    createCanvas(600,700)
    engine = Engine.create();
    world = engine.world;

    drop1 = []
   drop2=drop1
    
}

function draw(){
    background('black')

    for(var i=0;i<maxDrops;i+1){
        drop1.push(new drop(random(0,600),random(0,700)))
        
        for(var b=0;i<bMax;i+1){
            drop1[b].display()
            
        }
        
    }
    
    /**/

    
    //rebirth()
}   

