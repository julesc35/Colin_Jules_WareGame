var config = {
  width: 1920,
  height: 1080,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    },
    scene: [
    Variables,
    Audio,
    Jeu1,
    Jeu2,
    Jeu3
    ]
  }

var game = new Phaser.Game(config);