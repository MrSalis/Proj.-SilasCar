
const minhaUl = document.querySelector('ul')
const meuBotao = document.querySelector('#buttonShowAll')
const desconto = document.querySelector('#buttonOf')


function mostrarTudo() {

    let minhaLi = ''

    menuOptions.forEach(element => {
        minhaLi += `
           <li>
               <img class="cars" src="${element.src}">
                <p>${element.name}</p>
                <p class="valor">R$ ${element.price}</p>
           </li>`

           minhaUl.innerHTML = minhaLi
    });
}


meuBotao.addEventListener('click', mostrarTudo)



