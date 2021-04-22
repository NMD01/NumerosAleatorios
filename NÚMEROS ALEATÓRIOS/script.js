let botaoSorteio = document.getElementById("botaoSorteio")
botaoSorteio.addEventListener("click", sortear = function(){
    let min = Number(document.getElementById("n1").value)
    let max =Number(document.getElementById("n2").value)

    let sn = Math.floor(Math.random() * (max + 1 - min) + min)

    console.log(sn)
    
   document.getElementById("res").innerHTML = `${sn}` 

   
})





