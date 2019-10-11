/**
 * 类型注解
 */
// 数值
 let num: number = 20
 // 字符串
 let str: string = 'string'
 // 数组
 let arr: number[] = [1,2,3]
 let list: Array<number> = [1,2,3]
 // 元组
 let tupple: [number, string] = [1, '2']

 // 枚举类型
 enum Color {
   red = 1,
   green,
   black
 }

 let c:Color = Color.red // 1
 let colorName = Color[1] // 反查 red

 // any跳过类型检查

 let anyType: any;

 // void, null, undefined, never

 // object

 // 类型断言

 let someValue;
 console.log((<string>someValue).length)
 console.log((someValue as string).length)
 


 