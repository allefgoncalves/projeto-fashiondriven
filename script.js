axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';

let user = prompt("digite seu nome");
let usuario = document.querySelector(".usuario");
usuario.innerHTML = `Olá, <strong>${user}</strong>!`; 

let modelo = null;
let gola = null;
let tecido = null;
let imagemReferencia = document.querySelector(`.img-ref`).value;
let Pmodelo, Pgola, Ptecido;
 
let imagemReferenciaInput = document.querySelector(`.img-ref`);
imagemReferenciaInput.addEventListener("input", () =>{
    verifica();
})

function seleciona(escolhido, classe){
    let selecao = document.querySelector(`${classe} .selecionado`);

    if(selecao != null)   //verificação de ja tem algum selecionado
        selecao.classList.remove(`selecionado`);

    escolhido.querySelector('.imagem-tipo').classList.add('selecionado');
        
    if(classe == '.modelo'){
        Pmodelo = escolhido.querySelector('.check').innerHTML;
        if(Pmodelo == 'camiseta')
            modelo = 'top-tank';
        if(Pmodelo == 'manga longa')
            modelo = 'top-tank';
        if(Pmodelo == 'T-shirt')
            modelo = 't-shirt';
    }

    if(classe == '.gola'){
        Pgola = escolhido.querySelector('.check').innerHTML;
        if(Pgola == 'gola redonda')
            gola = "round";
        if(Pgola =='gola v')
            gola = "v-neck";
        if(Pgola =='gola polo' )
            gola = "polo";   
    }

    if(classe == '.tecido'){
        Ptecido = escolhido.querySelector('.check').innerHTML;
        if(Ptecido =='seda')
            tecido='silk';
        if(Ptecido =='Algodão')
            tecido='cotton';
        if(Ptecido =='Poliester')
            tecido='polyester';
    }
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

function finalizado(erro){
    if (erro.response.status === 422){
        alert(erro.response.value);
        console.log("erro 442");
    }
    if(erro.response.status === 211){
        console.log("status 211");
        let mensagem = document.querySelector(`.MensagemFinal`);
        mensagem.innerHTML = 
        `<div class= 'elemento'>
            <h4>Pedido realizado com sucesso!</h4>
            <div>
                <img src='${imagemReferencia}'>
            </div>
            <h5>voltando para a pagina principal em 10s<h5>
        </div>
        `;
        mensagem.classList.remove('invisivel');

        ClearSelecao();
    }
    console.log("erro numeral");
}

function ErroNoServ(){
    console.log("erro");
}

function EnviarDados(click){
    console.log("teste enviados");
    const uri = imagemReferencia;
    const encoded = encodeURI(uri);

    let dado = {
   "model": modelo,
    "neck": gola,
    "material": tecido,
    "image":encoded,
    "owner": user,
    "author": user
    } 
    console.log(dado);
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts',dado);
    promise.then(finalizado);
    promise.catch(ErroNoServ);
    
}

function renderizaritens(){

    const dado = document.querySelector('criados');
    dado.innerHTML = ''

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
    imagemReferencia = "";
}