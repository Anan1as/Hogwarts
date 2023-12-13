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

let botonPaso5 = document.createElement("button");
botonPaso5.setAttribute("id", "botonPaso5");
botonPaso5.innerHTML = "Continuar";

let estudiante;

let clases;



iniciar.addEventListener("click", function() {
    //Inicio de linaje y casa
    let paso1 = document.getElementById("paso1");

    let parrafo1 = document.createElement("p");
    parrafo1.innerHTML = "¡Primero!, veamos como te describes a ti mismo y tu linaje.";
    paso1.appendChild(parrafo1);



    //Creacion del select y opciones
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



    //Selección de linaje
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



    //Función para la selección
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
    });//Fin de la selección

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



    //Boton para generar el objeto de estudiante.
    infoValidar.addEventListener("click", function () {
        

        while (divEstudiante.firstChild) {
            divEstudiante.removeChild(divEstudiante.firstChild);
        }

        estudiante = {
            Nombre: nombre.value,
            Edad: edad.value,
            Patronus_Animal: animalPatronus.value,
            Sabe_Usarlo: false,
            Cualidades: seleccion1.value,
            Linaje: linaje.value
        };

        let parrafo3 = document.createElement("p");
        parrafo3.innerHTML = "Muy bien, a continuación los datos ingresados.";
        let parrafo4 = document.createElement("p");
        parrafo4.innerHTML = "¿Es esto correcto?, si no lo es, por favor corrigelos antes de continuar.";
        

        let ul = document.createElement("ul");
        ul.setAttribute("class", "lista")
        
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
    //Fin del boton para generar el objeto de estudiante.



    //Inicio del paso 2
    let paso2 = document.getElementById("paso2");



    //Boton para hacer el objeto de clases
    botonPaso2.addEventListener("click", function() {
    
        clases = {
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
        clasesLista.setAttribute("class", "lista");

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
    //Fin del boton para hacer el objeto de clases

    //Fin del paso 2



    //Inicio del paso 3
    let paso3 = document.getElementById("paso3");


    //Funcion para seleccionar la casa
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
        paso3.appendChild(botonPaso4);
    });

    //Fin de la función para seleccionar la casa

    //Fin del paso 3



    //Inicio del paso 4
    let paso4 = document.getElementById("paso4");

    //Inicio de la actividad del Boggart y clase de transformaciones
    let claseTransformaciones;

    let boggartExiste = false;

    let boggartTransformacion = document.createElement("input");
    boggartTransformacion.setAttribute("placeholder", "Ingrese su mayor miedo");

    let boggartHechizado = document.createElement("input");
    boggartHechizado.setAttribute("placeholder", "Ingresa en lo que va a ser transformado");

    let botonMiedo = document.createElement("button");
    botonMiedo.setAttribute("id", "botonMiedo");
    botonMiedo.innerHTML = "Continuar";

    let botonHechizo = document.createElement("button");
    botonHechizo.setAttribute("id", "botonHechizo");
    botonHechizo.innerHTML = "Continuar";


    //Inicio de la función para la clase de transformación
    botonPaso4.addEventListener("click", function () {
        let parrafo8 = document.createElement("p");
        parrafo8.innerHTML = "Ahora vas a tu primera clase.";

        claseTransformaciones = {
            Nombre: Object.keys(clases)[0],
            Profesor: clases.Transformaciones,
            Hora: "08:00am"
        }

        let claseTLISTA = document.createElement("ul");
        claseTLISTA.setAttribute("class", "lista")

        for (let [key, value] of Object.entries(claseTransformaciones)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            claseTLISTA.appendChild(li);
        };

        let parrafo9 = document.createElement("p");
        parrafo9.innerHTML = "En tu primera clase, vas a tener que enfrentarte a un Boggart y transformarlo, necesitas usar el hechizo de Ridikulus, primero, va a tomar una forma que represente tu mayor miedo."
        
        let solicitud = document.createElement("h4");
        solicitud.innerHTML = "¿Que forma tomará el Boggart?";

        let solicitud2 = document.createElement("h4");
        solicitud2.innerHTML = "¿En que vas a transformarlo?";

        paso4.appendChild(parrafo8);
        paso4.appendChild(claseTLISTA);
        paso4.appendChild(parrafo9);
        paso4.appendChild(solicitud);
        paso4.appendChild(boggartTransformacion);
        paso4.appendChild(solicitud2);
        paso4.appendChild(boggartHechizado);
        paso4.appendChild(botonMiedo);
    });
    //Fin de la función para la clase de transformación



    //Inicio de la función para atacar al Boggart
    botonMiedo.addEventListener ("click", function () {
        boggart = {
            Miedo: boggartTransformacion.value,
            Transformacion: boggartHechizado.value
        }

        boggartExiste = true;

        let parrafo11 = document.createElement("p");
        parrafo11.innerHTML = "Ahora, veamos si el Boggart aparece.";

        paso4.appendChild(parrafo11);
        paso4.appendChild(botonHechizo);
    });

    let ridikulus = document.createElement("button");
    ridikulus.setAttribute("id", "ridikulus");
    ridikulus.innerHTML = "¡Ridikulus!";

    botonHechizo.addEventListener("click", function(){
        if (boggartExiste == true) {
            let parrafo10 = document.createElement("p");
            parrafo10.innerHTML = "¡El Boggart ha aparecido!, tienes que usar el hechizo."

            paso4.appendChild(parrafo10);
            paso4.appendChild(ridikulus);
        } else {
            let parrafo10 = document.createElement("p");
            parrafo10.innerHTML = "El Boggart se ha sentido intimidado, estás a salvo."

            paso4.appendChild(parrafo10);
        };
    });

    ridikulus.addEventListener("click", function(){
        let hechizado = document.createElement("h4");
        hechizado.innerHTML = "¡Has lanzado el hechizo!, el Boggart se ha convertido en un "+ boggartHechizado.value + ".";

        paso4.appendChild(hechizado);
        paso4.appendChild(botonPaso5);
    })
    //Fin de la función para atacar al Boggart

    //Fin de la actividad del Boggart y clase de transformaciones

    //Fin del paso 4



    //Inicio de el paso 5
    let paso5 = document.getElementById("paso5");

    let botonDefensaOscura = document.createElement("button");
    botonDefensaOscura.setAttribute("id", "botonDefensaOscura");
    botonDefensaOscura.innerHTML = "Defensa contra las Artes Oscuras";

    let botonPociones = document.createElement("button");
    botonPociones.setAttribute("id", "botonPociones");
    botonPociones.innerHTML = "Pociones";
    
    let botonResultados = document.createElement("button");
    botonResultados.setAttribute("id", "botonResultados");
    botonResultados.innerHTML = "Resultados Finales";

    //Funcion para dar a elegir las clases
    botonPaso5.addEventListener("click", function() {
        let parrafo12 = document.createElement("p");
        parrafo12.innerHTML = "Como estudiante de Hogwarts, tienes muchas clases, dejemos a tu disposición cual es el orden por las que iras, sin embargo, ten cuidado, los dementores pasean por lo pasillos y la unica clase que te enseñará como defenderte es defensa contra las artes oscuras.";
    
        let aviso2 = document.createElement("h6");
        aviso2.innerHTML = "El resto de las clases serán hechas después de entregar esto jaja";

        let parrafoNumeroChistoso = document.createElement("p");
        parrafoNumeroChistoso.innerHTML = "¿A que clase irás ahora?";

        paso5.appendChild(parrafo12);
        paso5.appendChild(aviso2);
        paso5.appendChild(parrafoNumeroChistoso);
        paso5.appendChild(botonDefensaOscura);
        paso5.appendChild(botonPociones);
        paso5.appendChild(botonResultados);
    })
    //Fin de la función para dar a elegir las clases

    let defensaOscura;
    let pociones;

    let clase;

    let botonDefiende = document.createElement("button");
    botonDefiende.setAttribute("id", "botonDefiende");
    botonDefiende.innerHTML = "Continuar";

    let botonEnfermeria = document.createElement("button");
    botonEnfermeria.setAttribute("id", "botonEnfermeria");
    botonEnfermeria.innerHTML = "Continuar";

    //Inicio de función para clase de pociones
    botonPociones.addEventListener("click", function() {
        clase = 2;

        let parrafo14 = document.createElement("p");
        parrafo14.innerHTML = "Ahora vas a la clase: ";

        pociones = {
            Nombre: Object.keys(clases)[2],
            Profesor: clases.Pociones
        }

        let clasePLISTA = document.createElement("ul");
        clasePLISTA.setAttribute("class", "lista");

        for (let [key, value] of Object.entries(pociones)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            clasePLISTA.appendChild(li);
        };

        paso5.appendChild(parrafo14);
        paso5.appendChild(clasePLISTA);

        let parrafo15 = document.createElement("p");
        let defensa = document.createElement("h4");

        let botonContinuacion = document.createElement("button");
        botonContinuacion.setAttribute("id", "botonContinuacion");
        botonContinuacion.innerHTML = "Continuar";

        paso5.appendChild(botonContinuacion);

        botonContinuacion.addEventListener("click", function() {
            let dementorRandom = Math.floor(Math.random() * 2);

            if (dementorRandom == 0) {
                parrafo15.innerHTML = "Has llegado a salvo a la clase."
    
                paso5.appendChild(parrafo15);
                paso5.appendChild(botonDefiende);
    
            } else if (dementorRandom == 1) {
    
                parrafo15.innerHTML = "¡Oh no!, te has encontrado con un Dementor, usas tu animal Patronus y...";
    
                paso5.appendChild(parrafo15);
    
                if (estudiante.Sabe_Usarlo == true) {
                    defensa.innerHTML = "... Te has defendido del dementor, has llegado a salvo a la clase.";
                    
                    paso5.appendChild(defensa);
                    paso5.appendChild(botonDefiende);
    
                } else if (estudiante.Sabe_Usarlo == false) {
                    defensa.innerHTML = "... El Dementor te ha consumido, has sido llevado a la enfermería.";
    
                    paso5.appendChild(defensa);
                    paso5.appendChild(botonPaso5);
                };
            };
        });
    });
    //Fin del boton de clase de pociones



    //Inicio del boton de clase de defensas oscuras
    botonDefensaOscura.addEventListener("click", function() {
        clase = 4;

        let parrafo14 = document.createElement("p");
        parrafo14.innerHTML = "Ahora vas a la clase: ";

        defensaOscura = {
            Nombre: Object.keys(clases)[4],
            Profesor: clases.Defensa_Contra_Las_Artes_Oscuras
        }

        let claseDLISTA = document.createElement("ul");
        claseDLISTA.setAttribute("class", "lista");

        for (let [key, value] of Object.entries(defensaOscura)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            claseDLISTA.appendChild(li);
        };

        paso5.appendChild(parrafo14);
        paso5.appendChild(claseDLISTA);

        let parrafo15 = document.createElement("p");
        let defensa = document.createElement("h4");

        let botonContinuacion = document.createElement("button");
        botonContinuacion.setAttribute("id", "botonContinuacion");
        botonContinuacion.innerHTML = "Continuar";

        paso5.appendChild(botonContinuacion);

        botonContinuacion.addEventListener("click", function() {
            let dementorRandom = Math.floor(Math.random() * 2);

            if (dementorRandom == 0) {
                parrafo15.innerHTML = "Has llegado a salvo a la clase."
    
                paso5.appendChild(parrafo15);
                paso5.appendChild(botonDefiende);
    
            } else if (dementorRandom == 1) {
    
                parrafo15.innerHTML = "¡Oh no!, te has encontrado con un Dementor, usas tu animal Patronus y...";
    
                paso5.appendChild(parrafo15);
    
                if (estudiante.Sabe_Usarlo == true) {
                    defensa.innerHTML = "... Te has defendido del dementor, has llegado a salvo a la clase.";
                    
                    paso5.appendChild(defensa);
                    paso5.appendChild(botonDefiende);
    
                } else if (estudiante.Sabe_Usarlo == false) {
                    defensa.innerHTML = "... El Dementor te ha consumido, has sido llevado a la enfermería.";
    
                    paso5.appendChild(defensa);
                    paso5.appendChild(botonPaso5);
                };
            };
        });
    });
    //Fin del boton de clase de defensas oscuras

    let pocionesAprendidas = {
        Pocion_Amortentia: false,
        Pocion_Brebaje_bocazas: false,
        Pocion_Crece_huesos: false,
        Pocion_Doxycida: false,
        Pocion_Filtro_de_paz: false
    };

    botonDefiende.addEventListener("click", function() {
        if (clase == 4) {
            let parrafo16 = document.createElement("p");

            let animalPatronusR = Math.floor(Math.random() * 2);

            if (animalPatronusR == 0) {
                estudiante.Sabe_Usarlo = true;

                parrafo16.innerHTML = "¡Has aprendido a utilizar tu animal patronus!";

                paso5.appendChild(parrafo16);
                paso5.appendChild(botonPaso5);
            } else if (animalPatronusR == 1) {
                parrafo16.innerHTML = "Parece que aún necesitas practica para usar tu animal patronus, pero no te preocupes, seguro lo logras.";

                paso5.appendChild(parrafo16);
                paso5.appendChild(botonPaso5);
            };
        } else if (clase == 2) {
            let parrafo17 = document.createElement("p");

            let aprenderPocion = Math.floor(Math.random() * 6);

            if (aprenderPocion < 5) {
                let nombrePocion = Object.keys(pocionesAprendidas)[aprenderPocion];
    
                if (!pocionesAprendidas[nombrePocion]) {
                    pocionesAprendidas[nombrePocion] = true;
                    parrafo17.innerHTML = `Has aprendido a hacer la poción ${nombrePocion}`;
    
                    paso5.appendChild(parrafo17);
                    paso5.appendChild(botonPaso5);
                } else {
                    parrafo17.innerHTML = `Has reforzado tu conocimiento sobre la poción ${nombrePocion}`;
    
                    paso5.appendChild(parrafo17);
                    paso5.appendChild(botonPaso5);
                }
            } else {
                parrafo17.innerHTML = "Umm... No has aprendido ninguna poción esta vez. Pero no hay problema, a la próxima lo logras.";
    
                paso5.appendChild(parrafo17);
                paso5.appendChild(botonPaso5);
            }
        };
    });

    let resultados = document.getElementById("resultados");

    botonResultados.addEventListener("click", function () {
        let ul = document.createElement("ul");
        ul.setAttribute("class", "lista");
        
        for (let [key, value] of Object.entries(estudiante)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            ul.appendChild(li);
        };

        resultados.appendChild(ul);

        
        let parrafo18 = document.createElement("p");
        parrafo18.innerHTML = "Las pociones que aprendiste están marcadas con true: ";

        resultados.appendChild(parrafo18);


        let listaPociones = document.createElement("ul");
        listaPociones.setAttribute("class", "lista");

        for (let[key, value] of Object.entries(pocionesAprendidas)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            listaPociones.appendChild(li);
        };

        resultados.appendChild(listaPociones);

    })
});