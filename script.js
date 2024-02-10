const img = document.querySelectorAll('.img')
const count = document.querySelector('.count')

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        img[i].classList.add('image')
        count.style = 'display: block;'
    })
    count.addEventListener('click', function() {
        img[i].classList.remove('image')
        count.style = 'display: none;'
    })
}