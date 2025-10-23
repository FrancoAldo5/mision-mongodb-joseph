// Conexión a la base de datos
use("MisionCriaturas");

// Inserción de criaturas en la colección
db.criaturas.insertMany([
  { nombre: "Dragón del Norte", tipo: "Dragón", poder: 95, habitat: "Montañas", nivelAmenaza: "Alto" },
  { nombre: "Fénix Dorado", tipo: "Ave", poder: 90, habitat: "Volcanes", nivelAmenaza: "Medio" },
  { nombre: "Serpiente Marina", tipo: "Reptil", poder: 85, habitat: "Océanos", nivelAmenaza: "Alto" },
  { nombre: "Hada del Bosque", tipo: "Mística", poder: 60, habitat: "Bosques", nivelAmenaza: "Bajo" },
  { nombre: "Gólem de Piedra", tipo: "Constructo", poder: 80, habitat: "Montañas", nivelAmenaza: "Medio" }
]);

print("Criaturas insertadas correctamente en la base de datos MisionCriaturas");
