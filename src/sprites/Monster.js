import Phaser from 'phaser'

export default class Monster extends Phaser.Sprite {
    constructor( game, x, y) {
        super (game, x, y, 'monster')

        this.game.physics.arcade.enableBody(this)

        this.checkWorldBounds = true
        this.body.collideWorldBounds = true
    }
}

