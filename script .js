const stars1 = document.getElementById("stars1").querySelectorAll(".la-star");
const stars2 = document.getElementById("stars2").querySelectorAll(".la-star");
const stars3 = document.getElementById("stars3").querySelectorAll(".la-star");
const stars4 = document.getElementById("stars4").querySelectorAll(".la-star");

    for(star of stars1){
        star.addEventListener("click", function(){
            resetStars();
            this.style.color = "white";
            this.classList.add("las");
            this.classList.remove("lar");
            let previousStar = this.previousElementSibling;

            while(previousStar){
                previousStar.style.color = "white";
                previousStar.classList.add("las");
                previousStar.classList.remove("lar");
                previousStar = previousStar.previousElementSibling;
            }
        });

        star.addEventListener("click", function(){
            note.value = this.dataset.value;
        });

        star.addEventListener("mouseout", function(){
            resetStars(note.value);
        });
    }

    function resetStars(note = 0){
        for(star of stars1){
            if(star.dataset.value > note){
                star.style.color = "white";
                star.classList.add("lar");
                star.classList.remove("las");
            }else{
                star.style.color = "white";
                star.classList.add("las");
                star.classList.remove("lar");
            }
        }
    }

    for(star of stars2){
        star.addEventListener("click", function(){
            resetStars();
            this.style.color = "white";
            this.classList.add("las");
            this.classList.remove("lar");
            let previousStar = this.previousElementSibling;

            while(previousStar){
                previousStar.style.color = "white";
                previousStar.classList.add("las");
                previousStar.classList.remove("lar");
                previousStar = previousStar.previousElementSibling;
            }
        });

        star.addEventListener("click", function(){
            note.value = this.dataset.value;
        });

        star.addEventListener("mouseout", function(){
            resetStars(note.value);
        });
    }
    function resetStars(note = 0){
        for(star of stars2){
            if(star.dataset.value > note){
                star.style.color = "white";
                star.classList.add("lar");
                star.classList.remove("las");
            }else{
                star.style.color = "white";
                star.classList.add("las");
                star.classList.remove("lar");
            }
        }
    }

    for(star of stars3){
        star.addEventListener("click", function(){
            resetStars();
            this.style.color = "red";
            this.classList.add("las");
            this.classList.remove("lar");
            let previousStar = this.previousElementSibling;

            while(previousStar){
                previousStar.style.color = "red";
                previousStar.classList.add("las");
                previousStar.classList.remove("lar");
                previousStar = previousStar.previousElementSibling;
            }
        });

        star.addEventListener("click", function(){
            note.value = this.dataset.value;
        });

        star.addEventListener("mouseout", function(){
            resetStars(note.value);
        });
    }
    function resetStars(note = 0){
        for(star of stars3){
            if(star.dataset.value > note){
                star.style.color = "white";
                star.classList.add("lar");
                star.classList.remove("las");
            }else{
                star.style.color = "white";
                star.classList.add("las");
                star.classList.remove("lar");
            }
        }
    }
   
    for(star of stars4){
        star.addEventListener("click", function(){
            resetStars();
            this.style.color = "white";
            this.classList.add("las");
            this.classList.remove("lar");
            let previousStar = this.previousElementSibling;

            while(previousStar){
                previousStar.style.color = "white";
                previousStar.classList.add("las");
                previousStar.classList.remove("lar");
                previousStar = previousStar.previousElementSibling;
            }
        });

        star.addEventListener("click", function(){
            note.value = this.dataset.value;
        });

        star.addEventListener("mouseout", function(){
            resetStars(note.value);
        });
    }
    function resetStars(note = 0){
        for(star of stars4){
            if(star.dataset.value > note){
                star.style.color = "white";
                star.classList.add("lar");
                star.classList.remove("las");
            }else{
                star.style.color = "white";
                star.classList.add("las");
                star.classList.remove("lar");
            }
        }
    }