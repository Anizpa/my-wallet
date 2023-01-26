"use strict";
(self["webpackChunkTarjetaCredito"] = self["webpackChunkTarjetaCredito"] || []).push([["main"],{

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/crear-tarjeta/crear-tarjeta.component */ 8801);
/* harmony import */ var _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/listar-tarjeta/listar-tarjeta.component */ 3823);



class AppComponent {
  constructor() {
    this.title = 'TarjetaCredito';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 12,
  vars: 0,
  consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [1, "card"], [1, "card-body"], [1, "titulo"], [1, "row", "mt-4"], [1, "col-lg-6"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "VIRTUAL WALLET");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-crear-tarjeta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-listar-tarjeta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_0__.CrearTarjetaComponent, _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__.ListarTarjetaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/crear-tarjeta/crear-tarjeta.component */ 8801);
/* harmony import */ var _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/listar-tarjeta/listar-tarjeta.component */ 3823);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-drag-scroll */ 6590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.FirestoreModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_10__.DragScrollModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase)), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)()), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.getStorage)())]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__.CrearTarjetaComponent, _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__.ListarTarjetaComponent],
    imports: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.FirestoreModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_10__.DragScrollModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.StorageModule]
  });
})();

/***/ }),

/***/ 8801:
/*!*********************************************************************!*\
  !*** ./src/app/components/crear-tarjeta/crear-tarjeta.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearTarjetaComponent": () => (/* binding */ CrearTarjetaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tarjeta.service */ 4532);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function CrearTarjetaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CrearTarjetaComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrearTarjetaComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.cancelar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u00A0Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class CrearTarjetaComponent {
  constructor(fb, _tarjetaService, toastr) {
    this.fb = fb;
    this._tarjetaService = _tarjetaService;
    this.toastr = toastr;
    this.loading = false;
    this.titulo = "Agregar Tarjeta";
    this.editar = false;
    this.form = this.fb.group({
      titular: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      numeroTarjeta: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(16)]],
      fechaExpiracion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(5)]],
      cvv: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(3)]],
      fechaCreacion: [""]
    });
  }
  ngOnInit() {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      this.editar = true;
      this.id = data.id;
      this.titulo = "Editar Tarjeta";
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        fechaCreacion: data.fechaCreacion,
        cvv: data.cvv
      });
    });
  }
  guardarTarjeta() {
    if (this.id === undefined) {
      // Creamos una nueva tarjeta
      this.agregarTarjeta();
    } else {
      // Editamos una nueva tarjeta
      this.editarTarjeta(this.id);
    }
  }
  editarTarjeta(id) {
    const TARJETA = {
      id: id,
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      fechaCreacion: this.form.value.fechaCreacion,
      cvv: this.form.value.cvv,
      fechaActualizacion: new Date()
    };
    this.loading = true;
    this._tarjetaService.editarTarjeta(id, TARJETA).then(() => {
      this.loading = false;
      this.titulo = "Agregar Tarjeta";
      this.form.reset();
      this.id = undefined;
      this.toastr.info("La Tarjeta fue actualizada con exito!", "Registro Actualizado");
      this._tarjetaService.reloadTarjetas$.next();
      this.editar = false;
    }, error => {
      console.log(error);
    });
  }
  agregarTarjeta() {
    const TARJETA = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    };
    this.loading = true;
    this._tarjetaService.guardarTarjeta(TARJETA).then(() => {
      this.loading = false;
      console.log("tarjeta registrado");
      this.toastr.success("La tarjeta fue registrada con exito!", "Tarjeta registrada");
      this.form.reset();
      this._tarjetaService.reloadTarjetas$.next();
    }).catch(error => {
      this.loading = false;
      this.toastr.error("Opps.. ocurrio un error", "Error");
      console.log(error);
    });
  }
  cancelar() {
    this.form.reset();
    this.id = undefined;
    this.editar = false;
  }
}
CrearTarjetaComponent.ɵfac = function CrearTarjetaComponent_Factory(t) {
  return new (t || CrearTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__.TarjetaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
};
CrearTarjetaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CrearTarjetaComponent,
  selectors: [["app-crear-tarjeta"]],
  decls: 31,
  vars: 24,
  consts: [[1, "card"], [1, "card-body"], [1, "titulo", "mb-3"], ["class", "spinner-border float-end", "role", "status", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "input-group", "input-group-lg", "mb-3"], [1, "input-group-text"], [1, "fas", "fa-user-circle"], ["type", "text", "formControlName", "titular", "placeholder", "Titular", 1, "form-control"], [1, "fas", "fa-credit-card"], ["type", "text", "formControlName", "numeroTarjeta", "maxlength", "16", "placeholder", "Numero Tarjeta", 1, "form-control"], [1, "row"], [1, "col-lg-7"], [1, "fas", "fa-calendar-alt"], ["type", "text", "formControlName", "fechaExpiracion", "maxlength", "5", "placeholder", "MM/YY", 1, "form-control"], [1, "col-lg-5"], [1, "fas", "fa-key"], ["type", "password", "formControlName", "cvv", "maxlength", "3", "placeholder", "CVV", 1, "form-control"], [1, "d-grid", "gap-2", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "btn-form", 3, "disabled"], [1, "fas", "fa-database"], ["class", "btn btn-danger btn-lg btn-form", 3, "click", 4, "ngIf"], ["role", "status", 1, "spinner-border", "float-end"], [1, "visually-hidden"], [1, "btn", "btn-danger", "btn-lg", "btn-form", 3, "click"], [1, "fas", "fa-ban"]],
  template: function CrearTarjetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CrearTarjetaComponent_div_5_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CrearTarjetaComponent_Template_form_ngSubmit_6_listener() {
        return ctx.guardarTarjeta();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 5)(18, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "div", 5)(23, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u00A0Aceptar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CrearTarjetaComponent_button_30_Template, 3, 0, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 22, ctx.titulo), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_3_0 = ctx.form.get("titular")) == null ? null : tmp_3_0.valid)("red-icon", ((tmp_4_0 = ctx.form.get("titular")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("titular")) == null ? null : tmp_4_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_5_0 = ctx.form.get("numeroTarjeta")) == null ? null : tmp_5_0.valid)("red-icon", ((tmp_6_0 = ctx.form.get("numeroTarjeta")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("numeroTarjeta")) == null ? null : tmp_6_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_7_0 = ctx.form.get("fechaExpiracion")) == null ? null : tmp_7_0.valid)("red-icon", ((tmp_8_0 = ctx.form.get("fechaExpiracion")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("fechaExpiracion")) == null ? null : tmp_8_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_9_0 = ctx.form.get("cvv")) == null ? null : tmp_9_0.valid)("red-icon", ((tmp_10_0 = ctx.form.get("cvv")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.form.get("cvv")) == null ? null : tmp_10_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.editar ? "cancel-btn" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editar);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe],
  styles: [".green-icon[_ngcontent-%COMP%] {\n  color: #198754;\n}\n\n.red-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row;\n}\n\n.btn-form[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhci10YXJqZXRhL2NyZWFyLXRhcmpldGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW4taWNvbiB7XG4gIGNvbG9yOiAjMTk4NzU0O1xufVxuXG4ucmVkLWljb24ge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLnNwaW5uZXItYm9yZGVyIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYnRuLWZvcm0ge1xuICBmbGV4OiAxIDEgMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3823:
/*!***********************************************************************!*\
  !*** ./src/app/components/listar-tarjeta/listar-tarjeta.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarTarjetaComponent": () => (/* binding */ ListarTarjetaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tarjeta.service */ 4532);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-drag-scroll */ 6590);





function ListarTarjetaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListarTarjetaComponent_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const tarjeta_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.editarTarjeta(tarjeta_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListarTarjetaComponent_div_5_Template_i_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const tarjeta_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r6.eliminarTarjeta(tarjeta_r2.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "label", 9)(5, "div", 10)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13)(12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const tarjeta_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 3, tarjeta_r2.titular), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tarjeta_r2.numeroTarjeta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tarjeta_r2.fechaExpiracion);
  }
}
class ListarTarjetaComponent {
  constructor(_tarjetaService, toastr) {
    this._tarjetaService = _tarjetaService;
    this.toastr = toastr;
    this.listTarjetas = [];
    this._tarjetaService.reloadTarjetas$.subscribe(() => {
      this.obtenerTarjetas();
    });
  }
  ngOnInit() {
    this.obtenerTarjetas();
  }
  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().then(res => {
      console.log("res", res);
      this.listTarjetas = res;
      // doc.forEach((element: any) => {
      //   this.listTarjetas.push({
      //     id: element.payload.doc.id,
      //     ...element.payload.doc.data()
      //   });
      // });
      console.log(this.listTarjetas);
    });
  }
  eliminarTarjeta(id) {
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.success("La Tarjeta fue eliminada con exito!", "Registro Eliminado");
      this._tarjetaService.reloadTarjetas$.next();
    }).catch(error => {
      this.toastr.error("Opss.. ocurrio un error", "Error");
      console.log(error);
    });
  }
  editarTarjeta(tarjeta) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }
  onWheel(event) {
    if (event.deltaY > 0) this.scrollToRight();else this.scrollToLeft();
  }
  scrollToLeft() {
    document.getElementById("tarjetas").scrollLeft += 400;
  }
  scrollToRight() {
    document.getElementById("tarjetas").scrollLeft -= 400;
  }
}
ListarTarjetaComponent.ɵfac = function ListarTarjetaComponent_Factory(t) {
  return new (t || ListarTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__.TarjetaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
ListarTarjetaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListarTarjetaComponent,
  selectors: [["app-listar-tarjeta"]],
  decls: 6,
  vars: 2,
  consts: [["id", "tarjetas", 1, "card"], [1, "titulo", "mb-3"], [3, "scroll-x-wheel-enabled"], ["nav", ""], ["class", "container-card", "drag-scroll-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["drag-scroll-item", "", 1, "container-card", 3, "click"], [1, "far", "fa-times-circle", "delete-icon", 3, "click"], [1, "debit-card", "card-2"], [1, "d-flex", "flex-column", "h-100"], [1, "d-block"], [1, "d-flex", "position-relative"], ["src", "https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png", "alt", "master", 1, "master"], [1, "text-white", "fw-bold"], [1, "mt-auto", "fw-bold", "d-flex", "align-items-center", "justify-content-between"], [1, "m-0", "fs-30"], [1, "m-0", "fs-20"]],
  template: function ListarTarjetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "MIS TARJETAS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "drag-scroll", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListarTarjetaComponent_div_5_Template, 16, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scroll-x-wheel-enabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listTarjetas);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__.DragScrollComponent, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__.DragScrollItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe],
  styles: [".far[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 7px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 5px #1b1b1ba2;\n}\n\n.card[_ngcontent-%COMP%] {\n  \n  padding: 1rem 1rem;\n  height: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.h8[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]   .atm[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n}\n\n.card[_ngcontent-%COMP%]   .visa[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 20px;\n  object-fit: fill;\n}\n\n.card[_ngcontent-%COMP%]   .master[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  object-fit: fill;\n}\n\n.debit-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #0093e9;\n  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);\n  position: absolute;\n  border-radius: 10px;\n  box-shadow: 3px 3px 5px #0000001a;\n  transition: all 0.3s ease-in;\n}\n\n\n\n.card-2[_ngcontent-%COMP%] {\n  background-color: #21d4fd;\n  background-image: linear-gradient(116deg, #b721ff 0%, #21d4fd 100%);\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.1) !important;\n}\n\n  drag-scroll {\n  height: 100%;\n}\n\n  .drag-scroll-content {\n  overflow: hidden !important;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.container-card[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  position: relative;\n  margin-right: 1rem;\n}\n\n.delete-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  padding: 16px;\n  font-size: 24px;\n}\n\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9saXN0YXItdGFyamV0YS9saXN0YXItdGFyamV0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUVBQW1FO0VBQ25FLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLDRCQUE0QjtBQUM5Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHlCQUF5QjtFQUN6QixtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFFBQVE7RUFDUixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLmZhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzFiMWIxYmEyO1xufVxuXG4uY2FyZCB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM2ZTZlNmU7ICovXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5oOCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZCAuYXRtIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jYXJkIC52aXNhIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbn1cblxuLmNhcmQgLm1hc3RlciB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5kZWJpdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTNlOTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwOTNlOSAwJSwgIzgwZDBjNyAxMDAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwMDAwMWE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG59XG5cbi8qIC5kZWJpdC1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNXB4IDNweCA1cHggIzAwMDAwMGEyO1xufSAqL1xuXG4uY2FyZC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxZDRmZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExNmRlZywgI2I3MjFmZiAwJSwgIzIxZDRmZCAxMDAlKTtcbn1cblxuLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBkcmFnLXNjcm9sbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kcmFnLXNjcm9sbC1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZzLTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4532:
/*!*********************************************!*\
  !*** ./src/app/services/tarjeta.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TarjetaService": () => (/* binding */ TarjetaService)
/* harmony export */ });
/* harmony import */ var C_Users_S2_PC00_Downloads_virtual_wallet_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class TarjetaService {
  constructor(firestore) {
    this.firestore = firestore;
    this.tarjeta$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.reloadTarjetas$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.tarjetaConverter = {
      toFirestore: tarjeta => {
        return {
          id: tarjeta['id'],
          titular: tarjeta['titular'],
          numeroTarjeta: tarjeta['numeroTarjeta'],
          cvv: tarjeta['cvv'],
          fechaCreacion: tarjeta['fechaCreacion'],
          fechaActualizacion: tarjeta['fechaActualizacion'],
          fechaExpiracion: tarjeta['fechaExpiracion']
        };
      },
      fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        const tarjeta = {
          id: data['id'],
          titular: data['titular'],
          numeroTarjeta: data['numeroTarjeta'],
          cvv: data['cvv'],
          fechaCreacion: data['fechaCreacion'],
          fechaActualizacion: data['fechaActualizacion'],
          fechaExpiracion: data['fechaExpiracion']
        };
        return tarjeta;
      }
    };
    this.dbRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'tarjetas');
  }
  guardarTarjeta(tarjeta) {
    // return this.firestore.collection('tarjetas').add(tarjeta);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(this.dbRef, tarjeta).then(res => {
      const tarjetaRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, `tarjetas/${res.id}`);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(tarjetaRef, {
        ...tarjeta,
        id: res.id
      });
    });
  }
  obtenerTarjetas() {
    var _this = this;
    return (0,C_Users_S2_PC00_Downloads_virtual_wallet_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
      const data = [];
      const queryData = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(_this.dbRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('fechaCreacion', 'desc')));
      queryData.forEach(doc => {
        const tarjetaDoc = _this.tarjetaConverter.fromFirestore(doc, {});
        data.push(tarjetaDoc);
      });
      return data;
    })();
  }
  eliminarTarjeta(id) {
    // return this.firestore.collection('tarjetas').doc(id).delete();
    console.log('id', id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'tarjetas', id));
  }
  editarTarjeta(id, tarjeta) {
    // return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'tarjetas', id), tarjeta);
  }
  addTarjetaEdit(tarjeta) {
    this.tarjeta$.next(tarjeta);
  }
  getTarjetaEdit() {
    return this.tarjeta$.asObservable();
  }
}
TarjetaService.ɵfac = function TarjetaService_Factory(t) {
  return new (t || TarjetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore));
};
TarjetaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TarjetaService,
  factory: TarjetaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBo97DZYCJXT8lpjEwcRWrs_yxaHTN0tTA",
    authDomain: "my-wallet-2261b.firebaseapp.com",
    projectId: "my-wallet-2261b",
    storageBucket: "my-wallet-2261b.appspot.com",
    messagingSenderId: "749578419556",
    appId: "1:749578419556:web:3a79b4907323ad48784e71"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map