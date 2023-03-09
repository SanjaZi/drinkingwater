const drinkingglasses = document.querySelectorAll('.drinkingglasses');
const bigglass = document.getElementById('bigglass');

let counter = 0;
let reversedcounter = 100;



drinkingglasses.forEach(element => {
   element.addEventListener('click', function(e) {
        counter += 12.5;
        reversedcounter -=12.5;
        let counterpercent = counter + "%";
        let reversedcounterpercent = reversedcounter + "%";
        bigglass.style.background = `linear-gradient(to top, #d4f1f9 ${counterpercent}, #ffffff ${counterpercent})`;
        // bigglass.style.background = `linear-gradient(180deg, #ffffff ${reversedcounterpercent}, #d4f1f9 ${counterpercent})`;
        // element.classList.toggle("fullglass");
        element.style.background = "#d4f1f9"
        console.log(counterpercent);

    
    })
});

// linear-gradient(to top, red 85%, white)

//version with counter
// let counter = 0;
// let counterper = '0%';



// drinkingglasses.forEach(element => {
//    element.addEventListener('click', function(e) {
//         if (counter <= 2000) {
//         counter +=250;
//         bigglass.style.background = "linear-gradient(180deg, #ffffff 78%, #d4f1f9 12%)";
//         element.classList.toggle("fullglass");
//         // element.style.background = "#d4f1f9"
//         console.log(counter)
//     }
//     })
// });