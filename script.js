// Ejemplo de solicitud a una API de clima utilizando Fetch API
fetch('URL_DE_LA_API_DEL_CLIMA')
    .then(response => response.json())
    .then(data => {
        // Procesar los datos y actualizar la interfaz de usuario
    })
    .catch(error => console.error('Error al obtener los datos del clima:', error));
