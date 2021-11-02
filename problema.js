const contenedor = document.querySelector(".flex-container");
const fragmento = document.createDocumentFragment();

function crearLave(nombre,modelo,precio){
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`
    precio = `<p>Precio: <b>${precio}</b></p>`;
    
    return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value=number;
}

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10+30);
    let precioRandom = Math.round(Math.random()*1000);
    let llave = crearLave(`Llave ${i}`,`Modelo: ${modeloRandom}`,precioRandom);
    //Creamos un contenedor para cada llave
    let div = document.createElement("DIV");
    //Creamos una clase diferente a cada div
    div.classList.add(`item-${i}`,'flex-item');
    //agregamos el index para poder ser un elemento focus
    div.tabIndex = i;
    //Creamos un listener para poder modificar el "value"
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    //Agregamos la llave al div
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    //Agregamos los div al fragmento creado
    fragmento.appendChild(div);
}
//Agregamos el fragmento al html
contenedor.appendChild(fragmento);

