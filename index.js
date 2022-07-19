const body = document.querySelector("#body")
const main = document.createElement("main")
const ul = document.createElement("ul")
const section = document.createElement("section")
const button = document.createElement("button")

body.appendChild(main)
main.append(ul, section)
section.append(button)
button.innerText = "Finalizar Compra"


function createItem(objeto){
   let total = 0

    for(let i = 0; i<objeto.length; i++){
       const li = document.createElement("li")
       const p = document.createElement("p")
       const p1 = document.createElement("p")
       
       p.innerText = `${objeto[i].name}`
       p1.innerText = `${objeto[i].price}`

       li.append(p, p1)
       ul.append(li)
       total += objeto[i].price         

    }
    somaTotal(total)
    return ul
}    
createItem(productsCart)

function somaTotal (total){
    const li = document.createElement("li")
    const p = document.createElement("p")
    const p1 = document.createElement("p")
    p.innerText = "Total"
    p1.innerText = total

    li.append(p, p1)
    ul.append(li)
     
}

