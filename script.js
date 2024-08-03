const imageThumb = document.querySelectorAll('.karya .thumb');
imageThumb.forEach(thumbnail => {
    const imageUrl = thumbnail.getAttribute('data-thumbnail');
    thumbnail.style.backgroundImage = `url(${imageUrl})`;
});




const buttonTheme = document.querySelector('.changeTheme input');
const indikator = document.querySelector('.changeTheme .check')

const colorLight = document.querySelectorAll("[data-theme='color-light']");
const colorLight2 = document.querySelectorAll("[data-theme='color-light-2']");
const colorHeaderandFooter = document.querySelectorAll("[data-theme='style-background-gradient']");
const textLight = document.querySelectorAll("[data-theme='text-light']");

const textDark = document.querySelectorAll("[data-theme='text-dark']");
const colorDark = document.querySelectorAll("[data-theme='color-dark']")

console.log(colorHeaderandFooter);

buttonTheme.addEventListener("click", () => {
    if (buttonTheme.checked) {

        // Change Color 1 to Mode Dark
        for (let i = 0; i < colorLight.length; i++) {
            colorLight[i].style.backgroundColor = `var(--background-dark-2)`;
        }

        // Change Color Header n Footer to Mode Dark
        for (let i = 0; i < colorHeaderandFooter.length; i++) {
            colorHeaderandFooter[i].style.background = `var(--style-background-gradient-dark)`;
        }

        // Change Color 2 to Mode Dark
        for (let i = 0; i < colorLight2.length; i++) {
            colorLight2[i].style.backgroundColor = `var(--background-dark)`;
        }

        // Change Color Dark for Mode Dark
        for (let i = 0; i < colorDark.length; i++) {
            colorDark[i].style.backgroundColor = `var(--background-light)`;
        }

        // Change Text (Dark => Light) from Mode Dark
        for (let i = 0; i < textDark.length; i++) {
            textDark[i].style.color = `var(--background-light)`;
        }

        // Change Text (Light => Dark) from Mode Dark
        for (let i = 0; i < textLight.length; i++) {
            textLight[i].style.color = `var(--background-dark-2)`;
        }
    } else {

        // Change Color 1 to Mode Light
        for (let i = 0; i < colorLight.length; i++) {
            colorLight[i].style.backgroundColor = `white`
            colorLight[i].style.color = `white`;
        }

        // Change Color Header n Footer to Mode Light
        for (let i = 0; i < colorHeaderandFooter.length; i++) {
            colorHeaderandFooter[i].style.background = `var(--style-background-gradient)`;
        }

        // Change Color 2 to Mode Light
        for (let i = 0; i < colorLight2.length; i++) {
            colorLight2[i].style.backgroundColor = `var(--background-light-2)`;
        }

        // Change Text Color to Mode Light
        for (let i = 0; i < textDark.length; i++) {
            textDark[i].style.color = `var(--background-dark-2)`;
        }

        // Change Text (Light => Dark) from Mode Dark
        for (let i = 0; i < colorDark.length; i++) {
            colorDark[i].style.backgroundColor = `var(--background-dark-2)`;
        }

        // Change Text (Dark => Light) from Mode Dark
        for (let i = 0; i < textLight.length; i++) {
            textLight[i].style.color = `var(--background-light)`;
        }
    }
})



const sun = document.querySelector('label.modedarkmobile .indicator i.fa-sun');
const moon = document.querySelector('label.modedarkmobile .indicator i.fa-moon');
const changeThemeMobile = document.querySelector('label.modedarkmobile input');

changeThemeMobile.addEventListener("click", () => {
    if (changeThemeMobile.checked) {
        // Change Color 1 to Mode Dark
        for (let i = 0; i < colorLight.length; i++) {
            colorLight[i].style.backgroundColor = `var(--background-dark-2)`;
        }

        // Change Color Header n Footer to Mode Dark
        for (let i = 0; i < colorHeaderandFooter.length; i++) {
            colorHeaderandFooter[i].style.background = `var(--style-background-gradient-dark)`;
        }

        // Change Color 2 to Mode Dark
        for (let i = 0; i < colorLight2.length; i++) {
            colorLight2[i].style.backgroundColor = `var(--background-dark)`;
        }

        // Change Color Dark for Mode Dark
        for (let i = 0; i < colorDark.length; i++) {
            colorDark[i].style.backgroundColor = `var(--background-light)`;
        }

        // Change Text (Dark => Light) from Mode Dark
        for (let i = 0; i < textDark.length; i++) {
            textDark[i].style.color = `var(--background-light)`;
        }

        // Change Text (Light => Dark) from Mode Dark
        for (let i = 0; i < textLight.length; i++) {
            textLight[i].style.color = `var(--background-dark-2)`;
        }
    } else {
        // Change Color 1 to Mode Light
        for (let i = 0; i < colorLight.length; i++) {
            colorLight[i].style.backgroundColor = `white`
            colorLight[i].style.color = `white`;
        }

        // Change Color Header n Footer to Mode Light
        for (let i = 0; i < colorHeaderandFooter.length; i++) {
            colorHeaderandFooter[i].style.background = `var(--style-background-gradient)`;
        }

        // Change Color 2 to Mode Light
        for (let i = 0; i < colorLight2.length; i++) {
            colorLight2[i].style.backgroundColor = `var(--background-light-2)`;
        }

        // Change Text Color to Mode Light
        for (let i = 0; i < textDark.length; i++) {
            textDark[i].style.color = `var(--background-dark-2)`;
        }

        // Change Text (Light => Dark) from Mode Dark
        for (let i = 0; i < colorDark.length; i++) {
            colorDark[i].style.backgroundColor = `var(--background-dark-2)`;
        }

        // Change Text (Dark => Light) from Mode Dark
        for (let i = 0; i < textLight.length; i++) {
            textLight[i].style.color = `var(--background-light)`;
        }
    }
})