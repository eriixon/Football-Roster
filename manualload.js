// deleting player card by doudle click
$('#roster').on('dblclick', '.player-card', function () {
    
    function removePlayerById (x) {
        for (var i = 0; i < roster.length; i++) {
            var curr = roster[i].id;
                if(curr == x) {
                    console.log(i);
                    roster.splice(i,1);
                }
        }
    }
       removePlayerById(parseInt(this.id));
       update();   
})

// selecting a card by drawing frame around card
$('#roster').on('click', '.player-card', function () {
    $(this).toggleClass("highlight");
})

// adding a new player manualy
$('#player-form').on('submit', function (event) {
    event.preventDefault();
    var newPlayer = new player(this.fullname.value, this.position.value, this.pro_team.value);
    update()
})