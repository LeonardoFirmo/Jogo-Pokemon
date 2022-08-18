let pokemonUser, jogador_a
let audio = document.getElementById('music')
let introMusic = new Audio ('./assets/audio/introPKM.mp3')
let battleMusic = new Audio ('./assets/audio/battle.mp3')
let efeitoAtk = new Audio ('./assets/audio/ataquePKM2.mp3')
let efeitoAtk2 = new Audio ('./assets/audio/laserPKM.mp3')
let efeitoCura = new Audio ('./assets/audio/curaPKM.mp3')

let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')
let narracao = document.querySelector('h1')
let pokeIMG = document.getElementById('pokeIMG')
let mewIMG = document.getElementById('MewIMG')
let pokemonJoyce= document.querySelector('.pokemons')
let sectionPokeballs = document.querySelector('.pokeballs')
let sectionBattle = document.querySelector('.battle')
let pbottom = document.querySelector('.pbottom')
let jogarNovamente= document.querySelector('.jogarNovamente')

let hpMew = document.querySelector('#hpMew')
let hpPokeUser = document.querySelector('#hpPokeUser')

let btAtaque = document.querySelector('.ataque')
let btCura = document.querySelector('.cura')

let containerinteracao = document.querySelector('.interacao')
let containerPokemonUser = document.querySelector('.containerPokemonUser')








