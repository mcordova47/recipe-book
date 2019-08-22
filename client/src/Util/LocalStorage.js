exports.getItem_ = function (key) {
    return window.localStorage.getItem(key)
}

exports.setItem_ = function (key, value) {
    window.localStorage.setItem(key, value)
}
