window.loaded = function() {
    var ko = require('ko');

    function ViewModel() {
        var thiz = this;
        this.firstName = "Foo";
        this.lastName = "Bar";
        this.items = ko.observableArray([]);

        this.remove = function(viewModel) {
            var idx = thiz.items.indexOf(viewModel);
            thiz.items.splice(idx, 1);
        };

        this.add = function() {
            this.items.push({firstName: this.firstName, lastName: this.lastName, remove: this.remove});
        };
    }

    ko.applyBindings(new ViewModel());
};