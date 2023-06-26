axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';

let y;//usado em clearinterval na funcion renderizarInicio

function  renderizarInicio(){
    clearInterval(y);
    let elemento = document.querySelector(`.interativo`); 
    elemento.innerHTML =`
        <div class="centralizando">
            <h2>escolha o modelo</h2>
            <div class="modelo">

            <div onclick="seleciona(this,'.modelo')" class="item">
                <div class="imagem-tipo">
                    <img src="./imagens/Camiseta.png">
                </div>
                <div class="check">camiseta</div>
            </div>

            <div onclick="seleciona(this,'.modelo')" class="item">
                <div class="imagem-tipo">
                    <img src="./imagens/Mangalonga.png">
                </div>
                <div class="check">manga longa</div>
            </div>

            <div onclick="seleciona(this,'.modelo')" class="item">
                <div class="imagem-tipo">
                <img src="./imagens/tshirt.png">
                </div>
                <div class="check">T-shirt</div>
            </div>
            </div>

            <h2> escolha a gola</h2>
            <div class="gola">
            <div onclick="seleciona(this,'.gola')" class="item ">
                <div class="imagem-tipo">
                <img src="./imagens/GolaRedonda.png">
                </div>
                <div class="check">gola redonda</div>
            </div>

            <div onclick="seleciona(this,'.gola')" class="item">
                <div class="imagem-tipo">
                <img src="./imagens/GolaPolo.png">
                </div>
                <div class="check">gola polo</div>
            </div>

            <div onclick="seleciona(this,'.gola')" class="item">
                <div class="imagem-tipo">
                <img src="./imagens/GolaV.png">
                </div>
                <div class="check">gola v</div>
            </div>
            </div>

            <h2>escolha o tecido</h2>
            <div class="tecido"> 
            <div onclick="seleciona(this,'.tecido')" class="item">
                <div class="imagem-tipo">
                <img src="./imagens/Algodão.png">
                </div>
                <div class="check">Algodão</div>
            </div>

            <div onclick="seleciona(this,'.tecido')" class="item">
                <div class="imagem-tipo">
                <img src="./imagens/Poliester.png">
                </div>
                <div class="check">Poliester</div>
            </div>

            <div onclick="seleciona(this,'.tecido')" class="item">
                <div class="imagem-tipo">
                <img src="./imagens/Seda.png">
                </div>
                <div class="check">seda</div>
            </div>
            </div>

            <h2>imagem de referencia</h2>
            <input class="img-ref" placeholder="URL">
            <button onclick="EnviarDados()" class="inativo buttonFinal" disabled>confirmar pedido</button>
        </div>
    `;
}

renderizarInicio();

let promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
promise.then(salvarmodelos);
promise.catch(console.log('deu errado'));

let user = prompt("digite seu nome");
let usuario = document.querySelector(".usuario");
usuario.innerHTML = `Olá, <strong>${user}</strong>!`;

let modelo = null;
let gola = null;
let tecido = null;
let imagemReferencia = document.querySelector(`.img-ref`).value;
let Pmodelo, Pgola, Ptecido;

let imagemReferenciaInput = document.querySelector(`.img-ref`);
imagemReferenciaInput.addEventListener("input", () => {
    verifica();
})

function seleciona(escolhido, classe) {
    let selecao = document.querySelector(`${classe} .selecionado`);

    if (selecao != null)   //verificação de ja tem algum selecionado
        selecao.classList.remove(`selecionado`);

    escolhido.querySelector('.imagem-tipo').classList.add('selecionado');
    if (classe == '.modelo') {
        Pmodelo = escolhido.querySelector('.check').innerHTML;
        if (Pmodelo == 'camiseta')
            modelo = 'top-tank';
        if (Pmodelo == 'manga longa')
            modelo = 'long';
        if (Pmodelo == 'T-shirt')
            modelo = 't-shirt';
    }

    if (classe == '.gola') {
        Pgola = escolhido.querySelector('.check').innerHTML;
        if (Pgola == 'gola redonda')
            gola = "round";
        if (Pgola == 'gola v')
            gola = "v-neck";
        if (Pgola == 'gola polo')
            gola = "polo";
    }

    if (classe == '.tecido') {
        Ptecido = escolhido.querySelector('.check').innerHTML;
        if (Ptecido == 'seda')
            tecido = 'silk';
        if (Ptecido == 'Algodão')
            tecido = 'cotton';
        if (Ptecido == 'Poliester')
            tecido = 'polyester';
    }
    verifica(); //verificação se todos estão selecionados
}

