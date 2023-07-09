const container = document.querySelector('#container');


function makeDivs (numDivs) {
    for (i = 0; i < numDivs ; i++ ){
    const div = document.createElement('div'); 
    div.style.cssText = "border: 1px solid black ; height: 25px ; width: 25px ;"; 
    container.appendChild(div);
} 

}
makeDivs(32) ; 

