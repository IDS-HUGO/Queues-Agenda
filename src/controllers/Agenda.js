import { Queue } from "../models/Queue.js";

export class Agenda {
    constructor() {
        this.queue = new Queue();
    }

    agregarContacto(contacto) {
        this.queue.enqueue(contacto);
    }

    extraerContacto() {
        return this.queue.dequeue();
    }

    mostrarCola() {
        return `Cola: ${this.queue.isEmpty() ? 'vacía' : this.queue.peek()} - Tamaño: ${this.queue.getSize()}`;
    }

    obtenerTodosLosContactos() {
        const size = this.queue.getSize();
        const contactos = [];

        const copiaCola = new Queue();
        for (let i = 0; i < size; i++) {
            const contacto = this.queue.dequeue();
            contactos.push(contacto);
            copiaCola.enqueue(contacto);
        }

        for (let i = 0; i < size; i++) {
            this.queue.enqueue(copiaCola.dequeue());
        }

        return contactos;
    }

    buscarContactoPorNombre(nombre) {
        const size = this.queue.getSize();
        const contactosEncontrados = [];
    
        const copiaCola = new Queue();
        for (let i = 0; i < size; i++) {
            const contacto = this.queue.dequeue();
            const nombreContacto = contacto.split(':')[0].trim();
            if (nombreContacto.includes(nombre)) {
                contactosEncontrados.push(contacto);
            }
            copiaCola.enqueue(contacto);
        }
    
        for (let i = 0; i < size; i++) {
            this.queue.enqueue(copiaCola.dequeue());
        }
    
        return contactosEncontrados;
    }
}
