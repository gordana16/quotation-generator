//define quote segments
var beginning = ['Patience, persistence and perspiration ', 'Communication ', 'The secret of your success ', 'More than anything else, preparation ', 'Setting goals ', 'Before everything else, getting ready '];
var middle = ['make an unbeatable combination ', 'is the key ', 'is determined ', 'is the key ', 'is the first step ', 'is the secret '];
var end = ['for success', 'to personal and career success', 'by your daily agenda', 'to success', 'in turning the invisible into the visible', 'of success'];
var punct = ['.', '!', '!!!'];

function generateRandomQuote() {
  var quote = beginning[Math.floor(Math.random() * beginning.length)] + middle[Math.floor(Math.random() * middle.length)]
    + end[Math.floor(Math.random() * end.length)] + punct[Math.floor(Math.random() * punct.length)];
  return quote;
}

document.querySelector('.btn-gen').addEventListener('click', function () {
  var quote = generateRandomQuote();
  document.querySelector(".quote").innerHTML = '<p>' + quote + '</p>';
});

