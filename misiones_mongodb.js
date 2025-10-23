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

// Consultas finales (Read)

// Todas las criaturas
print("Todas las criaturas:");
printjson(db.criaturas.find().toArray());

// Criaturas por habitat
print("Criaturas del Bosque Encantado:");
printjson(db.criaturas.find({ habitat: "Bosque Encantado" }).toArray());

// Criaturas con nivel_peligro > 8
print("Criaturas con nivel_peligro mayor a 8:");
printjson(db.criaturas.find({ nivel_peligro: { $gt: 8 } }).toArray());

// Actualizaciones (Update)

// Añadir nueva habilidad a una criatura
db.criaturas.updateOne(
  { nombre: "Hada del Bosque" },
  { $push: { habilidades: "control de plantas" } }
);

// Incrementar nivel_peligro de todas las criaturas de un habitat
db.criaturas.updateMany(
  { habitat: "Montañas" },
  { $inc: { nivel_peligro: 1 } }
);

print("Actualizaciones realizadas correctamente.");

// Consultas finales para verificar cambios
print("Todas las criaturas actualizadas:");
printjson(db.criaturas.find().toArray());
