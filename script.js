var beginning = ['Strive for ', 'Don\'t let ', 'Don\'t stop ', 'Don\'t wait for ', 'Be the girl ', 'Don\'t give up; '];
var middle = ['progress ', 'small minds ', 'until ', 'opportunity ', 'who decided ', 'great things '];
var end = ['not perfection', 'too big', 'you are proud', 'create it', 'to go for it', 'take time'];
var punct = ['.', '!', '!!!'];

document.querySelector(".quote").style.display = "none";
document.querySelector('.btn-gen').addEventListener('click', function () {
  var quote = generateRandomQuote();
  document.querySelector(".quote").textContent = quote;
  document.querySelector(".quote").style.display = "block";
});

function generateRandomQuote() {
  var quote = beginning[Math.floor(Math.random() * beginning.length)] + middle[Math.floor(Math.random() * middle.length)]
    + end[Math.floor(Math.random() * end.length)] + punct[Math.floor(Math.random() * punct.length)];
  return quote;
}