function verifica() {
    if (modelo != null) { //verifica se todos estão selecionados
        if (gola != null) {
            if (tecido != null) {
                imagemReferencia = document.querySelector(`.img-ref`).value;
                if (imagemReferencia != "") {   //se sim => verifica a url da imagem 
                    console.log("teste5");
                    //libera o botão de finalizar o pedido
                    let botãofinal = document.querySelector(`.buttonFinal`);
                    botãofinal.classList.remove(`inativo`);
                    botãofinal.classList.add('ativo');
                    botãofinal.disabled = false;
                }
                else {
                    let botãofinal = document.querySelector(`.buttonFinal`);
                    botãofinal.classList.remove(`ativo`);
                    botãofinal.classList.add('inativo');
                    botãofinal.disabled = true;
                }
            }
        }
    }
}

function finalizado() {    
    let elemento = document.querySelector(`.interativo`);
    elemento.innerHTML =`
        <div class= 'elemento'>
            <h4>Pedido realizado com sucesso!</h4>
            <div>
                <img src='${imagemReferencia}'>
            </div>
            <h5 class="timer"><h5>
        </div>
   `;
    let x =10;
    y = setInterval(() => {
        console.log('timer');    
        if(x== -1){
           renderizarInicio();
            // testes para voltar funcionar o input e liberar o  botao final na segunda vez de escolha
            // imagemReferencia = document.querySelector(`.img-ref`).value;
            // imagemReferenciaInput = document.querySelector(`.img-ref`);
            // imagemReferenciaInput.addEventListener("input", () => {
            //     verifica();
            // })
            // imagemReferencia = "";
            // modelo = null;
            // gola = null;
            // tecido = null;

            promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
            promise.then(salvarmodelos);
            promise.catch(console.log('deu errado aqui'));
            renderizartodos();              
        }
        else{
            let seg = document.querySelector(`.timer`);
            seg.innerHTML=`voltando para a pagina principal em ${x}s`;                
            x--;
        } 
    }, 1000);
}

function EnviarDados() {
    const uri = imagemReferencia;
    const encoded = encodeURI(uri);

    let dado = {
        model: modelo,
        neck: gola,
        material: tecido,
        image: encoded,
        owner: user,
        author: user
    };

    ///console.log(dado.image);
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', dado);
    promise.then(finalizado());
    promise.catch( function(erro){// modificar 
        if ( erro.response.status === 422){
            alert('erro no pedido, tente novamente');
        }else{
            alert('erro no servidor');
        }
        //até aqui
    });
}

function ClearSelecao() { //desmarca todos os itens 
    if (modelo != null) {
        modelo = null;
        let x = document.querySelector(`.modelo .selecionado`);
        x.classList.remove(`selecionado`);
    }

    if (gola != null) {
        gola = null;
        let y = document.querySelector(`.gola .selecionado`);
        y.classList.remove(`selecionado`);
    }

    if (tecido != null) {
        tecido = null;
        let z = document.querySelector(`.tecido .selecionado`);
        z.classList.remove(`selecionado`);
    }
    // limpar a URL
    imagemReferencia = "";
}

const elementoUl = document.querySelector('.criados');

function renderizar(data) {
    //console.log(data);
    //console.log(data.author);
    //console.log(data.image);
    elementoUl.innerHTML += `
        <li>
            <button onclick ="modelopredefinido(${data})">
                <img src="${data.image}">
                <div>
                    <strong>criador: </strong>
                    <P> ${data.owner}</P>
                </div>
            </button>
        </li>
        `;
}

let objmodelos =[];

function salvarmodelos(obj){
    //console.log(objmodelos);
    objmodelos = obj.data;
    //onsole.log(objmodelos);
    renderizartodos();
}

