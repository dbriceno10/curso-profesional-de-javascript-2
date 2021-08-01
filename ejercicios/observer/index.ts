interface Observer {
  update: (data: any) => void;
}

interface Subject {//Los subjets van a exponer dos funciones, suscribir y desuscribir 
  subscribe: (observer: Observer) => void;//Recibe un observer, no retorna nada,con void decimos que estamos retornando un undefined
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];//Lista donde vamos a guardar a los observadores

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');//Feferencia al elemento a observar
    el.addEventListener('input', () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {//Recibe un observer y lo añadea una lista de observadores
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector('#price');
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000);
