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
    ID del producto: ${products[i].id}

    ${products[i].desc}

    Precio:  $${products[i].price}

    Unidades disponibles:  ${products[i].stock} `)
}
//declaración de variable para almacenar el precio final y continuar
let finalPrice = 0
let returnShopping = true
let purchaseSummary = ""

while (returnShopping) {
    let continueShopping = true
    while (continueShopping) {
        let productId = parseInt(prompt("Escribe el ID del producto que deseas comprar: "))

        if (!productId) {
            continueShopping = false
            alert("Gracias por visitarnos, vuelve pronto 👋")
            break
        }

        let productFound = false //variable que maneja la existencia del producto

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                productFound = true
                let qtyProduct = parseInt(prompt("¿Cuantas unidades deseas comprar?"))

                //Verificar unidades suficientes en stock
                if (qtyProduct > products[i].stock) {
                    alert(`Lo siento 🙁, no tenemos la cantidad solicitada de: ${products[i].productName}el stock disponible es: ${products[i].stock} Unidad(es)`)
                } else { // Resta del stock y suma al precio final
                    products[i].stock -= qtyProduct
                    finalPrice += products[i].price * qtyProduct
                    purchaseSummary += `Producto: ${products[i].productName} x ${qtyProduct}    Unidad(es)\n`
                    alert(`¡Hurra!🎉 Agregaste el siguiente producto: ${products[i].productName} x ${qtyProduct} Unidad(es)`)
                }
                break
            }
        }
        if (!productFound) {
            alert("Lo siento 🙁, el ID ingresado no existe. Intenta nuevamente 💪")
        } else {
            let buyMore = confirm("¿Deseas comprar algo más?")
            if (!buyMore) {
                continueShopping = false
            }
        }
    }


    let buyReturn = confirm("deberias agregar algo más 🧐")
    if (!buyReturn) {
        returnShopping = false
    }

}

//Resumén de la compra

if (finalPrice > 0) {
    alert(`Gracias por tu compra ${fullName},
        El resumen de tu compra es: 
        ${purchaseSummary} 
        el precio final de tu compra es: 
        $${finalPrice}`)


        alert("¡Gracias por elegirnos! ❤")
} else {
    alert(`Oops!😮
           ${fullName} parece que no realizaste ninguna compra.`)
}