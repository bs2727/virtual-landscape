import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Smiley extends AbstractForm {
  // Ajout d'un paramètre 'type' pour choisir quel type de smiley dessiner
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100,
    type = 'happy'  // 'happy' est le type par défaut
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
    this.type = type;  // Stocke le type du smiley
  }

  // Fonction pour dessiner un smiley heureux
  smileyHappy(ctx, dx, dy) {
    const ox = dx, oy = dy;

    ctx.save();

    // Visage
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Yeux
    ctx.beginPath();
    ctx.arc(ox + 35, oy + 40, 5, 0, Math.PI * 2, true); // oeuil gauche
    ctx.arc(ox + 65, oy + 40, 5, 0, Math.PI * 2, true); // oeil droit
    ctx.fillStyle = 'red';
    ctx.fill();

    // Bouche
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 60, 25, 0, Math.PI, false); // Demicercle
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  }

  // Fonction pour dessiner un smiley triste
  smileySad(ctx, dx, dy) {
    const ox = dx, oy = dy;

    ctx.save();

    // Visage
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Yeux
    ctx.beginPath();
    ctx.arc(ox + 35, oy + 40, 5, 0, Math.PI * 2, true); // oeil gauche
    ctx.arc(ox + 65, oy + 40, 5, 0, Math.PI * 2, true); // oeil droit
    ctx.fillStyle = 'red';
    ctx.fill();

    // Bouche
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 70, 25, 0, Math.PI, true); // Demi cercle inversé
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  }

  // Fonction pour dessiner un smiley surpris
  smileySurprised(ctx, dx, dy) {
    const ox = dx, oy = dy;

    ctx.save();

    // Visage
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Yeux
    ctx.beginPath();
    ctx.arc(ox + 35, oy + 40, 8, 0, Math.PI * 2, true); // oeil gauche
    ctx.arc(ox + 65, oy + 40, 8, 0, Math.PI * 2, true); // oeil droit
    ctx.fillStyle = 'red';
    ctx.fill();

    // Bouche
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 60, 15, 0, Math.PI * 2, true);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  }

  // Méthode pour dessiner le smiley en fonction du type
  draw(ctx) {
    super.draw(ctx);
    if (this.type === 'happy') {
      this.smileyHappy(ctx, this.x, this.y);
    } else if (this.type === 'sad') {
      this.smileySad(ctx, this.x, this.y);
    } else if (this.type === 'surprised') {
      this.smileySurprised(ctx, this.x, this.y);
    }
  }

  /**
   * get array of forms
   * @param ctx Canvas 2D context
   * @return {[Smiley,...]}
   */
  static buildForms(ctx) {
    const w = ctx.canvas.height / 5;
    let forms = [];

    forms.push(new Smiley(~~(Math.random() * 500), ~~(Math.random() * 500), w, w, 'blue', 'black', 1, true, 50, 'happy'));
    forms.push(new Smiley(~~(Math.random() * 500), ~~(Math.random() * 700), w, w, 'blue', 'black', 1, false, 50, 'sad'));
    forms.push(new Smiley(~~(Math.random() * 500), ~~(Math.random() * 700), w, w, 'blue', 'black', 1, false, 50, 'surprised'));

    return forms;
  }
}
