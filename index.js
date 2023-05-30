function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if(inicio.value.length== 0          ){

    
    window.alert('ATENÇÃO!!!!! Dados errado, verifique os campos e tente novamente')  }
    else{ 
        res.innerHTML='contando: <br>'
        var i= Number(inicio.value)
        var f= Number(fim.value)
        var p= Number(passo.value)
        if (p <=0) {
            window.alert('Campo "Passo" vazio, tente novamente')
        }
        if (i <f){
            for(let c=1; c<=f; c+=p){
                res.innerHTML+=`${c} \u{1F449} `
            }
        
        } else{
            for (var c =i; c >=f; c-=p){
            res.innerHTML+= `${c} \u{1F449}`
        } 
    
     }
     res.innerHTML+= `\u{1F415}`
    }}

