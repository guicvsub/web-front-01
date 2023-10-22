// Array de cidades
const cities = ['Nova York', 'Los Angeles', 'Chicago', 'Miami'];

// Array para armazenar as cidades em maiúsculas
const uppercaseCities = [];

// Loop for para converter as cidades em maiúsculas
for (let i = 0; i < cities.length; i++) {
  uppercaseCities.push(cities[i].toUpperCase());
}

// Exibindo o array com as cidades em maiúsculas
console.log(uppercaseCities);
