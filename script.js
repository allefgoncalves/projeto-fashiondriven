axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';

let user = prompt("digite seu nome");
let usuario = document.querySelector(".usuario");
usuario.innerHTML = `Olá, <strong>${user}</strong>!`; 

let modelo = null;
let gola = null;
let tecido = null;
let imagemReferencia = document.querySelector(`.img-ref`).value;


 
let imagemReferenciaInput = document.querySelector(`.img-ref`);
imagemReferenciaInput.addEventListener("input", () =>{
    verifica();
})

console.log("teste2");
console.log(imagemReferencia);
console.log("teste3");

function seleciona(escolhido, classe){
    let selecao = document.querySelector(`${classe} .selecionado`);

    if(selecao != null)   //verificação de ja tem algum selecionado
        selecao.classList.remove(`selecionado`);

    escolhido.querySelector('.imagem-tipo').classList.add('selecionado');
        
    if(classe == '.modelo')
        modelo = escolhido.querySelector('.check').innerHTML;
    
    if(classe == '.gola')
        gola = escolhido.querySelector('.check').innerHTML;
    
    if(classe == '.tecido')
        tecido = escolhido.querySelector('.check').innerHTML;

    verifica(); //verificação se todos estão selecionados
}

function verifica(){
    if(modelo != null){ //verifica se todos estão selecionados
        console.log("teste1");
        if(gola != null){
            if(tecido != null){ 
                imagemReferencia = document.querySelector(`.img-ref`).value; 
                if(imagemReferencia != ""){   //se sim => verifica a url da imagem 
                    //console.log("teste5");
                    //libera o botão de finalizar o pedido
                    let botãofinal = document.querySelector(`.buttonFinal`);
                    botãofinal.classList.remove(`inativo`);
                    botãofinal.classList.add('ativo');
                    botãofinal.disabled = false;
                }
                else{
                    let botãofinal = document.querySelector(`.buttonFinal`);
                    botãofinal.classList.remove(`ativo`);
                    botãofinal.classList.add('inativo');
                    botãofinal.disabled = true;

                }
            }
        }
    }
}

function ClearSelecao(){ //desmarca todos os itens 
    if(modelo != null){
        modelo = null;
        let x = document.querySelector(`.modelo .selecionado`);
        x.classList.remove(`selecionado`);
    }
 
    if(gola != null){
       gola = null;
        let y = document.querySelector(`.gola .selecionado`);
        y.classList.remove(`selecionado`);
    }

    if(tecido != null){
        tecido = null;
        let z = document.querySelector(`.tecido .selecionado`);
        z.classList.remove(`selecionado`);
    }
    // limpar a URL
}