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

// from array of sorted nums to binary search tree

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var sortedArrayToBST = function(nums) {
  return returnValuesFromBinarieTree(nums, 0, nums.length-1)
};

function returnValuesFromBinarieTree(nums, inicio, fin){
  if(inicio > fin) return null
  let mid = Math.ceil((inicio + fin)/2)
  console.log(mid)
  let root = new TreeNode(nums[mid])
  root.left=returnValuesFromBinarieTree(nums, inicio, mid-1)
  root.right=returnValuesFromBinarieTree(nums, mid+1, fin)
  return root



}

let tempArray = []
    let finalArray = []
    let lastArray = []
   

    function recursive(num){
        if(num == 1){
            tempArray.push([1])
        }

    }
    console.log(tempArray)

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

// Numeros romanos a letras
let NumerosRomanos = ['M','D','C','L','X','IX','V','IV','I']
let NumerosNaturales = [1000,500,100,50,10,9,5,4,1]
let res=[]
function convertirARomano(num){
    for (let i = 0; i < NumerosNaturales.length;) {
        if(num >= NumerosNaturales[i]){
            res.push(NumerosRomanos[i])
            num=num-NumerosNaturales[i]
        }else{
            i++
        }
    }
}
convertirARomano(3)
console.log(res.join(''))

// let NumerosRomanos = ['M','D','C','L','X','IX','V','IV','I']
// let NumerosNaturales = [1000,500,100,50,10,9,5,4,1]
// let res=[]
let hashMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
function convertirANatural(romanNumber){
    let count = 0
    for(let i = 0; i < romanNumber.length; i++){
        if(hashMap[romanNumber[i]] < hashMap[romanNumber[i+1]]){
            count += hashMap[romanNumber[i+1]] - hashMap[romanNumber[i]]
            i++
        }else{
            count += hashMap[romanNumber[i]] 
        }
    }
    return count
}
convertirANatural("MDIL")
console.log(res.join(''))


var oArray = ['1 20 500', '2000 1 200', '20 200 8'];
//Separar los id's de los numeros de peticiones
  let newArray = oArray.flatMap((item)=> item.split(" ").slice(0, 2));


hashMap = {}
let overLimit = []
let treshold = 2

newArray.forEach(element => {
    if(hashMap[element]){
     hashMap[element] += 1
    }else{
     hashMap[element] = 1
    }    
    if(hashMap[element] >= treshold && !overLimit.includes(element)){
     overLimit.push(element)
    }
    if(overLimit.length == 0){
     return [0]
    }
})



console.log(overLimit)





1, 6 
1, 3

