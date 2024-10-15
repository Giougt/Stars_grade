Object.assign(document.body.style,{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const star_style = document.getElementsByClassName("lar la-star");
for (let i = 0; i < star_style.length; i++) {
    Object.assign(star_style[i].style, {
        color: "#f5e609",
        fontSize: "100px"
    });
}


const input_result = document.createElement("input"); 
document.body.appendChild(input_result);

Object.assign(input_result.style,{
    marginLeft: "50px"
})


function value(){
    stars10.addEventListener("click", function(){
        let a = document.getElementById("stars10").getAttribute("data-value");
        input_result.value= a; 
    });
}