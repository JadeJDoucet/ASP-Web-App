"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var useState = React.useState;
var Login = function () {
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    var _b = useState(''), password = _b[0], setPassword = _b[1];
    return (React.createElement("div", null,
        React.createElement("h5", null, " Log in to manage your inventory "),
        React.createElement("form", null,
            "Email:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "Email", value: email, onChange: function (event) { return setEmail(event.target.value); } }),
            React.createElement("br", null),
            "Password:",
            React.createElement("br", null),
            React.createElement("input", { type: "password", name: "Password", value: password, onChange: function (event) { return setPassword(event.target.value); } }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("input", { type: "submit", value: "Submit" }))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map