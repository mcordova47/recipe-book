exports.onHashChange_ = function (handler) {
    handler(location.hash)()
    window.addEventListener('hashchange', function () {
        handler(location.hash)()
    })
}
