// Variables para realizar un seguimiento del índice actual
let startIndex = 0;
const itemsPerPage = 10; // Cantidad de elementos a mostrar por página

// Obtener una referencia al contenedor de la tabla
const container = document.getElementById('container');

// Función para renderizar la tabla con los datos en un rango específico
function renderTable(start, end) {
  // Crear una tabla HTML
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';

  // Crear una fila de encabezado
  const headerRow = document.createElement('tr');
  const headers = ['Bandera', 'Nombre', 'Capital', 'Población'];
  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    header.style.border = '1px solid black';
    header.style.padding = '8px';
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  // Crear una fila por cada país y agregar los datos
  for (let i = start; i < end; i++) {
    const country = data[i];

    const row = document.createElement('tr');

    const flagCell = document.createElement('td');
    const flagImg = document.createElement('img');
    flagImg.src = country.flags.png;
    flagImg.style.width = '50px';
    flagImg.style.height = 'auto';
    flagCell.appendChild(flagImg);
    flagCell.style.border = '1px solid black';
    flagCell.style.padding = '8px';
    row.appendChild(flagCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = country.name.common;
    nameCell.style.border = '1px solid black';
    nameCell.style.padding = '8px';
    row.appendChild(nameCell);

    const capitalCell = document.createElement('td');
    capitalCell.textContent = country.capital;
    capitalCell.style.border = '1px solid black';
    capitalCell.style.padding = '8px';
    row.appendChild(capitalCell);

    const populationCell = document.createElement('td');
    populationCell.textContent = country.population;
    populationCell.style.border = '1px solid black';
    populationCell.style.padding = '8px';
    row.appendChild(populationCell);

    table.appendChild(row);
  }

  // Eliminar la tabla existente dentro del contenedor
  while (container.firstChild) {
    container.firstChild.remove();
  }

  // Agregar la tabla actualizada al contenedor
  container.appendChild(table);
}

// Función para manejar el evento clic del botón "Atrás"
function handlePreviousClick() {
  if (startIndex >= itemsPerPage) {
    startIndex -= itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderTable(startIndex, endIndex);
  }
}

// Función para manejar el evento clic del botón "Adelante"
function handleNextClick() {
  if (startIndex + itemsPerPage < data.length) {
    startIndex += itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderTable(startIndex, endIndex);
  }
}

// Obtener los datos de la API
fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al realizar la solicitud. Código de estado: ' + response.status);
    }
  })
  .then(responseData => {
    // Guardar los datos en una variable global
    data = responseData;

    // Mostrar la primera página de datos
    const endIndex = startIndex + itemsPerPage;
    renderTable(startIndex, endIndex);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Obtener una referencia a los botones "Atrás" y "Adelante"
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

// Agregar manejadores de eventos a los botones
backButton.addEventListener('click', handlePreviousClick);
nextButton.addEventListener('click', handleNextClick);




  
const countryCode = '';
const apiKey = 'HPXWM8SYCHHTLIWE9A7Y1ACSZP29N3XE';
const url = `https://api.geodatasource.com/neighbouring-countries?key=${apiKey}&country_code=${countryCode}`;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al realizar la solicitud. Código de estado: ' + response.status);
    }
  })
  .then(data => {
    console.log(JSON.stringify(data, null, 4));
  })
  .catch(error => {
    console.error('Error:', error);
  });
