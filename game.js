class Game{
constructor(){

}
getstate (){
var gamestateRef =database.ref ("gamestate");
gamestateRef.on("value",function (data){
gamestate=data.val ();
})
}

 updatestate(state){
 var  updatestateRef=database.ref("/")
 updatestateRef.update({
gamestate:state 
 }) 
 }


  start(){
 player=new Player();
 form=new Form();
 form.display();


  }
}