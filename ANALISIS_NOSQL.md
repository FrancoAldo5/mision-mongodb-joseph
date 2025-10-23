# Análisis del Modelo NoSQL - Misión MongoDB

## 1️⃣ NoSQL vs SQL

Un modelo de documentos como MongoDB es más adecuado para el **Bestiario Digital** porque permite **flexibilidad de esquema**.  
- Cada criatura puede tener atributos distintos: algunas tienen alas, otras múltiples cabezas, algunas lanzan hechizos, otras no.  
- En una base de datos relacional (SQL) tendríamos que definir columnas fijas, y muchos campos quedarían vacíos o requerirían tablas adicionales.  
- MongoDB permite guardar documentos heterogéneos en la misma colección sin restricciones estrictas, facilitando la inserción y evolución de datos.

## 2️⃣ Tipos de NoSQL

MongoDB es una base de datos orientada a **documentos**, pero existen otros tipos:

- **Clave-Valor**: almacena pares `{clave: valor}`. Ideal para **cachés de sesión de usuarios** o **configuraciones rápidas**, donde solo importa recuperar un valor a partir de su clave.  
- **Columnar**: almacena datos por columnas en lugar de filas. Útil para **big data analítico**, como procesar millones de registros de ventas para reportes rápidos.  
- **Grafo**: almacena nodos y relaciones. Perfecto para **redes sociales**, **rutas o mapas**, donde las relaciones entre elementos son complejas.

Escenario donde otro tipo sería más útil:  
- Para una **red social**, una base de datos de tipo **grafo** (como Neo4j) permite consultar amigos de amigos o rutas de conexión de forma más eficiente que MongoDB.

## 3️⃣ Casos de Estudio

- **Plataformas de e-commerce (como eBay o Etsy)**: utilizan MongoDB para manejar catálogos de productos con atributos muy variables (tallas, colores, características especiales).  
  - MongoDB permite agregar atributos nuevos sin modificar toda la estructura de la base de datos.  
  - Facilita búsquedas rápidas y consultas sobre arrays y objetos anidados, muy comunes en productos con múltiples variaciones.  

- **Redes sociales (como LinkedIn)**: usan MongoDB para almacenar perfiles de usuario, publicaciones y conexiones, donde cada documento puede tener campos distintos según el tipo de cuenta o actividad.

### 🔹 Conclusión

MongoDB es ideal para el Bestiario Digital porque combina **flexibilidad**, **escalabilidad** y **facilidad de manejo de datos heterogéneos**, algo que un modelo relacional tradicional no podría hacer eficientemente.
