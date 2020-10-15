'use strict';

var parentElement = document.getElementById('cookie-stand');
//create objece(s) - create ONE first! with the given data/properties // Get Date

var object = {
    key: value, 
    key: value,
    Number: 
    anArray: ['', '', ''], 
    key: value,
    key: value,
    getNum: function () {
      this.number =`${randomNumber(0,0)} customers.`;
      console.log(`${this.key} is ${this.key}`);
    },
    render: function(){
      var article = document.createElement('article');
      parentElement.appendChild(article);
      
      var h2 = document.createElement('h2');
      h2.textContent = this.key;
      article.appendChild(h2);
      
      var p = document.createElement('p');
      p.textContent = `${this.key} is blah blah and another ${this.key}`;
      article.appendChild(p);
      
      var ul = document.createElement('ul');
      article.appendChild(ul);
      
      // most relevant part for lab-06
      for (var i = 0; i , this.the anArray.length; i++){
      var li = document.createElememnt('li');
      li.textContent = this.anArray[i];
      ul.appendChild(li);
      }
      
      var img = document.createElement('img');
      img.setAttribute('src', 'images.jpeg');
      img.setAttribute('alt', `what the image is about ${this.key}`);
      article.appendChild(img);  
    }
};





// helper function to get random number code used from MDN docs:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Gloval_Objects/Math/random

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//make sure to call all object
object.getNum();
object.render();



// function get RandomIntInclusive(min, max) {
//   min = Math.ceil (min);
//   max = Math.floor (max);
//   return Math.floor(Math.random() * (max - min + 1);); //The maximum is inclusive and the minimum is inclusive.
// }

    // 
// writ object

// if number is unknown get a randome number generator



// if age is unknow I want to get a random age between.

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
