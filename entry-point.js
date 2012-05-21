require(
    [
        "jquery",
        "backbone",
        "backbone-forms.amd",
        "text!form.mustache",
        "text!fieldset.mustache",
        "text!field.mustache"
    ],

    function ($, Backbone, Form, tmplForm, tmplFieldset, tmplField) {
        "use strict";

        // Comment this line, and the form inputs get rendered.
        //
        Form.setTemplates({form: tmplForm, fieldset: tmplFieldset, field: tmplField}, {error: "error"});

        var schema = {firstName: {validators: ["required"]}, lastName: {validators: ["required"]}},
            M = Backbone.Model.extend({schema: schema}),
            m = new M(),
            f = new Form({model: m});

        $("body").append(f.render().el);
    }
);