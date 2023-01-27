const nav = document.getElementById('menu');
const btn = document.getElementById('menu-btn')

btn.addEventListener('click', () => {
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
