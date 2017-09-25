var ko = require('knockout');

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

window.loaded = function() {
    /*ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.observable(params && params.initialText || 'hi there');
        },
        template: require('html-loader!./components/message-editor.html')
    });*/
    ko.applyBindings(new ViewModel());
};

module.exports = {ViewModel};
