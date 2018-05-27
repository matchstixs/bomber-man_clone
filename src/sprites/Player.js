import Phaser from 'phaser'

export default class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'player')

        this.game.physics.arcade.enableBody(this)
    };

    preload() {
        // load character sprites
        // player
        // frame size is 32 x 32; 12 frame cells
        this.load.spritesheet('player', './resources/player/iceKing.png', 
        {frameWidth: 32, frameHeight: 32, endFrame:12 });
    };

    create() {
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true)

        // animations
        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
        });

        this.anims.create({
        key: 'up',
        frames: [ { key: 'player', frame: 4 } ],
        frameRate: 20
        });

        this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1
        });

        this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
        frameRate: 20
        });

        function moveCharacter(player) {
        if (this.player.exists) {
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;

        if (this._directions.right.isDown) {
            this.player.body.velocity.x = this._heroSpeed;
            if (this._direction != 'right') {
                this.player.animations.play('right');
                this._direction = 'right';
                console.log("test")
                }
            } else
                if (this._directions.left.isDown) {
                    this.player.body.velocity.x = -this._heroSpeed;
                    if (this._direction != 'left') {
                        this.player.animations.play('left');
                        this._direction = 'left';
                    }
                } else
                    if (this._directions.up.isDown) {
                        this.player.body.velocity.y = -this._heroSpeed;
                        if (this._direction != 'up') {
                            this.player.animations.play('up');
                            this._direction = 'up';
                        }
                    } else
                        if (this._directions.down.isDown) {
                            this.player.body.velocity.y = this._heroSpeed;
                            if (this._direction != 'down') {
                                this.player.animations.play('down');
                                this._direction = 'down';
                            }
                        }  else 
                            if (this._direction != 'stop') {
                                this.player.animations.stop();
                                this._direction = 'stop';
                            }
            }
        };

        function useBomb() {
        if (this._put_bomb.isDown) {
            this.putBomb(this.player);
        } else
            if (this._exploit_bomb.isDown) {
                this.exploitBomb(this._bombs.getFirstAlive());
            }
        };

    
    function update () {
        // keyboard controls
    if (game.input.keyboard.isDown(Phaser.keyboard.left)) {
        this.player.x++;
        console.log('left');
        }
    };

}