
import {} from 'jasmine';
import { CircleComponent } from './circle.component';

const assert = require("assert");


describe('CircleComponent', () => {
  let cCircle = null;
  beforeEach(() => {
    cCircle = new CircleComponent(1,1,2);
  });

  it('should create', () => {
    assert(cCircle);
  });

  it('should be [1,1,2]', () => {
    assert(cCircle.x==1 && cCircle.y == 1 && cCircle.r==2);
  });

  it('should overlap', () => {
    let circle2 = new CircleComponent(1,1,3);
    assert(cCircle.isOverlapping(circle2));
  });

  it('should not overlap', () => {
    let circle2 = new CircleComponent(4,4,1);
    assert(!cCircle.isOverlapping(circle2));
  });

  it('should overlap itself', () => {
    assert(cCircle.isOverlapping(cCircle));
  });

});
