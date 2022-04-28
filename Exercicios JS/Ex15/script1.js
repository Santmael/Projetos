function verificar(){

var data = new Date()
var ano = data.getFullYear()
var formAno = document.getElementById("txtano")
var res = document.querySelector("div#resultado") 
var imgres= document.getElementById("img")




if(
    formAno.value.length == 0 || formAno.value > ano ){
        alert("verifique a data de nascimento")
    } else {
        var rsex = document.getElementsByName("radsex")
        //calcula a idade informada.
        var idade = ano - Number(formAno.value)
        // set genero vazio.
        var genero = ""
        //criar elemento imagem via js.
        var img =document.createElement("img")
        //set o id com o nome de foto
        img.setAttribute('id','foto')

        //verifica se o radio esta selecionado.
        if(rsex[0].checked){
            genero = "Homem"
            if(idade >0 && idade <=10){
            //criança
            imgres.src="bbhomem.jpg"
            }else if (idade <21){
            //jovem
            imgres.src="jovemhomem.jpg"
            }
            else if (idade <50){
            //adulto
            imgres.src="adultohomem.jpg"
           
            }else {
            //idoso
            imgres.src="idosohomem.jpg"
          
            }

        }
        //verifica se o radio feminino esta marcado.
        else if (rsex[1].checked){
            genero = "mulher"
            //logica para saber a idade.
            if(idade >0 && idade <=10){
                //criança
                imgres.src="bbmulher.jpg"
                }else if (idade <21){
                //jovem
                imgres.src="jovemmulher.jpg"
                }
                else if (idade <50){
                //adulto
                imgres.src="adultomulher.jpg"
               
                }else {
                    //idoso
                imgres.src="idosamulher.jpg"
              
                }
        }
        else{
            // mensagem quando o campo de genero não é preenchido
            alert('verifique se o genero esta selecionado')
        }
        //mensagem de resposta.
        res.innerHTML = `A idade calculada é ${idade} e o genêro é ${genero}`
        
    }

}