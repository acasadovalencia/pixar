'use strict'

const headerSvg = document.querySelector('.Header-svg')
console.log(headerSvg)

const headerNav = document.querySelector('.Header-nav')
console.log(headerNav)

const svgPath = document.querySelectorAll('.Svg-path')
console.log(svgPath)

headerSvg.addEventListener('click' , function(){
    headerNav.classList.toggle('isActive')
    svgPath.forEach(function(each , i){
        svgPath[i].classList.toggle('isActive')
    })
})

