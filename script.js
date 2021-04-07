//HIDE BACKGROUND
/*function hideBG()
{
    const smoke = document.querySelector('.bg2');
    const elem = document.querySelector('.images');
    const posOfImages = offset(elem).top;
    
    if (pageYOffset * 1.5 > posOfImages)
    {
        smoke.classList.add('_hide');
    }
    else
    {
        if (smoke.classList.contains('no_hide'))
            {
                smoke.classList.remove('_hide');
            }
    }
}*/
/////

//window.addEventListener('scroll', hideBG);

window.onload = function()
{
    const preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.classList.add('done');
    }, 1500);
}

let rellax = new Rellax('.rellax');

AOS.init();


//Congratulations! animation
const anim = document.querySelector('#anim');
const animText = anim.textContent;

const splitText = animText.split("");
anim.textContent = "";

for (let i = 0; i < splitText.length; i++)
{
    anim.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick()
{
    const span = anim.querySelectorAll('span')[char];
    span.classList.add("_active");
    char++;

    if (char === splitText.length)
    {
        complete();
        return ;
    }
}

function complete()
{
    clearInterval(timer);
    timer = null;
}
////////