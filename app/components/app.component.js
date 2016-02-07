System.register(['angular2/core', '../models/Customer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Customer_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.quarkCustomers = [];
                    var newCustomer = new Customer_1.Customer('Sheldon Barnes');
                    this.customer = newCustomer;
                    this.quarkCustomers.push(newCustomer);
                    var klingonCustomer = new Customer_1.Customer('Cmdr Worf');
                    this.quarkCustomers.push(klingonCustomer);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        template: "\n<h1>Hello World</h1>\n\n<h2>Hello {{customer.name}}</h2>\n\n\n<div  *ngIf=\"quarkCustomers.length>0\">\n\n<h2>Customers On Deck</h2>\n<h3 *ngFor=\"#customer of quarkCustomers\"> {{customer.name}}</h3>\n\n{{quarkCustomers.length}} customers on deck\n</div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map