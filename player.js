class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }

    updateCount(count){
        database.ref('/').update({
        playerCount: count
        });
    }

    updateCode(code){
        database.ref('/').update({
            saveCode: code
        });
    }

    getCount(){
        database.ref('playerCount').on("value", (data) =>{
            playerCount = data.val();
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
     
  


}