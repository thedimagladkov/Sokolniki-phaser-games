var config = {
        type: Phaser.AUTO,
        scale:{
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1085,
        height: 777   
        },
        width: 1085,
        height: 777, 
        backgroundColor: 0x000000,
        scene: [Scene1]
    }
    var game = new Phaser.Game(config);

 var Dot = [];
var Line = [];
var graphics = [];
var prev;
var count = [];