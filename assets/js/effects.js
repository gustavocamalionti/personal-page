const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const revealElementsLeft = document.querySelectorAll('.effect-reveal-to-left');
const revealElementsRight = document.querySelectorAll('.effect-reveal-to-right');
const revealElementsOpacity = document.querySelectorAll('.effect-reveal-opacity');
revealElementsLeft.forEach((el) => observer.observe(el));
revealElementsRight.forEach((el) => observer.observe(el));
revealElementsOpacity.forEach((el) => observer.observe(el));