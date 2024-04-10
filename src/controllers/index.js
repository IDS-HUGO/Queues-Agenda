import { Agenda } from "./Agenda.js";
const agenda = new Agenda();

window.agregarContacto = function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const contacto = `${nombre} ${apellido}: ${telefono}`;
    
    agenda.agregarContacto(contacto);

    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "Contacto agregado correctamente.";

    mostrarCola();
}

window.extraerContacto = function() {
    const contactoExtraido = agenda.extraerContacto();

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
    const colaElement = document.getElementById('cola');
    colaElement.textContent = agenda.mostrarCola();
}

window.mostrarTodosContactos = function() {
    const todosLosContactosElement = document.getElementById('todosLosContactos');
    const todosLosContactos = agenda.obtenerTodosLosContactos();

    if (todosLosContactos.length > 0) {
        let listaContactosHTML = '<ul>';
        todosLosContactos.forEach(contacto => {
            listaContactosHTML += `<li>${contacto}</li>`;
        });
        listaContactosHTML += '</ul>';
        todosLosContactosElement.innerHTML = listaContactosHTML;
    } else {
        todosLosContactosElement.textContent = "La agenda está vacía, no hay contactos para mostrar.";
    }
}

window.buscarContactoPorNombre = function() {
    const nombreABuscar = document.getElementById('buscarNombre').value;
    const resultados = agenda.buscarContactoPorNombre(nombreABuscar);

    const resultadosElement = document.getElementById('resultadosBusqueda');
    if (resultados.length > 0) {
        let listaResultadosHTML = '<ul>';
        resultados.forEach(resultado => {
            listaResultadosHTML += `<li>${resultado}</li>`;
        });
        listaResultadosHTML += '</ul>';
        resultadosElement.innerHTML = listaResultadosHTML;
    } else {
        resultadosElement.textContent = "No se encontraron resultados para la búsqueda.";
    }
}

