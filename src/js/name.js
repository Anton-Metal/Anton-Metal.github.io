window.addEventListener('load', () => {
    
	// Via local Storage
    const name = localStorage.getItem('NAME');

    document.getElementById('first-name').innerHTML = name;
})