//PRELOADER
window.onload = function()
{
    const preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.classList.add('done');
    }, 2000);
}
/////