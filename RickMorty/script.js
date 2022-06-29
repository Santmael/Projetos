
const conexaoapi = `https://rickandmortyapi.com/api/character/?page=3`;

async function dados (){

    const url = await fetch(conexaoapi)

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
        
       // const btn = document.querySelector('.btn').addEventListener('Click',next())        
       
    })
    
    

}
dados();

async function next(){
    const url = await fetch('https://rickandmortyapi.com/api/character')
    .then (Response => Response.json())
    .then(function(json){
        const infomacao = json.info.map(function(infomacao){
            console.log(infomacao.next)
        })
    })
           
}

