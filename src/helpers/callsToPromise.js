import producto from "../api/productos";

export const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(producto);
    }, 2000)
})