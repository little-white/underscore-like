(function() {
    this._ = {};
    _.each = each;

    function each(obj, callback) {
        if (callback) {
            if (obj.length) {
                for (var i = 0, length = obj.length; i < length; i++) {
                    callback(obj[i], i);
                }
            }
            if (Object.prototype.toString.call(obj) === "[object Object]") {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        callback(obj[key], key);
                    }
                }
            }
        }
        return obj;
    }
})(this);
