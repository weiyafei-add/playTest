import React from 'react'
import { HelloProps } from './type'


const Hello:React.FC<HelloProps> = (props) => {
    return <div>{props.message}</div>

    const add = function(x:number, y:number, z?: number):number {
        if (typeof z === 'number') {
            return x + y + z
        }else {
            return x + y
        }
    }
    const add2 = add
}

Hello.defaultProps = {
    message: 'h'
}

class Animal{
    static categoies: string[] = ['a','b']
    static isAnimal(a: any) {
        return a instanceof Animal
    }
    constructor( private name: string) {
        this.name = name
    }
    sayName() {
        console.log('father',this.name)
    }
}
const animal = new Animal('ni')

interface Radio {
    switchRadio(): void;
}
interface RadioWithBattery extends Radio {
    checkBattery() : void
}
class Car implements Radio {
    switchRadio() {

    }
}

class CellPhone implements RadioWithBattery {
    checkBattery(): void {
        
    }
    switchRadio() {

    }
}

enum Desc {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Desc.Up)
console.log(4165454)


function echo<T extends IWithLength>(arg:T): T {
    console.log(arg.length)
    return arg
}

interface IWithLength {
    length: number
}

const str = echo('str')


class Queue<T> {
    private data:T[] = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop():T {
        return this.data.shift() as T
    }
}

interface IFace<T,U> {  
    (x: T, b:T): U
}

function plus(x:number, b: number): boolean {
    return x === b
}
/**
 * ff 的值需要返回的是bool, 需要这么定义
 */
const ff: IFace<number,boolean> = plus

// 类型别名，在联合类型时非常有用
type nameResolver = () => string
type nameOrResolver = string | nameResolver

function getName(name: nameOrResolver): string {
    if(typeof name === 'string'){
        return name;
    }
    return name()
}

console.log(getName(() => {
    return '123'
}))

declare let jQuery: (select: string) => any

jQuery('#12')

export default Hello
