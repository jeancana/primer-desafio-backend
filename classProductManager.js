class ProductManager {

    #products

    constructor() {
        this.#products = []
    }

    getProducts = () => this.#products

    #generateId = () => (this.#products.length === 0) ? 1 : this.#products[this.#products.length - 1].id + 1

    getProductsById = (id) => {

        // Usando el Metodo .find para encontrar un elemento del Array a traves de su ID 
        const product = this.#products.find(item => item.id === id)
        
        if (!product) {
            // SI el Id pasado es distinto al Id encontrado retorno
            return 'Id No encontrado'
        } else {
            // SI el Id pasado es Igual al Id encontrado retorno el elemento encontrado
            return product
        }
        
    }

    #validateProduct = (name, description, price, thumbnail, code, stock) => {
       
        // si no estan todos los campos retorna: campos Incompletos
        if (!name || !description || !price || !thumbnail || !code || !stock) {
            
            return `En el objeto ${name}: Faltan Campos por Cargar`

        // Como todos los campos estan bien cargados paso al else   
        } else {

            // Buscando codigo repetido
            const found = this.#products.find(item => item.code === code)
            
            // No hay codigo repetido devuelvo un 'true' y dejo cargar el producto 
            if (!found) return true
            
            // Si el codigo es igual a otro existente, no lo dejo carga y retorno "codigo ya existe"
            return `En el objeto ${name}: codigo Duplicado`

        }


    }

    addProduct = (name, description, price, thumbnail, code, stock) => {
        
        // Si aca ingresa un 'true' permito hacer el push 
        if (this.#validateProduct(name, description, price, thumbnail, code, stock) === true) {
            
            this.#products.push({ id: this.#generateId(), name, description, price, thumbnail, code, stock })

        } else {
            // Si el producto no esta bien cargado me va a reportar el error y el parametro que tiene problemas
            console.log(this.#validateProduct(name, description, price, thumbnail, code, stock))

        }

    }
 
}
 

// Instanciando un Objeto de la clase ProductManager
const productManager = new ProductManager()

// Agregando objetos al Array vacio 
productManager.addProduct('Manaza', 'fruta', 100, 'URL - WEB', '101', 5000)
productManager.addProduct('Pera', 'fruta', 50, 'URL - WEB', '102', 3000)
productManager.addProduct('Uvas', 'fruta', 50, 'URL - WEB', '102', 3000)
productManager.addProduct('Sandia', 'fruta', 100, 'URL - WEB', '104')

// Verificando que los objetos ha sido agregados al Array vacio
console.log(productManager.getProducts())

// Buscando un Producto a traves de su Id
console.log(productManager.getProductsById(1))

