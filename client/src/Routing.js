exports.onHashChange_ = function (handler) {
    handler(location.hash)()
    addEventListener('hashchange', function () {
        handler(location.hash)()
    })
}

exports.setHash_ = function (hash) {
    history.pushState(undefined, undefined, hash)
    dispatchEvent(new HashChangeEvent('hashchange'))
}
