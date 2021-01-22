class Player{
constructor(){
  this.index=0;
  this.name= "";
  this.distance=0;
}
  getplayercount(){
    var getplayercountRef =database.ref ("playercount");
    getplayercountRef.on("value",function (data){
        playercount=data.val ();
    })   
  }

updateplayercount(count){
    var  updateplayercountRef=database.ref("/")
    updateplayercountRef.update({
   playercount:count
    }) 

}

updateplayer(){
var playerindex ="players/player"+ this.index 
database.ref(playerindex).set({
name:this.name,
distance:this.distance
})

}



}