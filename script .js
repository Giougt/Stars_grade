const input_result = document.createElement("input"); 
document.body.appendChild(input_result);

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
    fontSize: "100px"
});

//star 2 
const star20 = document.getElementById("stars2"); 
Object.assign(star20.style, {
    color: "#777771",
    fontSize: "100px"
});

//star 3
const star30 = document.getElementById("stars3"); 
Object.assign(star30.style, {
    color: "#777771",
    fontSize: "100px"
});

//star 4
const star40 = document.getElementById("stars4"); 
Object.assign(star40.style, {
    color: "#777771",
    fontSize: "100px"
});

//star 5
const star50 = document.getElementById("stars5"); 
Object.assign(star50.style, {
    color: "#777771",
    fontSize: "100px"
});

Object.assign(input_result.style,{
    marginLeft: "50px"
})

//end css 

// part script 

const ele = [star10,star20,star30,star40,star50];

// void reset 

function reset_star() {
    for (let index = 0; index < ele.length; index++) {
        ele[index].style.color = "#777771";
    }
};

// void each star 
    star10.addEventListener("click", function(){
        reset_star(); 
        star10.style.color = "#e530ea";
        
    });

    star20.addEventListener("click", function(){
        reset_star(); 
        for (let index = 0; index < ele.length-3; index++) {
            ele[index].style.color = "#e530ea";
        }
    });

    star30.addEventListener("click", function(){
        reset_star(); 
        for (let index = 0; index < ele.length-2; index++) {
            ele[index].style.color = "#e530ea";
        }
    });

    star40.addEventListener("click", function(){
        reset_star(); 
        for (let index = 0; index < ele.length-1; index++) {
            ele[index].style.color = "#e530ea";
        }
    });

    star50.addEventListener("click", function(){
        reset_star(); 
        for (let index = 0; index < ele.length; index++) {
            ele[index].style.color = "#e530ea";
        }
    });
