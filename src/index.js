import Phaser from 'phaser';
import ship from './assets/sprites/ship.png';
import playerSprites from './assets/sprites/spritesheet_walk.png';

import { movePlayer } from './movimentation';
import { animateMovement } from './animation';

const player = {}
let pressedKeys = [];

class MyGame extends Phaser.Scene
{
    
    constructor ()
    {
        super();
      
    }

    preload ()
    {
        this.load.image('ship', ship);
        this.load.spritesheet('player', playerSprites, {
            frameWidth: 90,
            frameHeight: 139,
        });

    }
      
    create ()
    {   
        const ship = this.add.image(0, 0, 'ship')
        player.sprite = this.add.sprite(
            330, 
            330, 
            'player'
        );

        this.anims.create({
            key: 'running',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 24,
            reapeat: -1,
        });
        
        this.input.keyboard.on('keydown', (e) => {
            if (!pressedKeys.includes(e.code)) {
              pressedKeys.push(e.code);
            }
         });

        this.input.keyboard.on('keyup', (e) => {
            pressedKeys = pressedKeys.filter((key) => key !== e.code);
        });
        
    }

    update(){
        this.scene.scene.cameras.main.centerOn(
            player.sprite.x,
            player.sprite.y
        );
        movePlayer(pressedKeys, player.sprite);
        animateMovement(pressedKeys, player.sprite);
    }
    
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerWidth,
    scene: MyGame
};

const game = new Phaser.Game(config);
