Produtos = new Mongo.Collection("Produtos");

Schemas = {};

Schemas.Produto = new SimpleSchema({
    nome: {
        type: String,
        label: "Nome do Produto",
        max: 250
    },
    imagem_destaque: {
        type: String,
        label: "Imagem do Produto Destacada",
        optional: true
    },
    descricao: {
        type: String,
        label: "Descrição do Produto",
        max:500
    }
});
   