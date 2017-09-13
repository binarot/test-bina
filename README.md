
# MOOVIT TEST

## Q0
What is your name? Bina Lir
What is the current date? 13.9.2017

## Q4
To reduce the runtime for the circle-overlapping query we need to sort the circles upon a circle insertion so our average runtime for each query will reduce. I would use datastructures like `quadtree` which is also implemented in js (https://github.com/timohausmann/quadtree-js). The runtime depends upon the spatiality of the circles in the 2D space - if we have many circles in on small location the complexity still can reach o(n), but we can reduce it dramitically if they are spread uniformly. 

## Q3+4+5

to run the tests for Q3+Q4 run the following commands:

```
npm i && npm test
```


you shoud see this output: 
```
» npm test                                                                                                                     
> typescript-jasmine-istanbul-boilerplate@1.0.0 test /Users/mosherot/workspace/moovit-test2
> mocha -r ts-node/register src/**/*.spec.ts

  CircleStoreComponent
    ✓ should create
    ✓ should add 1000000 circles (380ms)
    ✓ should run less than 100ms (487ms)

  CircleComponent
    ✓ should create
    ✓ should be [1,1,2]
    ✓ should overlap
    ✓ should not overlap
    ✓ should overlap itself


  8 passing (920ms)

```

