//Returns a random rgb color value
function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

/*let color = randColor();
console.log(color);
document.getElementsByClassName('first')[0].style.backgroundColor = color;*/

//Returns height and width values for H or V split
function horv() { //Horizontal or Vertical
  let choice = Math.floor(Math.random() * 2);
  if (choice === 0) {
    //Vertical! height: 100% and width: 50%;
    return ['100%', '50%'];
  } else {
    //Horizontal! height 50% and width: 100%;
    return ['50%', '100%'];
  }
}

//Splits a div by adding 2 children
function split(node) {
  if (node.children.length === 0) { //Make sure this node has no children

    //Create or clone a new div
    let child1 = node.cloneNode();
    node.appendChild(child1);

    //Assign height and width values to them
    let dim = horv();
    child1.style.height = dim[0];
    child1.style.width = dim[1];

    //Assign random background color to them
    child1.style.backgroundColor = randColor();

    //Remove the class value
    child1.classList.remove('first');

    //Clone and copy the child div
    let child2 = child1.cloneNode();
    node.appendChild(child2);

    //Add event listeners to each
    listenClick(child1); //QUESTION - will an eventlistener get cloned? Nope.
    listenClick(child2);
  }
}

split(document.getElementsByClassName('first')[0]);

//Adds an event listener to a div
function listenClick(node) {
  //Add an event listener that invokes the split function
  node.addEventListener('click', function () {
    split(node);
  });
}

//Call the listenclick function to initialize the original div
listenClick(document.getElementsByClassName('first')[0]);
