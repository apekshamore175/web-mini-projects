function getRandomColor(){
    // const letters = "0123456789ABCDEF";
    // let color = "#";
    // for(let i = 0; i < 6 ; i ++){
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
     let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;

}

let button = document.querySelector("#flipBtn");
let colorCode = document.querySelector("#colorCode");

button.addEventListener("click", function(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
});

