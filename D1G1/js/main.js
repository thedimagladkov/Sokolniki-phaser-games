var config = {
        type: Phaser.AUTO,
        scale:{
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080   
        },
        backgroundColor: 0x000000,
        scene: [Scene1]
    }
    var game = new Phaser.Game(config);

    var line1;
        var mousedown;
        var mouseup;
var endText;
var time = 0.0;
var mousedown;
var tween;
var path = [];


var CustomPipeline = new Phaser.Class({
    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,
    initialize:
    function CustomPipeline (game)
    {
    Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
            game: game,
            renderer: game.renderer,
            fragShader: [
                'precision lowp float;',
                'varying vec2 outTexCoord;',
                'varying vec4 outTint;',
                'uniform sampler2D uMainSampler;',
                'uniform float alpha;',
                'uniform float time;',
                'void main() {',
                    'vec4 sum = vec4(0);',
                    'vec2 texcoord = outTexCoord;',
                    'for(int xx = -4; xx <= 4; xx++) {',
                        'for(int yy = -4; yy <= 4; yy++) {',
                            'float dist = sqrt(float(xx*xx) + float(yy*yy));',
                            'float factor = 0.0;',
                            'if (dist == 0.0) {',
                                'factor = 2.0;',
                            '} else {',
                                'factor = 2.0/abs(float(dist));',
                            '}',
                            'sum += texture2D(uMainSampler, texcoord + vec2(xx, yy) * 0.032) * (abs(sin(time))+0.06);',
                        '}',
                    '}',
                    'gl_FragColor = sum * 0.025 + texture2D(uMainSampler, texcoord)*alpha;',
                '}'
            ].join('\n')
        });
    } 
});

    
