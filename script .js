//create element 
const star_first = document.createElement("i"); 
const star_second = document.createElement("i"); 
const star_third = document.createElement("i"); 
const star_four = document.createElement("i"); 
const star_five = document.createElement("i"); 
const block1 = document.createElement("div"); 

block1.className = "stars"; 

//star 1
star_first.className = "lar la-star"; 
star_first.id = "stars1";
star_first.setAttribute("data-value", "1");

//star 2
star_second.className = "lar la-star"; 
star_second.id = "stars2";
star_second.setAttribute("data-value","2"); 

//star 3
star_third.className = "lar la-star"; 
star_third.id = "stars3";
star_third.setAttribute("data-value","3"); 

//star 4
star_four.className = "lar la-star"; 
star_four.id = "stars4";
star_four.setAttribute("data-value","4"); 

//star 5
star_five.className = "lar la-star"; 
star_five.id = "stars5";
star_five.setAttribute("data-value","5"); 

//append in div 
block1.appendChild(star_first);
block1.appendChild(star_second);
block1.appendChild(star_third);
block1.appendChild(star_four);
block1.appendChild(star_five);

//append in body
document.body.appendChild(block1);

// css part 
Object.assign(document.body.style,{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

//star 1 
const star10 = document.getElementById("stars1"); 
Object.assign(star10.style, {
    color: "#777771",
    fontSize: "120px"
});

//star 2 
const star20 = document.getElementById("stars2"); 
Object.assign(star20.style, {
    color: "#777771",
    fontSize: "120px"
});

//star 3
const star30 = document.getElementById("stars3"); 
Object.assign(star30.style, {
    color: "#777771",
    fontSize: "120px"
});

//star 4
const star40 = document.getElementById("stars4"); 
Object.assign(star40.style, {
    color: "#777771",
    fontSize: "120px"
});

//star 5
const star50 = document.getElementById("stars5"); 
Object.assign(star50.style, {
    color: "#777771",
    fontSize: "120px"
});


//end css 

// part script 

// array for star 

const ele = [star10,star20,star30,star40,star50];

// void reset 

function reset_star() {
    for (let index = 0; index < ele.length; index++) {
        ele[index].style.color = "#777771";
        ele[index].classList.remove("las");
    }
};

// void each star 

function color_all_star(size,color) {
    reset_star();
    for (let index = 0; index < size; index++) {
        ele[index].style.color = color;
        ele[index].classList.add("las");
    }
}

// call function all star 

star10.addEventListener("click", function(){
    if (star10.style.color === "rgb(229, 48, 234)"){
        color_all_star(ele.length-4,"#777771");
        star10.classList.remove("las");
    }else{
    color_all_star(ele.length-4,"#e530ea");
    }
});

star20.addEventListener("click", function(){
    color_all_star(ele.length-3,"#e530ea");
});

star30.addEventListener("click", function(){
    color_all_star(ele.length-2,"#e530ea");
});

star40.addEventListener("click", function(){
    color_all_star(ele.length-1,"#e530ea");
});

star50.addEventListener("click", function() {
    color_all_star(ele.length,"#e530ea");
});

if (star10.style.color === "#e530ea"){
    color_all_star(ele.length-4,"#e530ea");
}; 