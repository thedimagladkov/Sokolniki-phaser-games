class Scene1 extends Phaser.Scene {
    constructor() {
        super('MapGame');
    }

    preload() {
        this.load.image("background", "assets/img/loc_02_Lyjaika.png");
        this.load.image("cloudDog", "assets/img/cloudDog.png");
        this.load.image("cloudElephant", "assets/img/cloudElephant.png");
        this.load.image("cloudFish", "assets/img/cloudFish.png");
        this.load.image("cloudGiraffe", "assets/img/cloudGiraffe.png");
        this.load.image("Giraffe", "assets/img/Giraffe.png");
        this.load.image("fish", "assets/img/fish.png");
        this.load.image("Dog", "assets/img/dog.png");
        this.load.image("Elephant", "assets/img/elephant.png");
        this.load.image("Star", "assets/img/star.png");
        this.load.image("frame", "assets/img/frame.png");
    }
    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        //Dog button
        var DogBtn = this.add.group();
        DogBtn.create(210, config.height - 100, "frame");
        DogBtn.create(210, config.height - 100, "Dog");
        DogBtn.getChildren()[0].setScale(0.35);
        DogBtn.getChildren()[1].setScale(0.15);
        // Elephant Button
        var ElephantBtn = this.add.group();
        ElephantBtn.create(DogBtn.getChildren()[0].x + 210, config.height - 100, "frame");
        ElephantBtn.create(DogBtn.getChildren()[0].x + 210, config.height - 100, "Elephant");
        ElephantBtn.getChildren()[0].setScale(0.35);
        ElephantBtn.getChildren()[1].setScale(0.15);
        // Giraffe Button
        var GiraffeBtn = this.add.group();
        GiraffeBtn.create(ElephantBtn.getChildren()[0].x + 210, config.height - 100, "frame");
        GiraffeBtn.create(ElephantBtn.getChildren()[0].x + 210, config.height - 100, "Giraffe");
        GiraffeBtn.getChildren()[0].setScale(0.35);
        GiraffeBtn.getChildren()[1].setScale(0.12);
        //Fish Button
        var FishBtn = this.add.group();
        FishBtn.create(GiraffeBtn.getChildren()[0].x + 210, config.height - 100, "frame");
        FishBtn.create(GiraffeBtn.getChildren()[0].x + 210, config.height - 100, "fish");
        FishBtn.getChildren()[0].setScale(0.35);
        FishBtn.getChildren()[1].setScale(0.15);

        //Dog
        var Dog = this.add.image(300, 300, "cloudDog");
        Dog.setScale(0.5);





        Dot[0] = this.add.sprite(100, 200, "Star").setInteractive().on("pointerout", () => this.hit(0));
        Dot[1] = this.add.sprite(200, 450, "Star").setInteractive().on("pointerout", () => this.hit(1));
        Dot[2] = this.add.sprite(400, 480, "Star").setInteractive().on("pointerout", () => this.hit(2));
        Dot[3] = this.add.sprite(500, 400, "Star").setInteractive().on("pointerout", () => this.hit(3));
        Dot[4] = this.add.sprite(350, 270, "Star").setInteractive().on("pointerout", () => this.hit(4));
        Dot[5] = this.add.sprite(250, 130, "Star").setInteractive().on("pointerout", () => this.hit(5));

        for (let i = 0; i < 5; i++) {
            graphics[i] = this.add.graphics();
            graphics[i].lineStyle(10, 0xffff00, 1);
            Line[i] = new Phaser.Geom.Line(Dot[i].x, Dot[i].y, Dot[i + 1].x, Dot[i + 1].y, 0xff0000, 1);
            graphics[i].strokeLineShape(Line[i]).setVisible(0);
        }
        graphics[5] = this.add.graphics();
        graphics[5].lineStyle(10, 0xffff00, 1);
        Line[5] = new Phaser.Geom.Line(Dot[5].x, Dot[5].y, Dot[0].x, Dot[0].y, 0xff0000, 1);
        graphics[5].strokeLineShape(Line[5]).setVisible(0);
        

    }
    hit(i) {
        if (prev > -1 && prev != 0 && prev < 5) {
            if (prev - i == -1 && prev != i) {
                graphics[prev].setVisible(1);
                prev = i;
            } else if (prev - i == 1 && prev != i) {
                graphics[i].setVisible(1);
                prev = i;
            }

        } else if (prev == 0) {
            if (i == 1) {
                graphics[0].setVisible(1);
                prev = i;
            } else if (i == 5) {
                graphics[5].setVisible(1);
                prev = i;
            }
        } else if (prev == 5) {
            if (i == 4) {
                graphics[4].setVisible(1);
                prev = i;
            } else if (i == 0) {
                graphics[5].setVisible(1);
                prev = i;
            }
        } else {
            prev = i;

        }
        Dot[i].on("pointerup", () => prev = -1)
        
        if (graphics[0].visible == true &&  graphics[1].visible == true &&  graphics[2].visible == true &&  graphics[3].visible == true &&  graphics[4].visible == true &&  graphics[5].visible == true) {
            this.add.text(300,30,"Какое это животное?",{ fontFamily: '"Roboto Condensed"' }).setFontSize(40);
        }
    }
    update() {
    }
}
