const ingresos = 1000;
const ganancias = 600;
const impuestos = 500;

const objetivoIngresos = ingresos >= 800;
console.log(`Objetivo de ingresos: ${objetivoIngresos}`);

const objetivoImpuestos = impuestos < 400;
console.log(`Objetivo de impuestos: ${objetivoImpuestos}`);

const objetivoGanancias = ganancias == 600;
console.log(`Bono de ganancias: ${objetivoGanancias}`);