Reporte de Finalización de Pruebas: QA Manual & Automation 
-------
![Cypress](https://img.shields.io/badge/-cypress-%23454444?style=flat&logo=cypress&logoColor=white)

Objetivo: Validar el funcionamiento esencial de la plataforma Automation Exercise, asegurando la estabilidad de los flujos críticos de negocio.

📋Alcance y Metodología: 
-

  • Historias de Usuario: Se validó el Módulo de Productos, evaluando las funciones de búsqueda y filtrado, así como la funcionalidad crítica de Añadir al Carrito.
  
  • Diseño de Pruebas: Se diseñó una Suite de Pruebas cubriendo escenarios de tipo "Happy Path" (búsqueda por categoría y marca). Asimismo, se evaluó la respuesta de la UI y la persistencia de datos ante eventos de navegación.
  
  • Automatización: Se implementaron scripts automatizados bajo el patrón Page Object Model (POM) para garantizar la mantenibilidad del código.
      
🔧Herramientas Utilizadas:
-
  • Gestión y Documentación: LibreOffice Calc (Suite de Pruebas y Reporte de Bugs).
  
  • Automatización: Cypress (JavaScript).
  
  • Ejecución y Entorno: Pruebas multiplataforma en Brave, Firefox y Google Chrome sobre Windows 11.
  
  • Evidencias: Capturas de pantalla y grabaciones en video para el reporte de defectos.

⚠️ Requisitos
---
Es importante que antes de comenzar el proyecto tengas lo siguiente:

 • Node.js(Versión LTS)

 • npm o yarn

 • git

🛠️ Clonar Repositorio
---
Ejecuta el siguiente comando en tu terminal: git clone https://github.com/LemonDestiny/Prueba_Manual_Automation

Luego cambiamos al directorio del proyecto con: cd 03_pruebasAutomation

Instalamos las dependencias correspondientes con npm install

⚙️Ejecutamos Cypress
---
Podemos ejecutar cypress de dos maneras

Modo Interactivo: Para visualizar la ejecución paso a paso en el navegador.

npx cypress open

Modo Headless(Sin interfaz):Ejecución en segundo plano con generación automática de evidencias (Videos y Reportes)

npx cypress run

📊 Reportes y Evidencias
---
Al finalizar la ejecución en modo headless, podrás encontrar:

Videos: En cypress/videos.

Reporte HTML: En cypress/reports
