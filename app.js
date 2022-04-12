






const ligthButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const solarButton = document.getElementById('solar');

const body = document.body;


ligthButton.onclick = () =>{
	body.classList.replace('dark', 'light');
	body.classList.replace('solar','light');
};
darkButton.onclick = () => {
	body.classList.replace('light','dark');
	body.classList.replace('solar','dark');
};
solarButton.onclick = () => {
	body.classList.replace('dark','solar');
	body.classList.replace('light','solar');
};