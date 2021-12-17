const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const favColor = ()=>{
alert('my fav color is purple')
}
const favPlace = ()=>{
    alert('my fav palce.. is with you C;')
}
const favRitual = ()=>{
    alert('my fav ritual is going to sleep. because sleep is amazing.')
}

colorBtn.addEventListener('click',favColor)
placeBtn.addEventListener('click',favPlace)
ritualBtn.addEventListener('click',favRitual)