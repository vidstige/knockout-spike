var ko = require('knockout');

function ViewModel() {
    var thiz = this;
    this.firstName = ko.observable("Foo");
    this.lastName = ko.observable("Bar");
    this.items = ko.observableArray([]);
    this.search = ko.observable("");

    this.fullName = ko.computed(function() { return thiz.firstName() + " " + thiz.lastName(); });

    this.filtered = ko.computed(
        function () {
            return thiz.items().filter(
                function(x) { return x.firstName.indexOf(thiz.search()) != -1; });
            }
    );

    this.remove = function(viewModel) {
        var idx = thiz.items.indexOf(viewModel);
        thiz.items.splice(idx, 1);
    };

    this.add = function() {
        this.items.push({firstName: this.firstName(), lastName: this.lastName(), remove: this.remove});
    };
}

window.loaded = function() {
    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.observable(params && params.initialText || 'hi there');
        },
        template: require('html-loader!./components/message-editor.html')
    });
    ko.applyBindings(new ViewModel());
};

module.exports = {ViewModel};
