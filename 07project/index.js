
const buttons = document.querySelectorAll(".button");

function log(e, button) {
  if (e.target.id === button.id) {
    document.querySelector("body").style.backgroundColor = button.id;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});

document.getElementById("blue").addEventListener("click",function()
{
    alert('Hii Himanshu');
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});

document.getElementById("green").addEventListener("click",function()
{
    alert('Hii');
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});

document.getElementById("grey").addEventListener("click",function()
{
    alert('Hii body');
});buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});

document.getElementById("yellow").addEventListener("click",function()
{
    alert('love you');
});




document.getElementById("grey").addEventListener("click",function()
{
    function getrandomcolor()
    {
        var letters ="0123456789ABCDEF";
        var color = "#";
        for(var i =0;i < 6; i++)
        {
            color =color + letters[Math.floor(Math.random() *16)];

        }
        return color;
    }
    document.querySelector("body").style.backgroundColor = getrandomcolor();
}
);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
          let color = '#';
          for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
  }
  
   const random = document.querySelector("#random");
  random.addEventListener('click', ()=>{
    let color = getRandomColor();
    document.querySelector("body").style.backgroundColor = color;
  })
  
  
  function automaticFunction() {
    let color = getRandomColor();
    document.querySelector("body").style.backgroundColor = color;
  }
  setInterval(automaticFunction, 1000);
  const interValid = setInterval(() =>{
    document.querySelector("body").style.backgroundcolor =  getRandomColor();
  }, 1000);
  buttons[6].addEventListener("click", () => clearInterval(interValid) );
