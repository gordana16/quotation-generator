//creating new Quotes objects of a certain type through constructor function
function Quotations(type, beginning, middle, end, punct) {
  this.type = type;
  this.beginning = beginning;
  this.middle = middle;
  this.end = end;
  this.punct = punct;
}

//adding function which creates random quoute from quote segments
Quotations.prototype.generateQuote = function () {
  var begIndex = Math.floor(Math.random() * this.beginning.length);
  var midIndex = Math.floor(Math.random() * this.middle.length);
  var endIndex = Math.floor(Math.random() * this.end.length);
  var punctIndex = Math.floor(Math.random() * this.punct.length);
  return this.beginning[begIndex] + this.middle[midIndex] + this.end[endIndex] + this.punct[punctIndex];
}

var bQuotes, mQuotes, eQoutes, pQuotes, quotations;

pQuotes = ['.', '!', '!!!'];

bQuotes = ['Patience, persistence and perspiration ', 'Communication ', 'The secret of your success ', 'More than anything else, preparation ', 'Setting goals ', 'Before everything else, getting ready '];
mQuotes = ['make an unbeatable combination ', 'is the key ', 'is determined ', 'is the key ', 'is the first step ', 'is the secret '];
eQuotes = ['for success', 'to personal and career success', 'by your daily agenda', 'to success', 'in turning the invisible into the visible', 'of success'];

var quotationsSuccess = new Quotations(0, bQuotes, mQuotes, eQuotes, pQuotes);

bQuotes = ['The biggest adventure you can take ', 'The purpose of human life ', 'The purpose of art ', 'The sole meaning of life ', 'The whole point ', 'Life '];
mQuotes = ['is to live ', 'is to serve and to show ', 'is washing ', 'is to serve ', 'is to live life and to use ', 'is something to do '];
eQuotes = ['the life of your dreams', 'compassion and the will to help others', 'the dust of daily life off our souls', 'humanity', 'all the colors in the crayon box', ' when you can\'t get to sleep'];

var quotationsLife = new Quotations(1, bQuotes, mQuotes, eQuotes, pQuotes);
quotations = [quotationsSuccess, quotationsLife];

document.querySelector(".btn-gen").addEventListener('click', function () {
  var quantity, type;
  var quotesContainer = document.querySelector('.quotes-container');
  quotesContainer.style.display = "block";
  quotesContainer.innerHTML = '';

  quotesContainer.classList.remove('valid-range');

  quantity = parseInt(document.getElementById('quotes').value);

  if (isNaN(quantity)) {
    quotesContainer.classList.add('valid-range');
    quotesContainer.innerHTML = '<p>Choose the number between 1 and 5!</p>';
  }

  type = parseInt(document.querySelector('input[name="type"]:checked').value);

  for (var i = 0; i < quantity; i++) {
    quotesContainer.innerHTML += '<p>' + quotations[type].generateQuote() + '</p>';
  }
});

document.querySelector(".btn-quit").addEventListener('click', function () {
  document.querySelector('.main').innerHTML = '';
  document.querySelector('.bye').innerHTML =
    '<p><b>Thank you for using Random Quote Generator!</p>' +
    '<p>Have a nice day!</b></p>';
});

