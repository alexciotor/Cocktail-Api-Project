//  const form = document.getElementById('form')

//  const input= document.getElementById('input')
// const hel  = document.getElementById('hel')

//  form.addEventListener('keyup', (e)=>{
//      console.log(input.value);
//      hel.innerHTML = input.value
//  })
const grid = document.getElementById('grid')
const article = document.getElementById('article')
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s'
const showContent= async()=>{
try{
    const data = await fetch(URL)
    const response = await data.json()
    const drink = response.drinks 
let content =  drink.map(item=>{ 
     return `<article id="article">
    <div class="img">
        <img src="${item.strDrinkThumb}" alt="">
    </div>
     
        <div class="p-content">
            <span>${item.strIngredient1}</span>
        </div>
        
</article>`
 
     
}).join('')  
grid.innerHTML = content
}
catch(error){
    console.log(error);
}

}

window.addEventListener('DOMContentLoaded',showContent)



