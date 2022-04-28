function calcular (){

    var inicio  = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("resultado")
  

    if (inicio.value.length === 0|| passo.value.length == 0 || fim.value.length == 0)
    {
        alert("insira os dados que ficaram em branco")
    }else {
        res.innerHTML="Contando"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c +=p){
            
            res.innerText += `${c} \u{1f603}` 
             
        }
    }


}

