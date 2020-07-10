(function(){

var spaces = [
"Gravy seen on camera",
"Biscuit seen on camera",
"Zzay roasted about podcast",
"Twitch Prime Commercial",
"Incest is mentioned",
"Zzay is late",
"ZZAYOOM",
"Feather bullies Zzay",
"Scarebits used",
"Donation occurs",
"Zzay gets raided",
"Someone buys merch",
"Momphod makes an appearance",
"Cumsock is mentioned",
"Followed by a troll account",
"Someone gets banned for real",
"Tier 1 Sub",
"Tier 2 Sub",
"Tier 3 Sub",
"Someone Backseats",
"Follow Goal Met",
"Sub Goal Met",
"Accidental Mute",
"Partner appears in Chat",
"Quote is added",
"Gifted subs",
"Zzay or Bae dies from fall damage",
"Light color change",
"Baephod goes to sleep",
"Zzay makes a pass at Light",
"Baephod beats Zzayphod at any game",
"Baephod beats a Mario Maker Level",
"Gravy needs attention",
"Cats fighting in background",
"Zzay or Bae spills something",
"Baephod shows off a plant",
"Zzayphod tells a lie",
"Zzay trolls Vic for unfollowing him",
"Kenzie makes an appearance",
"Bae gets a snacc",
"Zzay eats Sour Skittles",
"Zzay mentions his OnlyFans",
"Hype Train Activated",
"Hype Train Level 2",
"Hype Train Level 3",
"Hype Train Level 4",
"Hype Train Level 5",
"Buttsbot targets Meeg",
"Baephod peaks the mic",
"Zzayphod sings"
];

var gameOver = false;
var blackout = false;


$('td').not("#freeSpace").click(function(){
  if(gameOver === true){
    return;
  }
  $(this).toggleClass('selected');
  if(blackout === false){
    if(
      //horizontal win
      ($('td').eq(0).hasClass('selected') && $('td').eq(1).hasClass('selected') && $('td').eq(2).hasClass('selected') && $('td').eq(3).hasClass('selected') && $('td').eq(4).hasClass('selected')) ||
      ($('td').eq(5).hasClass('selected') && $('td').eq(6).hasClass('selected') && $('td').eq(7).hasClass('selected') && $('td').eq(8).hasClass('selected') && $('td').eq(9).hasClass('selected')) ||
      ($('td').eq(10).hasClass('selected') && $('td').eq(11).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(13).hasClass('selected') && $('td').eq(14).hasClass('selected')) ||
      ($('td').eq(15).hasClass('selected') && $('td').eq(16).hasClass('selected') && $('td').eq(17).hasClass('selected') && $('td').eq(18).hasClass('selected') && $('td').eq(19).hasClass('selected')) ||
      ($('td').eq(20).hasClass('selected') && $('td').eq(21).hasClass('selected') && $('td').eq(22).hasClass('selected') && $('td').eq(23).hasClass('selected') && $('td').eq(24).hasClass('selected')) ||
      //vertical win
      ($('td').eq(0).hasClass('selected') && $('td').eq(5).hasClass('selected') && $('td').eq(10).hasClass('selected') && $('td').eq(15).hasClass('selected') && $('td').eq(20).hasClass('selected')) ||
      ($('td').eq(1).hasClass('selected') && $('td').eq(6).hasClass('selected') && $('td').eq(11).hasClass('selected') && $('td').eq(16).hasClass('selected') && $('td').eq(21).hasClass('selected')) ||
      ($('td').eq(2).hasClass('selected') && $('td').eq(7).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(17).hasClass('selected') && $('td').eq(22).hasClass('selected')) ||
      ($('td').eq(3).hasClass('selected') && $('td').eq(8).hasClass('selected') && $('td').eq(13).hasClass('selected') && $('td').eq(18).hasClass('selected') && $('td').eq(23).hasClass('selected')) ||
      ($('td').eq(4).hasClass('selected') && $('td').eq(9).hasClass('selected') && $('td').eq(14).hasClass('selected') && $('td').eq(19).hasClass('selected') && $('td').eq(24).hasClass('selected')) ||
      //horizontal win
      ($('td').eq(0).hasClass('selected') && $('td').eq(6).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(18).hasClass('selected') && $('td').eq(24).hasClass('selected')) ||
      ($('td').eq(4).hasClass('selected') && $('td').eq(8).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(16).hasClass('selected') && $('td').eq(20).hasClass('selected'))

    ){
      $('#winModal').modal('show');
    }
  } else {
    if($('td.selected').length === $('td').length){
      $('#ultimateWinModal').modal('show');
    }
  }
})

$('#clear').click(function(){
  $('td').not("#freeSpace").removeClass('selected');
  gameOver = false;
})

$('.newCard').click(function(){
  $('td').not("#freeSpace").removeClass('selected');
  randomizeSquares();
  gameOver = false;
  blackout = false;
  $('#gameMode').text("5 in a row");
})

$('.gameOver').click(function(){
  gameOver = true;
})

$('#blackoutButton').click(function (){
  blackout = true;
  $('#winModal').modal('toggle');
  $('#gameMode').text("Blackout");
})

function randomizeSquares (){
  var uniqueArray = spaces.slice(0);
  $('td').not("#freeSpace").each(function(){
    var rand = Math.floor(Math.random() * uniqueArray.length);
    $(this).text(uniqueArray[rand]);
    uniqueArray.splice(rand, 1);
  })
}

randomizeSquares();

})();