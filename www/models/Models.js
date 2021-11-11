class Models{
    

    // TESTAR A DISPONIBILIDADE DA API
    testeApi(){
                
               // INICIO CHAMADA AJAX
               /*
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"teste-api/",
                  data:{token:app.token}
              
              })
              request.done(function (dados) {    

                  $("#btnLoginEmailSenha").html("Login");        

                  var dadosWordPress = dados;
                  console.log("%c RETORNO TESTE API","background:#ff0000;color:#fff;");
                  console.log(dadosWordPress);

                  if(dados.sucesso=="200"){
                      
                      localStorage.setItem("dadosWordPress",JSON.stringify(dadosWordPress));
                     

                  }else{
                     
                     aviso("Oops! Algo deu errado","Não conseguimos comunicação com o servidor, tente novamente em alguns minutos.");

                  }

                  
              });
              request.fail(function (dados) {

                   console.log("API NÃO DISPONÍVEL (testeApi)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Não conseguimos nos comunicar com a internet. Verifique sua conexão e tente novamente.");

              });
              */
              // FINAL CHAMADA AJAX

              let axiosConfig = {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    
                }
              };

              
              const formData = new FormData();
              formData.append('token', app.token);
              
              axios.post(app.urlApi+"teste-api/",formData, axiosConfig)
              .then(function (dados) {

                console.log("%c RETORNO TESTE API","background:#ff0000;color:#fff;");
                console.log(dados);

                if(dados.data.sucesso=="200"){
                      
                      localStorage.setItem("liberarPaid",dados.data.liberarPaid);
                     

                  }else{
                     
                     aviso("Oops! Sem comunicação com o servidor","Não conseguimos comunicação com o servidor, tente novamente em alguns minutos.");

                  }
                
            
              })
              .catch(function (error) {
                 console.log("API NÃO DISPONÍVEL (testeApi)");
                 console.log(error);
                 aviso("Oops! Algo deu errado","Não conseguimos nos comunicar com a internet. Verifique sua conexão e tente novamente.");
              });


    }
    
    // PROC LOGIN
    procLogin(){

       $("#btnViewLogin").html("Carregando...");
       
       event.preventDefault();

       var emailUsuario = $("#email").val();
       var senhaUsuario = $("#senha").val();
       //var userFCMToken = localStorage.getItem("userFCMToken");

        // ENVIAR PARA O WORDPRESS
        // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"login/",
                  data:{token:app.token,emailUsuario:emailUsuario,senhaUsuario:senhaUsuario}
              
              })
              request.done(function (dados) {    

                  if(dados.sucesso=="200"){
                      
                      console.log("USUÁRIO AUTENTICADO");
                      console.log(dados);

                      var dadosUsuario = JSON.stringify(dados);
                      
                      localStorage.setItem("dadosUsuario",dadosUsuario);
                      app.login(dados.id,dados.email,dadosUsuario);


                  }else{

                      aviso("Oops!","Login ou senha incorretos! Verifique as informações inseridas e tente novamente!");

                  }

              });
              request.fail(function (dados) {

                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Não conseguimos nos comunicar com a internet. Verifique sua conexão e tente novamente.");

              });
              // FINAL CHAMADA AJAX

              $("#btnViewLogin").html("Login");
     

    }

    // PROC LOGIN SMS
    procLoginSms(){

      $("#btnViewLogin").html("Enviando...");
       
       event.preventDefault();

       var loginUsuario = $("#celular").val();

	          // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"token-sms-login/",
                  data:{token:app.token,loginUsuario:loginUsuario}
              
              })
              request.done(function (dados) {        

                  $("#btnViewLogin").html("Receber código SMS");    

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                  	 
                  	 // SALVAR O CELULAR PARA O CADASTRO
                     localStorage.setItem("celularCadastro",dados.login);

                     app.verificarCodigoSms(dados.login);
                  
                  }else{
                     
                     //$(".form-control").val("");
                     //aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                     // SE O CELULAR NAO ESTIVER CADASTRADO
                     // VAMOS DIRECIONAR O USUÁRIO PARA CONCLUIR O CADASTRO
                    
                     // SALVAR O CELULAR PARA O CADASTRO
                     localStorage.setItem("celularCadastro",dados.login);

                     aviso("Oops!","Número não cadastrado! Que tal criar uma conta?");

                     app.cadastro();

                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewLogin").html("Receber código SMS"); 
                     
                   console.log("API NÃO DISPONÍVEL (procLoginSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      $("#btnViewLogin").html("Processando...");

      event.preventDefault();

       var codigoSms = $("#codigoCelular").val();
       var numeroCelular = localStorage.getItem("celularCadastro");

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"verificar-sms/",
                  data:{token:app.token,codigoSms:codigoSms,loginUsuario:numeroCelular}
              
              })
              request.done(function (dados) {         

                  $("#btnViewLogin").html("Verificar código");   

                  console.log("%c RETORNO DA VERIFICACAO DO CODIGO DE SMS","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);
                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Código incorreto","Verifique o código recebido e tente novamente. Se ainda tiver dificuldades, tente entrar com o e-mail e senha ou solicite outro código.");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewLogin").html("Verificar código"); 
                     
                   console.log("API NÃO DISPONÍVEL (verificarCodigoSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    // PROC CADASTRO
    procCadastro(){

        $("#btnViewCadastro").html("Processando...");

        event.preventDefault();

        var dadosUsuario = $('#formCadastro').formSerialize();
        var idUsuario = localStorage.getItem("idUsuario");


        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'cadastro/',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dadosUsuario;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("RETORNO DO CADASTRO:");
              console.log(xhr.responseText);

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                           console.log("OPERAÇÃO REALIZADA COM SUCESSO");
                           console.log(JSON.parse(xhr.responseText));
                          
                           $("#btnViewCadastro").html("Cadastra-se");   
              
                           console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                           console.log(dados);
              
                           var dadosUsuarioCadastro = JSON.stringify(dados);

                           localStorage.setItem("dadosUsuario",dadosUsuarioCadastro);

                            // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
                            app.login(dados.id,dados.email,dadosUsuarioCadastro);
                            //console.log("Deu certo o cadastro...");

                    }else{

                            $("#btnViewCadastro").html("Cadastra-se");  

                            aviso("Oops! Algo deu errado","Esse e-mail ou número de celular, já estão cadastrados em outra conta. Verifique as informações inseridas e tente novamente.");

                  }

            }else{

              $("#btnViewCadastro").html("Cadastra-se");  
              
              console.log("SEM SUCESSO procCadastro()");
              console.log(xhr.responseText);

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

        /*

        var cpf = $('#cpf').val();
  
                // INICIO CHAMADA AJAX
                var request = $.ajax({
  
                    method: "POST",
                    url: app.urlApiProxy+"cadastro.php",
                    data:{token:app.token,omniToken:app.omniToken,cpf:cpf}
                
                })
                request.done(function (dados) {         

                    $("#btnViewCadastro").html("Cadastrar");   
  
                    console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                    console.log(dados);
  
                    var dadosUsuario = JSON.stringify(dados);
                    
                    if(dados.sucesso=="200"){

                     
                            if(dados.dados.Cliente){

                                  // SALVAR DADOS RETORNADOS

                                  localStorage.setItem("AreaAtendimentoID",dados.dados.Cliente.AreaAtendimentoID);
                                  localStorage.setItem("AtendimentoVeiculo",dados.dados.Cliente.AtendimentoVeiculo);
                                  localStorage.setItem("Bairro",dados.dados.Cliente.Bairro);
                                  localStorage.setItem("BloqueioTotal",dados.dados.Cliente.BloqueioTotal);
                                  localStorage.setItem("CEP",dados.dados.Cliente.CEP);
                                  localStorage.setItem("CPFCNPJ",dados.dados.Cliente.CPFCNPJ);
                                  localStorage.setItem("Celular",dados.dados.Cliente.Celular);
                                  localStorage.setItem("Cidade",dados.dados.Cliente.Cidade);
                                  localStorage.setItem("ClienteID",dados.dados.Cliente.ClienteID);
                                  localStorage.setItem("CodClienteERP",dados.dados.Cliente.CodClienteERP);
                                  localStorage.setItem("Complemento",dados.dados.Cliente.Complemento);
                                  localStorage.setItem("ComunicacaoChip",dados.dados.Cliente.ComunicacaoChip);
                                  localStorage.setItem("ComunicacaoSatelital",dados.dados.Cliente.ComunicacaoSatelital);
                                  localStorage.setItem("DDCel",dados.dados.Cliente.DDCel);
                                  localStorage.setItem("DDTel",dados.dados.Cliente.DDTel);
                                  localStorage.setItem("DesbloqueioPortal",dados.dados.Cliente.DesbloqueioPortal);
                                  localStorage.setItem("Email",dados.dados.Cliente.Email);
                                  localStorage.setItem("EmissaoPV",dados.dados.Cliente.EmissaoPV);
                                  localStorage.setItem("Endereco",dados.dados.Cliente.Endereco);
                                  localStorage.setItem("Entidade",dados.dados.Cliente.Entidade);
                                  localStorage.setItem("Estado",dados.dados.Cliente.Estado);
                                  localStorage.setItem("InscricaoEstadual",dados.dados.Cliente.InscricaoEstadual);
                                  localStorage.setItem("LojaERP",dados.dados.Cliente.LojaERP);
                                  localStorage.setItem("Nome",dados.dados.Cliente.Nome);
                                  localStorage.setItem("Numero",dados.dados.Cliente.Numero);
                                  localStorage.setItem("ProprietarioID",dados.dados.Cliente.ProprietarioID);
                                  localStorage.setItem("Telefone",dados.dados.Cliente.Telefone);
                                  localStorage.setItem("vendedorid",dados.dados.Cliente.vendedorid);

                                  app.views.cadastroPasso2();

                                  if(dados.dados.Cliente.Email!=null){

                                      $("#email").val(dados.dados.Cliente.Email);

                                  }

                              
                            }else{

                              aviso("Oops! Algo deu errado",dados.dados.Mensagem);

                            }
                       
                       //localStorage.setItem("dadosUsuario",dadosUsuario);
  
                       // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
                       //app.login(dados.id,dados.email,dadosUsuario);
                    
                    }else{
                       
                       aviso("Oops! Esse e-mail já está cadastrado na nossa plataforma","Verifique os dados inseridos e tente novamente! Caso tenha esquecido sua senha, clique no link \"Esqueci Senha\" na tela de login.");
                    
                    }
                    
                });
                request.fail(function (dados) {

                     $("#btnViewCadastro").html("Cadastrar"); 
                       
                     console.log("API NÃO DISPONÍVEL (procCadastro)");
                     console.log(dados);
                     aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");
  
                });
                // FINAL CHAMADA AJAX

                */

                
  
      }


      like(idProduto,total){

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"like/",
                  data:{token:app.token,idProduto:idProduto,total:total}
              
              })
              request.done(function (dados) {         

                  if(dados.sucesso=="200"){
                     
                     console.log("LIKE ENVIADO COM SUCESSO");
                     console.log(dados);
                  
                  }else{

                      console.log("FALHA NO LIKE");
                      console.log(dados);
                  }
                  
              });
              request.fail(function (dados) {

                   console.log("API NÃO DISPONÍVEL (like)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

      }


    procResetSenha(){

              $("#btnViewResetarSenha").html("Processando...");

              event.preventDefault();
               
              var resetEmail = $("#resetEmail").val();
              
              /*
              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"reset-senha.php",
                  data:{token:app.token,resetEmail:resetEmail}
              
              })
              request.done(function (dados) {     

                  $("#btnViewResetarSenha").html("Resetar senha");       

                  console.log("%c RETORNO DO RESET","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     app.viewLogin();
                     aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     
                  }else{
                     
                     aviso("Oops! E-mail não encontrado","Seu e-mail não foi localizado na plataforma. Verique as informações inseridas e tente novamente.");
                  
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewResetarSenha").html("Resetar senha");  
                     
                   console.log("API NÃO DISPONÍVEL (ResetDeSenha)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX
              */

              app.viewLogin();
              aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     

    }

}