window.onload = function inicio(){

    // inserindo musica tema 
    introMusic.play()

    narracao.innerHTML = "Bem vindo ao mundo Pokemon"

    function pegaIDpokemonUser(){

        pokemonJoyce.addEventListener('click',e =>{
            let idPokemonEscolhido= e.target.id
            escolhaPokemon(idPokemonEscolhido)



        })

    }
    pegaIDpokemonUser()



    // nome usuario
    setTimeout(()=>{
        jogador_a = prompt('Qual seu nome?')
    },300)
    

    // apresentacao user
   
   setTimeout(()=>{
    narracao.innerHTML = `${jogador_a} Escolha seu pokemon`
   },500)
    

   

   


    // escolha seu pokemon
    function escolhaPokemon(idPokemon){

        pokemonUser = idPokemon
       

        switch (pokemonUser) {

            case 'pika':
                pokemonUser =  pika
                pokeIMG.src = "./img/pikachuGif.gif"
                // alert(`O pokemon escolhido foi: ${pika.nome}`)
                narracao.innerHTML = `O pokemon escolhido foi: ${pika.nome}`
               
                break;
    
    
            case 'bulba':
                pokemonUser = bulba
                pokeIMG.src = "./img/bulbaGif.gif"
                narracao.innerHTML = `O pokemon escolhido foi: ${bulba.nome}`
                 
                break;
    
            case  'char':
                pokemonUser = char
                pokeIMG.src = "./img/charmanderGif.webp"
                narracao.innerHTML = `O pokemon escolhido foi: ${char.nome}`
    
            break;
         
        }


        
        mudaParaBatalha()
        
    }
   

    function mudaParaBatalha (){
       
        document.body.style.background='black'
        narracao.style.color='white'
        sectionPokeballs.style.display = 'none'
        sectionBattle.style.display ='block'
        pbottom.style.color='white'
         
        // mudando musica
        introMusic.pause()
        battleMusic.play()

        pbottom.innerHTML = `O pokemon escolhido foi: ${pokemonUser.nome}`
        narracao.innerHTML = ``
        setTimeout(()=>{
            pbottom.innerHTML= `${jogador_a} o que seu ${pokemonUser.nome} deve fazer? <br>` 
           
        },2000)

        
       
    

        setTimeout(()=>{
             batalha(pokemonUser,mew)
        },10)
        
        
        
    }

  
    
   
    // inicio da batalha
    function aleatorio(min, max) {
        resultado = Math.random() * (max - min) + min
        return Number(resultado.toFixed()) ;
            
    }
    
    
    
    
    function ataque (atacante){
        
        let ataqueAleatorio = aleatorio(5,25)
    
        let totalAtaque = atacante.ataque + ataqueAleatorio
       
        return totalAtaque
    }

    

    function cura (pokemon){
        heal = pokemon.vida + pokemon.cura
        return heal
        
    }



    function batalha (pokemonUser, mew){
      
       
        let atak = false
        let kura = false
        

        function mostraBts(){
           


           
         // caso o jogador tenha vida, retorna os botoes de ataque e cura
            if(pokemonUser.vida > 0){

                setTimeout(() => {
                            btAtaque.style.display='block'
                            btCura.style.display='block'
                }, 2000);
                
             


            }

        }



        //   botoes ataque defEvento   
        // CURA  
        btCura.addEventListener('click',()=>{
           kura = true
            

            // tira botão de ataque e cura apos escolher um ou outro
            btAtaque.style.display='none'
            btCura.style.display='none'



            // verificação do player atual
      
            if(pokemonUser.vida > 0 && mew.vida > 0){
              // vez do jogador
            
                
                    if(kura == true){
                     atak = false
                     let curaRecebida = cura(pokemonUser)
                     pokemonUser.vida= curaRecebida
                     hpPokeUser.innerHTML=`HP:${pokemonUser.vida}`

                     
                     efeitoCura.play()


                     pbottom.innerHTML= `Seu pokemon se curou nessa rodada` 
                        //  chama ataque do mew
                    setTimeout(()=>{
                       
                        vezDoMew()
                    },2200)

                }

            }
            
        })


       





        // bt ataque
        btAtaque.addEventListener('click',()=>{
            atak = true
            
            // tira botão de ataque e cura apos escolher um ou outro
            btAtaque.style.display='none'
            btCura.style.display='none'

            
     

            if(pokemonUser.vida > 0){

                //  tira os botoes para jogar só 1 vez por rodada
                

                



                if(atak == true){
                    kura = false
                    
                    // ataque do user
                    let danoRecebido = ataque(pokemonUser)
                    mew.vida=  mew.vida - danoRecebido 

                    // som do ataque
                    efeitoAtk.play()
                    
                    // animacao pokemon user bate
                      // animacao mew batendo
            
                // pokeIMG.style.opacity='0'

                function animacaoJogadorBate(){
                    mewIMG.style.position='relative'
                    pokeIMG.style.position='absolute'
                    pokeIMG.style.top='15vh'
                    pokeIMG.style.right='25vw'
                    containerinteracao.style.marginTop='30vh'

                    setTimeout(() => {

                        mewIMG.style.position=''
                        pokeIMG.style.position=''
                        pokeIMG.style.top=''
                        pokeIMG.style.right=''
                        containerinteracao.style.marginTop='0'
                        
                    }, 1000);


                }

                animacaoJogadorBate()

                   
                     
                    // narraçao
                    pbottom.innerHTML= `Você atacou o MewTwo Dano de ${danoRecebido}<br>`
                    hpMew.innerHTML=`HP:${mew.vida}`


                    

                    // finaliza game caso vida do mew <=0
                    if(mew.vida <= 0){
                        mew.vida= 0
                        mewIMG.style.opacity='0'
                        pbottom.innerHTML= `Você atacou o MewTwo Dano de ${danoRecebido}<br>` 
                        hpMew.innerHTML=`HP:${mew.vida} , Parabéns Você venceu o MewTwo!`
                        btAtaque.style.display='none'
                        btCura.style.display='none'
                        jogarNovamente.style.display='flex'
                        
                        setTimeout(()=>{
                            pbottom.style.opacity='0'
                           
                    
                        },5000)
                        
            
                    }else{
                        // vez do mew pra atacar é chamada

                        setTimeout(()=>{
                            
                            vezDoMew()
                    
                        },1500)


                       


                            

                         
                        
                        
                    }

                    
                   
                    

                   
                    
                 
                }


            }else{
                console.log('vida do jogador acabou')
            }


           

         
            
          
        })
   


        function vezDoMew (){
            let danoRecebido = ataque(mew)
            pokemonUser.vida=  pokemonUser.vida - danoRecebido
            hpPokeUser.innerHTML=`HP:${pokemonUser.vida}`
            pbottom.innerHTML= `MewTwo atacou você com dano de ${danoRecebido}<br> ${jogador_a} o que seu ${pokemonUser.nome} deve fazer?<br>`
            
            // som do golpe do mew
            efeitoAtk2.play()

          


            function animacaoMewBate(){
                pokeIMG.style.position='relative'
                mewIMG.style.position='absolute'
                mewIMG.style.bottom='30vh'
                mewIMG.style.left='30vw'
                containerPokemonUser.style.marginTop='43vh'
                
                // volta mew a postion original
                setTimeout(() => {
                    pokeIMG.style.position=''
                    mewIMG.style.position=''
                    mewIMG.style.bottom=''
                    mewIMG.style.left=''
                    containerPokemonUser.style.marginTop=''
                    
                }, 1000);
            }

            animacaoMewBate()

            


            // mostra botoes atk def
            mostraBts()


            // caso vida do usuario menor que zero \/

            if(pokemonUser.vida <= 0){
                pokemonUser.vida = 0
                pbottom.innerHTML= `MewTwo atacou você com dano de ${danoRecebido}<br>O seu ${pokemonUser.nome} foi derrotado!<br>`
                pokeIMG.style.opacity='0'
                hpPokeUser.innerHTML=`HP:${pokemonUser.vida}, Seu pokemon foi derrotado!`
               

                btAtaque.style.display='none'
                btCura.style.display='none'
                jogarNovamente.style.display='flex'
                

                setTimeout(()=>{
                    pbottom.style.opacity='0'
                   
            
                },5000)
             
                
            }
        }


    



    }


}



// Pokemons cadastrados
let mew = {
    nome:'MewTwo',
    vida:120,
    vidaTotal:120,
    ataque:15,
    cura:0
}

let pika ={
    nome:'Pikachu',
    vida:100,
    vidaTotal:100,
    ataque:10,
    cura:25

}

let bulba ={
    nome:'Bulbasaur',
    vida:100,
    vidaTotal:100,
    ataque:8,
    cura:35
    
}

let char = {
    nome:'Charmander',
    vida:100,
    vidaTotal:100,
    ataque:12,
    cura:25

}
