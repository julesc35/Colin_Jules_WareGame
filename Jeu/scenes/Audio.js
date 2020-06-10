class Audio extends Phaser.Scene {
	constructor(){
		super('Audio')
	}

	init(){}

	preload(){

        //préparation de la musique //

        this.load.audio('menuMusic', 'Assets/_Musiques/_Menu.mp3');
        this.load.audio('Outromusic', 'Assets/_Musiques/_Outro.wav');
        this.load.audio('BarMusic', 'Assets/_Musiques/JeuBar.wav');
        this.load.audio('merMusic', 'Assets/_Musiques/JeuEnMer.wav');
        this.load.audio('FuiteMusic', 'Assets/_Musiques/JeuFuite.wav');
}
 create(){}

 update(){
 	this.scene.start('Menu');
 }
}