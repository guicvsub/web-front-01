// Array de cidades
const cities = ['sao paulo ', 'santos', 'capinas', 'minas gerais'];

// Array para armazenar as cidades em maiúsculas
const uppercaseCities = [];

// Loop for para converter as cidades em maiúsculas
for (let i = 0; i < cities.length; i++) {
  uppercaseCities.push(cities[i].toUpperCase());
}

// Exibindo o array com as cidades em maiúsculas
console.log(uppercaseCities);
