//Declaramos la variable que captura por medio del prompt, el nombre del usuario
const fullName = prompt("Ingresa tu nombre por favor:").toUpperCase()
alert(`Hola bienvenido ${fullName}, nos encanta tenerte aquí. Te invitamos a que conozcas nuestros productos `)


//Creamos un array con los productos disponibles en la tienda
const products = [
    {
        id: 1,
        productName: "👕 Camiseta 👕",
        price: 30000,
        desc: "Con la mejor calidad del mercado, te brindamos una camiseta en tela fria, las mejores costuras del mercado",
        stock: 10,
    },
    {
        id: 2,
        productName: "👖 Pantalón 👖",
        price: 80000,
        desc: "Moda vanguardista en pantalones de la mejor calidad",
        stock: 5,
    },
    {
        id: 3,
        productName: "🧥 Chaqueta 🧥",
        price: 100000,
        desc: "¿El frio te impide salir de casa? Compra ahora las mejores marcas de chaquetas",
        stock: 3,
    }
]



//recorremos el array con un for y mostramos los productos disponibles

for (let i = 0; i < products.length; i++) {
    alert(`=====${products[i].productName.toUpperCase()}=====

    ${products[i].desc}

    Precio:  $${products[i].price}

    Unidades disponibles:  ${products[i].stock} `)
}

//Capturamos el nombre del producto que el usuario desea comprar
let name_product = products.productName
let product = prompt("Ingresa el nombre del producto que deseas comprar:").toUpperCase()

if ( product === name_product){
    product.stock -= 1
    alert(`El producto ${product} ha sido agregado al carrito`)
    console.log(`Producto ${product} agregado al carrito `);
    
    confirm(`¿Deseas seguir comprando? oprime aceptar para continuar o cancelar para continuar finalizar la compra`)
}else{
    alert(`¡Lo Sentimos!😔 El producto no esta disponible en nuestra tienda`)
    confirm(`¿Deseas seguir comprando? oprime aceptar para continuar o cancelar para finalizar la compra`)
}





