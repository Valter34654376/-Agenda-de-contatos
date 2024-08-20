//=================================================================================================
//Esta função não permetira que o site atualize apoz o submit
const form = document.getElementById('form-Atividade');
const imgCadastrado = '<img src="./imagens/Cadastrado.png" alt="cadastrado" />';
const imgNãoCadastra = '<img src="./imagens/reprovado.png" alt="NãoCadastrado" />';

let Numeros ='';  
let DDD =''; 

form.addEventListener('submit', function(e){ 
   e.preventDefault();
   AdicionaLinha();
   AtualizaTabela();
});
//=================================================================================================
//                                               ||                                              //
//                                               ||                                              //
//                                               ||                                              //
//                                               ||                                              //
//                                               ||                                              //  
//=================================================================================================
 //Adicina  uma linha nova ao invés de subistituir 
   function AdicionaLinha(){
      const inputNomeDoContato = document.getElementById('Nome-do-contato');
      const inputDDDDoContato =  document.getElementById('DDD')
      const inputNumeroDoContato = document.getElementById('Numero-do-contato');



   let Numero ='<tr>';
   Numero += `<td>${inputNomeDoContato.value}</td>`;
   Numero += `<td>${inputDDDDoContato.value}</td>`;
   Numero += `<td>${inputNumeroDoContato.value}</td>`;
   Numero += `<td>${inputNumeroDoContato.value = imgCadastrado }</td>`;
   Numero += '</tr>';
      
   Numeros += Numero;

   inputNomeDoContato.value = '';
   inputNumeroDoContato.value = '';
   inputDDDDoContato.value = '';
}
//=================================================================================================
//                                               ||                                              //
//                                               ||                                              //
//                                               ||                                              //
//                                               ||                                              //
//                                               ||                                              //  
//=================================================================================================
 //Atualiza a tabela, permetindo escrever novamente apos o subimit.
function AtualizaTabela(){
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = Numeros;
}
//=================================================================================================