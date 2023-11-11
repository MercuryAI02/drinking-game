// Array of card objects
var cards = [
    { img: 'images/1.png', title: 'なかなかやるじゃん', instruction: 'no 罰ゲーム' },
    { img: 'images/2.png', title: '調子どう？', instruction: 'カードを引いた人が、飲む人を指名する\n指名された人が飲む' },
    { img: 'images/3.png', title: 'よろしくお願いします', instruction: 'カードを引いた人が、飲む人を指名する\n指名された人が飲む' },
    { img: 'images/4.png', title: 'YO!', instruction: 'カードを引いた人が、「よ〜」のコールの間飲む' },
    { img: 'images/5.png', title: 'NO!', instruction: '次のターンで自身の「飲み」or「罰金」を回避できる' },
    { img: 'images/6.png', title: '飲みましょうか？', instruction: 'ユアンが飲む' },
    { img: 'images/7.png', title: 'あなたもEWANもってるでしょ？', instruction: '次回の自分のターンが来るまでの間に、グラスを持つ\n周りのプレイヤーは真似て同じようにグラスを持ち、最後の人が飲む' },
    { img: 'images/8.png', title: 'もう払ってますよね？', instruction: '罰金100円' },
    { img: 'images/9.png', title: 'え？なんのことですか', instruction: '罰金で出ている中から100円もらえる' },
    { img: 'images/10.png', title: 'JOKER', instruction: '全員で飲む' },
    { img: 'images/11.png', title: 'アチョー', instruction: 'カードを引いた人の左右にいる人が飲む' },
    { img: 'images/12.png', title: 'ARE YOU HAPPY?', instruction: '全員で「ARE YOU HAPPY?」とコールする' },
    { img: 'images/13.png', title: '本当にそれでいいの？', instruction: '前に一気した人がもう一杯' },
    { img: 'images/14.png', title: 'HOHOHO', instruction: '次回の自分のターンが来るまでの間に、頭に手を乗せる\n周りのプレイヤーは真似て同じように頭に手を乗せ、最後の人が飲む' },
    { img: 'images/15.png', title: 'MY LOVE', instruction: '場にいる女性全員が飲む' },
    { img: 'images/16.png', title: 'え!?わたしハワイいけないの？', instruction: '場にいる男性全員が飲む' },
    { img: 'images/17.png', title: 'ARE YOU SURE?', instruction: '会話の中でプレイヤーの発言に対して、「マジで？」、「本当に？」などARE YOU SURE的なレスポンスをした人が飲む' }
  ];
  
// Declare 'roulette' variable in the outer scope
var roulette;

document.getElementById('startButton').addEventListener('click', function() {
  // Play the sound effect
  var soundEffect = document.getElementById('soundEffect');
  soundEffect.play();
  
  // Start roulette effect
  roulette = setInterval(function() {
    var randomIndex = Math.floor(Math.random() * cards.length);
    document.getElementById('imageContainer').innerHTML = '<img src="' + cards[randomIndex].img + '" alt="Game Action">';
  }, 100);

  // Stop roulette effect after 3 seconds and show final card
  setTimeout(function() {
    clearInterval(roulette);
    var chosenIndex = Math.floor(Math.random() * cards.length);
    var chosenCard = cards[chosenIndex];
    document.getElementById('imageContainer').innerHTML = '<img src="' + chosenCard.img + '" alt="Game Action">';
    // Update the text for title and instructions
    document.getElementById('actionText').innerHTML = '<h2>' + chosenCard.title + '</h2><p class="instructions">' + chosenCard.instruction + '</p>';
  }, 5000);
});
  
  