function renderizartodos() {
    elementoUl.innerHTML = "";
    //console.log(objmodelos);
    //console.log(objmodelos[0]);
    //console.log(objmodelos.length);
    for (let i = 0; i < objmodelos.length; i++) {
        //console.log(objmodelos[i]);
        renderizar(objmodelos[i]);
    }
}

function renderizarTShirt(){
    elementoUl.innerHTML = "";
    console.log(objmodelos);
    console.log(objmodelos[0]);
    console.log(objmodelos.length);
    for (let i = 0; i < objmodelos.length; i++) {
        if(objmodelos[i].model=="t-shirt"){
            // console.log(objmodelos[i]);
            renderizar(objmodelos[i]);
        }
    }
}

function renderizarcamisetas() {
    elementoUl.innerHTML = "";
    for (let i = 0; i < objmodelos.length; i++) {
        if(objmodelos[i].model=="top-tank"){
            // console.log(objmodelos[i]);
            renderizar(objmodelos[i]);
        }
    }
}

function renderizarmangaLonga() {
    elementoUl.innerHTML = "";
    for (let i = 0; i < objmodelos.length; i++) {
        if(objmodelos[i].model=="long"){
            // console.log(objmodelos[i]);
            renderizar(objmodelos[i]);
        }
    }
}

//bonus
function cancelado(){
    const elemento = document.querySelector(`.predefinido`);
    elemento = ``;
}

function confirmado(){
    const elemento = document.querySelector(`.msg`);
    elemento=`
        <p>pedido realizado com sucesso</p>
        <button onclick="cancelado">fechar</button>
    `;
}

function modelopredefinido(data){
    const elemento = document.querySelector(`.predefinido`);
    elemento =`
        <div class="fumaça">
            <div class="msg">   
                <img src="${data.image}">
                <div>
                    <P>${data.model} com ${data.neck} de ${data.material}</P>
                    <P><strong>criador: </strong>${data.owner}</P>
                    <button class = "confirma" onclick ="confirmado">confirmar pedido </button>
                    <button class = "cancela" onclick ="cancelado">cancelar</button>
                </div> 
            </div>
        </div>
    `;
}



//modo offline
/*
let number = "";
let string = "";
const testeoffline = [
    {
        id: 0,
        model: 'long',
        neck: string,
        material: string,
        image: './imagens/long 2.jpg',
        owner: string,
        author: 'autor 0'
    },  
    {
        id: 1,
        model: 'top-tank',
        neck: string,
        material: string,
        image:'./imagens/top-tank 2.jpg',
        owner: string,
        author: 'autor 1'
    },
    {
        id: 2,
        model: 'long',
        neck: string,
        material: string,
        image: './imagens/long 3.jpg',
        owner: string,
        author: 'autor 2'
    },
    {
        id: 3,
        model: 't-shirt',
        neck: string,
        material: string,
        image: './imagens/t-shirt 4.jpg',
        owner: string,
        author: 'autor 3'
    },
    {
        id: 4,
        model: 't-shirt',
        neck: string,
        material: string,
        image:'./imagens/t-shirt 3.jpg',
        owner: string,
        author: 'autor 4'
    },
    {
        id: 5,
        model: 'long',
        neck: string,
        material: string,
        image:'./imagens/long 1.jpg',
        owner: string,
        author: 'autor 5'
    },
    {
        id: 6,
        model: 'top-tank',
        neck: string,
        material: string,
        image:'./imagens/top-tank 1.jpg',
        owner: string,
        author: 'autor 6' 
    },
    {
        id: 7,
        model: 't-shirt',
        neck: string,
        material: string,
        image:'./imagens/t-shirt 2.jpg',
        owner: string,
        author: 'autor 7'
    },
    {
        id: 8,
        model: 't-shirt',
        neck: string,
        material: string,
        image:'./imagens/t-shirt 1.jpg',
        owner: string,
        author: 'autor 8'
    },
    {
        id: 9,
        model: 'top-tank',
        neck: string,
        material: string,
        image:'./imagens/top-tank 3.jpg',
        owner: string,
        author: 'autor 9'
    },
];
objmodelos = testeoffline;
renderizartodos();
*/