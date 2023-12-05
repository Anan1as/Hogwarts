let iniciar = document.getElementById("iniciar");

iniciar.addEventListener("click", function() {
    //Inicio de linaje y casa
    let paso1 = document.getElementById("paso1");

    let parrafo1 = document.createElement("p");
    parrafo1.innerHTML = "¡Primero!, veamos como te describes a ti mismo y tu linaje.";
    paso1.appendChild(parrafo1);

    let seleccion1 = document.createElement("select");
    let opcionPredeterminada = document.createElement("option");
    opcionPredeterminada.setAttribute("value", "opcionPredeterminada");
    let opcionSlytheryn = document.createElement("option");
    opcionSlytheryn.setAttribute("value", "Ambición, determinación y astucia");
    let opcionHufflepuff = document.createElement("option");
    opcionHufflepuff.setAttribute("value", "Justicia, lealtad y paciencia");
    let opcionRaivenclow = document.createElement("option");
    opcionRaivenclow.setAttribute("value", "Creatividad, erudición e inteligencia");
    let opcionGryffindor = document.createElement("option");
    opcionGryffindor.setAttribute("value", "Valor, fuerza y audacia");

    opcionPredeterminada.innerHTML = "Selecciona una de las siguientes opciones"
    opcionSlytheryn.innerHTML = "Ambición, determinación y astucia";
    opcionGryffindor.innerHTML = "Valor, fuerza y audacia";
    opcionHufflepuff.innerHTML = "Justicia, lealtad y paciencia";
    opcionRaivenclow.innerHTML = "Creatividad, erudición e inteligencia";

    seleccion1.appendChild(opcionPredeterminada);
    seleccion1.appendChild(opcionGryffindor);
    seleccion1.appendChild(opcionRaivenclow);
    seleccion1.appendChild(opcionSlytheryn);
    seleccion1.appendChild(opcionHufflepuff);

    paso1.appendChild(seleccion1);

    let linaje = document.createElement("select");
    let mestizo = document.createElement("option");
    mestizo.setAttribute("value", "Mestizo");
    let sangrePura = document.createElement("option");
    sangrePura.setAttribute("value", "Sangre_Pura");
    let muggle = document.createElement("option");
    muggle.setAttribute("value", "Muggle");

    mestizo.innerHTML = "Mestizo";
    sangrePura.innerHTML = "Sangre pura";
    muggle.innerHTML = "Muggle";

    
    seleccion1.addEventListener("change", function() {
        let opcionCualidades = seleccion1.value;

        while (linaje.firstChild) {
            linaje.removeChild(linaje.firstChild);
        }
    
        linaje.appendChild(opcionPredeterminada);

        if (opcionCualidades == "Ambición, determinación y astucia") {
            linaje.appendChild(sangrePura);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                datosPersonales.style.display = "block";
            })

        } else if (opcionCualidades == "Justicia, lealtad y paciencia") {
            linaje.appendChild(mestizo);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                datosPersonales.style.display = "block";
            })

        } else if (opcionCualidades == "Creatividad, erudición e inteligencia") {
            linaje.appendChild(mestizo);
            linaje.appendChild(sangrePura);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                datosPersonales.style.display = "block";
            })

        } else if (opcionCualidades == "Valor, fuerza y audacia") {
            linaje.appendChild(mestizo);
            linaje.appendChild(sangrePura);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

        linaje.addEventListener("change", function() {
                datosPersonales.style.display = "block";
            })
            
        } else {
            console.log("Selecciona tus cualidades, por favor.");
        };
    });

    //Fin de linaje y casa

    //Inicio de información personal de estudiante.
    let datosPersonales = document.createElement("button");
    datosPersonales.innerHTML = "Continuar";
    datosPersonales.setAttribute("id", "datosPersonales");
    paso1.appendChild(datosPersonales);
    datosPersonales.style.display = "none";

    let nombre = document.createElement("input");
    nombre.setAttribute("placeholder", "Ingrese su nombre aquí");
    let edad = document.createElement("input");
    edad.setAttribute("placeholder", "Ingrese su edad aquí");
    edad.setAttribute("type", "number");
    let animalPatronus = document.createElement("input");
    animalPatronus.setAttribute("placeholder", "Ingrese su patronus");
    let br = document.createElement("br");
    let infoValidar = document.createElement("button");
    infoValidar.innerHTML = "Registrar";
    infoValidar.setAttribute("id", "infoValidar");

    datosPersonales.addEventListener("click", function() {
        let parrafo2 = document.createElement("p");

        parrafo2.innerHTML = "Muy bien, ahora, vamos a llenar el resto de tus datos."

        paso1.appendChild(parrafo2);

        paso1.appendChild(nombre);
        paso1.appendChild(edad);
        paso1.appendChild(animalPatronus);
        paso1.appendChild(br);
        paso1.appendChild(infoValidar);
    });

    let divEstudiante = document.createElement("div");
    divEstudiante.setAttribute("id", "divEstudiante");
    
    infoValidar.addEventListener("click", function () {
        

        while (divEstudiante.firstChild) {
            divEstudiante.removeChild(divEstudiante.firstChild);
        }

        let estudiante = {
            Nombre: nombre.value,
            Edad: edad.value,
            Patronus_Animal: animalPatronus.value,
            Cualidades: seleccion1.value,
            Linaje: linaje.value
        };

        let parrafo3 = document.createElement("p");
        parrafo3.innerHTML = "Muy bien, a continuación los datos ingresados.";
        let parrafo4 = document.createElement("p");
        parrafo4.innerHTML = "¿Es esto correcto?, si no lo es, por favor corrigelos antes de continuar.";
        

        let ul = document.createElement("ul");
        
        for (let [key, value] of Object.entries(estudiante)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            ul.appendChild(li);
        };

        divEstudiante.appendChild(parrafo3);
        divEstudiante.appendChild(ul);
        divEstudiante.appendChild(parrafo4);

        paso1.appendChild(divEstudiante);
    });
});