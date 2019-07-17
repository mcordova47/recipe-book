exports.onHashChange_ = function (handler) {
    handler(currentRoute())()
    window.addEventListener('hashchange', function () {
        handler(currentRoute())()
    })
}

function currentRoute() {
    return location.hash.substr(1)
}
