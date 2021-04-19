class drop{
  constructor(x,y){
    var options={
        isStatic:true,
        friction:0.001,
        restitution:0.5,
        density:0.5

    }
     
     this.image= loadImage("drop.png")
     this.rain= Matter.Bodies.circle(x,y,5,options)
     //World.add(world,this.body)

    this.radius=5
     

  }

  rebirth(){
       if(this.rain.position.y>700){
    Matter.Body.setPosition(this.rain,{x:random(0,600),y:random(0,700)})

  }
 
}
/*createDrop(){
    var pos=this.body.position

    pos.x= random(0,600)
    pos.y=0
   
  
  
}*/
  display(){
    this.rebirth()
  fill('blue')
  ellipseMode(CENTER)
  ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)

  }

}