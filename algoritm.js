//opcion 1
function List(){
    this.head = null
}

function Node(value){
    this.value = value 
    this.nextNode = null
}

let constList = new List()
constList.head = new Node("vagon 1")
constList.head.nextNode = new Node("vagon 2")

//opcion 2
function list(){
    return {
        head: null,
        add: function (value){
            if(this.head === null) this.head = newNode(value)
            else{
                let ref = this.head
                while(ref.nextNode !== null){
                    ref = ref.nextNode
                }
                ref.nextNode = newNode(value)
            }
        }
    }
}
function newNode(value){
   return {
    value: value,
    nextNode: null
   }
}
function estudiante(nombre, edad, calificacion) {
return {
    nombre:nombre,
    edad: edad,
    calificacion: calificacion
}
  };

let lista = list()
lista.add("vagon 1")
lista.add("vagon 2")
console.log(lista)

//opcion 3
class List {
    constructor(){
        this.head = null
        this.add = function (value){
            if(this.head === null) this.head = new ClassNode(value)
            else {
                let ref = this.head
                while(ref.next !== null){
                    ref = ref.next
                }
                ref.next = new ClassNode(value)
            }
        }
    }
}
class ClassNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}

let newList = new List()
newList.add("carro 1")
newList.add("carro 2")
newList.add(2)
console.log(newList.head)


/*function newEstudiante(nombre, edad, cali){
    return {
        nombre: nombre,
        edad: edad,
        calif: cali
    }
}
let estu2 = newEstudiante("Uziel2", 18, 9)*/

console.log(estu1, estu2)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.time('for');
for (let i = 0; i < array.length; i++) {
  console.log("for")
}
console.timeEnd('for');

console.time('for...of');
for (const element of array) {
    console.log("for...of")
}
console.timeEnd('for...of');

console.time('forEach');
array.forEach(element => {
    console.log("forEach")
});
console.timeEnd('forEach');

console.time('map');
array.map(element => {
  console.log('map')
});
console.timeEnd('map');

console.time('reduce');
array.reduce((accumulator, element) => {
  console.log('reduce')
  return accumulator;
}, 0);
console.timeEnd('reduce');

// busqueda binaria

const arrayT = [3, 5, 8, 20, 34, 42, 60, 89, 91, 92, 95, 100];

let target = 100
let start = 0
let end = arrayT.length-1
let med = Math.floor((start + end)/2)
if(target == med) return med
console.time('while')
while(arrayT[med] !== target)
{
    if(arrayT[med] < target){
        start = med+1
        med = Math.floor((start + end)/2)
    }
    if(arrayT[med] > target){
        end = med-1
        med = Math.floor((start + end)/2)
    }
    if(arrayT[med] == target){
        console.log(arrayT[med])
        return med
    }
}
console.timeEnd('while')

// Cola
class Cola {
    constructor(){
        this.body = null
        this.last = null
    }
    isEmpty (){ 
        return body == null
    }
    add(value){
        let nodo = new Node(value)
        if(this.last !== null){
             this.last.next = nodo
        }
        this.last = nodo
        if(this.body == null){
            this.body = nodo
        }
    }
    pop(){
        if(this.body == null) return
        let value = this.body.data
        this.body = this.body.next
        if(this.body == null){
            this.last = null
        }
        return value   
    }
}

class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

let newCola = new Cola()
newCola.add(1)
newCola.add(2)
// newCola.add(3)
console.log(newCola)
let valorOriginal = {valor: 1}
let num1 = valorOriginal
let copyOfNum1 = valorOriginal
num1.valor = 2
console.log(num1)
console.log(copyOfNum1)

// Pilas FILO
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Pila {
    constructor(){
        this.top = null
    }
    isEmpty(){
        return head == null
    }
    add(value){
      let node = new Node(value)  
      node.next = this.top
      this.top = node            
    }
    pop(){
        if(this.top == null)return
        let data = this.top.data
        this.top = this.top.next
        return data
    }
}

let newPila = new Pila()
newPila.add(1)
newPila.add(2)
// newPila.pop()
// newCola.add(3)
console.log(newPila)

//Binary search three with recurtion
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null 
    }
}
class BinaryThree {
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(this.root == null){
            this.root = node
        }else{
            this.insertNewNode(this.root, node)
        }
    }
    insertNewNode(currentNode, newNode){
        if(newNode.value <= currentNode.value){
            if(currentNode.left == null){
                currentNode.left = newNode
            }else{
                this.insertNewNode(currentNode.left, newNode)
            }
        }else{
            if(newNode.value >= currentNode.value){
                if(currentNode.right == null){
                    currentNode.right = newNode
                }else{
                    this.insertNewNode(currentNode.right, newNode)
                }
            }
        }
    }
    recorrerArbolEnOrden(){
        this.recorrerEnOrdenNodo(this.root)
    }
    recorrerEnOrdenNodo(nodo){
        if(nodo !== null){
            this.recorrerEnOrdenNodo(nodo.left)
            console.log(nodo.value)
            this.recorrerEnOrdenNodo(nodo.right)
        }
    }
}
let arbolBinario = new BinaryThree()
arbolBinario.insert(1)
arbolBinario.insert(5)
arbolBinario.insert(2)
arbolBinario.recorrerArbolEnOrden()



// class Node {
//     constructor(value){
//         this.value = value
//         this.derecha = null
//         this.izquierda = null
//     }
// }

// class ArbolBinario {
//     constructor(){
//         this.raiz = null
//     }

//     insertarNodoEnRaiz(value){
//         let nuevoNodo = new Node(value)
//         if(this.raiz == null){
//             this.raiz == nuevoNodo
//         }else{
//             this.insertarNodos(this.raiz, nuevoNodo)
//         }
//     }

//     insertarNodos(nodoActual, nuevoNodo){
//         if(nuevoNodo.value <= nodoActual.value){
//             if(nodoActual.izquierda == null){
//                 nodoActual.izquierda == nodoActual 
//             }else{
//                 this.insertarNodos(nodoActual.izquierda, nuevoNodo)
//             }
//         }else{
//             if(nuevoNodo.value >= nodoActual.value){
//                 if(nodoActual.derecha == null){
//                     nodoActual.derecha == nodoActual
//                 }else{
//                     this.insertarNodos(nodoActual.derecha, nuevoNodo)
//                 }
//             }
//         }
//     }

//     recorrerArbolCompleto(){
//         return this.recorrerArbolDesdeNodo(this.raiz)
//     }

//     recorrerArbolDesdeNodo(nodo){
//         if(nodo !== null){
//             this.recorrerArbolDesdeNodo(nodo.iszquierda)
//             console.log(this.nodo.value)
//             this.recorrerArbolDesdeNodo(nodo.derecha)
//         }
//     }
// }