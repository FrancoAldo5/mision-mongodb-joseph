#  **Análisis de Validación y Modelado-JF**

## 1. Validación en la Base de Datos
Implementar validaciones con **JSON Schema** directamente en la base de datos garantiza la **integridad de los datos** incluso si múltiples aplicaciones o usuarios acceden al mismo repositorio.  
Si la validación se hiciera solo en el backend, sería posible insertar datos corruptos mediante otra conexión directa o un script externo.  
MongoDB actúa aquí como un “guardián” que impide que cualquier documento que no cumpla el esquema definido sea almacenado, fortaleciendo la **consistencia y seguridad del sistema**.

## 2. Relación 1-a-1 (ficha_veterinaria)
La **ficha veterinaria** está embebida dentro de la colección de criaturas porque representa información dependiente y exclusiva de cada una.  
Este enfoque es eficiente ya que ambos datos (criatura y su ficha) siempre se consultan juntos, evitando un `lookup` adicional.  
Se habría preferido modelarla como **referenciada** solo si las fichas veterinarias se gestionaran de manera independiente o compartida entre varias criaturas (por ejemplo, un historial médico común o auditable).

## 3. Relaciones 1-a-N
- **Guardián → Inventario (Embebida):**  
  La relación se modela como **embebida** porque los objetos del inventario solo existen dentro del guardián. No tienen identidad propia ni se consultan por separado. Este diseño optimiza las lecturas y simplifica las actualizaciones locales.

- **Guardián → Criaturas (Referenciada):**  
  Se modela como **referenciada** mediante el `id_guardian` porque las criaturas son entidades autónomas que pueden consultarse sin necesidad de cargar los datos del guardián. Esto mantiene la base escalable y evita duplicar información redundante.
