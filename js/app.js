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
const crossRight = document.querySelector('.crossRight')
const crossLeft = document.querySelector('.crossLeft')
const sources = 
[
    imgSet1.src,
    imgSet2.src,
    imgSet3.src,
    imgSet4.src,
    imgSet5.src,
    imgSet6.src,
    imgSet7.src
]
let state = 0


//Action into BIG image

const setImage = (imageState) =>
{
    state = imageState
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
    if(imageState === -1)
    {
        containerActive.classList.remove('active')
    }
}

cross.addEventListener('click', ()=>
{
    containerActive.classList.remove('active')
})

crossLeft.addEventListener('click', () =>
{
    state --
    bigImage.setAttribute('src', sources[state])
    if(state=== -1)
    {
        state = 6
    }
})

crossRight.addEventListener('click', () =>
{
    state ++
    bigImage.setAttribute('src', sources[state])
    if(state===6)
    {
        state = 0
    }
})



//Set BIG image

imgSet1.block.addEventListener('click', () =>
{
    state = 0
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})

imgSet2.block.addEventListener('click', () =>
{
    state = 1
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})

imgSet3.block.addEventListener('click', () =>
{
    state = 2
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})

imgSet4.block.addEventListener('click', () =>
{
    state = 3
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})

imgSet5.block.addEventListener('click', () =>
{
    state = 4
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})

imgSet6.block.addEventListener('click', () =>
{
    state = 5
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})

imgSet7.block.addEventListener('click', () =>
{
    state = 6
    bigImage.setAttribute('src', sources[state])
    containerActive.classList.add('active')
})





