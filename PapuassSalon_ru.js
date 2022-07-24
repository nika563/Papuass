let animIteams = document.querySelectorAll("._anim-iteams");

if (animIteams.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animIteams.length; i++) {
            const animIteam = animIteams[i];
            const animIteamHeight = animIteam.offsetHeight;
            const animIteamOffset = offset(animIteam).top;
            const animIteamStart = 4;

            let animIteamPoint = window.innerHeight - animIteamHeight / animIteamStart;
            if (animIteamHeight > window.innerHeight) {
                animIteamPoint = window.innerHeight - window.innerHeight / animIteamStart;
            }

            if ((pageYOffset > animIteamOffset - animIteamPoint) && pageYOffset < (animIteamOffset + animIteamHeight)) {
                animIteam.classList.add('_active');
            } else {
                if (!animIteam.classList.contains('.anim-no-hide')) {
                    animIteam.classList.remove('_active');
                }
            }
        }
    }
    function offset(e) {
        const rect = e.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    animOnScroll();
}
//?animation-scroll-end
let cursor = document.querySelector('.cursor');
let cursor0 = document.querySelector('.cursor0');

document.addEventListener('mousemove', function (e) {
    cursor.style.cssText = cursor0.style.cssText = "left: " + e.clientX + 'px; top:' + e.clientY + "px;";
})
//?animation-cursor-end