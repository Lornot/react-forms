var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
    onSubmit: function (e) {
        if (!this.refs.fieldEmail.state.valid) {
            alert("You such at filling out forms. Emails is always required in a lead capture form");
        } else {
            //Send request to email host or server
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value
            };
            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();
            console.log("We gotteh here");
        }
    },
    render: function () {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName" /><br/>
                        <EmailField ref="fieldEmail"/>
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;