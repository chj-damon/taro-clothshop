import { observable } from 'mobx';

export const counterStore = observable({
  counter: 0
});

counterStore.increment = function() {
  this.counter++;
};

counterStore.decrement = function() {
  this.counter--;
};

counterStore.incrementAsync = function() {
  setTimeout(() => {
    this.counter++;
  }, 1000);
};
