const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const increment = document.getElementById("increase");
const reset = document.getElementById("reset");

let value = Number.parseInt(counter.innerText);

const counterDecrease = ()=>{
    if (value<0)
    {
        counter.style.color = "maroon";
    }
    value--;
    counter.innerText = value;
}


const counterIncrease = ()=>{
    if (value>0)
    {
        counter.style.color = "rgb(0, 117, 0)";
    }
    value++;
    counter.innerText = value;
}

const counterReset = ()=>{
    value = 0;
    counter.style.color = "black";
    counter.innerText = value;
}

decrease.addEventListener("click", ()=>{
    counterDecrease();
})

reset.addEventListener("click", ()=>{
    counterReset();
})

increment.addEventListener("click", ()=>{
    counterIncrease();
})