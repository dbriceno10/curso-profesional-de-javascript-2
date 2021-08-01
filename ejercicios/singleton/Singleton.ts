class Singleton {
  private static instance: Singleton;// instancia que es privada y estática

  private constructor() {//constructor es privado
    // init
    //Aquí va un tipo de inicialización.


  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

export default Singleton;
