//Fetch inicia la solicitud para obtener los datos.
fetch('https://restcountries.com/v3.1/all')
//La funcion then() para manejar la respuesta de la solicitud
//La función flecha response => { ... } recibe la respuesta de la solicitud como parámetro
//Si la propiedad ok de la respuesta es true, significa que la solicitud se realizó correctamente 
//La función response.json() convierte los datos de la respuesta en formato JSON y los devuelve.
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al realizar la solicitud. Código de estado: ' + response.status);
    }
  })
 //Esta función then recibe los datos convertidos a formato JSON como parámetro (en este caso, se llama data).
//Aquí se utiliza console.log para imprimir el contenido en formato JSON en la consola.
 //JSON.stringify se utiliza para formatear los datos JSON con una indentación de 4 espacios.
  .then(data => {
    // Imprime el contenido en formato JSON
    console.log(JSON.stringify(data, null, 4));
  })
  .catch(error => {
    console.error('Error:', error);
  });


  
  // Obtener el código de país de la primera API
const countryCode = '';

//Clave de API obtenida de la página web de la segunda API
const apiKey = 'HPXWM8SYCHHTLIWE9A7Y1ACSZP29N3XE';

// Construir la URL de la segunda API con los parámetros requeridos
const url = `https://api.geodatasource.com/neighbouring-countries?key=${apiKey}&country_code=${countryCode}`;

// Realizar la solicitud a la segunda API
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al realizar la solicitud. Código de estado: ' + response.status);
    }
  })
  .then(data => {
    // Imprimir la lista de países vecinos en formato JSON
    console.log(JSON.stringify(data, null, 4));
  })
  .catch(error => {
    console.error('Error:', error);
  });
