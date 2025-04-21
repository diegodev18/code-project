---
title: Como puedo contribuir en Code Project?
description: Aprende cómo contribuir a Code Project y cómo hacerlo de manera efectiva.
date: 2024-04-19
author: Diego Sanchez
tags:
  - contributions
  - open-source
---

Muchos me han preguntado cómo pueden contribuir a Code Project. En esta guía, explico las distintas formas de colaborar, junto con algunos consejos para hacerlo de manera efectiva.

## ¿Cómo contribuir a Code Project?

Antes de comenzar, es importante entender cómo se distribuye el código y el contenido dentro del ecosistema de Code Project.

### Distribución del código

El código se gestiona en repositorios de GitHub:

- El **código fuente de los proyectos** es **código abierto** y puedes encontrarlo en este [repositorio](https://github.com/diegodev18/code-project-docs).
- El **código fuente de la plataforma** NO es público por ahora.

---

## Contribuir al contenido de Code Project

Hay varias formas en las que puedes aportar al contenido:

- Creando nuevos proyectos y compartiendo contenido relevante.
- Mejorando la documentación de proyectos ya existentes.
- Corrigiendo errores ortográficos o gramaticales.
- Probando los proyectos, reportando bugs y proponiendo mejoras.

### Pasos para contribuir

Si deseas mejorar la documentación o archivos existentes, sigue estos pasos:

1. Realiza un **fork** del [repositorio](https://github.com/diegodev18/code-project-docs) en tu cuenta de GitHub.
2. Clona tu fork en tu máquina local.
3. Crea una nueva rama para tus cambios.
4. Realiza las modificaciones necesarias.
5. Envía un **pull request** con tus contribuciones, y una descripción detallada de los cambios realizados.

---

## Estructura de los proyectos

### Estructura de directorios y archivos

A continuación se muestra un ejemplo de cómo se organiza el contenido en el repositorio:

```bash
└── code-project-docs
    ├── analizador-automatas
    │   └── c
    │       ├── 001-index.md
    │       ├── 002-constructores.md
    │       └── ...
    ├── your-own-git
    │   └── c
    │       ├── 001-index.md
    │       ├── 002-setup.md
    │       └── ...
    └── your-own-text-editor
        └── javascript
            ├── 001-index.md
            ├── 002-actions.md
            └── ...
```

**Convenciones:**

- Cada proyecto tiene su propio directorio.
- Dentro del proyecto, se utiliza un subdirectorio para el lenguaje de programación.
- Los archivos `.md` representan las tareas o capítulos, y siguen una numeración para facilitar el orden de lectura.

> Los archivos `001-index.md` son páginas de índice que proporcionan una introducción y una lista de los capítulos disponibles, es obligatorio que cada proyecto contenga el archivo `001-index.md`.

### Estructura de los archivos Markdown

Cada archivo Markdown debe tener el siguiente formato:

```markdown
---
id: 'setup'
title: 'Configuración'
description: 'Inicializa tu proyecto y prepara tu entorno de desarrollo.'
---

En este capítulo, configurarás tu entorno de desarrollo y prepararás tu proyecto para construir tu propio sistema de control de versiones.
```

**Importante:** Esta estructura es obligatoria para que la plataforma pueda procesar correctamente los contenidos.

---

## Contribuir al código fuente de la plataforma

Actualmente, el código fuente de la **plataforma** no es de acceso público. Esto se hace para proteger la integridad del sistema y los datos de los usuarios.

Si deseas contribuir al desarrollo de la plataforma, puedes contactarnos directamente.

### ¿Cómo contactar?

Envía un correo electrónico a <diegodev18.contact@gmail.com> con el siguiente formato:

```
Asunto: Contribución a Code Project

Nombre: [Tu nombre]
Correo electrónico: [Tu correo]
GitHub: [Tu usuario de GitHub]

[Explica brevemente por qué deseas contribuir, tu experiencia previa, y en qué podrías aportar.]
```

---

> **Nota:** Todas las contribuciones deben seguir las reglas y lineamientos de Code Project. Las propuestas que no cumplan con los requisitos establecidos no serán aceptadas.
