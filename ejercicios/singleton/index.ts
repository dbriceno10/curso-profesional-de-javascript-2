import Singleton from './Singleton';
//el construsctor es privado, el método publico y estático que nos brinda el objeto para obtener la instancia es getInstance
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B?', a === b);
