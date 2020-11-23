
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
]
 const newList = list.map(item=>{
     if(!item){
         return}
         else{
             return ` <li> <i class="far fa-check-square"></i> ${item}</li>`
         };
 }).join('')
 
 
    const newDrink= drink.map(item=>{
       const {strDrink:name, strDrinkThumb:image,strInstructions:cat}=item;
       document.title=name
       return `
      <article class="img">
      <img src="${image}" alt="">
      </article>

      <article class="content">

    <h2>${name}</h2>
    <p>${cat}</p>
     <li>${newList}</li>  
    <a href="index.html"target="self" ><button class="btn">All Cocktails</button></a>
    </article>       
`
}).join('')
 
content.innerHTML=newDrink; 
 
}
    catch{
        console.log('error');
    }
}

window.addEventListener('DOMContentLoaded',displayData)