import clickHandler from './clickHandler.js';

export default function createList(dogs) {
	const fragment = document.createDocumentFragment();
	const li = document.createElement('li');


        dogs.forEach(dog => {
            const clone = li.cloneNode();

            clone.innerText = dog[0];
            fragment.appendChild(clone);
            clickHandler(clone, dog[0], dogs)
        });

 	const ul = document.getElementsByTagName('ul')[0];
 	ul.appendChild(fragment);
}