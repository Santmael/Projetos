

async function dados (){

    const url = await fetch('https://rickandmortyapi.com/api/character')
    .then(Response => Response.json())

    .then(function(json){
        const persona = json.results.map(function(persona){
            
            const itens = document.querySelector('.itens')

            itens.innerHTML += `<div class="conteudoapi"> 
            <img src='${persona.image}'/> <hr>
            <label> Nome: ${persona.name} <br>
            <label>  Local: ${persona.origin.name}<br>
            <label>  Status: ${persona.status}<br>
            </div>`
            
        })
        
    })

}
dados();
