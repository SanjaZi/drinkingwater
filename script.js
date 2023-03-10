const drinkingglasses = document.querySelectorAll('.drinkingglasses');
const bigglass = document.getElementById('bigglass');

let counter = 0;
let counterpercent = counter + "%";

drinkingglasses.forEach(element => {
   element.addEventListener('click', function(e) {
if (counter < 0) {
    counter = 0;
}

  if (element.classList.contains("clicked")){
    counter -=12.5;
    counterpercent = counter + "%";
    element.style.background = "white"
    bigglass.style.background = `linear-gradient(to top, #d4f1f9 ${counterpercent}, #ffffff ${counterpercent})`;
    element.classList.remove("clicked");
  } else {
    counter += 12.5;
    counterpercent = counter + "%";
    bigglass.style.background = `linear-gradient(to top, #d4f1f9 ${counterpercent}, #ffffff ${counterpercent})`;
    element.style.background = "#d4f1f9"
    element.classList.add("clicked");
    }
    })
});

