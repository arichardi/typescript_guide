# Typescript study guide

## What is it / O que é ?
This is a self-made guide for further research and self-study on typescript

### Starting

```typescript
tsc --init
```

This will start the configuration of typescript compiler (TSC), with the further options

to start the compile you run tsc and the name of the file, in this exemple sandbox.tsc
with the flag -w you can keep the compiler watching an automatic saving the changes

```typescript
tsc sandbox.ts -w
```

**in the tsconfig you can change a lot of rules**

     "outDir": "./public", 
     "rootDir": "./src",   

*you can show the input and the output directory*

    "include": ["src"]

*with include you especificate the only place will look to compile*

### basic rules

Variables typing is the same that js, it will incur and keep the type coercion, you
don't need to specificate every type in the project

##### types

In some cases will be necessary specificate the type with *:type*

```typescript
 let exempleOne: number;
 let exempleTwo: string;
 let exemplethree: number | string;

 function circ (diameter: number) {}
```
##### arrays and objects

the way you first declare your array will define the type of it.

```typescript
 const MyNumbers = [5 , 7 , 8]
```

You can't add strings in this array, unless you declare the types you will use
the rule extends for objects

You can infer the types os the array, and can have more than one type

```typescript
 const MyNumbers: numbers[] = []
 const mixed: (numbers | strings | boolean) = []
```


```typescript
 const objectExempleOne: object
 const objectExempleTwo: {
     name: string,
     age: number,
     isLogged: boolean
 }
```
**in the case of objects, you can't add a new proprety to an object once you already defined, you need to keep the same structure** 

##### Functions

Functions works the same way of other declarations

If the argument is optional you can use the '?' or specificate a default value

```typescript
 function calculate (first: number, second: number, third?:number) {}
 function calculate (first: number, second: number, third:number = 10) {}
```

**You can infer the type of the return, if the function do not have an explicit return the type will be void**

```typescript
 function calculate (first: number, second: number): number {}
```

##### DOM

Working with the Dom may have some diferent problems

**Sometimes may appear an error on a possibility of a null , you can specify '!' to let clear that you know that the object is won't be inexistent**

```typescript
 const anchor = document.querySelector('a')!
```
You may need to use 'as' in some cases where the typescript can infer the type of object

```typescript
 const anchor = document.querySelector('.classForm') as HTMLFormElement
```

