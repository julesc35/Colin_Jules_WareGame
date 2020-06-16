var config = {
  width: 1920,
  height: 1080,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: true
        }
    },
    scene: [
    Variables,
    Audio,
    ComJouer
    ]
  }

var game = new Phaser.Game(config);