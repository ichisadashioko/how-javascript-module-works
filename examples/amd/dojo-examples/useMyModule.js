// function changeText() {
//     require([
//         'myModule',
//     ], function (myModule) {
//         myModule.setText('greeting', 'new Text');
//     })
// }

// function revertText() {
//     require([
//         'myModule',
//     ], function (myModule) {
//         myModule.restoreText('greeting');
//     })
// }

function changeText() {
    require([
        'demo/myModule',
    ], function (myModule) {
        myModule.setText('greeting', 'new Text');
    })
}

function revertText() {
    require([
        'demo/myModule',
    ], function (myModule) {
        myModule.restoreText('greeting');
    })
}