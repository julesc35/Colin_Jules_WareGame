class ComJouer extends Phaser.Scene {
	constructor(){
		super('ComJouer')
	}

	init(){}

	preload(){

		// fond // 

        this.add.image(400, 300, 'FondComJouer').setScale(0.30);

		// boutons //


        this.add.image(400, 300, 'BoutRetour').setScale(0.30);

}
 create(){}

 update(){
 }
}