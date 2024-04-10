import { Agenda } from "./Agenda.js";
const agenda = new Agenda();

window.agregarContacto = function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const contacto = `${nombre} ${apellido}: ${telefono}`;
    
    // Llamamos a la función de la agenda para agregar el contacto
    agenda.agregarContacto(contacto);

    // Mostramos un mensaje de éxito
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "Contacto agregado correctamente.";

    // Llamamos a la función para mostrar la cola actualizada
    mostrarCola();
}

window.extraerContacto = function() {
    // Llamamos a la función de la agenda para extraer un contacto
    const contactoExtraido = agenda.extraerContacto();

    // Si se extrae un contacto, actualizamos la cola y mostramos un mensaje
    if (contactoExtraido) {
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = `Contacto extraído: ${contactoExtraido}`;
        mostrarCola();
    } else {
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = "La agenda está vacía, no hay contactos para extraer.";
    }
}

window.mostrarCola = function() {
    // Llamamos a la función de la agenda para obtener la cola actualizada
    const colaElement = document.getElementById('cola');
    colaElement.textContent = agenda.mostrarCola();
}

window.mostrarTodosContactos = function() {
    const todosLosContactosElement = document.getElementById('todosLosContactos');
    const todosLosContactos = agenda.obtenerTodosLosContactos();

    if (todosLosContactos.length > 0) {
        // Si hay contactos, los mostramos en el elemento HTML
        let listaContactosHTML = '<ul>';
        todosLosContactos.forEach(contacto => {
            listaContactosHTML += `<li>${contacto}</li>`;
        });
        listaContactosHTML += '</ul>';
        todosLosContactosElement.innerHTML = listaContactosHTML;
    } else {
        // Si no hay contactos, mostramos un mensaje indicando que la agenda está vacía
        todosLosContactosElement.textContent = "La agenda está vacía, no hay contactos para mostrar.";
    }
}
