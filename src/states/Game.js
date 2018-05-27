/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Monster from '../sprites/Monster'

export default class extends Phaser.State {
  init() { }
  preload() { 
    this.game.load.tilemap('IceTilemap', '../../assets/images/maps/ice.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('ice', '../../assets/images//maps/ice.png');
  }

  create() {
    this.setUpText()
    this.setUpPlayer()
    this.setUpMonster()
  }

  setupMonster() {
    this.monster = new Monster(this.game)
    this.game.add.existing(this.monster)
  }

  setUpPlayer() {
    this.player = this.game.add.group()
    this.createPlayer(this.player)
    }
  

  createPlayer() {
    for (let l=3; l < 4; l--) {
      player = new Player(
        this.game,
        50,
        50
      )
    }
  }

  setUpText() {
    this.createText(25, 25, 'left', `Life: ${this.game.global.lives}`);
    this.createText(0, 25, 'center', `Score: ${this.game.global.score}`);
    this.createText(-25, 25, 'right', `Level: ${this.game.global.level}`);
  }

  createText(xOffset, yOffset, align, text) {
    return this.game.add.text(
      xOffset,
      yOffset,
      text,
      {
        font: '24px Arial',
        fill: '#FFFFFF',
        boundsAlignH: align
      }
    ).setTextBounds(0, 0, this.game.world.width, 0)

  }

  render() {

  }


}
