var playerService = new PlayerService('http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json', ready);

function ready(dataStore){
 
$('#loadbtn').on('click',function(){
    roster = dataStore.getAllPlayers();
    update()
})

$('#findbtn').on('click', function(event){

    roster = dataStore.getPlayersBySomeValue($('#ifind').val());
    update(); 
})

}

