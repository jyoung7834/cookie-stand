'use strict';

var parentElement = document.getElementById('cookie-stand');
function cookies() {

}
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//create object(s) - create ONE first! with the given data/properties // Get Date

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++){
      var numberCustomers = randomNumber(this.min, this.max);
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
      this.dailyTotal += cookiesPerHour;
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = `At minimun the ${this.name} store has ${this.min} customers and a maximum of ${this.max} customers a day.`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    ul.textContent = this.name;
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    ul.appendChild(li);
  }
};

var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++){
      var numberCustomers = randomNumber(this.min, this.max);
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
      this.dailyTotal += cookiesPerHour;
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    ul.textContent = this.name;
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    ul.appendChild(li);
  }
};

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++){
      var numberCustomers = randomNumber(this.min, this.max);
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
      this.dailyTotal += cookiesPerHour;
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    ul.textContent = this.name;
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    ul.appendChild(li);
  }
};

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++){
      var numberCustomers = randomNumber(this.min, this.max);
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
      this.dailyTotal += cookiesPerHour;
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    ul.textContent = this.name;
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    ul.appendChild(li);
  }
};

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++){
      var numberCustomers = randomNumber(this.min, this.max);
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
      this.dailyTotal += cookiesPerHour;
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = `At minimun the ${this.name} store has ${this.min} customers and a maximum of ${this.max} customers a day.`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    ul.textContent = this.name;
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    ul.appendChild(li);
  }
};



// helper function to get random number code used from MDN docs:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Gloval_Objects/Math/random

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




//make sure to call all object
// seattle.getNum();
seattle.render();
tokyo.render();




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
