# 🧭 Misión MongoDB - Gestión de Criaturas Fantásticas

**Autor:** Joseph Andrés Franco Villagomez  
**Materia:** Modelado Avanzado de Bases de Datos  
**Fecha:** Octubre 2025  

---

## 1️ Introducción

En esta misión se exploró el mundo de las bases de datos **NoSQL**, específicamente **MongoDB**, aplicando conceptos de modelado, inserción y manipulación de datos semi-estructurados.  
El objetivo fue desarrollar un **Bestiario Digital**, registrando criaturas fantásticas con características únicas, demostrando cómo un modelo flexible como MongoDB permite gestionar información heterogénea de manera eficiente.

---

## 2️ Escenario: El Bestiario Digital

Cada criatura fantástica tiene atributos particulares: algunas vuelan, otras tienen múltiples cabezas, algunas lanzan hechizos y otras poseen habilidades únicas de ataque o defensa.  
MongoDB es ideal para este escenario por las siguientes razones:

- **Flexibilidad de esquema:** cada documento puede tener diferentes campos sin afectar a los demás.  
- **Escalabilidad y rendimiento:** permite insertar y consultar grandes cantidades de criaturas de manera rápida.  
- **Manejo de arrays y objetos anidados:** ideal para registrar habilidades, estadísticas o dietas de cada criatura.

---

## 3️ Archivos del Proyecto

- `misiones_mongodb.js` → Script con todas las operaciones **CRUD**: inserciones, consultas y actualizaciones de criaturas.  
- `ANALISIS_NOSQL.md` → Reflexión y análisis sobre la elección de MongoDB frente a modelos relacionales, tipos de NoSQL y casos de uso reales.  
- `README.md` → Instrucciones detalladas para ejecutar y entender el proyecto.  
- `.gitignore` → Archivos ignorados por Git para mantener el repositorio limpio.

---

## 4️ Instalación y Preparación del Entorno

### Opción A: Local
1. Instala **MongoDB Community Server** en tu máquina.  
2. Instala una interfaz gráfica, **MongoDB Compass**, o asegúrate de usar la extensión de MongoDB en VS Code.  

### Opción B: Nube
1. Crea una cuenta gratuita en **MongoDB Atlas**.  
2. Despliega un cluster y obtén el link de conexión.  
3. Conéctate desde Compass o VS Code usando tus credenciales.

---

## 5️ Ejecución del Script

1. Abre **MongoDB Shell (mongosh)** o **MongoDB Compass**.  
2. Conéctate a la base de datos (local o Atlas).  
3. Crea la base de datos y colección ejecutando el script:

```javascript
load("misiones_mongodb.js")
