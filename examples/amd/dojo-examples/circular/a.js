define([
    'circular/b.js',
], function (bModule) {
    console.log('Hi from circular/a.js');
    console.log(bModule.add(1, 2));
    return {
        subtract: function (a, b) {
            return a - b;
        },
        addAndSubtract: function (a, b, c) {
            return bModule.add(a, b) - c;
        }
    };
})