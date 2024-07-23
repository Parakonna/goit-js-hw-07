const navListEl = document.querySelector('#categories');
console.log('Number of categories:', navListEl.children.length);

const navItemEl = document.querySelectorAll('.item')

    navItemEl.forEach(el => {
        console.log(`Category: ${el.children[0].textContent} 
Elements: ${el.children[1].children.length}`);
    });


