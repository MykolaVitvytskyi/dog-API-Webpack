
export default function searchBtnClick(){document.querySelector('.searchBtn').onclick = () => {
        const breedUl = document.querySelector('.breedList')
        const searchValue = document.querySelector('.searchInput').value.toLowerCase();
        const breedLi = breedUl.getElementsByTagName('li');
        for(let i = 0; i < breedLi.length; i++){
            breedLi[i].classList.add('d-none');

            if(breedLi[i].innerText.includes(searchValue)){
            breedLi[i].classList.toggle('d-none');
            }
            
        }
    }
}
searchBtnClick();