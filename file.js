/*************************************
* Crear una funcion que me devuelva un objeto
* Este objeto va a permitirme guardar 
* peliculas que quiera ver, haya visto, o este viendo
* O  sea, tengo un objeto con una lista de peliculas,
* cada pelicula tiene su nombre, su director, su año, 
* su genero, y un estado que puede ser (pendiente, viendo, vista).
* Lo que tengo que poder hacer es
* 1. Agregar peliculas
* 2. Cambiar el estado
* 3. Remover peliculas
* 4. Obtener una lista legible con console.log de peliculas 
* por estado. Es decir, le pido un estado y me deuvelve las peliculas
* correspondientes. (`nombre del año tanto, dirigida por quien`)
*/

const movieLibraryCreator = () => {
    let movieLibrary = {
        movieList: [],
        addToLibrary: function (name, director, releaseyr, genre, status) {
            this.movieList.push({
                name,
                director,
                releaseyr,
                genre,
                status
            });
        },
        changeStatus: function (name, status) {
            let index = this.movieList.findIndex(movie => movie.name == name);
            this.movieList[index].status = status;
        },
        removeMovie: function (name) {
            this.movieList = this.movieList.filter(movie => movie.name != name);
        },
        displayByStatus: function (status) {
            let listByStatus = this.movieList.filter(movie => movie.status == status);
            listByStatus.forEach (movie => console.log(`${movie.name} del año ${movie.releaseyr}, dirigida por ${movie.director}`));   
        },
    }
    return movieLibrary;
}

const moviesMeri = movieLibraryCreator();
moviesMeri.addToLibrary("Kika", "Pedro Almodóvar", 1985, "Comedia", "Vista");
moviesMeri.addToLibrary("Ocean's Eleven", "Steven Soderbergh", 1998, "Acción", "Pendiente");