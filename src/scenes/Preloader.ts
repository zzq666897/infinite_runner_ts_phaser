import Phaser from "phaser";
import TextureKeys from "~/consts/TextureKyes";


export default class Preloader extends Phaser.Scene {

    constructor() {
        super('preloader')
    }

    preload() {

        this.load.image(TextureKeys.BackGround, 'house/bg_repeat_340x640.png');

        this.load.atlas(TextureKeys.RocketMouse, 
            'characters/rocket-mouse.png',
            'characters/rocket-mouse.json')

    }

    create() {

        this.scene.start('game')



    }





























}