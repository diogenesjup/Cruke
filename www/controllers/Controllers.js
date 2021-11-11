class App {
//window.history.pushState(e, '"' + e+ '"', paginaSessao+'#' + e);
    constructor(appId, appName, appVersion, appOs, ambiente, token, tokenSms, apiLogin, apiSenha) {

        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;        
        this.appOs = appOs;

        this.views = new Views();
        this.sessao = new Sessao();
        this.models = new Models();
        this.helpers = new Helpers();

        if(ambiente=="HOMOLOGACAO"){
             
            this.urlDom = "http://127.0.0.1:8080/cruke/www/app/";
            this.urlApi = "http://127.0.0.1:8080/cruke/www/api/public/";
            this.urlCdn = "http://127.0.0.1:8080/cruke/www/cdn/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "https://servidorseguro.cloud/cruke/app/";
            this.urlApi = "https://servidorseguro.cloud/cruke/api/";
            this.urlCdn = "https://servidorseguro.cloud/cruke/cdn/";

        }

        this.token = token;
        this.tokenSms = tokenSms;

        this.apiLogin = apiLogin;
        this.apiSenha = apiSenha;

        this.omniToken = "";
        
    }
    
    getVersion() {

        return this.appVersion;
    }

    getOs(){

        return this.appOs;
    }

    initProd(elemento) {
        this.views.viewProd();
    }
    
    initApp(elemento){

        this.views.viewPrincipal();

        // VERIFICAR SE A API ESTÁ OK
        this.models.testeApi();

        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO
        this.sessao.verificarLogado();

    }

    inicio(){

        this.views.viewPrincipalLogado();
        //this.views.ativarMenuUm();

    }

    login(idUsuario,emailUusario,dadosCompletoUsuario){
   
        this.sessao.logarUsuario(idUsuario,emailUusario);
   
    }

    verificarCodigoSms(numero){

        this.views.viewCodigoSms(numero);

    }

    procVerificarSms(){
        
       this.models.verificarCodigoSms(); 

    }
    
    procLoginSms(){

        this.models.procLoginSms();
   
    }

    procLogin(){

        this.models.procLogin();
   
    }
    
    procLogoff(){

        confirmacao("Tem certeza que deseja sair?","Você será desconectado...","app.logoff();","Sim, sair");
        
    }

    logoff(){
       
        localStorage.clear();
        app.viewLogin();
        location.reload();

    }

    cadastro(){
        this.views.viewCadastro();
        this.views.desativarTodosMenus();
    }

    procCadastro(){
        this.models.procCadastro();
        //this.views.cadastroPasso2();
    }
    
    procCadastroPasso2(){

        this.views.cadastroPasso3();

    }

    applyFilter(seletor){
        
        this.views.applyFilter(seletor);

    }

    procCadastro3(){

        this.views.cadastroPasso4();

    }

    procCadastro4(){
        
        app.inicio();
    }


    esqueciMinhaSenha(){
        this.views.viewEsqueciMinhaSenha();
        this.views.desativarTodosMenus();
    }

    procResetSenha(){
        this.models.procResetSenha();
    }

    viewLoginEmailSenha(){
        this.views.viewLoginEmailSenha();
    }

    viewLoginSms(){
        this.views.viewLoginSms();
    }


    // EXIBIR A PESQUISA
    showPesquisa(){

        $(".pesquisa-flutuante").css("left","0px");
    }
    // ESCONDER A PESQUISA
    hidePesquisa(){

        $(".pesquisa-flutuante").css("left","-101%");
    }

    // FILTRAR OS RESULTADOS
    resultadoDePesquisa(){

                  var input, filter, ul, li, a, i;

                  var entrei = "nao";
                  
                  // CAMPO DE PESQUISA
                  input = document.getElementById('inputPesquisa');
                  filter = input.value.toUpperCase();

                  // FILTRAR HISTORICOS
                  ul = document.getElementById("buscaHistorico");

                  li = ul.getElementsByTagName('li');

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                          entrei = "sim";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

                  // FILTRAR RESULTADOS
                  ul = document.getElementById("novosResultados");

                  li = ul.getElementsByTagName('li');

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "block";
                          entrei = "sim";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

                  // NADA ENCONTRADO
                  if(entrei == "nao"){
                     
                     $("#desculpeNadaEncontrado li").fadeIn(500);
                    
                  }else{

                     $("#desculpeNadaEncontrado li").hide();
                    
                  }

    }


    categoria(){

        this.views.categoria();

    }

    favoritos(){

        this.views.favoritos();

    }

    favoritar(){

        confirmacao("Adicionar esse local a sua lista de favoritos?","Ao confirmar, iremos adicionar esse local a sua lista de locais favoritos","","Sim, adicionar");

    }

    local(){

        this.views.local();

    }

    comentario(){

        this.views.comentario();

    }

    enviarComentario(){

        app.local();
        aviso("Comentário enviado com sucesso!","Nossa equipe está analisando o comentário enviado e em breve ele estará disponível para todos dentro da plataforma.");

    }



    view2(){
        this.views.view2();
        this.views.ativarMenuDois();
    }

    view3(){
        this.views.view3();
        this.views.ativarMenuTres();
    }

    viewLogin(){
        this.views.viewLogin();
        this.views.desativarTodosMenus();

        $("section#content").addClass("nao-logado");
        
    }

    viewUploadFoto(){
        this.views.viewUploadFoto();
        this.views.desativarTodosMenus();
    }

    /* ABRIR OU FECHAR O MENU LOJA */
    fabrirFecharMenuLoja(){

              if($(".menu-adicional-loja").hasClass("aberto")){
                 
                 $(".menu-adicional-loja").removeClass("aberto");
                
              }else{

                $(".menu-adicional-loja").addClass("aberto");
                
              }

    
    if(localStorage.getItem("bdLogado")=="logado"){
    }

    if(localStorage.getItem("nomeUsuario")!==null){
         var nome = localStorage.getItem("nomeUsuario").split(" ");

        $("#nomeUsuarioMN").html(`${nome[0]}`);
    }
    
    $("#emailUsuarioMN").html(`${localStorage.getItem("idUsuario")}`);


  }

    tipoPessoa(tipoPessoa){

        console.log("TIPO PESSOA: "+tipoPessoa);
   
        if(tipoPessoa=="fisica"){

            $("#caixaDados label").html(`CPF`);
            $("#cpf").val("");
            $("#cpf").inputmask("999.999.999-99");

        }
        if(tipoPessoa=="juridica"){

            $("#caixaDados label").html(`CNPJ`);
            $("#cpf").val("");
            $("#cpf").inputmask("99.999.999/9999-99");

        }

    }

    like(idProduto,total){
       
       console.log("Vamos dar Like no produto...");
       this.models.like(idProduto,total);

    }
    

    iniciarCalibragem(){

          if( navigator.geolocation ){
              // Call getCurrentPosition with success and failure callbacks
              navigator.geolocation.getCurrentPosition( success, fail );
           }else{
              aviso("Sem GPS","Não conseguimos acessar o seu GPS. Para um correto uso do aplicativo, o seu disposítivo precisa ter esse recurso. Talvez seja necessário reeinstalar o aplicativo para tentar novamente.");
              app.logoff();      
           }
       function success(position)
            {
                var cordenadas = "";
                cordenadas = position.coords.longitude;
                cordenadas = cordenadas+", ";
                cordenadas = cordenadas + position.coords.latitude;
                // SETAR AS NOVAS COORDENADAS
                pscLat = position.coords.latitude;
                pscLon = position.coords.longitude;

                console.log("LAT NEW: "+pscLat);
                console.log("LON NEW: "+pscLon);

                // SALVAR NA MEMORIA A POSIÇÃO ATUAL DO USUARIO
                if(pscLat!="" && pscLon!=""){
                  localStorage.setItem("latitude",pscLat);
                  localStorage.setItem("longitude",pscLon);
                }

                // SE TIVERMOS A LOCALIZAÇÃO ATUAL, A GENTE COMEÇA A EXIBIR O MAPA A PARTIR DESSE PONTO
                if(pscLat!="" && pscLon!=""){

                    aviso("GPS identificado e pronto!","Tudo certo com a sua localização, agora vamos testar a sua camêra");
                    appCamera.startCameraBelow();
                    aviso("Como calibrar a câmera:","Quando sua câmera for inicializada, tire qualquer foto para testarmos a resolução da mesma.");

                }else{

                   aviso("Sem GPS","Não conseguimos acessar o seu GPS. Para um correto uso do aplicativo, o seu disposítivo precisa ter esse recurso. Talvez seja necessário reeinstalar o aplicativo para tentar novamente.");
                   app.logoff();
                }


            }
          function fail(){

               aviso("Sem GPS","Não conseguimos acessar o seu GPS. Para um correto uso do aplicativo, o seu disposítivo precisa ter esse recurso. Talvez seja necessário reeinstalar o aplicativo para tentar novamente.");
               app.logoff();
            
            }  

    }


    salvarEContinuarDepois(){

        app.inicio();
        aviso("Checklist salvo!","As informações já respondidas foram salvas, e você poderá continuar depois.");  

    }


    increaseFont(){
       
       if(localStorage.getItem("fontLabel")==null){

            $("label").css("font-size","18px");
            localStorage.setItem("fontLabel","18");

       }else{

            var fontSize = localStorage.getItem("fontLabel");  

            fontSize++;  

            if(fontSize>=24){
                $("label").css("font-size","14px");
                fontSize = 14;
            }else{
                $("label").css("font-size",fontSize+"px");
            }

            localStorage.setItem("fontLabel",fontSize);

       }

    }


tarefas(){
   
   this.views.tarefas();

}


relatorios(){

    this.views.relatorios();

}


    

}
class Sessao{
    
