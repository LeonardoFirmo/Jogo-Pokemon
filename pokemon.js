let pokemonUser, jogador_a
let audio = document.getElementById('music')
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






window.onload = function inicio(){

    
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
        



        //   botoes ataque defEvento   
        // CURA  
        btCura.addEventListener('click',()=>{
           kura = true
           
            // verificação do player atual
      
            if(pokemonUser.vida > 0 && mew.vida > 0){
              // vez do jogador
                
  
                
                    if(kura == true){
                     atak = false
                     let curaRecebida = cura(pokemonUser)
                     pokemonUser.vida= curaRecebida
                     hpPokeUser.innerHTML=`HP:${pokemonUser.vida}`
                     
                     


                     pbottom.innerHTML= `Seu pokemon se curou nessa rodada` 
                        //  chama ataque do mew
                    setTimeout(()=>{
                       
                        vezDoMew()
                    },1200)

                }

            }
            
        })


       


        // bt ataque
        btAtaque.addEventListener('click',()=>{
            atak = true
            
            if(pokemonUser.vida > 0){
                if(atak == true){
                    kura = false
                    

                    let danoRecebido = ataque(pokemonUser)
                    mew.vida=  mew.vida - danoRecebido 
                  
                     

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
          

            if(pokemonUser.vida <= 0){
                pokemonUser.vida = 0
                pbottom.innerHTML= `MewTwo atacou você com dano de ${danoRecebido}<br>O seu ${pokemonUser.nome} foi derrotado!<br>`
                pokeIMG.style.opacity='0'
                hpPokeUser.innerHTML=`HP:${pokemonUser.vida}, Seu pokemon foi derrotado!`
               

                btAtaque.style.display='none'
                btCura.style.display='none'
                jogarNovamente.style.display='flex'
                
             
                
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
