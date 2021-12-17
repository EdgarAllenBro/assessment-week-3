console.log("hello world");

let img = document.querySelector('#kitten')


function handleSubmit(evt) {
	evt.preventDefault();
	alert('form has been submitted! thank you.')
	console.log('form submit');
}
let compliment = ()=>{
	alert('MEOW your beautiful')
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover',compliment)