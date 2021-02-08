document.documentElement.getBoundingClientRect().top = -1400;

document.documentElement.getBoundingClientRect().bottom = 600;
let div = document.querySelector("div");
function populate(){
    while(true){
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if(windowRelativeBottom > document.documentElement.clientHeight + 100) break;

        document.body.insertAdjacentHTML("beforeend",randomQuotes());
    }
}

window.addEventListener("scroll",populate);
populate();


function randomQuotes(){

    let random = Math.floor(Math.random()*quotes.length);

    return `<p><strong>"${quotes[random].quoteText}"</strong> by ${quotes[random].quoteAuthor}</p>`;
}
// function populate(){
//     while(true){
//         let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

//         if(windowRelativeBottom > document.documentElement.clientHeight + 100) break;

//         div.insertAdjacentHTML("beforeend",`<p> Date: ${new Date()}<p>`)
//     }
// }

// window.addEventListener("scroll",populate);
// populate();

// function populate(){
//     while(true){
//         let windowRelativeBottom = div.getBoundingClientRect().bottom;

//         if(windowRelativeBottom > div.clientHeight + 100) break;

//         document.body.insertAdjacentHTML("beforeend",`<p> Date: ${new Date()}<p>`)
//     }
// }

// window.addEventListener("scroll",populate);
// populate();