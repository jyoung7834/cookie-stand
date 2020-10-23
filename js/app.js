'use strict';
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// var parentElement = document.getElementById('cookie-stand');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var hourTotalArray = [];
var grandTotal = 0;
var allStores = [];
var salmonCookiesTable = document.getElementById('salmonCookiesTable');


//create object(s) - create ONE first! with the given data/properties // Get Date
// var seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avgCookies: 6.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,

//   calcCookiesSoldPerHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var numberCustomers = randomNumber(this.min, this.max);
//       var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
//       this.dailyTotal += cookiesPerHour;
//       this.cookiesSoldPerHourArray.push(cookiesPerHour);
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldPerHour();

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.key;
//     article.appendChild(h2);

//     var ul = document.createElement('ul');
//     ul.textContent = this.name;
//     article.appendChild(ul);

//     // most relevant part for lab-06
//     for (var i = 0; i < hours.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       ul.appendChild(li);
//     }
//     li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     ul.appendChild(li);
//   }
// };

//SALMON COOKIES CONSTRUCTOR
function Store(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHourArray = [];
  this.dailyTotal = 0;
  allStores.push(this);
}
Store.prototype.calcCookiesSoldPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var numberCustomers = randomNumber(this.min, this.max);
    var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookies);
    this.cookiesSoldPerHourArray.push(cookiesPerHour);
    this.dailyTotal += cookiesPerHour;
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldPerHour();
  // create row
  var tr = document.createElement('tr');
  // give row content
  // create td FOR NAME
  var td = document.createElement('td');
  // give td content
  td.textContent = this.name;
  // append to row
  tr.appendChild(td);
  // create tds for hours ARRAY
  // for(var i = 0; i < this.cookiesPerHour[i]; i++){
  for (var i = 0; i < hours.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);

  salmonCookiesTable.appendChild(tr);
};

function renderHeader() {
  var tr = document.createElement('tr');
  // give row content
  // create td FOR NAME
  var td = document.createElement('td');
  // give td content
  td.textContent = '';
  // append to row
  tr.appendChild(td);
  for (var i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  tr.appendChild(td);

  salmonCookiesTable.appendChild(tr);
}

function renderFooter() {
  var tr = document.createElement('tr');
  // give row content
  // create td FOR NAME
  var td = document.createElement('td');
  // give td content
  td.textContent = 'Totals';
  // append to row
  tr.appendChild(td);
  for (var i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hourTotalArray[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  salmonCookiesTable.appendChild(tr);
}




var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

renderHeader();

seattle.render();
tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
calcTotals();
renderFooter();




function calcTotals() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesSoldPerHourArray[i];
    }
    hourTotalArray.push(hourlyTotal);
    grandTotal += hourlyTotal;
  }
}















