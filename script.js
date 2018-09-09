function Quotations(type, beginning, middle, end, punct) {
  this.type = type;
  this.beginning = beginning;
  this.middle = middle;
  this.end = end;
  this.punct = punct;
}

Quotations.prototype.generateQuote = function () {
  var begIndex = Math.floor(Math.random() * this.beginning.length);
  var midIndex = Math.floor(Math.random() * this.middle.length);
  var endIndex = Math.floor(Math.random() * this.end.length);
  var punctIndex = Math.floor(Math.random() * this.punct.length);
  return this.beginning[begIndex] + this.middle[midIndex] + this.end[endIndex] + this.punct[punctIndex];
}

var bQuotes, mQuotes, eQoutes, pQuotes, keepGenerate;

pQuotes = ['.', '!', '!!!'];

bQuotes = ['No one can make you ', 'What seems to us as ', 'Success is walking from ', 'The starting point of ', 'All progress ', 'The only place where success comes ', 'Be content to act '];
mQuotes = ['feel inferior ', 'bitter trials are ', 'failure to failure ', 'all achievement ', 'takes place ', 'before work is ', ' and leave '];
eQuotes = ['without your consent ', 'often blessings in disguise', 'with no loss of enthusiasm', 'is desire', 'outside the comfort zone', 'in the dictionary', 'the talking to others'];

var quotationsSuccess = new Quotations(0, bQuotes, mQuotes, eQuotes, pQuotes);

bQuotes = ['Life is a journey ', 'I\'ve learned that people will forget what you said ', 'Security is when everything is settled ', 'There is no stress in the world '];
mQuotes = ['and if you fall in love with the journey ', 'people will forget what you did ', 'when nothing can happen to you ', 'only people thinking stressful thoughts '];
eQuotes = ['you will be in love forever', 'but people will never forget how you made them feel', 'security is the denial of life', 'and then acting on them'];

var quotationsLife = new Quotations(1, bQuotes, mQuotes, eQuotes, pQuotes);

keepGenerate = -1;

do {
  (function () {
    var quantity, type;

    do {
      quantity = parseInt(prompt('Enter the number of quotes between 1 and 5 to be generated:'));
      console.log(quantity);
    } while (quantity < 1 || quantity > 5);

    do {
      type = parseInt(prompt('Enter  0  for  quotes about success or 1 for quotes about life:'));
      console.log(type);
    } while (type !== 0 && type !== 1);

    var quotes = (type === 0) ? quotationsSuccess : quotationsLife;
    for (var i = 0; i < quantity; i++) {
      console.log(quotes.generateQuote());
    }
    var answer = prompt('Do you want to generate more quotes ? (Y/N)');
    keepGenerate = (answer.toUpperCase() === 'Y') ? 1 : 0;
  }());
} while (keepGenerate === 1);

