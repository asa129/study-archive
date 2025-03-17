/* TypeScriptの基本的な型 */

// boolean
let bool: boolean = true;
console.log(bool);

// number
let num: number = 1;
console.log(num);

// string
let str: string = 'aaa';
console.log(str);

// array
let array: [] = [];
console.log(array);

// any なんでもOK　なるべく使わないように
let any: any = 'hoge';
console.log(any);

// undefined
let undef: undefined = undefined;
console.log(undef);

// void
let hoge = (): void => {
  console.log('aaa');
};
// 明示的に書かなくてもいい
let hoge2 = () => {
  console.log('aaa');
};
hoge();
hoge2();

// object
let obj: object = {};
let obj2: { id: number; name: string } = { id: 1, name: 'aaa' };
console.log(obj);
console.log(obj2);
