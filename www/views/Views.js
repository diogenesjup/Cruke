class Views {

   constructor() {

      this._content = $("section#content");

      this._allMenus = $("footer * a");
      this._menu1 = $("footer .menu-1 a");
      this._menu2 = $("footer .menu-2 a");
      this._menu3 = $("footer .menu-3 a");

      this.header = $("header");
      this.footer = $("footer");

   }

   animarTransicao() {
      new WOW().init();
   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   VIEW PRINCIPAL
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   viewProd() {
      voltarAoTopo();

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();
   }

   viewPrincipalLegado() {

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um logo-header">
                           <a href="javascript:void(0)" title="Start Sonhos">
                              <img src="assets/images/icone.png" alt="Start Sonhos Logo" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Início
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal view-intro-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        <!-- BUSCA PRINCIPAL -->
                        <div class="input-group busca-principal">
                           <input 
                              type="text" 
                              class="form-control" 
                              onkeyup="app.resultadoDePesquisa();" 
                              placeholder="Faça uma pesquisa" 
                              aria-label="Pesquise por produtos"
                              aria-describedby="busca-principal"
                              id="buscaPrincipal">
                                 <div class="input-group-append">
                                 <span class="input-group-text" id="busca-principal">
                                    <img src="assets/images/pesquisa.svg" alt="Busca">
                                 </span>
                                 </div>
                        </div>
                        <!-- BUSCA PRINCIPAL -->

                     </div>
                  </div>

                  <!-- STORIES -->
                        <div class="stories">
                           <div class="row">
                              <div class="col-12">
                                 
                                    <div id="storiesZ" class="storiesWrapper"></div>

                                    <!--
                                    <ul class="stories">
                                       
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories1.svg" alt="Iphone 12">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Iphone 12 com um título grande para testar a quebra
                                             </span>
                                          </a>
                                       </li>

                                    </ul>
                                    -->


                              </div>
                           </div>
                        </div>
                        <!-- STORIES -->


                     <!-- ABAS -->
                  <div class="page-tabs">
                     <div class="pcss3t pcss3t-height-auto">

                     <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                     <label for="tab1">Sorteios</label>
                                                                           
                     <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                     <label for="tab2">Outros</label>

                     

                        <ul>
                                                                                    
                           <!-- ABA UM -->
                           <li class="tab-content tab-content-first area-pesquisa-principal" id="conteudo1">
                              
                                 <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                  

                           </li>
                           <!-- ABA UM -->

                           <!-- ABA DOIS -->
                           <li class="tab-content tab-content-2 area-pesquisa-principal" id="conteudo2">

                                 <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>


                           </li>
                           <!-- ABA DOIS -->

                           <!-- ABA TRES -->
                           <li class="tab-content tab-content-last" id="conteudo3">
                              <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                           </li>
                           <!-- ABA TRES -->

                        </ul>

                  </div>
                  </div>      
                  <!-- ABAS -->  
                  <!-- BOTÃO CRIAR POST
                  <button type="button" data-js="post"></button>
                  -->
               
      `);

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();


      
   }


   viewPrincipal(){

      voltarAoTopo();

      this.header.html(``);

      this._content.html(`
               
            <div class="view-principal view-intro-principal" view-name="view-principal">
                
                <div id="introApp" class="owl-carousel owl-theme">


                        <!-- PAGINA -->
                        <div class="item">
                              
                              <img src="assets/images/ilus1.png" alt="Encontre o local" />
                              <h1>Encontre o local</h1>
                              <p>
                                Escolha entre diversões, passeios, pontos turísticos, hospedagem e divirta-se
                              </p>
                              <p>
                                <a href="javascript:void(0)" title="PRÓXIMO" onclick="jQuery('.owl-dot:nth(1)').trigger('click');" class="btn proximo-passo btn-primary">
                                   PRÓXIMO
                                </a>
                              </p>

                        </div>
                        <!-- PAGINA -->



                        <!-- PAGINA -->
                        <div class="item">
                              
                              <img src="assets/images/ilus2.png" alt="Escolha o que fazer" />
                              <h1>Escolha o que fazer</h1>
                              <p>
                                Veja avaliações de pessoas que já estiveram no local e não se decepcione mais
                              </p>
                              <p>
                                <a href="javascript:void(0)" title="PRÓXIMO" onclick="jQuery('.owl-dot:nth(2)').trigger('click');" class="btn proximo-passo btn-primary">
                                   PRÓXIMO
                                </a>
                              </p>

                        </div>
                        <!-- PAGINA -->



                        <!-- PAGINA -->
                        <div class="item">
                              
                              <img src="assets/images/ilus3.png" alt="Veja avaliações" />
                              <h1>Veja avaliações</h1>
                              <p>
                                Gostou do local? não sabe como chegar? Vamos te ajudar a chegar traçando uma rota até o local escolhido
                              </p>
                              <p>
                                <a href="javascript:void(0)" title="FINALIZAR" onclick="app.viewLogin();" class="btn btn-primary">
                                   FINALIZAR
                                </a>
                              </p>

                        </div>
                        <!-- PAGINA -->

                </div>
                



            </div>
               
      `);

      this.animarTransicao();

      // INSTANCIAR O OWL CARROUSEL
      var introApp = $('#introApp').owlCarousel({
         loop: false,
         margin: 1,
         items: 1,
         autoplay: false,
         center: true,
         //dotsContainer: '#carousel-custom-dots',
      });
      
    

    
   }



   viewPrincipalLogado() {

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um logo-header">
                           <a href="javascript:void(0)" title="Cruke">
                              <img src="assets/images/simbolo.png" alt="Cruke Logo" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Início
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal-logado">
                     <div class="col-12 wow fadeInUp">
                        
                        <!-- LOCALIZACAO -->
                        <nav class="localizacao">
                           <ul>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="fa fa-map-marker"></i> Porto Seguro, BA
                                    <span>
                                       <i class="fa fa-angle-right"></i>
                                    </span>
                                 </a>
                              </li>
                           </ul>
                        </nav>
                        <!-- LOCALIZACAO -->


                        <!-- CATEGORIAS DESTAQUE -->
                        <div id="categoriasDestaque" class="loop-categorias-destaques owl-carousel owl-theme">

                              <!-- PAGINA -->
                               <div class="item">
                                   <div class="capa-destaque">
                                      &nbsp;
                                   </div>
                                   <a href="javascript:void(0)" onclick="app.categoria()">
                                      Passeios
                                   </a>
                               </div>
                               <!-- PAGINA -->

                               <!-- PAGINA -->
                               <div class="item">
                                   <div class="capa-destaque">
                                      &nbsp;
                                   </div>
                                   <a href="javascript:void(0)" onclick="app.categoria()">
                                      Restaurantes
                                   </a>
                               </div>
                               <!-- PAGINA -->

                               <!-- PAGINA -->
                               <div class="item">
                                   <div class="capa-destaque">
                                      &nbsp;
                                   </div>
                                   <a href="javascript:void(0)" onclick="app.categoria()">
                                      Diversões
                                   </a>
                               </div>
                               <!-- PAGINA -->

                               <!-- PAGINA -->
                               <div class="item">
                                   <div class="capa-destaque">
                                      &nbsp;
                                   </div>
                                   <a href="javascript:void(0)" onclick="app.categoria()">
                                      Hospedagens
                                   </a>
                               </div>
                               <!-- PAGINA -->

                               <!-- PAGINA -->
                               <div class="item">
                                   <div class="capa-destaque">
                                      &nbsp;
                                   </div>
                                   <a href="javascript:void(0)" onclick="app.categoria()">
                                      Turismo
                                   </a>
                               </div>
                               <!-- PAGINA -->

                               <!-- PAGINA -->
                               <div class="item">
                                   <div class="capa-destaque">
                                      &nbsp;
                                   </div>
                                   <a href="javascript:void(0)" onclick="app.categoria()">
                                      Outros
                                   </a>
                               </div>
                               <!-- PAGINA -->

                        </div>
                        <!-- CATEGORIAS DESTAQUE -->


                        <!-- TITULO SESSAO -->
                        <h2 class="titulo-sessao">
                           Destaque
                        </h2>
                        <!-- TITULO SESSAO -->

                        <!-- BANNER DESTAQUE -->
                        <div class="banner-destaque">
                           &nbsp;
                        </div>
                        <!-- BANNER DESTAQUE -->


                        <!-- TITULO SESSAO -->
                        <h2 class="titulo-sessao">
                           Pra você
                        </h2>
                        <!-- TITULO SESSAO -->



                     </div>
                  </div>



                  <!-- PARA VOCÊ -->
                  <div id="paraVoce" class="loop-destaques owl-carousel owl-theme">

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                  </div>
                  <!-- PARA VOCÊ -->



                  <div class="row view-principal" view-name="view-principal-logado">
                     <div class="col-12 wow fadeInUp">
                        
                        <!-- TITULO SESSAO -->
                        <h2 class="titulo-sessao">
                           O que fazer
                        </h2>
                        <!-- TITULO SESSAO -->

                     </div>
                  </div>


                  <!-- O QUE FAZER -->
                  <div id="oQueFazer" class="loop-destaques owl-carousel owl-theme">

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-destaque">
                                   &nbsp;
                                </div>
                            </div>
                            <!-- PAGINA -->

                  </div>
                  <!-- O QUE FAZER -->
                    
               
      `);

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();


      var categoriasDestaque = $('#categoriasDestaque').owlCarousel({
                loop:true,
                margin:10,
                items: 5,
                autoplay: false,
                center: false                         
      });
      var paraVoce = $('#paraVoce').owlCarousel({
                loop:true,
                margin:15,
                items: 2.5,
                autoplay: false,
                center: true                         
      });
      var oQueFazer = $('#oQueFazer').owlCarousel({
                loop:true,
                margin:15,
                items: 2.5,
                autoplay: false,
                center: true                         
      });


   }


   categoria(){

         voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um logo-header">
                           <a href="javascript:void(0)" title="Cruke">
                              <img src="assets/images/simbolo.png" alt="Cruke Logo" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Título da categoria
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal-logado">
                     <div class="col-12 wow fadeInLeft">
                        
                        <!-- TITULO PAGINA INTERNA -->
                        <div class="titulo-pagina-interna">
                           <h2>
                              <a href="javascript:void(0)" onclick="app.inicio()" title=""><i class="fa fa-angle-left"></i></a>
                              Título da Categoria
                           </h2>
                        </div>
                        <!-- TITULO PAGINA INTERNA -->


                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="fechado">Fechado</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="fechado">Fechado</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->




                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                     </div>
                  </div>
                    
               
      `);

      this.animarTransicao();

      app.views.desativarTodosMenus();

   }



   favoritos(){

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um logo-header">
                           <a href="javascript:void(0)" title="Cruke">
                              <img src="assets/images/simbolo.png" alt="Cruke Logo" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Favoritos
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal-logado">
                     <div class="col-12 wow fadeInLeft">
                        
                        <!-- TITULO PAGINA INTERNA -->
                        <div class="titulo-pagina-interna">
                           <h2>
                              Salvos como Favoritos
                           </h2>
                        </div>
                        <!-- TITULO PAGINA INTERNA -->


                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="fechado">Fechado</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="fechado">Fechado</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              <div class="capa-detalhe-local">
                                 <a href="javascript:void(0)" onclick="app.local()" class="link-local">
                                    &nbsp;
                                 </a>
                                 <a href="javascript:void(0)" onclick="app.favoritar()" class="fav-local">
                                    <i class="fa fa-heart"></i>
                                 </a>
                              </div>
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) | Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local um pouco maior que a maioria
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>
                        </div>
                        <!-- DETALHE LOCAL -->




                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                     </div>
                  </div>
                    
               
      `);

      this.animarTransicao();

      app.views.desativarTodosMenus();

   }




   local(){

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um coluna-um-voltar logo-header">
                           <a href="javascript:void(0)" title="Voltar" onclick="app.inicio()">
                              <i class="fa fa-angle-left"></i>
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Detalhe local
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
                  
                  <div class="galeria-local wow fadeInLeft">
                      <div id="galeriaLocalEnfim" class="galeria-local-enfim owl-carousel owl-theme">

                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem7.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem6.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem5.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem4.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem9.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem10.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem11.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem12.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>
                           <div class="item">
                              <div class="capa-galeria" style="background:url('assets/images/Imagem13.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 <a data-fslightbox="gallery" data-type="image" data-prop="image" href="javascript:void(0)">
                                    &nbsp;
                                 </a>
                              </div>
                           </div>

                      </div>

                      <div class="controle-banner-na-homepage2">
                          <div class="owl-theme">
                            <div class="owl-controls">
                               <div class="custom-nav-banner2 owl-nav"></div>
                            </div>
                          </div>
                      </div>

                      <div class="favoritar-local-interno">
                        <a href="javascript:void(0)" title="Favoritar esse local" onclick="aviso('Oops! Esse local já é um favorito','Esse local já está salvo na sua lista de locais favoritos')">
                           <i class="fa fa-heart" aria-hidden="true"></i>
                        </a>
                      </div>


                  </div>

                  <div class="row view-principal" view-name="view-principal-logado">
                     <div class="col-12 wow fadeInLeft">
                        
                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                    <small>
                                       4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) 
                                    </small>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>

                        </div>
                        <!-- DETALHE LOCAL -->

                        <!-- INFO RESTAURANTE -->
                        <div class="infos-gerais info-restaurante">
                            <h2>Principais pratos</h2>
                            <ul>
                              <li>
                                 <div class="row">
                                    <div class="col-3">
                                       <div class="capa-prato" style="background:url('assets/images/Imagem7.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                          &nbsp;
                                       </div>
                                    </div>
                                    <div class="col-9 conteudo-prato">
                                       <h3>Picanha na chapa</h3>
                                       <p>Acompanha farofa, vinagrete, feijão, arroz e fritas</p>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div class="row">
                                    <div class="col-3">
                                       <div class="capa-prato" style="background:url('assets/images/Imagem7.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                          &nbsp;
                                       </div>
                                    </div>
                                    <div class="col-9 conteudo-prato">
                                       <h3>Picanha na chapa</h3>
                                       <p>Acompanha farofa, vinagrete, feijão, arroz e fritas</p>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div class="row">
                                    <div class="col-3">
                                       <div class="capa-prato" style="background:url('assets/images/Imagem7.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                          &nbsp;
                                       </div>
                                    </div>
                                    <div class="col-9 conteudo-prato">
                                       <h3>Picanha na chapa</h3>
                                       <p>Acompanha farofa, vinagrete, feijão, arroz e fritas</p>
                                    </div>
                                 </div>
                              </li>
                            </ul>

                            <div class="ver-todas-as-opcoes">
                              <a href="javascript:void(0)" class="btn btn-primary" title="Ver todos os pratos" onclick="">
                                 Ver todos os pratos
                              </a>
                            </div>

                            <div class="descricao-local">
                              <p>
                                 O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo causa impacto indireto na reavaliação dos índices pretendidos. 
                                 Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o início da atividade geral de formação de atitudes acarreta um processo de
                                  reformulação e modernização das formas de ação. 
                              </p>
                            </div>


                            <div class="informacoes-gerais">
                               <h2>Informações</h2>

                               <p class="localizacao-telefone-horario">
                                  <i class="fa fa-phone" aria-hidden="true"></i> +55 11 9 45027877
                               </p>

                               <p class="localizacao-telefone-horario">
                                  <i class="fa fa-clock-o" aria-hidden="true"></i> Seg à Sex 09 às 18, Sab 10 às 22, Dom e feriados 09 às 23
                               </p>

                               <p class="localizacao-telefone-horario">
                                  <i class="fa fa-envelope" aria-hidden="true"></i> contato@contato.com.br
                               </p>

                               <p class="localizacao-telefone-horario">
                                  <i class="fa fa-map-marker" aria-hidden="true"></i> Rua do Miguel, 333 - Shopping Luz, Porto Seguro, Bahia, 45655-000 Brasil
                               </p>

                               <div class="mapa">
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30615.388931655794!2d-39.10069407579281!3d-16.428705274209896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73696a94abc86ff%3A0x677df9529c95e80f!2sPorto%20Seguro%2C%20BA%2C%2045810-000!5e0!3m2!1spt-BR!2sbr!4v1636655066913!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                               </div>

                               <div class="abrir-localizacao">

                                    <a href="javascript:void(0)" target="_blank" title="Ver no GoogleMaps" onclick="openUrl('https://goo.gl/maps/tj6EZZoi1GE5JSds7')" >
                                       <img src="assets/images/7123946_logo_maps_google_icon.png" alt="GoogleMaps" />
                                    </a>

                                    <a href="javascript:void(0)" target="_blank" title="Ver no Waze" onclick="openUrl('https://www.waze.com/pt-BR/live-map?utm_source=waze_website&utm_campaign=waze_website&utm_medium=website_menu')">
                                       <img src="assets/images/waze.png" alt="Waze" />
                                    </a>

                               </div>

                            </div>

                        </div>
                        <!-- INFO RESTAURANTE -->


                        <!-- DESTAQUE AVALIAÇÔES -->
                        <div class="destaque-avaliacoes">
                              
                               4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10 comentários) 

                        </div>
                        <!-- DESTAQUE AVALIAÇÕES -->

                        <!-- ESCREVER UMA AVALIAÇÃO -->
                        <div class="escrever-uma-avaliacao">
                           <a href="javascript:void(0)" title="Escrever uma avaliação" onclick="app.comentario();">
                              escrever uma avaliação
                           </a>
                        </div>
                        <!-- ESCREVER UMA AVALIAÇÃO -->

                        <!-- COMENTÀRIOS -->
                        <div class="comentarios">

                              <!-- COMENTARIO -->
                              <div class="flex items-center comentario-inner">
                                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                    <div class="ml-2">
                                      <div class="text-sm">
                                        <span class="font-semibold">Diogenes Junior</span>
                                        <span class="estrelas-interna-comentario">
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                      </div>
                                      <div class="text-gray-500 text-xs " style="padding-top: 3px;">Publicado em 02/11/2021</div>
                                    </div>
                                    
                              </div>
                              <div class="texto-comentario">
                                       <p>Adorei esse restaurante, voltaria com certeza para conhecer o que eu não pude conhecer ainda</p>
                              </div>
                              <!-- COMENTARIO -->

                              <!-- COMENTARIO -->
                              <div class="flex items-center comentario-inner">
                                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                    <div class="ml-2">
                                      <div class="text-sm">
                                        <span class="font-semibold">Diogenes Junior</span>
                                        <span class="estrelas-interna-comentario">
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                      </div>
                                      <div class="text-gray-500 text-xs " style="padding-top: 3px;">Publicado em 02/11/2021</div>
                                    </div>
                                    
                              </div>
                              <div class="texto-comentario">
                                       <p>Adorei esse restaurante, voltaria com certeza para conhecer o que eu não pude conhecer ainda</p>
                              </div>
                              <!-- COMENTARIO -->

                              <!-- COMENTARIO -->
                              <div class="flex items-center comentario-inner">
                                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                    <div class="ml-2">
                                      <div class="text-sm">
                                        <span class="font-semibold">Diogenes Junior</span>
                                        <span class="estrelas-interna-comentario">
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                      </div>
                                      <div class="text-gray-500 text-xs " style="padding-top: 3px;">Publicado em 02/11/2021</div>
                                    </div>
                                    
                              </div>
                              <div class="texto-comentario">
                                       <p>Adorei esse restaurante, voltaria com certeza para conhecer o que eu não pude conhecer ainda</p>
                              </div>
                              <!-- COMENTARIO -->

                              <!-- COMENTARIO -->
                              <div class="flex items-center comentario-inner">
                                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                    <div class="ml-2">
                                      <div class="text-sm">
                                        <span class="font-semibold">Diogenes Junior</span>
                                        <span class="estrelas-interna-comentario">
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star" aria-hidden="true"></i>
                                             <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                      </div>
                                      <div class="text-gray-500 text-xs " style="padding-top: 3px;">Publicado em 02/11/2021</div>
                                    </div>
                                    
                              </div>
                              <div class="texto-comentario">
                                       <p>Adorei esse restaurante, voltaria com certeza para conhecer o que eu não pude conhecer ainda</p>
                              </div>
                              <!-- COMENTARIO -->

                        </div>
                        <!-- COMENTÀRIOS -->





                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                     </div>
                  </div>
                    
               
      `);

      this.animarTransicao();

      app.views.desativarTodosMenus();

      var galeriaLocalEnfim = $('#galeriaLocalEnfim').owlCarousel({
                loop:false,
                margin:0,
                items: 1,
                autoplay: false,
                center: false,
                navText: [
                  '<i class="fa fa-angle-left"></i>',
                  '<i class="fa fa-angle-right"></i>'
                ], 
                navContainer: '.custom-nav-banner2',                         
      });

   }


   comentario(){

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um coluna-um-voltar logo-header">
                           <a href="javascript:void(0)" title="Voltar" onclick="app.local()">
                              <i class="fa fa-angle-left"></i>
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Escreva uma avaliação
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
                  
                  <div class="row view-principal" view-name="view-principal-logado">
                     <div class="col-12 wow fadeInLeft">
                        
                        <!-- DETALHE LOCAL -->
                        <div class="detalhe-local">
                              
                              <div class="body-local">
                                 <h1>
                                    <small>
                                      Arraial do Cabo - BA (3.5km)
                                    </small>
                                    Nome do local 
                                    <span>Aqui uma descrição breve sobre o que é esse local, contando um pouco sobre o que temos aqui</span>
                                    <small>
                                       4.5 
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-half" aria-hidden="true"></i>
                                      (10) 
                                    </small>
                                 </h1>
                                 <p class="aberto">Aberto agora</p>
                              </div>

                        </div>
                        <!-- DETALHE LOCAL -->

                        
                        <!-- ESCREVA UM COMENTÁRIO -->
                        <div class="escreva-um-comentario">
                           <h2>O que você achou desse local?</h2>

                           <form method="post" action="javascript:void(0)" onsubmit="app.enviarComentario()">

                              <div class="form-group">
                                 <label>Quantas estrelas esse local merece?</label>
                              </div>

                              <!-- ESTRELAS -->
                              <div class="relative rounded-tl-md rounded-tr-md block estrelas um-pouco-mais-padding-bottom">

                                  <div class="campo campo-1">

                                     <label class="block text-gray-700 text-sm font-bold mb-2" for="campo1">
                                       Selecione abaixo
                                     </label>
                              
                                     <section>
                                          <div id="radio-2" class="star-rate">
                                              <input type="radio" id="star-check-1-1" class="star-check"  name="estrelas-avaliacao" value="1" />
                                              <input type="radio" id="star-check-2-1" class="star-check"  name="estrelas-avaliacao" value="2" />
                                              <input type="radio" id="star-check-3-1" class="star-check"  name="estrelas-avaliacao" value="3" />
                                              <input type="radio" id="star-check-4-1" class="star-check"  name="estrelas-avaliacao" value="4" />
                                              <input type="radio" id="star-check-5-1" class="star-check"  name="estrelas-avaliacao" value="5" />
                                              <div class="stars">
                                                <label for="star-check-1-1"><i data-star-value="1" class="fa fa-star"></i></label>
                                                <label for="star-check-2-1"><i data-star-value="2" class="fa fa-star"></i></label>
                                                <label for="star-check-3-1"><i data-star-value="3" class="fa fa-star"></i></label>
                                                <label for="star-check-4-1"><i data-star-value="4" class="fa fa-star"></i></label>
                                                <label for="star-check-5-1"><i data-star-value="5" class="fa fa-star"></i></label>
                                              </div>
                                          </div>
                                      </section>

                                  </div>
                              </div>
                              <!-- ESTRELAS -->

                              <div class="form-group">
                                 <label>Seu comentário</label>
                                 <textarea name="comentario" id="comentario" class="form-control" required rows="7" placeholder="Digite nesse campo"></textarea>
                              </div>

                              <div class="form-group">
                                 <button type="submit" class="btn btn-primary">
                                    Enviar
                                 </button>
                              </div>

                           </form>

                           <p class="disclaimer-comentario">
                              Seu comentário estará disponível após uma avaliação da equipe Crukê
                           </p>

                        </div>
                        <!-- ESCREVA UM COMENTÀRIO -->





                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                     </div>
                  </div>
                    
               
      `);

      this.animarTransicao();

      app.views.desativarTodosMenus();

   }


   carregarProdutos(){
       
       var produtos = JSON.parse(localStorage.getItem("dadosWordPress"));

       console.log("DADOS RECUPERADOS:");
       console.log(produtos);

       // INICIAR O STORIES
       setTimeout(function(){ initStories(); }, 2000);

       // SORTEIOS
       for(var i = 0;i<produtos.produtos.length;i++){

          if(i==0){ $("#conteudo1").html(``); }

          if(produtos.produtos[i].rifa!="" && produtos.produtos[i].rifa!=0 && produtos.produtos[i].rifa!="0" && produtos.produtos[i].rifa!=null){

                    $("#conteudo1").append(`

                                           <!-- SORTEIO --> 
                                           <div class="caixa-branca">
                                 
                                              <p class="thumb">
                                                  <a href="javascript:void(0)" onclick="app.views.detalheProduto(${produtos.produtos[i].id})" title="Ver detalhes do sorteio">
                                                      <img src="${produtos.produtos[i].imagem}" alt="${produtos.produtos[i].titulo}">
                                                  </a>
                                              </p>

                                              <h5>${produtos.produtos[i].titulo}</h5>

                                              <p>${produtos.produtos[i].resumo}</p>

                                              <div class="actions-bar">
                                                  <div>
                                                      <button data-js="like" class="" onclick="app.like(${produtos.produtos[i].id},${produtos.produtos[i].likes})">
                                                          <i class="fas fa-heart"></i>
                                                          <span>${produtos.produtos[i].likes}</span>
                                                      </button>
                                                      <!--<button data-js="comment">
                                                          <i class="fas fa-comment"></i>
                                                          <span>0</span>
                                                      </button>-->
                                                  </div>
                                                  <div>
                                                      <button data-js="share" onclick="compartilharExterno('${produtos.produtos[i].titulo}','${produtos.produtos[i].url}')">
                                                          <i class="fas fa-share"></i>
                                                          <span>Comp.</span>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- SORTEIO -->

                    `);

           }// IF SE É SORTEIO

       }// SORTEIO

       var imagemProduto = "";
       var subs = "https";

       // OUTROS PRODUTOS
       for(var i = 0;i<produtos.produtos.length;i++){

          if(i==0){ $("#conteudo2").html(``); }

          if(produtos.produtos[i].rifa=="" || produtos.produtos[i].rifa==0 || produtos.produtos[i].rifa=="0" || produtos.produtos[i].rifa==null){

                    if(produtos.produtos[i].imagem.includes(subs)){

                     imagemProduto = produtos.produtos[i].imagem.replace("https://startsonhos.com/ssweb/wp-content/uploads/","");

                    }else{
                      
                      imagemProduto = produtos.produtos[i].imagem;

                    }

                    $("#conteudo2").append(`

                                           <!-- PRODUTO DE OUTRO TIPO --> 
                                           <div class="caixa-branca">
                                 
                                              <p class="thumb">
                                                  <a href="javascript:void(0)" onclick="app.views.detalheProduto(${produtos.produtos[i].id})" title="Ver detalhes do produto">
                                                      <img src="${imagemProduto}" alt="${produtos.produtos[i].titulo}">
                                                  </a>
                                              </p>

                                              <h5>${produtos.produtos[i].titulo}</h5>

                                              <p>${produtos.produtos[i].resumo}</p>

                                              <div class="actions-bar">
                                                  <div>
                                                      <button data-js="like" class="" onclick="app.like(${produtos.produtos[i].id},${produtos.produtos[i].likes})">
                                                          <i class="fas fa-heart"></i>
                                                          <span>${produtos.produtos[i].likes}</span>
                                                      </button>
                                                      <!--<button data-js="comment">
                                                          <i class="fas fa-comment"></i>
                                                          <span>0</span>
                                                      </button>-->
                                                  </div>
                                                  <div>
                                                      <button data-js="share" onclick="compartilharExterno('${produtos.produtos[i].titulo}','${produtos.produtos[i].url}')">
                                                          <i class="fas fa-share"></i>
                                                          <span>Comp.</span>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- PRODUTO DE OUTRO TIPO --> 

                    `);

           }// IF SE É OUTRO PRODUTO

       }// OUTROS PRODUTOS


       // INICIAR O STORIES
       //setTimeout(function(){ initStories(); }, 2000);


   }


   detalheProduto(idProduto){

      voltarAoTopo();
      
      var produtos = JSON.parse(localStorage.getItem("dadosWordPress"));
      var dadoProduto;

      console.log("DADOS RECUPERADOS:");
      console.log(produtos);

      console.log("PRODUTO:");
      console.log(idProduto);

      for(var i = 0;i<produtos.produtos.length;i++){

         if(produtos.produtos[i].id==idProduto){

            dadoProduto = produtos.produtos[i];
            i = produtos.produtos.length + 1;

         }

      }

      console.log("DADO PRODUTO:");
      console.log(dadoProduto);

      // IMPRIMIR HTML
      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.inicio();">
                              <img src="assets/images/voltar.svg" alt="Voltar" style="width: 27px;margin-top: 0px;" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Detalhe produto
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

      `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow slideInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <p>
                           <img src="${dadoProduto.imagem}" style="width:100%;height:auto" /> 
                        </p>

                        <h1 class="titulo-pagina titulo-interno-produto">
                           ${dadoProduto.titulo}
                        </h1>
                        <h2 class="preco-interno-produto">R$ ${dadoProduto.preco}</h2>
                        <div class="actionProdutoInterno"></div>

                        <hr>
                          <div class="conteudo-produto">
                            ${dadoProduto.conteudo}
                          </div>
                        <hr>
                        
                        <div class="actionProdutoInterno"></div>

                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

      var kit = dadoProduto.preco;
      var qtd = 1;

      localStorage.setItem("kit",dadoProduto.preco);
      localStorage.setItem("qtd",1);

      // PRODUTO É RIFA
      if(dadoProduto.rifa!="" && 
        dadoProduto.rifa!=0 && 
        dadoProduto.rifa!="0" && 
        dadoProduto.rifa!=null){

        $(".actionProdutoInterno").html(`

            <div class="form-group">
              <label>Quantidade</label>
              <select class="form-control" onchange="app.views.mudarKits(this)">
                      
                      ${dadoProduto.combos_kits.map((n) => {

                              return `
                                  
                                 <option value="${n.quantidade}">(X${n.quantidade}) ${n.titulo_opcao} ${n.valor_mkt}</option>

                              `
                      
                       }).join('')}

              </select>
            </div>
            
            <p>
              <b>Atenção:</b> esse sorteio não tem qualquer relação com a Apple.
            </p>
            <p class="o-botao-final">
              <a href="javascript:void(0)" onclick="openUrl('${app.urlDom}processar-lead/?nome=${localStorage.getItem("nomeUsuario")}&email=${localStorage.getItem("idUsuario")}&kit=${localStorage.getItem("kit")}&qtd=${localStorage.getItem("qtd")}&idproduto=${dadoProduto.id}')" title="Eu quero!" class="btn btn-primary" style="padding-top: 9px;height: 45px;margin-top: 10px;">
                 Eu quero!
              </a>
            </p> 

        `);

      // PRODUTO NÃO É RIFA  
      }else{

        $(".actionProdutoInterno").html(`

            <p>
              <b>Atenção:</b> esse item não tem qualquer relação com a Apple.
            </p>
            <p class="o-botao-final">
              <a href="javascript:void(0)" onclick="openUrl('${app.urlDom}?add-to-cart=${dadoProduto.id}')" title="Eu quero!" class="btn btn-primary" style="padding-top: 9px;height: 45px;margin-top: 10px;">
              Eu quero!
              </a>
            </p>

        `);

      }

      localStorage.setItem("idProduto",dadoProduto.id);

   }


   // MUDAR KITS
   mudarKits(seletor){

        var valor = $(seletor).val();

        $(".o-botao-final").html(`

           <a href="javascript:void(0)" onclick="openUrl('${app.urlDom}processar-lead/?nome=${localStorage.getItem("nomeUsuario")}&email=${localStorage.getItem("idUsuario")}&kit=${localStorage.getItem("kit")}&qtd=${valor}&idproduto=${localStorage.getItem("idProduto")}')" title="Eu quero!" class="btn btn-primary" style="padding-top: 9px;height: 45px;margin-top: 10px;">
              Eu quero!
           </a>
           
        `);

   }

   cssInicioLogado() {

      restaurarBackground();

      
      $("header").css("background", "#fff");
      $("header").css("color", "#000");
      $("header").css("box-shadow", "0px 2px 4px rgba(0, 0, 0, 0.06)");

   }

   

   view2() {

      this._content.html(`
               
                  <div class="row view-2" view-name="view-2">
                     <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>View 2</h2>
                        <p>Essa é a segunda view</p>
                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   view3() {

      this._content.html(`
               
                  <div class="row view-3" view-name="view-3">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>View 3</h2>
                        <p>Esse é a terceira view</p>
                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   LOGIN / CADASTRO
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   viewLogin() {

      // RESETAR ALGUNS CSS`s`
      //$("body").css("background", "#fff");
      //$("section#content").css("background", "#fff");
      //$("header").css("background", "#04BAE5");
      //$("header").css("color", "#fff");
      //$("header").css("box-shadow", "none");

      this.header.html(`

                  

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo-quadrado.png" alt="Crukê logo" />
                        </div>
                        
                        <div class="caixa-branca caixa-branca-login">

                              <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)" style="margin-bottom:32px;">
                                 
                                 <div class="form-group has-feedback">
                                    <label>E-mail</label>
                                    <input type="text" class="form-control" id="email" name="email" placeholder="E-mail de login" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>Senha</label>
                                    <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required />
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div>
                                 
                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewLogin">
                                       LOGIN
                                    </button>
                                 </div>
                                 
                              </form>
                              
                                 
                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                          Esqueci minha senha
                                       </a>
                                    </div>

                                <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.viewLoginSms()" title="Login com SMS">
                                          Login com SMS
                                       </a>
                                    </div>

                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                          Não tenho uma conta
                                       </a>
                                 </div>
                                 


                        </div>

                     

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();
      app.helpers.carregarMascaras();
      voltarAoTopo();

   }


   viewLoginSms() {

      // RESETAR ALGUNS CSS`s`
      //$("body").css("background", "#fff");
      //$("section#content").css("background", "#fff");
      //$("header").css("background", "#04BAE5");
      //$("header").css("color", "#fff");
      //$("header").css("box-shadow", "none");

      this.header.html(`

                  

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo-quadrado.png" alt="Crukê logo" />
                        </div>
                        
                        <div class="caixa-branca caixa-branca-login">

                              <form method="post" action="javascript:void(0)" onsubmit="app.procLoginSms(event)" style="margin-bottom:32px;">
                                 
                                 <div class="form-group has-feedback">
                                    <label>Seu celular com DDD</label>
                                    <input type="tel" class="form-control" id="celular" name="celular" placeholder="DDD+número" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewLogin">
                                       Receber código SMS
                                    </button>
                                 </div>
                                 
                              </form>
                              
                                 
                              <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.viewLogin()" title="Login com E-mail">
                                          Login com E-mail
                                       </a>
                              </div>

                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                          Não tenho uma conta
                                       </a>
                                 </div>
                                 


                        </div>

                     

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();
      app.helpers.carregarMascaras();
      voltarAoTopo();

   }




   viewCodigoSms(numero) {

      // RESETAR ALGUNS CSS`s`
      //$("body").css("background", "#fff");
      //$("section#content").css("background", "#fff");
      //$("header").css("background", "#04BAE5");
      //$("header").css("color", "#fff");
      //$("header").css("box-shadow", "none");

      this.header.html(`

                  

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo-quadrado.png" alt="Crukê logo" />
                        </div>
                        
                        <div class="caixa-branca caixa-branca-login">

                              <form method="post" action="javascript:void(0)" onsubmit="app.procVerificarSms(event)" style="margin-bottom:32px;">
                                 
                                 <div class="form-group has-feedback">
                                    <label style="text-align:center;">Enviamos um SMS para o número ${numero}</label>
                                    <input style="text-align:center;" type="tel" class="form-control form-control-lg" id="codigoCelular" name="codigoCelular" placeholder="Digite o código nesse campo" required />
                                       <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewLogin">
                                       Verificar código
                                    </button>
                                 </div>

                                 <p style="font-size:13px;color:#747474;text-align:center">
                                    Pode levar alguns segundos para chegar
                                 </p>
                                 
                              </form>

                              
                              
                                 
                              <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.viewLogin()" title="Login com E-mail">
                                          Login com E-mail
                                       </a>
                              </div>

                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                          Não tenho uma conta
                                       </a>
                                 </div>
                                 


                        </div>

                     

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();
      app.helpers.carregarMascaras();
      voltarAoTopo();

   }




   viewCadastro() {

      this.header.html(`

                  

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo-quadrado.png" alt="Crukê logo" style="width: 90px;margin-bottom: -20px;" />
                        </div>

                        <div class="caixa-branca caixa-branca-login">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                                 
                                 <div class="form-group has-feedback">
                                    <label>Seu nome completo</label>
                                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome completo" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>E-mail</label>
                                    <input type="text" class="form-control" id="email" name="email" placeholder="E-mail" required />
                                       <i class="fa fa-envelope" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>Celular</label>
                                    <input type="tel" value="${localStorage.getItem("celularCadastro")}" class="form-control" id="celular" name="celular" placeholder="DDD+número" required />
                                       <i class="fa fa-phone" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>Senha</label>
                                    <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required />
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div> 
                                 
                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewCadastro">
                                       Cadastre-se
                                    </button>
                                 </div>

                                 <p class="disclamer">
                                   Ao clicar em "inscrever-se" você concorda com nossos <a href="javascript:void(0)" title="Termos e condições">termos e condições</a> de uso.
                                 </p>

                              </form>

                              <div class="form-group link-apoio text-center">
                                    <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                                       Já tenho uma conta
                                    </a>
                                 </div>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();

   }

   viewEsqueciMinhaSenha() {

      this.header.html(`

                  

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo-quadrado.png" alt="Crukê logo" />
                        </div> 

                        <div class="caixa-branca caixa-branca-login">

                           <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                              
                              <div class="form-group has-feedback">
                                 <label>Seu e-mail ou usuário cadastrado</label>
                                 <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                                 <i class="fa fa-envelope"></i>
                              </div>
                              
                              <div class="form-group">
                                 <button class="btn btn-primary" id="btnViewResetarSenha">
                                    Resetar senha
                                 </button>
                              </div>
                           </form>

                           <div class="form-group link-apoio text-center">
                                 <a href="javascript:void(0)" onclick="app.viewLogin()" title="Cancelar reset de senha">
                                    Cancelar
                                 </a>
                              </div>

                        </div>

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();

   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   APOIOS
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   removerImagemGaleriaImagens(idDaImagem) {

      // REMOVER UMA IMAGEM DOS UPLOADS DAS IMAGENS
      $("#galeriaImgensImoveis" + idDaImagem).remove();
      $("#caixaPreviewImagemCarregada" + idDaImagem).remove();

      $("#imagemOculta").val();

   }

   // VIEW UPLOAD DE FOTO

   viewUploadFoto() {

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>Upload de foto</h2>
                        <p>Fazer upload de imagens via input ou camêra</p>
                        
                        <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                           
                           <input type="hidden" name="token" value="${app.token}" />
                           <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                           <div class="form-group">
                              <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                              <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                           </div>



                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                              Enviar o arquivo
                           </a>
                        </div>

                        <div class="retorno-upload"></div>

                        <div class="form-group link-apoio text-center">
                           <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                                 Cancelar
                           </a>
                        </div>

                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   desativarTodosMenus() {
      this._allMenus.css("font-weight", "normal");
   }

   ativarMenuUm() {
      this.desativarTodosMenus();
      this._menu1.css("font-weight", "bold");
   }

   ativarMenuDois() {
      this.desativarTodosMenus();
      this._menu2.css("font-weight", "bold");
   }

   ativarMenuTres() {
      this.desativarTodosMenus();
      this._menu3.css("font-weight", "bold");
   }
}