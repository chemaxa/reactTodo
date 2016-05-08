"use strict";

var App = function App() {
  return React.createElement(
    "div",
    { className: "page__wrapper" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12" },
          "Hello world!"
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("App"));
