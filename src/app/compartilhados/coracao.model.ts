export default class Coracao {
    constructor(public cheio:boolean,
                public urlCoracaoCheio:string ='/assets/coracao_cheio.png',
                public urlCoracaoVazio:string ='/assets/coracao_vazio.png'
            ){

            }
           public exibeCoracao(): string{
               if(this.cheio === true){
                return this.urlCoracaoCheio
               } else {
                return this.urlCoracaoVazio
               }
           }
}