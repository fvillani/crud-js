import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../css/style.css';

//import 'reflect-metadata/Reflect.js';
//import 'jquery/dist/jquery.js';
//import 'bootstrap/js/modal.js';

import { NegociacaoController } from './controllers/NegociacaoController.js'; 
//import { $dataMetaSchema } from 'ajv';
//import { Negociacao } from './domain/index.js';

const controller = new NegociacaoController();

//$('h1').on('click', () => alert('teste'));

/*
const $ = document.querySelector.bind(document);

//o bind serve para além de passar a função adiciona passar também toda a funcionalidade de controller
$('.form').addEventListener('submit', controller.adiciona.bind(controller));

$('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));

$('#botao-importa').addEventListener('click', controller.importaNegociacoes.bind(controller));

/*
const negociacao = new Negociacao(new Date(), 1, 200);
const cabecalhos = new Headers();
cabecalhos.set('Content-Type', 'application/json');

const config = {
    method: 'POST',
    headers: cabecalhos,
    body: JSON.stringify(negociacao)
};

fetch('http://localhost:3000/negociacoes', config).then(() => console.log('Cadastro'));
*/