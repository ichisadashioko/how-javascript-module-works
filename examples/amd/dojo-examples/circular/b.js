define([
    'circular/a.js',
], function (aModule) {

    console.log('Hi from circular/b.js');
    console.log(aModule.subtract(3, 1));
    return {
        add: function (a, b) {
            return a + b;
        },
    };
})