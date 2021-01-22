class Form {
constructor(){
 this.input=createInput("Name");
 this.button=createButton("Play");
this.greating=createElement("h2");
}


display(){
var title =createElement("h2");

title.html("Car Racing Game");
title.position(200,50);
this.input.position(250,100);
this.button.position(260,150);
this.button.mousePressed(()=>{
 this.input.hide();
 this.button.hide();
this.greating.html("Hello"+this.input.value());
this.greating.position(250,200);
playercount=playercount+1;
player.updateplayercount(playercount);
player.updateplayer();
player.index=playercount;
})
}
}