System.register(['angular2/platform/browser', './components/app.component', './services/QuarksDataService', 'angular2/http'], function(exports_1) {
    var browser_1, app_component_1, QuarksDataService_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (QuarksDataService_1_1) {
                QuarksDataService_1 = QuarksDataService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [QuarksDataService_1.QuarksDataService, http_1.HTTP_BINDINGS]);
        }
    }
});
//# sourceMappingURL=boot.js.map