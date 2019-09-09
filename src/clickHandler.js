import generateImage from './generateImage.js';
import createList from './createList.js';

export default function clickHandler(li, name, dogsArr) {
    const select = document.querySelector('#breeds');
    const images = document.querySelector('#carousel');
    
    li.onclick = event =>{

        const targetName = event.target.innerText;

        if(!select.className){
        select.classList.toggle('d-none');
        };
        if(!images.classList[1]){
            images.classList.toggle('d-none');
        }

        dogsArr.forEach(elem =>{
            if(targetName === elem[0].toString()){

                if(elem[1].length !== 0){
                    select.innerHTML='<option value="">Выберите разновидность породы</option>';

                    elem[1].forEach(breed => {
                        let option = new Option(breed, breed);
                        select.append(option);
                    })

                    if(select.className){
                        select.classList.toggle('d-none');
                    };

                }else{

                    if(images.classList[1]){
                        images.classList.toggle('d-none');
                    };
                    makeRequst2(`https://dog.ceo/api/breed/${name}/images/random/10`)
                    .then(response => generateImage(response.message));
                }
            }
        })

        select.onchange = () => {
            const breedName = document.querySelector('#breedNameTitle');
            if(select.value){
                if(images.classList[1]){
                    images.classList.toggle('d-none');
                };
                makeRequst2(`https://dog.ceo/api/breed/${breedName.innerText}/${select.value}/images/random/10`)
                .then(response => generateImage(response.message)); 

            }
            else if(!images.classList[1]){
                images.classList.toggle('d-none');
            }
        };

        document.querySelector('#breedNameTitle').innerText = name;
    };
}
function makeRequst2(url) {
    return fetch(url).then(res => res.json());
}

makeRequst2('https://dog.ceo/api/breeds/list/all').then(response => {
  let dogsArr = getArrFromObj(response.message);
    createList(dogsArr);
})

function getArrFromObj(obj){
    const arr = Object.entries(obj)
    return arr;
}