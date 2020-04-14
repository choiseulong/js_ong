const ADD_CLASS = "showCard";
const firstCard = document.querySelector(".container_item:first-child");
function card(){
    const currentCard = document.querySelector(`.${ADD_CLASS}`);
    if(currentCard){
        currentCard.classList.remove(ADD_CLASS);
        const nextCard = currentCard.nextElementSibling;
        if(nextCard){
            nextCard.classList.add(ADD_CLASS);
        } else{
            firstCard.classList.add(ADD_CLASS);
        }
    }else{
        firstCard.classList.add(ADD_CLASS);
    }
}
card();
setInterval(card, 2000);

document.querySelector("#top").addEventListener('click', function(){
    var body = document.getElementsByTagName("body")[0];
    window.scroll({
        behavior:'smooth',
        left:0,
        top:body.offsetTop,
    });
    });
document.querySelector("#bottom").addEventListener('click', function(){
    var body = document.getElementsByTagName("body")[0];
    window.scroll({
        behavior:'smooth',
        left:0,
        top:body.offsetHeight,
    });
}); 