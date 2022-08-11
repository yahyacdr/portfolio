let body = document.querySelector('body')
let ani_icon = document.querySelector('.onload-animation')
let main = body.querySelector('main')
let footer = body.querySelector('footer')
let li = main.querySelector('li')
let projects_links = main.querySelector('.projects-links')
let panels = projects_links.querySelectorAll('.pro-panel')
let pro_panels = Array.from(projects_links.children)
let indicator = main.querySelectorAll('.indicators .img img')
let indicators = Array.from(indicator)
// let ul = document.querySelectorAll('.ul')
// let uls = Array.from(ul)
let plus_img = main.querySelectorAll('.plus-img')
let plus = Array.from(plus_img)
let clickables = body.querySelectorAll('.click')
let clicks = Array.from(clickables)
let email = document.getElementById('email')
let copy_panel = footer.querySelector('.copyPanel')
let menu_icon = body.querySelector('.menu-icon')
let nav_mobile = body.querySelector('.mobile-nav')
let servicesDiv = main.querySelector('div.services')
let servicesA = body.querySelectorAll('a.services')
let edu = main.querySelectorAll('.education .certificates .edu')
let get_call = footer.querySelector('footer > .contact .title .gradient-title')
let footer_a = footer.querySelectorAll('footer > .contact .social .button a')
let aboutMe = main.querySelector('.about-me')
let education = main.querySelector('.education')
let projects = main.querySelector('.projects-head')
let scrollButton = body.querySelectorAll('.scroll')
let aboutMeImgs = aboutMe.querySelectorAll('.collection-img .col-md-10')
main.setAttribute('style', 'opacity: 0')
footer.setAttribute('style', 'opacity: 0')
window.onload = function (e) {
    setTimeout(() => {
        ani_icon.setAttribute('style', 'opacity: 0 !important;')
    }, 2000);
    setTimeout(() => {
        ani_icon.setAttribute('style', 'display: none !important')
        main.removeAttribute('style')
        footer.removeAttribute('style')
    }, 2350)
}

let listeners = []
let r = 0
/* TRY TO REDUCE NUMBER OF EVENT LISTENERS */
email.addEventListener('copy', (e) => {
    e.preventDefault()
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', email.textContent)
    }
})
indicators[1].onclick = function () {
    r++
    for (let i = 0; i < pro_panels.length; i++) {
        pro_panels[i].style.transform = `translateX(-${100 * r}%)`
        pro_panels[i].style.transition = `transform 500ms ease 0s`
        if (r === pro_panels.length) {
            r = shiftElementL(r)
        }
    }
}
indicators[0].onclick = function () {
    shifted = false
    r--
    for (let i = 0; i < pro_panels.length; i++) {

        if (r < 0) {
            shifted = shiftElementR(r)
            r = (pro_panels.length - 1)
        } else if (shifted === false) {
            pro_panels[i].style.transform = `translateX(${100 * -r}%)`
            pro_panels[i].style.transition = `transform 500ms ease 0s`
            shifted = false
        }
    }
}

let shiftElementL = function (r) {
    pro_panels.forEach((panel) => {
        panel.style.transform = `translateX(${0}%)`
    })
    return 0
}

let shiftElementR = function (l) {
    pro_panels.forEach((panel) => {
        panel.style.transform = `translateX(-${pro_panels.length - 1}00%)`
    })
    return true
}
let click = 0
edu.forEach((edu, i) => {
    edu.addEventListener('click', function () {
        click++
        let img = edu.querySelector('.plus-img')
        // setTimeout(function () {
        //     img.previousElementSibling.classList.toggle('active')
        // }, 500)
        if (click % 2 === 0) {
            setTimeout(function () {
                img.previousElementSibling.classList.remove('active-inc')
                img.previousElementSibling.classList.add('active-dec')
            }, 500)
            img.classList.remove('active-for')
            img.classList.add('active-bac')
        } else {
            setTimeout(function () {
                img.previousElementSibling.classList.remove('active-dec')
                img.previousElementSibling.classList.add('active-inc')
            }, 500)
            img.classList.remove('active-bac')
            img.classList.add('active-for')
        }
    })
    edu.addEventListener('mouseover', function () {
        edu.style.setProperty('--animation-name', 'fillLine')
    })
    edu.addEventListener('mouseout', function () {
        edu.style.setProperty('--animation-name', 'emptyLine')
    })
})
// use oop to solve it
let clicksObj = []
clicks.forEach((click, i) => {
    clicksObj[i] = new Object
    clicksObj[i].element = click
    clicksObj[i].clicked = false
})

