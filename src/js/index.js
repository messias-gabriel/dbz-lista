const personagens = document.querySelectorAll('.card');

personagens.forEach((card) => {
     card.addEventListener('mouseenter', () =>{

          if(window.innerWidth < 430){
               window.scrollTo({top: 0, behavior: "smooth"});
          }

        const personagemSelecionado = document.querySelector('.selecionado');

         personagemSelecionado.classList.remove('selecionado');

        card.classList.add('selecionado');

         const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = card.attributes.id.value;

         imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

         const nomePersonagem = document.getElementById('nome-personagem');
         nomePersonagem.innerText = card.getAttribute('data-name');

         const descricaoPersonagem = document.getElementById('descricao-personagem');
         descricaoPersonagem.innerText = card.getAttribute('data-description');
     })
})