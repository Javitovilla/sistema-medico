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

# 🏥 Sistema de Gestión de Resultados Médicos

![Vista Previa](src/img/logo.png)

Plataforma web segura para visualización de resultados médicos digitales, cumpliendo con estándares HIPAA y usabilidad móvil.

## 📦 Estructura del Proyecto

```plaintext
sistema-medico/
├── src/                    # Código fuente principal
│   ├── css/                # Estilos
│   ├── js/                 # Lógica de la aplicación
│   ├── assets/             # PDFs e imágenes médicas
│   └── *.html              # Vistas
├── pruebas/                # Sistema de pruebas
│   ├── unitarias/          # Jest
│   ├── e2e/                # Cypress
│   └── usabilidad/         # Lighthouse
├── docs/                   # Documentación
└── .github/                # CI/CD (GitHub Actions)
  
## 🧪 Sistema de Pruebas

### Pruebas Unitarias
```bash
cd pruebas/unitarias && npx jest
