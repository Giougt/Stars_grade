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
    color: "#f5e609",
    fontSize: "100px"
});

//star 2 
const star20 = document.getElementById("stars2"); 
Object.assign(star20.style, {
    color: "#f5e609",
    fontSize: "100px"
});

//star 3
const star30 = document.getElementById("stars3"); 
Object.assign(star30.style, {
    color: "#f5e609",
    fontSize: "100px"
});

//star 4
const star40 = document.getElementById("stars4"); 
Object.assign(star40.style, {
    color: "#f5e609",
    fontSize: "100px"
});

//star 5
const star50 = document.getElementById("stars5"); 
Object.assign(star50.style, {
    color: "#f5e609",
    fontSize: "100px"
});

Object.assign(input_result.style,{
    marginLeft: "50px"
})

//end css 

function value(){
    star10.addEventListener("click", function(){
        star10.style.color = "red"; 
    });
}

value();