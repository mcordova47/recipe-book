var ClientEntry = require('../src/Main.purs');
var url = window.location.hash;
var api = process.env.NODE_ENV === 'production'
  ? 'https://recipebook-api.herokuapp.com/api/'
  : 'http://localhost:8081/api/';
var initialState = window.__puxLastState || ClientEntry.initialState;
var app = ClientEntry.main(url)(api)(initialState)();

app.state.subscribe(function (state) {
 window.__puxLastState = state;
});

// If hot-reloading, hook into each state change and re-render using the last
// state.
if (module.hot) {
  module.hot.accept();
}
