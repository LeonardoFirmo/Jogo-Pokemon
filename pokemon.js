let pokemonUser, jogador_a
const audio = document.getElementById('music')
const introMusic = new Audio ('./assets/audio/introPKM.mp3')
const battleMusic = new Audio ('./assets/audio/battle.mp3')
const efeitoAtk = new Audio ('./assets/audio/ataquePKM2.mp3')
const efeitoAtk2 = new Audio ('./assets/audio/laserPKM.mp3')
const efeitoCura = new Audio ('./assets/audio/curaPKM.mp3')

const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')
const narracao = document.querySelector('h1')
const pokeIMG = document.getElementById('pokeIMG')
const mewIMG = document.getElementById('MewIMG')
const pokemonChoise= document.querySelector('.pokemons')

const sectionEntradaNome = document.querySelector('.entradaNome')
const sectionPokeballs = document.querySelector('.pokeballs')
const sectionBattle = document.querySelector('.battle')
let pbottom = document.querySelector('.pbottom')
let jogarNovamente= document.querySelector('.jogarNovamente')

let hpMew = document.querySelector('#hpMew')
let hpPokeUser = document.querySelector('#hpPokeUser')

let inputName = document.querySelector('#inputName')
let btName = document.querySelector('.btName')

let btAtaque = document.querySelector('.ataque')
let btCura = document.querySelector('.cura')

let barHpMew = document.querySelector('#barHpMew')

let barHpUser = document.querySelector('#barHpUser')

let containerinteracao = document.querySelector('.interacao')
let containerPokemonUser = document.querySelector('.containerPokemonUser')








