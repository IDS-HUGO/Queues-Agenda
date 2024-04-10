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

        // Creamos una copia de la cola
        const copiaCola = new Queue();
        for (let i = 0; i < size; i++) {
            const contacto = this.queue.dequeue();
            contactos.push(contacto);
            copiaCola.enqueue(contacto);
        }

        // Restauramos la cola original
        for (let i = 0; i < size; i++) {
            this.queue.enqueue(copiaCola.dequeue());
        }

        return contactos;
    }
}
