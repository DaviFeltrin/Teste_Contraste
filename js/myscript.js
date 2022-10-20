//CÓDIGO ORIGINAL//
/*var link_contraste_branco = 
    document.getElementById('contraste_branco');

 link_contraste_branco.addEventListener('click', function(){
   //  this.style.backgroundColor = 'white'
   //  this.style.color = '#000'

   var todasAsTags = document.querySelectorAll('*')
   console.log(todasAsTags);

   todasAsTags.forEach(function(tag){
      tag.style.backgroundColor = 'white'
      tag.style.color = '#000'
   })
   
 })*/
 
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//IR PARA O CONTEÚDO//
var link_Ir_para_o_Conteudo =
   document.getElementById('Ir para o Conteúdo');

   link_Ir_para_o_Conteudo.addEventListener('click', function(){
      
})

//FUNDO = BRANCO////////////////////////////////////////////////////////////////////////////////
var link_contraste_branco = 
    document.getElementById('contraste_branco');

 link_contraste_branco.addEventListener('click', function(){

   var todasAsTags = document.querySelectorAll('*')
   console.log(todasAsTags);

   todasAsTags.forEach(function(tag){
      tag.style.backgroundColor = 'white'
      tag.style.color = '#000'
   })
   
 })
 //FUNDO PRETO//////////////////////////////////////////////////////////////////////////////////
 var link_contraste_preto = 
    document.getElementById('contraste_preto');

 link_contraste_preto.addEventListener('click', function(){

   var todasAsTags = document.querySelectorAll('*')
   console.log(todasAsTags);

   todasAsTags.forEach(function(tag){
      tag.style.backgroundColor = '#000'
      tag.style.color = 'white'
   })
   
 })

