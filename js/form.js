`use strict`;

// function handleSumit() {
//   event.preventDefault();
};

var myContainer = document.getElementById('container');
var parentEl = document.getElementById('results');

function handleClick(event){
  console.log('event', event);
  console.log('the event.target is', event. target);
  console.log('the event.target.textContent ', event.target.textContent0);
  console.log('the event.target.id is ', event. target. id)

  if (event.target.id === 'storelocation') {
    var parentEl = document.createElement('p');
    parentEl.textContent = "name";
    parentEl.append(pEl);
  }

  if (event.target.id === "minCookies") {
    var parentEl = document.createElement('p');
    parentEl.textContent = "minCookies
  }

}



myContainer.addEventListener('click', handleClick); 