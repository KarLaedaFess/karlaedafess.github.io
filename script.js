const animItems = document.querySelectorAll('.anim');

function offset(el)
{
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + screenLeft}
}

function animOnScroll()
{
    for (let i = 0; i < animItems.length; i++)
       {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 1;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight)
            {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight))
            {
                animItem.classList.add('_active');
            }
            else
            {
                if (!animItem.classList.contains('no-hide'))
                {
                    animItem.classList.remove('_active');
                }
            }
        }
}

function hideBG()
{
    const smoke = document.querySelector('.bg2');
    const elem = document.querySelector('.images');
    const posOfImages = offset(elem).top;
    console.log(posOfImages);
    console.log(pageYOffset);
    
    if (pageYOffset * 1.5 > posOfImages)
    {
        smoke.classList.add('_hide');
    }
}

if (animItems.length > 0)
{
    window.addEventListener('scroll', animOnScroll);
    animOnScroll();
}

window.addEventListener('scroll', hideBG);

let rellax = new Rellax('.rellax');

