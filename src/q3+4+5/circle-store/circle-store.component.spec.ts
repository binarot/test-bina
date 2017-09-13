import {} from 'jasmine';

import { CircleComponent } from '../circle/circle.component'
import { CircleStoreComponent } from './circle-store.component';

const assert = require("assert");


describe('CircleStoreComponent', () => {
  let component: CircleStoreComponent;
  let MIN = -100;
  let MAX = 100;
  let Y = 1000000;
  let X = 100;

  let randomInsertToStore = () => {
    for (let i = 0; i<Y; i++) { 
      let x = Math.random() * (MAX - MIN) + MIN;
      let y = Math.random() * (MAX - MIN) + MIN;
      let r = Math.random() * (MAX - MIN) + MIN;
      cCircleStore.addCircle( new CircleComponent(x,y,r));
    }
  }

  let cCircleStore = null;
  beforeEach(() => {
    cCircleStore = new CircleStoreComponent();
  });

  it('should create', () => {
    assert(cCircleStore);
  });

  it('should add ' + Y + ' circles', () => {
    randomInsertToStore();
    assert(cCircleStore.circles.length == Y);
  });

  it('should run less than ' + X + 'ms', () => {
    randomInsertToStore();
    let beginTime = new Date().getTime();
    let ans = cCircleStore.getOverlapingCircles(new CircleComponent(0,0,1));
    let endTime = new Date().getTime();
    assert((endTime-beginTime) < X);
  });
});
