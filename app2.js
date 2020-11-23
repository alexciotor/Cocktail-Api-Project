
const baseURl ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const content =document.querySelector('.top-content')
const displayData = async()=>{
    try{
         const id = localStorage.getItem('drink')
         console.log(id);
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
 ;
const response = await data.json()
const drink = response.drinks
console.log(drink);
const {strDrink:name, strDrinkThumb:image}=drink;
const drinky = response.drinks[0]
const list = [
drinky.strIngredient1, 
drinky.strIngredient2, 
drinky.strIngredient3,
drinky.strIngredient4,
drinky.strIngredient5
].join(' ')
 
 
    const newDring= drink.map(item=>{
       const {strDrink:name, strDrinkThumb:image,strInstructions:cat}=item;
       return `
      <article class="img">
      <img src="${image}" alt="">
      </article>

      <article class="content">

    <h2>${name}</h2>
    <p>${cat}</p>
    <ul>
    <li>${list}</li> </ul>  
    <a href="index.html"target="self" ><button class="btn">All Cocktails</button></a>
    </article>       
`
}).join('')
content.innerHTML=newDring; 
}
    catch{
        console.log('error');
    }
}

window.addEventListener('DOMContentLoaded',displayData)