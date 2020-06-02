var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    },
    scene: [
    Assets,
    Audio,
    Intro,
    Menu,
    Jeu1,
    Jeu2,
    Jeu3]
  }

var game = new Phaser.Game(config);