#APP Colegio

    -¿Cuantos componentes necesito?
      - 3 Componentes:
        - 1 Componente Form.form
        - 1 componente Lista de alumnos. listaAlumnos
        - 1 Componente Alumno.alumnoCard

    -¿Cuantos Interfaces necesito?
      - 1 interface: alumno  - id: number
                             - nombre: string
                             - edad: number
                             - curso: string
                             - email: string

Al no tener base de datos crear un fichero externo: alumnos.db.ts, en una carpeta db donde tendremos algunos alumnos.

Voy a crear un Servicio que gestione los datos, es decir, tenga acceso a ellos y diga lo que puede hacer con ellos. CRUD.

- un servicio se crea en plural para diferenciar de los interfaces que son singular.

`ng generate service services/alumnos --skip-tests `
`ng g s services/alumnos --skip-tests `

TRABAJO PARA CASA: pintar con bootstrap y la maquetación que quieras todos los alumnos. Ojo!! sabiendo que existe un componente alumno que tenemos que cargar.

- dentro de listaAlumnos hagamos un selector de curso, clicas y deben salir todos los cursos, si pincho en 1ºESO me tienen que salir todos los alumnos de 1ºESO.
  -Para ello teneis que crear un metodo en el servicio que filtre los alumnos por curso: getByCourse(course)
