let iniciar = document.getElementById("iniciar");

iniciar.addEventListener("click", function() {
    let paso1 = document.getElementById("paso1");

    let parrafo1 = document.createElement("p");
    parrafo1.innerHTML = "¡Primero!, veamos como te describes a ti mismo y tu linaje.";
    paso1.appendChild(parrafo1);

    let seleccion1 = document.createElement("select");
    let opcionPredeterminada = document.createElement("option");
    opcionPredeterminada.setAttribute("value", "opcionPredeterminada");
    let opcionSlytheryn = document.createElement("option");
    opcionSlytheryn.setAttribute("value", "opcionSlytheryn");
    let opcionHufflepuff = document.createElement("option");
    opcionHufflepuff.setAttribute("value", "opcionHufflepuff");
    let opcionRaivenclow = document.createElement("option");
    opcionRaivenclow.setAttribute("value", "opcionRaivenclow");
    let opcionGryffindor = document.createElement("option");
    opcionGryffindor.setAttribute("value", "opcionGryffindor");

    opcionSlytheryn.innerHTML = "Ambición, determinación y astucia";
    opcionGryffindor.innerHTML = "Valor, fuerza y audacia";
    opcionHufflepuff.innerHTML = "Justicia, lealtad y paciencia";
    opcionRaivenclow.innerHTML = "Creatividad, erudición e inteligencia";
    opcionPredeterminada.innerHTML = "Selecciona una de las siguientes opciones"

    seleccion1.appendChild(opcionPredeterminada);
    seleccion1.appendChild(opcionGryffindor);
    seleccion1.appendChild(opcionRaivenclow);
    seleccion1.appendChild(opcionSlytheryn);
    seleccion1.appendChild(opcionHufflepuff);

    paso1.appendChild(seleccion1);

    let linaje = document.createElement("select");
    let mestizo = document.createElement("option");
    mestizo.setAttribute("value", "mestizo");
    let sangrePura = document.createElement("option");
    sangrePura.setAttribute("value", "sangrePura");
    let muggle = document.createElement("option");
    muggle.setAttribute("value", "muggle");

    mestizo.innerHTML = "Mestizo";
    sangrePura.innerHTML = "Sangre pura";
    muggle.innerHTML = "Muggle";

    seleccion1.addEventListener("change", function() {
        let opcionCualidades = seleccion1.value;

        if (opcionCualidades == "opcionSlytheryn") {
            linaje.appendChild(opcionPredeterminada);
            linaje.appendChild(sangrePura);

            paso1.appendChild(linaje);

        } else if (opcionCualidades == "opcionHufflepuff") {
            linaje.appendChild(opcionPredeterminada);
            linaje.appendChild(mestizo);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

        } else if (opcionCualidades == "opcionRaivenclow") {
            linaje.appendChild(opcionPredeterminada);
            linaje.appendChild(mestizo);
            linaje.appendChild(sangrePura);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);

        } else if (opcionCualidades == "opcionGryffindor") {
            linaje.appendChild(opcionPredeterminada);
            linaje.appendChild(mestizo);
            linaje.appendChild(sangrePura);
            linaje.appendChild(muggle);

            paso1.appendChild(linaje);
            
        } else {
            console.log("Selecciona tus cualidades, por favor.");
        }
    })
})