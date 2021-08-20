
import Phaser from 'phaser'
import Animationkeys from '~/consts/AnimationKey'




export default class Game extends Phaser.Scene {


 
    private background: Phaser.GameObjects.TileSprite

    constructor() {
        super('game')

     
    }



    create() {
        const WIDTH = this.scale.width
        const HEIGHT = this.scale.height

        this.background = this.add.tileSprite(0, 0, WIDTH, HEIGHT, 'background').
        setOrigin(0)
            .setScrollFactor(0, 0) // keep scrolling





        this.anims.create({
            key: 'rocket-mouse-run',

            frames: this.anims.generateFrameNames('rocket-mouse', {
                start: 1,
                end: 4,
                prefix: 'rocketmouse_run',
                zeroPad: 2,
                suffix: '.png'
            }), // generate sprite names

            frameRate: 10,
            repeat: -1 // -1 to loop forever

        })


        const mouse = this.physics.add.sprite(WIDTH * 0.5, HEIGHT * 0.5, 'rocket-mouse', 'rocketmouse_fly01.png').
        play(Animationkeys.RocketMouseRun)

        const body = mouse.body as Phaser.Physics.Arcade.Body

        body.setCollideWorldBounds(true)

        this.physics.world.setBounds(
            0, 0, // x,y

            Number.MAX_SAFE_INTEGER, HEIGHT - 30 // width, height
        )

        //SETUP CAMERA

        this.cameras.main.startFollow(mouse)
        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, HEIGHT)

        body.setVelocityX(200);

    }


    update() {
        this.background.setTilePosition(this.cameras.main.scrollX)
    }
}