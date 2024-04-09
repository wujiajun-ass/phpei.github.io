var clickBtn = document.getElementById('clickBtn');
var score = document.getElementById('count');


var count = 0;


clickBtn.addEventListener('click', function() {
  count++;
  score.innerText = count;
});