var roster = [];
var id = 0;

function player(name, position, pro_team, photo) {
    this.fullname = name;
    this.position = position;
    this.pro_team = pro_team;
    this.photo = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"
    this.id = id++;
    debugger
    roster.push(this);
}

// drawing all players

function update(){
    
    var rosterElem = $('#roster');   
    $('#roster').html('');

    roster.forEach(function(player){
    var curr = '<div class="player-card" id="'+ player.id +
    '"><img src="' + player.photo + '" alt="player photo"/> <p>' + player.fullname +
    '<br> Position: ' + player.position + '<br> Team: ' + player.pro_team + '</p></div>';
       
        rosterElem.append(curr);
    })
}