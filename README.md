# Coderhouse utilidades comisión 51220

## Ejemplo de publicación de módulo en npmjs.com

### Es muy sencillo contribuir con un módulo en el ecosistema de NPM, estos son los pasos:

1. Crear una cuenta en https://www.npmjs.com/.

2. Generar el paquete que se desea publicar.

3. Enlazarlo con el correspondiente repo de Github.

4. Abrir el proyecto y loguearse en npm desde consola: npm login.

5. Publicar mediante: npm publish --access public

### Consideraciones en package.json:

1. name: puede ser cualquiera mientras no exista ya otro proyecto en npmjs bajo ese nombre. Si se desea evitar conflictos, se puede utilizar un identificador como @coderhouse/utils en lugar de un nombre plano (coderhouse-utils).

2. version: siempre actualizar antes de una nueva publicación, sino fallará el publish.

3. homepage y repository: si bien no es imprescindible enlazar con un repo para poder publicar el paquete, es obviamente muy importante si se trata de un código opensource. Colocar aquí los datos para que npmjs pueda mostrarlos.

4. Completar a discreción otros elementos como author, keywords y licence. Ante cualquier duda, optar por una licencia muy permisiva como MIT.
