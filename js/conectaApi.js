async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}
async function criaVideos(params) {
    
}

export const conectaApi = {
    listaVideos
}