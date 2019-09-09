
export default function generateImage(src){
    const ul = document.querySelector('.images');
    document.querySelectorAll('#images img').forEach(e => e.parentNode.removeChild(e));
  
  
    const fragment = document.createDocumentFragment();
    ul.innerHTML = '';
    const li = document.createElement('li');
    const img = document.createElement('img');

    src.forEach(elem =>{
        const cloneImg = img.cloneNode();
        const cloneLi = li.cloneNode();
  
            cloneImg.src = elem;
  
            cloneLi.insertBefore(cloneImg, cloneLi.firstChild);
            fragment.appendChild(cloneLi);
            
    })
  
  ul.appendChild(fragment);
}
