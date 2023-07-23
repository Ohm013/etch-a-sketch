const container = document.querySelector('#container');
const rainbow = document.querySelector('#rainbow');
const restart = document.querySelector("#restart");





function makeDivs (numDivs) {
      


  restart.addEventListener('click', function(e) {
    white(); 
    let question = prompt("How many squares on each side? (Enter only one number) "); 
    numDivs = question ** 2; 
    let eachSquare = 384000 / (question **2)  // area of each square
    let wL = Math.sqrt(eachSquare);  // gets width & length of each square
 
    for (i = 0; i < numDivs ; i++ ){
          numDivs = question ** 2; 
          const div = document.createElement('div'); 
          div.classList.add('squares'); 
          div.style.cssText = `border: 1px solid black; width: ${wL}px ; height ${wL}px`; 
          container.appendChild(div);
       };
   });
  };

makeDivs(); 


//make button to clear grid.
// make button to change size of grid.

function white () { //resets all squares to white when reset is clicked
  const boxes = document.querySelectorAll('.squares') ;
    boxes.forEach(square => square.style.background = "white");
}


function changeColor (target) {
  target.style.backgroundColor = "black" ; 
}

container.addEventListener('mouseover', function(e) {
    target = e.target ;

    if (target.matches = "div.squares") {
      changeColor(target) ; 
}
})








//function startColor () {
  //  div.addEventListener('mouseover', function(e)  {
    //e.target.style.background = 'black';        
//})};








function rgb () {
  rainbow.addEventListener('click', beginrgb); 
  console.log(rgbColor); 
}

function beginrgb() {
    let x = Math.floor(Math.random() *256);
    let y = Math.floor(Math.random() *256);
    let z = Math.floor(Math.random() *256);
    var rgbColor = "rgb("+ x +", "+ y +", "+ z + ")"; 
    
    container.addEventListener('mouseover', function(e) {
      if (e.target.matches = "div.squares") {
        e.target.style.background = rgbColor ;
      }
  });
};