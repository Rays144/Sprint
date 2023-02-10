import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Actividad integradora. Sprint, el corazón de SCRUM</h1>

        <h2>Tabla backlog</h2>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">dentificador (ID) de la Historia</th>
                <th scope="col">Enunciado de la Historia</th>
                <th scope="col">Alias</th>
                <th scope="col">Estado</th>
                <th scope="col">Dimensión/Esfuerzo</th>
                <th scope="col">Interacción (Sprint)</th>
                <th scope="col">Prioridad</th>
                <th scope="col">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">120241</th>
                <td>Diseñador UI/UX (Se encargará del diseño de toda la interfaz).</td>
                <td>UI/UX</td>
                <td>No iniciada</td>
                <td>1 a 2 meses</td>
                <td>Diseñar la interfaz</td>
                <td>Alta</td>
                <td>N/A</td>
              </tr>
              <tr>
              <th scope="row">120242</th>
                <td>Web Designer (Esta persona se encargará de llevar el diseño a código).</td>
                <td>W/D</td>
                <td>No iniciada</td>
                <td>1 a 2 meses</td>
                <td>Diseño del Código</td>
                <td>Alta</td>
                <td>N/A</td>
              </tr>
              <tr>
              <th scope="row">120243</th>
                <td>Frontend Developer (Se encargaráde desarrollar toda la lógica del lado del cliente)</td>
                <td>F/D</td>
                <td>No iniciada</td>
                <td>1 a 2 meses</td>
                <td>Desarrollar la lógica</td>
                <td>Alta</td>
                <td>N/A</td>
              </tr>
              <tr>
              <th scope="row">120244</th>
                <td>Backend Developer (se encargaráde toda la lógica del lado del servidor, también se encargará de comunicarse con las bases de datos, para recuperar la información que luego se le enviará al Frontend.)</td>
                <td>B/D</td>
                <td>No iniciada</td>
                <td>1 a 3 meses</td>
                <td>Desarrollar la lógica del servidor</td>
                <td>Alta</td>
                <td>N/A</td>
              </tr>
              <tr>
              <th scope="row">120245</th>
                <td>DBA (Database Administrator) (Se encargará de diseñar las bases datos)</td>
                <td>D/A</td>
                <td>No iniciada</td>
                <td>1 a 2 meses</td>
                <td>Diseñar la base de datos</td>
                <td>Alta</td>
                <td>N/A</td>
              </tr>
              <tr>
              <th scope="row">120246</th>
                <td>Arquitecto Cloud (Este se encargará en analizar el proyecto para definir los requerimientos de hardware e infraestructura que se van a necesitar para que este pueda funcionar en producción)</td>
                <td>A/C</td>
                <td>No iniciada</td>
                <td>1 mes</td>
                <td>Definir requerimientos de hardware e infraestructura</td>
                <td>Media</td>
                <td>N/A</td>
              </tr>
              <tr>
              <th scope="row">120247</th>
                <td>QA (Quality Assurance)(Se encargará de hacer las pruebas necesarias durante el desarrollo del proyecto para asegurarse del control de calidad).</td>
                <td>Q/A</td>
                <td>No iniciada</td>
                <td>1 mes</td>
                <td>Hacer las pruebas durante el desarrollo del proyect</td>
                <td>Media</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>

          <h2>Tabla Formato Sprint</h2>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Elemento de trabajo pendiente</th>
                <th scope="col">Puntos de historia</th>
                <th scope="col">Responsable</th>
                <th scope="col">Estado</th>
                <th scope="col">Estimado original</th>
                <th scope="col">Día 1</th>
                <th scope="col">Día 2</th>
                <th scope="col">Día 3</th>
                <th scope="col">Día 4</th>
                <th scope="col">Día 5</th>
                <th scope="col">Revisión del Sprint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ID de la historia #1 (120249)</th>
                <td>4</td>
                <td>Alan Quezada, Cliente</td>
                <td>No iniciado</td>
                <td>Febrero 2023</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <td scope="row">Tarea 1 Realizar el diseño tanto en la disposición del texto como las imágenes</td>
                <td>2</td>
                <td>Alan Quezada</td>
                <td>No iniciado</td>
                <td>Febrero 2023</td>
                <td>1</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>0.5</td>
                <td>Revisar el diseño de toda la página web.</td>
              </tr>
              <tr>
              <td scope="row">tarea 2 Planifica el contenido que llevara la página web.</td>
                <td>2</td>
                <td>Alan Quezada, Cliente</td>
                <td>No iniciado</td>
                <td>Febrero 2023</td>
                <td>3</td>
                <td>1</td>
                <td>0.5</td>
                <td>0</td>
                <td>0</td>
                <td>Revisar si todo el contenido estará incluido.</td>
              </tr>
              <tr>
              <th scope="row">ID de la historia #2(1202410)</th>
                <td>4</td>
                <td>Alan Quezada, Cliente</td>
                <td>No iniciado</td>
                <td>Febrero/marzo 2023</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <td scope="row">Tarea 3 Crear los contenidos internos y todo lo necesario</td>
                <td>2</td>
                <td>Alan Quezada</td>
                <td>No iniciado</td>
                <td>Febrero/marzo 2023</td>
                <td>1</td>
                <td>0.5</td>
                <td>2</td>
                <td>1</td>
                <td>0</td>
                <td>Revisar los contenidos internos que se incluyeron en la página concuerdan con lo acordado.</td>
              </tr>
              <tr>
              <td scope="row">Tarea 4 Subir los contenidos necesarios</td>
                <td>2</td>
                <td>Alan Quezada</td>
                <td>No iniciado</td>
                <td>Febrero/marzo 2023</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>0.5</td>
                <td>1</td>
                <td>Revisar los contenidos internos que se incluyeron en la página concuerdan con lo acordado.</td>
              </tr>
              <tr>
              <th scope="row">ID de la historia #3(1202411)</th>
                <td>2</td>
                <td>Alan Quezada, Cliente</td>
                <td>No iniciado</td>
                <td>Marzo 2023</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <td scope="row">Tarea 5 Contactar a el cliente para corroborar los contenidos de la pagina</td>
                <td>2</td>
                <td>Alan Quezada</td>
                <td>No iniciado</td>
                <td>Marzo 2023</td>
                <td>2</td>
                <td>3</td>
                <td>0.5</td>
                <td>1</td>
                <td>0</td>
                <td>Contactar al cliente</td>
              </tr>
              <tr>
              <th scope="row">ID de la historia #4(1202412)</th>
                <td>2</td>
                <td>Alan Quezada, Cliente</td>
                <td>No iniciado</td>
                <td>Abril/junio 2023</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <td scope="row">Tarea 6 Verificar errores/bugs de la pagina</td>
                <td>1</td>
                <td>Alan Quezada</td>
                <td>No iniciado</td>
                <td>Abril/junio 2023</td>
                <td>0.5</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>2</td>
                <td>Revisar si la pagina está libre de errores/bugs.</td>
              </tr>
              <tr>
              <td scope="row">Tarea 7 Comprobar el hardware necesario para la página.</td>
                <td>1</td>
                <td>Alan Quezada</td>
                <td>No iniciado</td>
                <td>Abril/junio 2023</td>
                <td>3</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>Revisar el hardware recomendado.</td>
              </tr>
              <tr>
              <th scope="row">Total</th>
                <td>12</td>
                <td>-</td>
                <td>-</td>
                <td>junio 2023</td>
                <td>12.5</td>
                <td>7</td>
                <td>4</td>
                <td>3.5</td>
                <td>4.5</td>
                <td>Revisar el proyecto completado.</td>
              </tr>
            </tbody>
          </table>
      </header>
    </div>
  );
}

export default App;
