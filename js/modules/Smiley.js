import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Smiley extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


   smiley(ctx, dx, dy) {
    let ox = dx
    let oy = dy
        // si pesenteur pousse l'objet au bas de l'écran

    ctx.save()

    // TODO prendre en compte this.fillColor et autres propriétés de l'objet (voir la classe de base)
    // prendre exemple sur Triangle.js
    
    // décommenter l'instruction ci-dessous pour pass en mode debogueur
    //debugger
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)

    let rgb = `rgb(${r}, ${g}, ${b})`

    // console.log(`Valeur rgb : ${rgb}`)

    ctx.beginPath();
    ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.fillStyle =  rgb // this.fillColor 
    ctx.fill()

    ctx.beginPath();

    ctx.fillStyle = 'red'; // Couleur des yeux
    ctx.beginPath();
    ctx.arc(ox + 35, oy + 40, 5, 0, Math.PI * 2, true); // Oeil gauche
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ox + 65, oy + 40, 5, 0, Math.PI * 2, true); // Oeil droit
    ctx.fill();
    ctx.moveTo(ox + 85, oy + 50);
    ctx.arc(ox + 50, oy + 50, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(ox + 40, oy + 40);
    
    ctx.stroke();

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
}

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx)
    this.smiley(ctx, this.x, this.y) // width always = 50 :( -- TODO change this
  }

  /**
   * get array of forms
   * @param ctx Canvas 2D context
   * @return {[Triangle,...]}
   */
  static buildForms(ctx) {
    const w = ctx.canvas.height/5
    // console.log("w = " + w)
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    forms.push(new Smiley(~~(Math.random() * 500) , ~~(Math.random() * 500),w, w,'blue','black', 1, true,50))
    forms.push(new Smiley(~~(Math.random() * 500) ,~~(Math.random() * 700),w, w,'blue','black', 1, false,50))

    // console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
