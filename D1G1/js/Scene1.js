class Scene1 extends Phaser.Scene {
    constructor() {
        super('MapGame');
    }

    preload() {
        this.load.image("background", "assets/img/map/map__map_background.png");
        this.load.image("garden", "assets/img/garden.png");
        this.load.image("playground", "assets/img/playground.png");
        this.load.image("tree", "assets/img/tree.png");
        this.load.image("lake", "assets/img/lake.png");
        this.load.image("arch", "assets/img/arch.png");
        this.load.image("entry", "assets/img/entry.png");
        this.load.image("lawn", "assets/img/lawn.png");
        this.load.image("lawn", "assets/img/lawn.png");
        this.load.image("route", "assets/img/map/map_-09.png");
        for (let i = 30; i < 38; i++) {
            this.load.image("line_" + i, "assets/img/map/dotted_line/map_-" + i + ".png");
        }




        this.load.image("cloud", "assets/img/cloud.png");
        this.customPipeline = game.renderer.addPipeline('Custom', new CustomPipeline(game));
        this.customPipeline.setFloat1('alpha', 1.0);

    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        var route = this.add.sprite(960, 540, "route").setInteractive();
        for (let i = 30; i < 38; i++) {
            path[i] = this.add.sprite(960, 540, "line_" + i);
            path[i].alpha = 0;

        }
        var garden = this.add.sprite(1107, 294, "garden").setInteractive();
        var playround = this.add.sprite(341, 198, "playground").setInteractive();
        var tree = this.add.sprite(820, 800, "tree").setInteractive();
        var lake = this.add.sprite(1280, 633, "lake").setInteractive();
        var arch = this.add.sprite(1664, 870, "arch").setInteractive();
        var entry = this.add.sprite(304, 865, "entry").setInteractive();
        var lawn = this.add.sprite(692, 438, "lawn").setInteractive();

        this.input.on('gameobjectdown', function (pointer, gameObject) {
            this.mousedown = gameObject.texture.key;
            console.log(this.mousedown);
        });
        this.input.on('gameobjectup', function (pointer, gameObject) {
            console.log(gameObject.texture.key);
            if (this.mousedown == "tree") {
                if (gameObject.texture.key == "lawn") {
                    //remove lawn animation
                    tween.remove();
                    lawn.alpha = 1;
                    //create roude
                    var i = 30;
                    var intervalId = setInterval(function () {
                        if (i === 37) {
                            clearInterval(intervalId);
                        }
                        path[i].alpha = 1;
                        i++;
                    }, 500);
                    //glow lawn 2 times
//                    tween = this.tweens.add({
//            targets: lawn,
//            alpha: {
//                start: 1,
//                from: 1,
//                to: 0.5
//            },
//            yoyo: true,
//            repeat: 2,
//            repeatDelay: 1000,
//            delay: 1000,
//            duration: 500
//        });
                    
                }
            }
        });

        var tween = this.tweens.add({
            targets: lawn,
            alpha: {
                start: 1,
                from: 1,
                to: 0.6
            },
            yoyo: true,
            repeat: -1,
            repeatDelay: 5000,
            delay: 1000,
            duration: 1000
        });



        //            this.add.sprite(300,300,"cloud").setPipeline('Custom');
    }



    update() {}
}
