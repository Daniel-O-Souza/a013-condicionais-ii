let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

// UTILIZANDO SWITCH CASE:

switch(nacionalidade){
    case "brasileiro" || "brasileira":
        console.log("A pessoa é do Brasil")
        break;
    case "argentino" || "argentina":
        console.log("A pessoa é da Argentina")
        break;
    case "uruguaio" || "uruguaia":
        console.log("A pessoa é do Uruguai")
        break;
    case "chileno" || "chilena":
        console.log("A pessoa é do Chile")
        break;
    case "colombiano" || "colombiana":
        console.log("A pessoa é da Colombia")
        break;
    default:
        console.log("Nacionalidade não encontrada")
}