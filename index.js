window.loaded = function() {
    var ko = require('ko');

    function ViewModel() {
        this.firstName = "Foo";
        this.lastName = "Bar";
    }

    ko.applyBindings(new ViewModel());
};