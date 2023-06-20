const add = document.querySelector(".add");
const cards = document.querySelector(".cards");
let code ="";
const modele =`<div class="card selected">
<div class="pic"></div>
<div class="infos">
    <ul>
        <li class="titre">Hello</li>
        <li class="desc">Bonjour mon ami</li>
        <li class="prix">10$</li>
    </ul>
</div>
<div class="ajout">
    <button type="submit">Ajouter au panier</button>
</div> 
</div>`;

add.addEventListener('click',()=>{
    cards.innerHTML="";
    code+=modele;
    cards.innerHTML+=code;

});