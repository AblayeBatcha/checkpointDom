var box = document.getElementsByClassName("box")
for(let i=0;i<box.length;i++){
    let bntPlus=box[i].children[4].children[2]
    let bntMoins=box[i].children[4].children[0]
    let nombre=box[i].children[4].children[1]
    let total=box[i].children[3].children[1]
    let prixUni=box[i].children[2].children[1]
    let supp=box[i].children[5].children[1]
    let qty=parseInt(nombre.innerText)
    let prixUnit=parseInt(prixUni.innerText)

    bntPlus.addEventListener('click',function(){
        qty++;
        nombre.innerText=qty;
        total.innerText=prixUnit*qty
        somme()
    })
    bntMoins.addEventListener('click',function(){
        qty--;
        if(qty<1){
            qty=0
        }
           
        
        nombre.innerText=qty;
        total.innerText=prixUnit*qty
        somme()
    })
    let like = box[i].children[5].children[0].children[0]
    like.addEventListener('click',function() {
        if (like.style.color === "red") {
            like.style.color = "black"
        }
        else {
            like.style.color = "red"
        }
    })
    //button-supprimer
    let supprr=box[i]
    console.log(supprr)
    let supr=box[i].children[5].children[1]
    if (supprr) {
         supr.addEventListener("click", function () {
                  supprr.remove();
                  somme();
             })
         }

}
let total1= document.getElementById('tyu')
function somme(){
    let sum=0;
    let tota=document.getElementsByClassName('price')
    for(let i=0;i<tota.length;i++ ){
        let totalUnit=parseInt(tota[i].innerText)
        sum=sum+totalUnit
    }
    total1.innerHTML=sum
}