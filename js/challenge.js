let time;
let counter = 0;
const timer = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const submit = document.querySelector("#submit")

document.addEventListener("DOMContentLoaded", () => {
   // counter
   function timerCount() { 
    time = setInterval(() => {
        counter++;
        timer.textContent = counter;
        }, 1000);
    };
    timerCount();
   
    // manual counter control
   function manualCC() {
    minus.addEventListener("click", function() {
        counter--;
        timer.textContent = counter;
       });
       plus.addEventListener("click", function() {
        counter++;
        timer.textContent = counter;
       })
   };
   manualCC();

   // like button
   function likeButton() {
    let clickCount = {};
    let lis = {};
    heart.addEventListener("click", function() {
        clickCount[counter] = (clickCount[counter] || 0) + 1;
        if (!lis[counter]) {
            const likes = document.querySelector(".likes")
            const li = document.createElement("li")
            lis[counter] = li;
            likes.appendChild(li);
        }
    
        const timetext = clickCount[counter] === 1 ? "time" : "times"
        lis[counter].textContent = `${counter} has been liked ${clickCount[counter]} ${timetext}`
        });
    };
   likeButton();

   // pause button
   function pauseButton() {
    pause.addEventListener("click", function() {   
        if (pause.textContent === " pause ") {
                clearInterval(time);
                pause.textContent = "resume";
                plus.disabled = true;
                minus.disabled = true;
                heart.disabled = true;
                submit.disabled = true;
            } else if (pause.textContent === "resume") {
                timerCount();
                pause.textContent = " pause "
                plus.disabled = false;
                minus.disabled = false;
                heart.disabled = false;
                submit.disabled = false;
            }
       });
   };
   pauseButton();

   // submit button
   function submitButton() {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const comment = document.getElementById("comment-input").value;
        const pComment = document.querySelector("div .comments")
        const newComment = document.createElement("p")
        newComment.textContent = comment;
        pComment.appendChild(newComment);
        document.getElementById("comment-input").value = "";
       });
   };
   submitButton();

});