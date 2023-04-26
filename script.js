axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';

let user = prompt("digite seu nome");
let usuario = document.querySelector(".usuario");
usuario.innerHTML = `Olá, <strong>${user}</strong>!`; 



let modelo = null;
let gola = null;
let tecido = null;

//ClearSelecao();



function seleciona(escolhido, classe){
    let selecao = document.querySelector(`${classe} .selecionado`);
    if(selecao != null){    //verificação de ja tem algum selecionado
        selecao.classList.remove(`selecionado`);
    }
    escolhido.querySelector('.imagem-tipo').classList.add('selecionado');
    console.log(classe);

    
    if(classe == '.modelo')
        modelo = escolhido.querySelector('.check').innerHTML;
    
    if(classe == '.gola')
        gola = escolhido.querySelector('.check').innerHTML;
    
    if(classe == '.tecido')
        tecido = escolhido.querySelector('.check').innerHTML;

    console.log(escolhido);
    console.log(modelo);
    console.log(gola);
    console.log(tecido);

}
 /*   verifica(); //verificação se todos estão selecionados
}
function verifica(){
    if(modelo != ""){ //verifica se todos estão selecionados
        if(gola != ""){
            if(tecido != ""){ 
                if(){   //se sim => verifica a url da imagem 
                    ClearSelecao(); //url ok => limpa a seleção
                    //libera o botão de finalizar o pedido
                //url ruim => mensagem de erro 
                }
            }
        }
    }
}

function ClearSelecao(){ //desmarca todos os itens 
    modelo = "";
    gola = "";
    tecido = "";
    // limpar a URL
}*/