'use strict';

var parentElement = document.getElementById('cookie-stand');
//create objece(s) - create ONE first! with the given data/properties // Get Date

var seattle = {
  name: ('Seattle'),
  min: 23,
  max: 65,
  avgCookies: 6.3,
  numberCustomers: 44,
  hourCookies: ['6am: 16 cookies', '7am: 20 cookies', '8am: 35 cookies', '9am: 48 cookies', '10am: 56 cookies', '11am: 77 cookies', '12pm: 93 cookies', '1pm: 144 cookies', '2pm: 119 cookies', '3pm: 84 cookies', '4pm: 61 cookies', '5pm: 23 cookies', '6pm: 42 cookies', '7pm: 57 cookies', 'Total: 875 cookies'],


  getNum: function () {
    this.numberCustomers = `${randomNumber(23, 65)}`;
    console.log(`${this.name} has ${this.numberCustomers} customers on average a day`);
  },
  render: function () {
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = `At minimun ${this.name} has ${this.min} customers and a maximum of ${this.max} customers a day.`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < this.hourCookies.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.hourCookies[i];
      ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', 'images/salmon.png');
    img.setAttribute('alt', `what the image is about ${this.key}`);
    article.appendChild(img);
  }
};





// helper function to get random number code used from MDN docs:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Gloval_Objects/Math/random

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//make sure to call all object
seattle.getNum();
seattle.render();





// function get RandomIntInclusive(min, max) {
//   max = Math.ceil (max);
//   min = Math.floor (min);
//   return Math.floor(Math.random() * (max - min + 1);); //The maximum is inclusive and the minimum is inclusive.
// }


// 1. render to the dom.

// console.log(parentElement);

// when creating element - there is a pattern:
// create element 
//give it content
//append to the DOM
// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = object.key;
// article.appendChild(h2);

// var p = document.createElement('p');
// p.textContent = `${object.key} is blah blah and another ${object.key}`;
// article.appendChild(p);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// // most relevant part for lab-06
// for (var i = 0; i , object.the anArray.length; i++){
// var li = document.createElememnt('li');
// li.textContent = object.anArray[i];
// ul.appendChild(li);
// }

// var img = document.createElement('img');
// img.setAttribute('src', 'images.jpeg');
// img.setAttribute('alt', `what the image is about ${object.key}`);
// article.appendChild(img);

// 2. I want my render to be a METHOD of my object


// need to render:  article with h2, p ul, with ls, img -->
