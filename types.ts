// boolean ( true / false )
let isOpen: boolean
isOpen = "true"

// string ( 'foo' , "foo" , `foo`)
let message: string
message = `foo ${isOpen}` 

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: number[]
items = [1,2,3,4]

let values: Array<number> // generic
values = [1,2,3,4]

// tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any ( qualquer coisa ) NÃO USAR!!!!!!
let coisa: any
coisa = [1]

// void ( vazio ) para funções q não retornam nada
function logger(): void {
    console.log("foo")
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error")
}

// object 
let cart: object
cart = {
    key: "fi",
    name: "test"
}