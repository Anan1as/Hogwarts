let iniciar = document.getElementById("iniciar");
let opcionCualidades;

let botonPaso2 = document.createElement("button");
    botonPaso2.setAttribute("id", "botonPaso2");
    botonPaso2.innerHTML = "Continuar";

let botonPaso3 = document.createElement("button");
botonPaso3.setAttribute("id", "botonPaso3");
botonPaso3.innerHTML = "Continuar";

let botonPaso4 = document.createElement("button");
botonPaso4.setAttribute("id", "botonPaso4");
botonPaso4.innerHTML = "Continuar";

let estudiante;

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
        opcionCualidades = seleccion1.value;

        while (linaje.firstChild) {
            linaje.removeChild(linaje.firstChild);
        }
    
        linaje.appendChild(opcionPredeterminada);

        if (opcionCualidades == "Ambición, determinación y astucia") {
            linaje.appendChild(sangrePura);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                paso1.appendChild(datosPersonales);
            })

        } else if (opcionCualidades == "Justicia, lealtad y paciencia") {
            linaje.appendChild(mestizo);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                paso1.appendChild(datosPersonales);
            })

        } else if (opcionCualidades == "Creatividad, erudición e inteligencia") {
            linaje.appendChild(mestizo);
            linaje.appendChild(sangrePura);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                paso1.appendChild(datosPersonales);
            })

        } else if (opcionCualidades == "Valor, fuerza y audacia") {
            linaje.appendChild(mestizo);
            linaje.appendChild(sangrePura);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

            linaje.addEventListener("change", function() {
                paso1.appendChild(datosPersonales);
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

        estudiante = {
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

        paso1.appendChild(botonPaso2)
    });

    let paso2 = document.getElementById("paso2");

    botonPaso2.addEventListener("click", function() {
    
        let clases = {
            Transformaciones: "Profesor Kevin Slughorn",
            Herbología: "Profesora Maria Umbridge",
            Pociones: "Profesora Liliana McGonagall",
            Encantamientos: "Profesora Jackie",
            Defensa_Contra_Las_Artes_Oscuras: "Profesor Robinson Snape",
            Animales_Magicos: "Profesor David Filch",
            Historia_De_Magia: "Profesor Ronald Sprout"
        }

        let parrafo5 = document.createElement("p");
        parrafo5.innerHTML = "Tus clases y profesores serán los siguientes: "

        let aviso = document.createElement("h6");
        aviso.innerHTML = "Personalmente prefiero a Snape en pociones, pero no lo cambio porque después se confunden :p";

        let clasesLista = document.createElement("ul");

        for (let [key, value] of Object.entries(clases)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            clasesLista.appendChild(li);
        };

        paso2.appendChild(parrafo5);
        paso2.appendChild(aviso);
        paso2.appendChild(clasesLista);

        paso2.appendChild(botonPaso3)
    });

    let paso3 = document.getElementById("paso3");

    botonPaso3.addEventListener ("click", function() {

        let parrafo6 = document.createElement("p");
        parrafo6.innerHTML = "A la noche siguiente, encuentras que es la hora de la gran cena, en donde además podrás ver cual es tu casa. El sombrero seleccionador es posado en tu cabeza..."
        
        let parrafo7 = document.createElement("p");
        parrafo7.innerHTML = "Viendo tus cualidades, y linaje, has sido selecionado para la casa:"

        let casa = document.createElement("h3");
        if (opcionCualidades == "Ambición, determinación y astucia") {
            casa.setAttribute("id", "slytherin");
            casa.innerHTML="Slytherin";

        } else if (opcionCualidades == "Justicia, lealtad y paciencia") {
            casa.setAttribute("id", "hufflepuff");
            casa.innerHTML="Hufflepuff";

        } else if (opcionCualidades == "Creatividad, erudición e inteligencia") {
            casa.setAttribute("id", "ravenclaw");
            casa.innerHTML="RavenClaw";

        } else if (opcionCualidades == "Valor, fuerza y audacia") {
            casa.setAttribute("id", "gryffindor");
            casa.innerHTML="Gryffindor";

        };

        paso3.appendChild(parrafo6);
        paso3.appendChild(parrafo7);
        paso3.appendChild(casa);
    });

    let paso4 = document.getElementById("paso4");

    botonPaso4.addEventListener("click", function () {
        let parrafo8 = document.createElement("p");
        parrafo8.innerHTML = "Ahora vas a tu primera clase, la cual es Transformaciones, vas a tener que enfrentarte a un Boggart y para esto, necesitas el hechizo de <Ridikulus>, primero, va a tomar una forma que represente tu mayor miedo."

        let solicitud = document.createElement("h3");
        solicitud.innerHTML = "¿Que forma tomará el Boggart?"

        
    })

});