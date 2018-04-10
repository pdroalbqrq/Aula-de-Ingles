webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".background {\r\n    background: black\r\n}\r\n.btn {\r\n    background: rgb(255, 255, 255);\r\n\r\n}\r\n.btn-inverse{\r\n    background: rgb(253, 253, 253);\r\n    border: rgb(255, 255, 255);\r\n\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<div *ngIf=\"jogoEmAndamento; else fimDeJogoDerrota\">\n    <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n\n<ng-template #fimDeJogoDerrota>\n    <div *ngIf=\"tipoEncerramento === 'Derrota'; else fimDeJogoVitoria\" class=\"container\" style=\"margin-top: 350px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h1 style=\"color:rgb(250, 0, 0)\"> Infelizmente, você perdeu!</h1>\n                <button style=\"margin-top: 30px\"class = \"btn btn-inverse\" (click)=\"jogarNovamente()\">Jogar Novamente</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #fimDeJogoVitoria>\n        <div class=\"container\" style=\"margin-top: 350px\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <h1 style=\"color:rgb(0, 255, 64)\"> Você venceu</h1>\n                </div>\n            </div>\n        </div>\n    </ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        console.log(tipo);
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    };
    AppComponent.prototype.jogarNovamente = function () {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__ = __webpack_require__("./src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("./src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__ = __webpack_require__("./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__ = __webpack_require__("./src/app/progresso/progresso.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__["a" /* TopoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__["a" /* ProgressoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__["a" /* TentativasComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compartilhados/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Coracao = /** @class */ (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCoracaoVazio) {
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = '/assets/coracao_cheio.png'; }
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = '/assets/coracao_vazio.png'; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio === true) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());
/* harmony default export */ __webpack_exports__["a"] = (Coracao);


/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseEng: "I like to learn", frasePtBr: "Eu gosto de aprender" },
    { fraseEng: "I watch TV", frasePtBr: "Eu assisto TV" },
    { fraseEng: "How are you?", frasePtBr: "Como está você?" },
    { fraseEng: "I eat bread", frasePtBr: "Eu como pão" },
];


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    margin-top: 250px;\r\n    padding-top: 30px;\r\n    padding-bottom: 50px;   \r\n}\r\n\r\n.btn {\r\n    background: black;\r\n}\r\n\r\n.btn-primary{\r\n    background: black;\r\n    border: black;\r\n}\r\n\r\n.form-control {\r\n    font-size: 20px;\r\n}\r\n\r\n.fonte {\r\n    font-size: 20px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\r\n}"

/***/ }),

/***/ "./src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    \n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-progresso [auxiliarProgresso]=\"progresso\"></app-progresso>\n      </div>\n      <div class=\"col-sm-6\">\n          <div class=\"d-flex justify-content-end\">\n        <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2>{{ pergunta }}</h2>\n        <h4>{{ rodadaFrase.fraseEng }}</h4>\n        <div class=\"form-group\">\n          <textarea \n          class=\"form-control\" \n          rows=\"2\"\n          (input)='atualizaResposta($event)'\n          [value] = \"resposta\"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"d-flex justify-content-start\">\n              <p class=\"fonte\">{{rodada+1}}/{{frases.length}}</p>\n            </div>\n      </div>\n      <div class=\"col\">       \n        <div class=\"d-flex justify-content-end\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificarResposta()\">Verificar</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frases_mock__ = __webpack_require__("./src/app/painel/frases-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        this.pergunta = 'Traduza a frase:';
        this.resposta = "";
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.proximaFrase();
    }
    PainelComponent.prototype.ngOnChanges = function () {
    };
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        console.log('Componente painel foi destruído');
    };
    PainelComponent.prototype.atualizaResposta = function (reposta) {
        this.resposta = reposta.target.value;
    };
    PainelComponent.prototype.proximaFrase = function () {
        this.rodadaFrase = this.frases[this.rodada];
    };
    PainelComponent.prototype.verificarResposta = function () {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //Adiciona mais 1 ao indice 'this.frases'
            this.rodada++;
            if (this.rodada === this.frases.length) {
                this.encerrarJogo.emit('Vitória');
            }
            //atualiza o objeto rodadaFrase
            this.progresso = this.progresso + (100 / this.frases.length);
            this.proximaFrase();
            //limpar a resposta
            this.resposta = "";
        }
        else {
            this.tentativas--;
            this.resposta = "";
            if (this.tentativas == -1) {
                this.encerrarJogo.emit('Derrota');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-painel',
            template: __webpack_require__("./src/app/painel/painel.component.html"),
            styles: [__webpack_require__("./src/app/painel/painel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/***/ (function(module, exports) {

module.exports = ".progress {\r\n    background: rgb(163, 163, 163);\r\n    border: solid 1px rgb(0, 0, 0)\r\n    \r\n}\r\n\r\n.progress-bar {\r\n    background: rgb(0, 0, 0)\r\n}"

/***/ }),

/***/ "./src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n    <div class=\"progress-bar w-{{progresso}}\">{{progresso}}%</div>\n  </div>"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progresso = 0;
    }
    ProgressoComponent.prototype.ngOnChanges = function () {
    };
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('auxiliarProgresso'),
        __metadata("design:type", Number)
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progresso',
            template: __webpack_require__("./src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__("./src/app/progresso/progresso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" />"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compartilhados_coracao_model__ = __webpack_require__("./src/app/compartilhados/coracao.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracoes = [
            new __WEBPACK_IMPORTED_MODULE_1__compartilhados_coracao_model__["a" /* default */](true), new __WEBPACK_IMPORTED_MODULE_1__compartilhados_coracao_model__["a" /* default */](true), new __WEBPACK_IMPORTED_MODULE_1__compartilhados_coracao_model__["a" /* default */](true)
        ];
        console.log(this.coracoes);
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.tentativas !== this.coracoes.length) {
            "";
            var i = this.coracoes.length - this.tentativas;
            this.coracoes[i - 1].cheio = false;
        }
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tentativas',
            template: __webpack_require__("./src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__("./src/app/tentativas/tentativas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background: rgb(255, 255, 255);\r\n    padding-top: 20px;\r\n    \r\n}\r\n.navbar-brand {\r\n    color: rgb(0, 0, 0);\r\n    font-size: 30px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif   \r\n}\r\n"

/***/ }),

/***/ "./src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-faded\">\n    <span class=\"navbar-brand mb-0 h1\">{{titulo}}</span>\n</nav>"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.titulo = 'Aprendendo Inglês';
    }
    TopoComponent.prototype.ngOnInit = function () {
    };
    TopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-topo',
            template: __webpack_require__("./src/app/topo/topo.component.html"),
            styles: [__webpack_require__("./src/app/topo/topo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map