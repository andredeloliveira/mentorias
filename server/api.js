/*Aqui é onde a API é definida. o pacote utulizado é nimble:restivus. 
A documentação está discponivel em atmosphere.js/nimble/restivus*/
Api = new Restivus({
  prettyJson: true
});

/*Por aqui, é posivel fazer POST, GET pela API. As chamadas são em HTTP e o resultado é um Json bonitinho hihi ;>)*/

/*Gera: POST para o endereço /api/users e GET para /api/users/:id */
Api.addCollection(Meteor.users,{
  excludedEndPoints:['getAll', 'put'],
  routeOptions: {
    useDefaultAuth: true
  },
  endpoints:{
    post:{
      authRequired:false
    }
  }
});
/*
Api.addCollection(Meteor.Empresas,{
  excludedEndPoints:['getAll', 'put'],
  routeOptions: {
    useDefaultAuth: false
  },
  endpoints:{
    post:{
      authRequired:false
    }
  }
});*/


/*Api.addCollection(Meteor.produtos,{
  excludedEndPoints:['getAll', 'put'],
  routeOptions: {
    useDefaultAuth: true
  },
  endpoints:{
    post:{
      authRequired:false
    }
  }
});*/