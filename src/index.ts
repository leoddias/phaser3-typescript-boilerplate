import "phaser";
import { initialScene } from "./scenes/initialScene";

/// <reference path="../../phaser.d.ts"/>

const config: GameConfig = {
    title: "Phaser3 BoilerPlate",
    type: Phaser.AUTO,
    width: 800,
    height: 600,            
    scene: [initialScene],
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    }
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
      super(config);      
    }
}
  
window.onload = () => {
    var game = new Game(config);    
};
  