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

let rellax = new Rellax('.rellax');

AOS.init({
    offset: 700,
    duration: 1000
});