clicks.forEach((click, i) => {
    click.addEventListener('click', function (e) {
        if (!clicksObj[i].element.hasChildNodes()) {
            if (clicksObj[i].clicked === false) {
                clicksObj[i].element.classList.add('clicked')
                clicksObj[i].clicked = true
            }
            for (let j = 0; j < clicks.length; j++) {
                if (j !== i) {
                    clicksObj[j].element.classList.remove('clicked')
                    clicksObj[j].clicked = false
                }
            }
        } else {
            if (clicksObj[i].element.parentNode.classList.contains('email')) {
                document.execCommand('copy')
                copy_panel.classList.add('copy-anime')
                setTimeout(() => {
                    copy_panel.classList.remove('copy-anime')
                }, 650);
            }
            e.stopPropagation()
            if (clicksObj[i].clicked === false) {
                clicksObj[i].element.classList.add('clicked')
                clicksObj[i].clicked = true
            }
            for (let j = 0; j < clicks.length; j++) {
                if (j !== i) {
                    clicksObj[j].element.classList.remove('clicked')
                    clicksObj[j].clicked = false
                }
            }
        }
    }, true)
})

body.addEventListener('click', function (e) {
    if (!e.target.classList.contains('click')) {
        clicks.forEach((click, j) => {
            click.classList.remove('clicked')
            clicksObj[j].clicked = false
        })
    }
})

let c = 0
menu_icon.addEventListener('click', function () {
    c++
    if (c % 2 === 0) {
        nav_mobile.classList.add('curtain_up')
        setTimeout(() => {
            main.removeAttribute('style')
        }, 350)
        nav_mobile.removeAttribute('style')
        nav_mobile.classList.remove('curtain_down')
    } else {
        main.style.zIndex = '-3'
        nav_mobile.classList.add('curtain_down')
        setTimeout(() => {
            nav_mobile.style.zIndex = '1'
        }, 380)
        nav_mobile.classList.remove('curtain_up')
    }
})

scrollButton.forEach((button) => {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        if (e.target.classList.contains('about')) {
            aboutMe.scrollIntoView()
        }
        if (e.target.classList.contains('experience')) {
            education.scrollIntoView()
        }
        if (e.target.classList.contains('services')) {
            servicesDiv.scrollIntoView()
        }
        if (e.target.classList.contains('project')) {
            projects.scrollIntoView()
        }
    })
})

get_call.addEventListener('mouseover', function () {
    get_call.style.setProperty('--animation-name', 'stretchLineFor')
})
get_call.addEventListener('mouseout', function () {
    get_call.style.setProperty('--animation-name', 'stretchLineBac')
})

footer_a.forEach((a) => {
    a.addEventListener('mouseover', function () {
        a.style.setProperty('--animation-name', 'stretchALineFor')
    })
    a.addEventListener('mouseout', function () {
        a.style.setProperty('--animation-name', 'stretchALineBac')
    })
})

if (window.matchMedia("(min-width: 1024px)").matches) {
    aboutMeImgs.forEach((imgContainer) => {
        if (imgContainer.classList.contains('head-img')) {
            workHome = imgContainer.querySelector('.work-home')
            workHome.src = 'img/Backgrounds/at-computer-top-perfect1.jpg
'
        }
        if (imgContainer.classList.contains('mid-img')) {
            midImg = [...imgContainer.querySelectorAll('.mid')]
            midImg[0].src = '/img/Backgrounds/at-computer-mid-1-resized-perfect.jpg'
            midImg[1].src = '/img/Backgrounds/at-computer-mid-2-resized-perfect.jpg'
        }
        if (imgContainer.classList.contains('foot-img')) {
            workHome = imgContainer.querySelector('.hold-phone')
            workHome.src = '/img/Backgrounds/hold-phone-lg.png'
        }
    })
}
