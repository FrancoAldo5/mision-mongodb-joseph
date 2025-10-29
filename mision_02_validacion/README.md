#  Misión 2: El Guardián del Esquema y los Vínculos Arcanos

## Descripción
Esta misión consiste en aplicar validaciones de datos en MongoDB mediante **JSON Schema**, garantizando la integridad de las colecciones `guardianes` y `criaturas`.  
Además, se modelan correctamente las relaciones **1-a-1 embebida** y **1-a-N referenciada**.

---

## Explicación de los Archivos

### 01_definicion_guardianes.mongodb
En este archivo eliminé la colección `guardianes` (si existía) y la volví a crear con el comando `db.createCollection()`, aplicando un **JSON Schema** para definir las reglas de validación.

---

### 02_definicion_criaturas.mongodb
Aquí definí la colección `criaturas` también usando **JSON Schema**, incluyendo una relación con los `guardianes`.

---

### 03_pruebas_insercion.mongodb
En este archivo realicé pruebas para verificar el correcto funcionamiento de las validaciones.

## Estructura de Archivos
```plaintext
mision_02_validacion/
│
├── 01_definicion_guardianes.mongodb
├── 02_definicion_criaturas.mongodb
├── 03_pruebas_insercion.mongodb
└── ANALISIS_VALIDACION.md



