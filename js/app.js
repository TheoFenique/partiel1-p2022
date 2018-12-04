const imgSet1 = {
    block : document.querySelector('.imageBlock1'),
    src : document.querySelector('.littleImage1').getAttribute('src')
}

const imgSet2 = {
    block : document.querySelector('.imageBlock2'),
    src : document.querySelector('.littleImage2').getAttribute('src')
}

const imgSet3 = {
    block : document.querySelector('.imageBlock3'),
    src : document.querySelector('.littleImage3').getAttribute('src')
}

const imgSet4 = {
    block : document.querySelector('.imageBlock4'),
    src : document.querySelector('.littleImage4').getAttribute('src')
}

const imgSet5 = {
    block : document.querySelector('.imageBlock5'),
    src : document.querySelector('.littleImage5').getAttribute('src')
}

const imgSet6 = {
    block : document.querySelector('.imageBlock6'),
    src : document.querySelector('.littleImage6').getAttribute('src')
}

const imgSet7 = {
    block : document.querySelector('.imageBlock7'),
    src : document.querySelector('.littleImage7').getAttribute('src')
}

const bigImage = document.querySelector('.bigImage')
const containerActive = document.querySelector('.containerActive')
const cross = document.querySelector('.cross')


const close = () =>
{
    containerActive.classList.remove('active')
}






cross.addEventListener('click', ()=>
{
    containerActive.classList.remove('active')
})

imgSet1.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet1.src)
    containerActive.classList.add('active')
})

imgSet2.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet2.src)
    containerActive.classList.add('active')
})

imgSet3.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet3.src)
    containerActive.classList.add('active')
})

imgSet4.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet4.src)
    containerActive.classList.add('active')
})

imgSet5.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet5.src)
    containerActive.classList.add('active')
})

imgSet6.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet6.src)
    containerActive.classList.add('active')
})

imgSet7.block.addEventListener('click', () =>
{
    bigImage.setAttribute('src', imgSet7.src)
    containerActive.classList.add('active')
})


