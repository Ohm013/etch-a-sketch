const container = document.querySelector('#container');


function makeDivs (numDivs) {
    for (i = 0; i < numDivs ; i++ ){
    const div = document.createElement('div'); 
    div.classList.add('squares'); 
    div.style.cssText = "border: 1px solid black ; height: 30px ; width: 30px ;"; 
    container.appendChild(div);
} 

}
makeDivs(256) ; 

