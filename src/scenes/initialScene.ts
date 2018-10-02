export class initialScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;
    constructor() {
        super({
          key: "initialScene"
        });
    }

    preload(): void {
        this.load.image("logo", "./src/assets/phaser.png"); 
    }

    create(): void {
        this.phaserSprite = this.add.sprite(0, 0, "logo").setOrigin(0, 0).setDisplaySize(800,600);        
    }

}
