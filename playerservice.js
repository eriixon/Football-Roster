var PlayerService = function(endpointUri, callback){
    var dataStore = this;
    var playerData = [];
    
dataStore.getAllPlayers = function(){
      return playerData;
}

dataStore.getPlayersBySomeValue = function(smth){

    var list = [];
    for (var i = 0; i < playerData.length; i++) {
        var currentPlayer = playerData[i];
        var hasValue = false;
        for(var prop in currentPlayer){
            if(typeof currentPlayer[prop] === 'string' && currentPlayer[prop].toLowerCase() === smth) hasValue = true;   
        }
        if(hasValue) list.push(currentPlayer);
    }
    return list;      
} 
       
  
function loadPlayersData(){ 

  var localData = localStorage.getItem('playerData');
     if(localData){
     playerData = JSON.parse(localData);
     return callback(dataStore);
   }

   var BCWurl = "http://bcw-getter.herokuapp.com/?url=";
   var modUrl = BCWurl + encodeURIComponent(endpointUri);
          console.log('start 1')
        $.getJSON(modUrl, handleResponse);


        function handleResponse(response){
          console.log('start 2')
          playerData = response.body.players.filter(function(player){
            if(player.pro_status === 'A') return player;
          })
          console.log(playerData);
          localStorage.setItem('playerData', JSON.stringify(playerData))
          console.log('Player Data Ready')
          callback(dataStore)
        }
  }   
loadPlayersData() 

} 