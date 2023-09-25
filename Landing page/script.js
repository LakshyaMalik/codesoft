const showNav = () => {
    console.log('lorem');
    let h = document.querySelectorAll('.hide');
    h.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none'; // Hide if currently shown
        } else {
            element.style.display = 'block'; // Show if currently hidden
        }
    });
}