window.onload = function inicio(){

    // inserindo musica tema 
   

    narracao.innerHTML = "Bem vindo ao mundo Pokemon"
    
    setTimeout(() => {
        narracao.innerHTML = "Digite seu Nome"
    }, 1500);




    // nome usuario
    inputName.addEventListener('keyup',event =>{
        let nameUser = event.target.value
        
        btName.addEventListener('click', ()=>{
            jogador_a = nameUser
            sectionEntradaNome.style.display ='none'

            // chama escolhaPokemon e musica
            sectionPokeballs.style.display='flex'
            introMusic.play()
            
                 // apresentacao user
                setTimeout(()=>{
                    narracao.innerHTML = `${jogador_a} Escolha seu pokemon`
                    narracao.style.backgroundColor='#E63035'
                },500)

        })
        

    })

 
    
    function pegaIDpokemonUser(){

        pokemonChoise.addEventListener('click',e =>{
            let idPokemonEscolhido= e.target.id
            escolhaPokemon(idPokemonEscolhido)



        })

    }
    pegaIDpokemonUser()



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
        document.body.style.background= 'black'  
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

            // fadeInBattle
            sectionBattle.style.opacity='1'

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
                     hpPokeUser.innerHTML=`HP:${pokemonUser.vida} / ${pokemonUser.vida} `


                        
                        // aplicando atualização na barra de hp do pokemonUser
                        barHpUser.style.width= ` ${pokemonUser.vida * 2}px`
                        barHpUser.style.borderRadius='0px'
                        barHpUser.style.borderTopLeftRadius='5px'
                        barHpUser.style.borderBottomLeftRadius='5px'
                        
                    
                     
                            //  som da cura
                            efeitoCura.play()

    
                                 //  verifica hp do usuario para aplicar cor de perigo
                                if(pokemonUser.vida >=26 && pokemonUser.vida <= 45){
                                    barHpUser.style.backgroundColor='orange'
                                    hpPokeUser.style.color='orange'
                                }else if(pokemonUser.vida <= 25){
                                    barHpUser.style.backgroundColor='red'
                                    hpPokeUser.style.color='red'
                                
                                    
                                
                                }else{
                                    hpPokeUser.style.color='green'
                                    barHpUser.style.backgroundColor=''

                                }




                     pbottom.innerHTML= `Seu pokemon se curou nessa rodada` 
                        //  chama ataque do mew após cura
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

                    // aplicando atualização na barra de hp
                    barHpMew.style.width= `${mew.vida *2}px`
                    barHpMew.style.borderRadius='0px'
                    barHpMew.style.borderTopRightRadius='5px'
                    barHpMew.style.borderBottomRightRadius='5px'


                  


                         //  verifica hp do usuario para aplicar cor de perigo
                         if(mew.vida >=26 && mew.vida <= 45){
                            barHpMew.style.backgroundColor='orange'
                            hpMew.style.color='orange'
                        }else if(mew.vida <= 25){
                            barHpMew.style.backgroundColor='red'
                            hpMew.style.color='red'
                            
                                
                            
                        }else{
                            hpMew.style.color='green'
                            barHpMew.style.backgroundColor=''

                        }


                    // som do ataque
                    efeitoAtk.play()
                    
                    
                     
            
                    // animacao pokemon user bate
                    function animacaoJogadorBate(){
                      // display none no menu ao pokemonUser atacar
                        barHpUser.style.display='none'
                        hpPokeUser.style.display='none'

                        mewIMG.style.position='relative'
                        pokeIMG.style.position='absolute'
                        pokeIMG.style.top='15vh'
                        pokeIMG.style.right='35vw'
                        pokeIMG.style.height='15vh'


                      

                        setTimeout(() => {
                            // display normal no menu ao pokemonUser atacar
                                barHpUser.style.display=''
                                hpPokeUser.style.display=''

                                // coloca o pokemon no lugar ao atacar
                                mewIMG.style.position=''
                                pokeIMG.style.position=''
                                pokeIMG.style.top=''
                                pokeIMG.style.right=''
                                pokeIMG.style.height=''
                                
                            
                        }, 1000);


                    }

                    animacaoJogadorBate()

                   
                     
                    // narraçao
                    pbottom.innerHTML= `Você atacou o MewTwo Dano de ${danoRecebido}<br>`
                    hpMew.innerHTML=`HP:${mew.vida} / 120`


                    

                    // finaliza game caso vida do mew <=0
                    if(mew.vida <= 0){
                        mew.vida= 0
                        
                        pbottom.innerHTML= `Você atacou o MewTwo Dano de ${danoRecebido}<br>` 
                        hpMew.style.color='green'
                        hpMew.innerHTML=`HP:${mew.vida} , Parabéns Você venceu o MewTwo!`
                        btAtaque.style.display='none'
                        btCura.style.display='none'
                        jogarNovamente.style.display='flex'
                        barHpMew.style.display='none'
                        
                        // faz sumir img do mew apos receber atk
                        setTimeout(() => {
                            mewIMG.style.opacity='0'
                        }, 1000);

                        // faz sumir caixa de dialogo apos partida mew ser derrotado
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
            hpPokeUser.innerHTML=`HP:${pokemonUser.vida} / 100`
            pbottom.innerHTML= `MewTwo atacou você com dano de ${danoRecebido}<br> ${jogador_a} o que seu ${pokemonUser.nome} deve fazer?<br>`
            
            // som do golpe do mew
            efeitoAtk2.play()


            // aplicando atualização na barra de hp do pokemonUser
            barHpUser.style.width= ` ${pokemonUser.vida * 2}px`
            barHpUser.style.borderRadius='0px'
            barHpUser.style.borderTopLeftRadius='5px'
            barHpUser.style.borderBottomLeftRadius='5px'
            
           

          
           
         
            

            function animacaoMewBate(){
                // gif do mew batendo inserido 
                mewIMG.src="./img/mewatkgif.gif"
                 // display none no menu ao mew atacar
                barHpMew.style.display='none'
                hpMew.style.display='none'
                // movimentação do mew
                pokeIMG.style.position='relative'
                mewIMG.style.position='absolute'
                mewIMG.style.bottom='30vh'
                mewIMG.style.left='30vw'
                containerPokemonUser.style.marginTop='43vh'

                
                // containerPokemonUser.style.marginTop='48vh'

                // 
                
                
                // volta mew a postion original
                setTimeout(() => {
                     // display none no menu ao mew atacar
                    barHpMew.style.display=''
                    hpMew.style.display=''
                   
                    // volta mew ao lugar
                    mewIMG.src="./img/mewtwogif.gif"


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
            


            //  verifica hp do usuario para aplicar cor de perigo
            if(pokemonUser.vida >=26 && pokemonUser.vida <= 45){
                barHpUser.style.backgroundColor='orange'
                hpPokeUser.style.color='orange'
            }else if(pokemonUser.vida <= 25){
                barHpUser.style.backgroundColor='red'
                hpPokeUser.style.color='red'
              
                
             
            }else{
                hpPokeUser.style.color='green'
                barHpUser.style.backgroundColor=''

            }

            // caso vida do usuario menor que zero , finaliza partida\/

            if(pokemonUser.vida <= 0){
                pokemonUser.vida = 0
                pbottom.innerHTML= `MewTwo atacou você com dano de ${danoRecebido}<br>O seu ${pokemonUser.nome} foi derrotado!<br>`
                

                // tira barra de vida do usuario
                barHpUser.style.display='none'

                setTimeout(() => {
                    pokeIMG.style.opacity='0'
                    containerinteracao.style.height='20vh'
                    hpPokeUser.innerHTML=`HP:${pokemonUser.vida}, Seu pokemon foi derrotado!`
                }, 1000);
               
               

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



// Lista de Pokemons cadastrados
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
