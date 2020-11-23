const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const baseURL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const get =(selection)=>{
    const element =document.querySelector(selection)
    if(element){ 
        return element
    }
    else{
        throw new Error('No element selected')
    }
}
 
 
const fetchData = async(url) =>{

try{
const data = await fetch(url)
const response = await data.json()
const drink = response.drinks

const section = get('.section-center')


const drinks =  drink.map(item=>{

    const {idDrink:id,strDrink:name, strDrinkThumb:image}=item
    return ` <a href="single-drink.html"> <article class="article" data-id="${id}" > <img src="${image}" alt="">
   
    </article>
     <span class="drink-name">${name}</span>
    </a>`
}).join('')
 section.innerHTML = drinks
  section.addEventListener('click', (e)=>{
      const id = e.target.parentElement.dataset.id
      localStorage.setItem('drink', id)
   
})
}
catch{
    console.log('Error');
}


}
const form = get('form')
 const input = get('input')
form.addEventListener('keyup',(e)=>{

    e.preventDefault()
    const value = input.value
   if(!value){
       return fetchData(URL)
    }
    else(
        fetchData(`${baseURL}${value}`)
        )
console.log(value);

})

export default fetchData
window.addEventListener('DOMContentLoaded', fetchData(URL))