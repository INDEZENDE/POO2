class Pata {
  constructor (material){
    // this.materialPataChido = material;
    this.materialPata = material;
  }

  // getMaterial (){
  //   return `*${this.materialPataChido}+`;
  // }

  getMaterialOriginal (){
    return `${this.materialPata}`;
  }

  getMaterial (){
    return `*${this.materialPata.toUpperCase()}+`;
  }
}


// carro.llanta[0].inflar();

// llanta.inflar()

class PataAdornada extends Pata {}

class Tabla {
  constructor (material){
    this.material = material;
  }
}

class Mesa {
  constructor (numeroPatas){
    this.patas = [];

    // for (let i = 0; i < numeroPatas; i++){
    //   let nuevaPata = new Pata('cristal-madera-diamante-rosa');
    //   this.patas.push(nuevaPata);
    // }

    for (let i = 0; i < numeroPatas; i++){
      let nuevaPata = new PataAdornada(`cristal-madera-diamante-rosa[ ${i} ]` );
      this.patas.push(nuevaPata);
    }

    // let nuevaPata = new PataAdornada(`cristal-madera-diamante-rosa[ X ]` );
    // for (let i = 0; i < numeroPatas; i++){  
    //   this.patas.push(nuevaPata);
    // }

    let tabla = new Tabla('cristal-diamante');
    this.tabla = tabla;
  }

  // muestraInformacion(){
  //   return `info 1 - numero de patas [ ${this.patas.length} ]`;
  // }

  showData(){
    console.log(`info 1 - numero de patas [ ${this.patas.length} ]`);

    this.patas.forEach(pata => {
      // pata.material = 'cera';
      // pata.Material = 'cEra';
      // pata.mmaterial = 'cEra';

      // pata.materialPata = pata.materialPata.toUpperCase();

      console.log(`info aux - pata [ ${pata.constructor.name} ]`);
      // console.log(`info material - pata [ ${pata.material} ]`);
      console.log(`info material - pata [ *${pata.materialPata.toUpperCase()}* ]`);
      console.log(`info material - pata [ ${pata.getMaterial()} ]`);
      console.log(`info 2 - datos pata [ ${this.patas.length} ]`);

      console.log(`info material2 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material2 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info material3 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material3 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info material4 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material4 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info material5 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material5 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info material6 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material6 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info material7 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material7 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info material8 - pata [ *${pata.materialPata.toUpperCase()}+ ]`);
      console.log(`info material8 - pata [ ${pata.getMaterial()} ]`);

      console.log(`info materialf  - pata [ ${pata.getMaterialOriginal()} ]`);
      
    });

  }
}

let mesaInde = new Mesa(4);
// console.log(mesaInde.getInformacion());
mesaInde.showData();

// class Sentimientos {
//   constructor(nombre, representacion){
//     this.nombr=enombre;
//     this.representacion=representacion;
//     console.log("constructor con 2 parámetros");
//   }
//    toString() {
//         console.log("Invocación toString");
//     }
//    toString(algo) {
//         // console.log("Invocación toString 1 parámetro -> ", algo);
//         console.log("Invocación toString 1 parámetro -> ", this.nombre);
//     }

   

// }
// var usar =new Sentimientos("ira","malo");


// console.log(usar.nombre)
// console.log(usar.representacion)
// console.log(usar.nom);
// usar.toString();
// usar.toString(1);




// class Version2 extends Sentimientos{
//   constructor(nombre){
//     super(nombre, "bueno")
    
//   }

// }

// var usar1 =new Version2 ("ira");
// console.log(usar1.nombre);
// console.log(usar1.representacion)


