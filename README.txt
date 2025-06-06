1. CARACTERÍSTICAS IMPLEMENTADAS:
- Login funcional (usuario: 123456, contraseña: 123456)
- Vista simulada de resultados médicos
- Botones de acción para PDFs

2. PRINCIPIOS SOLID APLICADOS:
- SRP: El formulario solo maneja login
- OCP: Estilos separados del HTML para fácil modificación

# Sistema de Gestión de Resultados Médicos

![Preview](img/logo.png)

## Funcionalidades implementadas
- ✅ Autenticación segura
- ✅ Visualización de resultados médicos
- ✅ Descarga de PDFs
- ✅ Interfaz responsive

## Estructura del proyecto
```plaintext
sistema-medico/
├── index.html            # Página de login
├── resultados.html       # Lista de resultados
├── ver-resultado.html    # Detalle de examen
├── img/                  # Assets visuales
├── assets/               # Documentos médicos
└── README.md             # Esta documentación