	constructor(){
	      
	     this.logado = "nao-logado";
	     this.bdLogado = localStorage.getItem("bdLogado");
	     this.idUsuario = localStorage.getItem("idUsuario");
	     this.emailUsuario = localStorage.getItem("emailUsuario");
	     this.dadosUsuario = localStorage.getItem("dadosUsuario");

	}
    
    logarUsuario(idUsuario,emailUusario){

    	this.logado = "logado";
    	this.idUsuario = idUsuario;
    	this.emailUusario = emailUusario;

    	localStorage.setItem("bdLogado","logado");
        localStorage.setItem("idUsuario",this.idUsuario);
        localStorage.setItem("emailUusario",emailUusario);

        // REMOVER A CLASSE QUE IMPEDE QUE O RODAPÉ SEJA ADICIONADO AO CALCULO DA ALTURA
        $("section#content").removeClass("nao-logado");
        
        // DIRECIONAR O USUÁRIO PARA O INÍCIO
    	app.inicio();

    }

    // USUÁRIO JÁ ESTA LOGADO
    verificarLogado(){
      
	      if(this.bdLogado=="logado"){

	      	app.views.viewPrincipalLogado();
	      	
	      }else{


          }

    }

    deslogarUusario(){
    	this.logado = "nao-logado";
    	localStorage.setItem("bdLogado","nao-logado");
    	localStorage.clear();
    }

}