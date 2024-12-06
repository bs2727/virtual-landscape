import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un octogone
 */
export class Octogone extends AbstractForm {
  constructor(
    x = 0,
    y = 0,
    size = 50,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, size, size, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
    this.size = size;
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx);
    ctx.save();

    const size = this.size;
    const angleStep = Math.PI / 4; 
    const radius = size / 2; 
    const centerX = this.x + radius;
    const centerY = this.y + radius;

    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.strokeWidth;

    for (let i = 0; i < 8; i++) {
      const angle = angleStep * i - Math.PI / 8;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();

    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  /**
   * Renvoie un tableau d'octogones
   * @param ctx Canvas 2D context
   * @return {[Octogone,...]}
   */
  static buildForms(ctx) {
    const baseOctogone = new Octogone(150, 100, 80, 'blue', 'black', 2, false);
    const forms = [];
    const max = ~~(Math.random() * 5) + 3; // 3 à 7 octogones

    for (let i = 0; i < max; i++) {
      forms.push(
        new Octogone(
          ~~(Math.random() * 300), // Position X aléatoire
          ~~(Math.random() * 200), // Position Y aléatoire
          ~~(Math.random() * 60) + 20, // Taille aléatoire (20 à 80)
          baseOctogone.fillColor,
          baseOctogone.strokeColor,
          baseOctogone.strokeWidth,
          i % 2 === 0, // Pesenteur une fois sur deux
          baseOctogone.ordreConstruction + i
        )
      );
    }

    return forms;
  }
}
