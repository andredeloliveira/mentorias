/**
 Controller responsável pelo Perfil. Aqui os métodos para Login, cadastro e busca de usuários são definidos.
 **/
angular.module("mentorias").controller("empresaController", ['$scope', '$rootScope', '$stateParams', '$meteor', '$state','$meteorSubscribe',
    function ($scope, $rootScope, $stateParams, $meteor, $state, $meteorSubscribe) {
        /*usuário provenientes do servidor*/

        //$scope.users = $meteor.collection(Meteor.users,false).subscribe('users');

        $meteor.subscribe('allUsers').then(function(cadastroUsuariosHandle){
          allUsers = $meteor.collection(Meteor.users);
          arrUsuarios = $.map(allUsers, function(valores, indices) {
            return [valores];
          });

         $rootScope.nomeUsuarios2 = [];
            nomeUsuarios = _.map(arrUsuarios, function(parametro){
           // nome = parametro.profile.name;

            $rootScope.nomeUsuarios2 = {
              '_id':parametro._id,
              'nome':parametro.profile.name,
              'email':parametro
            }

            //push(labirinto);
          });
          console.log($rootScope, $rootScope.nomeUsuarios2);
          var usuarioLogado =  Meteor.userId();
          $scope.cadastroUsuarios = arrUsuarios;
          //console.log($scope.cadastroUsuarios, usuarioLogado);
        })

        $scope.images = $meteor.collection(Images, false, Images).subscribe('images');
        $scope.empresas = $meteor.collection(Empresas,false).subscribe('empresas');
        $scope.userstemp = [];
        /*
         Variável que define a etapa do cadastro. Com ela, sera possível controlar o que será mostrado na view
         */
        $scope.etapaCadastro = 0;
        /*função que define as etapas do cadastro do Perfil.
         0 - Nome da empresa, produtos
         1 - Descrição da empresa;
         2 - Integrantes
         3 - Redes sociais e foto do perfil
         */
        /*Mostra a etapa na view através do ng-show*/
        $scope.mostrarEtapa = function (etapa) {
            return etapa === $scope.etapaCadastro;
        }
        /*Seleciona a proxima etapa que irá para a view*/
        $scope.setProximaEtapa = function () {
            $scope.etapaCadastro = $scope.etapaCadastro + 1;
        }
        /*Seleciona a etapa Anterior do cadastro*/
        $scope.setEtapaAnterior = function () {
            if ($scope.etapaCadastro === 0)
                $scope.etapaCadastro = 0;
            else
                $scope.etapaCadastro = $scope.etapaCadastro - 1;
        }

        /*Daqui pra baixo, a lógica é com as sintax do controllerAs definido no route.js ...*/

        var vm = this;

        vm.error = '';

        /*controla a imagem temporariamente para não ficar adicionando imagens a esmo, cada vez que
        se clica no botão upload
        */
        $scope.addTempImage = function(images){
          $scope.tempImage = images[0];
          console.log('image on the temp var');
        };

        $scope.addImages = function () {
            /*Uma referencia da imagem do perfil é salva no nUser, que é o objeto
            criado na view, que será inserido no banco. A imagem está em uma collection diferente
            da do usuário, ou seja, aqui só tem uma referencia ao objeto, que é buscado
            na view meuPerfil.ng.html*/
            var fileObj = Images.insert($scope.tempImage, function(err, fileObj){
              if(err)
                console.log('erro no upload '+ err);
              return fileObj;
            });
            $scope.nEmpresa.profilePic = fileObj;
            $scope.feedbackUpload = true;
            console.log($scope.nEmpresa);
        };

        /*registra a nova empresa no banco*/
        vm.register = function(nEmpresa){

          if(!nEmpresa)
            vm.error = 'object undefined!';

            vm.empresa = {
            nome: nEmpresa.nome,
            website: nEmpresa.website,
            descricao: nEmpresa.breve_descricao,
            produtos:nEmpresa.produtos,
            integrantes: nEmpresa.integrantes,
            facebook: nEmpresa.facebook,
            twitter: nEmpresa.twitter,
            linkedIn: nEmpresa.linkedIn,
            profilePic: nEmpresa.profilePic
          };
          var id_empresa = Empresas.insert(vm.empresa, function(error, result){
            if(error){
              vm.error = 'Erro ao inserir empresa'
            };
            return result;
          });
          if(id_empresa)
            $state.go('meuPerfil');
        }
        /*remove a dita cuja*/
        vm.remove = function(nEmpresa){
          if(!nEmpresa)
            vm.error = 'empresa não encontrada';
          $scope.empresas.remove(nEmpresa);
        }

        /*load Produtos, Hard coded mesmo, porque né*/

        $scope.loadProdutos = function(){
          var produtos = ['Jogos Digitais', 'Softwares', 'Eletrônicos', 'Realidade Virtual', 'Eficiência Energética', 'Bioarquitetura'];

          var result = produtos.map(function(value, index){
            var tempProd = {
              nome: value
            };
            tempProd._lowername = tempProd.nome.toLowerCase();
            return tempProd;
          });
          return result;
        }

        /*Aqui será definida a lógica para o controller das tags*/

        $scope.loadUsers = function(users){
          var result = [];

          console.log(users);

          for( var prop in users){
            if(users.hasOwnProperty(prop)){
              if(users[prop].emails){
                var tempUser = {
                  name: users[prop].profile.name,
                  email: users[prop].emails[0].address
                };
                result.push(tempUser);
              }
            }
          }
          console.log(result);
          return result;

        }

        $scope.createFilterFor = function(query){
          var lowercaseQuery = angular.lowercase(query);

          return function filterFn(user) {
            return (user._lowername.indexOf(lowercaseQuery) != -1);
          };
        };
        $scope.querySearch   = function(query){
          var results = query ?
          $scope.usersLoaded.filter($scope.createFilterFor(query)) : [];
          console.log(results+"filtro");
          return results;
        };

        $scope.querySearchProdutos = function(query){
          var results = query ?
            $scope.produtosLoaded.filter($scope.createFilterFor(query)) : [];
          console.log(results);
          return results;
        };

        $scope.selected = [];
       
        $scope.filterSelected = true;
        $scope.readonly = false;
        $scope.usersLoaded = $scope.loadUsers($scope.users);
        console.log($scope.usersLoaded);
        $scope.produtosLoaded = $scope.loadProdutos();
        console.log($scope.produtosLoaded);
        $scope.integrantes = [];
        $scope.produtos= [];
     
        /*fim do controle das tags*/
    }
]);
