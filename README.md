# Simulacro Virtual - Lectura Crítica

Simulacro virtual interactivo de Lectura Crítica basado en un examen tipo Saber 11 (ICFES). Contiene **59 preguntas** distribuidas en **14 pasajes** con textos literarios, argumentativos, científicos e infografías.

## Características

- **59 preguntas** de selección múltiple con única respuesta (A, B, C, D)
- **14 pasajes** de lectura con textos e infografías originales
- **Temporizador** de 90 minutos con alertas visuales
- **Navegación** entre pasajes con indicadores de progreso
- **Retroalimentación completa** al finalizar: puntaje, correctas/incorrectas, explicación por pregunta
- **Filtros** para revisar solo aciertos o errores
- Guarda automáticamente el nombre del estudiante en el navegador
- Diseño responsivo (escritorio y móvil)

## Cómo usar

1. Clona o descarga este repositorio
2. Abre `index.html` en cualquier navegador moderno
3. Ingresa tu nombre y haz clic en **Comenzar Simulacro**
4. Lee cada pasaje y responde sus preguntas
5. Al finalizar, revisa tus resultados y las explicaciones

También puedes desplegarlo en GitHub Pages activando la opción en Settings > Pages.

## Estructura

```
├── index.html              # Aplicación principal
├── css/
│   └── estilo.css          # Estilos responsivos
├── js/
│   └── datos.js            # Preguntas, opciones, respuestas y explicaciones
├── imagenes/
│   └── infografias/        # Infografías extraídas del documento original
│       ├── petricor.png
│       ├── filosofia.png
│       ├── efectos_secundarios.png
│       └── cultivo.png
└── README.md
```

## Tecnologías

- HTML5, CSS3 y JavaScript vanilla (sin frameworks ni dependencias)
- No requiere servidor, funciona directamente desde el sistema de archivos

## Pasajes incluidos

| # | Título | Autor | Preguntas |
|---|--------|-------|-----------|
| 1 | Parábola de la solitaria | Mario Vargas Llosa | 23–25 |
| 2 | Petrichor: El olor de la lluvia | Pictoline | 26–29 |
| 3 | La verdad en la infancia | Hernando Téllez | 30–31 |
| 4 | Cómo educar en el feminismo | Chimamanda Ngozi Adichie | 32–34 |
| 5 | ¿Qué es la filosofía? | Infografía | 35–36 |
| 6 | Efectos secundarios | Pictoline | 37–38 |
| 7 | ¿Dónde cultivar? | Infografía | 39–40 |
| 8 | Los sofistas para Platón | E. Dal Maschio | 41–42 |
| 9 | Ética para Amador | Fernando Savater | 43–45 |
| 10 | La música y el cerebro humano | Divulgación científica | 46–49 |
| 11 | Exobiología | Casa Editorial El Tiempo | 50–51 |
| 12 | ¿Es menos probable que un religioso se vuelva asesino? | Nature Human Behaviour | 52–53 |
| 13 | La lectora | Sergio Álvarez | 54–58 |
| 14 | Competencias Ciudadanas | Varios | 59–81 |

## Licencia

Este proyecto es de uso educativo. Los textos e infografías pertenecen a sus respectivos autores y fueron extraídos de un documento PDF de práctica para examen Saber 11.
