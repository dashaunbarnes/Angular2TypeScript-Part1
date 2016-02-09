System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CustomerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomerComponent = (function () {
                function CustomerComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CustomerComponent.prototype, "customers", void 0);
                CustomerComponent = __decorate([
                    core_1.Component({
                        selector: 'customers',
                    }),
                    core_1.View({
                        template: "\n    <div  *ngIf=\"customers.length>0\">\n\n    <h2>Customers On Deck</h2>\n    <table border=1 cellspacing=\"5\" cellpadding=\"5\">\n    <thead>\n      <tr> <td>name</td> <td>Street Address</td></tr>\n    </thead>\n\n    <tbody>\n      <tr  *ngFor=\"#customer of customers\">\n      <td>{{customer.name}}</td>\n      <td>{{customer.address.streetaddress}}</td>\n\n      </tr>\n    </tbody>\n    </table>\n\n    {{customers.length}} customers on deck\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerComponent);
                return CustomerComponent;
            })();
            exports_1("CustomerComponent", CustomerComponent);
        }
    }
});
//# sourceMappingURL=app.customercomponent.js.map