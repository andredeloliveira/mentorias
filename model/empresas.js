/**
 * Created by Tadashi on 27/09/2015.
 */

// Para usar
// Empresa = new Mongo.Collection("empresa");

/**Empresas = new Mongo.Collection("empresa");

Schemas = {};

Schemas.Empresa = new SimpleSchema({
    nome: {
        type: String,
        label: "Nome da Empresa",
        max: 200
    },
    website: {
        type: String,
        label: "Website",
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    produtos: {
        type: String,
        label: "Produtos"
    },
    descricao_empresa: {
        type: String,
        label: "Descrição da Empresa"
    },
    integrantes: {
        type: String,
        label: "Integrantes"
    },
    facebook: {
        type: String,
        label: "Facebook",
        optional: true
    },
    linkedin: {
        type: String,
        label: "Linkedin",
        optional: true
    },
    twitter: {
        type: String,
        label: "Twitter",
        optional: true
    },
    dt_cadastro: {
        type: Date,
        label: "Data Cadastro",
        optional: true
    },
    status: {
        type: Boolean,
        label: "Status",
        optional: true
    }
});

Empresas.attachSchema(Schemas.Empresa); **/