// expected 2
let s = '********|*|*||||'
let startIndices = [1]
let endIndices = [s.length]
function numberOfItems(s, startIndices, endIndices) {
    let encontradoBarra = false
    let encontradoAsterisco = false
    let contador = 0

    for(let i = 0; i<startIndices.length; i++){
    for(let j = startIndices[i]-1; j<endIndices[i]; j++){

    if(s[j] == '|'){
           encontradoBarra = true;
    }
    if (s[j] == '*' && encontradoBarra) {
      encontradoAsterisco = true;
    }
    if (s[j] == '|' && encontradoAsterisco) {
        console.log('entre')
      contador++;
      encontradoAsterisco = false;
    }
    }     
    }
    console.log(contador)

    }
    numberOfItems(s, startIndices, endIndices)



    function relations(related){   
     console.log(related.length) 
        count = 0
        let resu = related.map(element =>{
          let splitedElements = element.split('').reduce((acc, el) => {return el == '1' ? acc +1 : acc},0)
      
         if(splitedElements == 1){
            count++
         }
         
        })
        console.log(count)
        let total = resu.reduce((acc, el)=>acc+el,0)
        if(total == 0) return [0]
        if(related.length == total) return [total]
        let diff = related.length - count
        if(diff !== 0){
           count ++
        }
        console.log(count)
    }
    relations([
        '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '00000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'])



    // comparalo con este: 
    let related = ['10000','01000','00100','00010','00001']
    function amazonTest(related){

  
    let count = 0;
    let resu = related.map(element => {
      let splitedElements = element.split('').reduce((acc, el) => {
        return el == '1' ? acc + 1 : acc;
      }, 0);
      if (splitedElements == 1) {
        count++;
      }
      return splitedElements;
    });
    
    let total = resu.reduce((acc, el) => acc + el, 0);
    
    if (total == 0) {
        console.log('hola1')
      return [0];
    }
    
    if (related.length == total) {
        console.log('hola2')
      return [resu];
    }
    
    let diff = related.length - count;
    
    if (diff !== 0) {
      count++;
    }
    console.log(count)
    
    return [count];
}
amazonTest(related)




    function giftingGroup(matrix) {
        var groups = [];
      
        for (var i = 0; i < matrix.length; i++) {
          var added = false;
      
          for (var j = 0; j < groups.length; j++) {
            var group = groups[j];
      
            var validGroup = true;
            for (var k = 0; k < matrix[i].length; k++) {
              if (matrix[i][k] === '1' && matrix[group[group.length - 1]][k] === '1') {
                validGroup = false;
                break;
              }
            }
      
            if (validGroup) {
              group.push(i);
              added = true;
              break;
            }
          }
      
          if (!added) {
            groups.push([i]);
          }
        }
      
        return groups.length;
      }
      
      // Ejemplo de uso
      var matrix = ['1100', '1110', '0110', '0001'];
      
      var numGroups = giftingGroup(matrix);
      console.log("Número mínimo de grupos necesarios:", numGroups);
      
let nums = [1,1,2]
let set = new Set(nums)
console.log(set)



// merge 2 arrys:
var merge = function(nums1, m, nums2, n) {
    for(let j= 0,i = m; j < n; i++, j++) nums1[i] = nums2[j];
    nums1.sort((a,b)=>a-b)
}

// triangulo de pascal sin recursividad ( while )
let numRows = 2
let triangle = [[1]]
    if(numRows ==1) return triangle
    let row = 0 

    while(triangle.length < numRows){
        let prevRow = triangle[row]

        let currentRow = new Array(prevRow.length + 1).fill(1)
        console.log('arria al for')
        for(let i = 1; i < currentRow.length - 1; i++){
            console.log('entre al for')
            let leftValueAbove = prevRow[i-1]
            let rightValueAbove = prevRow[i]
            console.log(leftValueAbove)
            console.log(rightValueAbove)
            currentRow[i] = leftValueAbove + rightValueAbove


        }
        triangle.push(currentRow)
        row++
    }
    console.log(triangle)
    return triangle




    function pascalTriangle(numsRow){
        let triangle = [[1]]
        if(numsRow == 1) return triangle 
        let row = 0
        while(newRow.length < numsRow){
            let prevRow = triangle[row]
            let newRow = new Array(prevRow.length + 1).fill(1)

        }

    };

    var maxProfit = function(prices) {

        if(prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minBuy);
        console.log(minBuy)
        console.log(profit)
    }
    return profit;
       
    };

    maxProfit([2,4,1])

    // hashMap con if reducido

    // let hashMap = {}
    // for(let i = 0; i<nums.length; i++){
    //    hashMap[nums[i]] ? hashMap[nums[i]] += 1 : hashMap[nums[i]] = 1
    // }

    //HashMap aun más simplificado:
    // let hashMap = {}
    // for(let i = 0; i<nums.length; i++){
    //    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1
    // }

    // En el caso de que se deba encontrar el minimo repetido y no sabes cuanto es el minimo de veces que debe ser repetido:
    // let elementoMinimo
    // let minimValue=Infinity
    // for(let key in hashMap){
    //     if(hashMap[key] < minimValue){
    //         minimValue = hashMap[key]
    //         elementoMinimo = key
    //     }
    // }
    // return elementoMinimo

    //En el caso que si sepas como en el problema de singleNumber que debes encontrar el que se repite solo una vez
    // for (let key in hashMap) {
    //     if (hashMap[key] === 1) {
    //       return parseInt(key);
    //     }
    //   }
