export class Input {
  constructor (sentence){
    this.sentence = sentence;
  }

  letterCounter(){
    this.letters = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let c of this.sentence) {
      //console.log(c);
      for(let i of alphabet){
        //console.log(i);
        if(c === i){
          this.letters[i]= 1;
          console.log(this.letters[i]);
        }
      }
    }
  }
}