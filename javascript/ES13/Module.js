
//Await pode ser usado no módulo e não apenas dentro da funsão
/*export async function aguardarPromessa(){
    console.log('Aguardando processamento')

    function fetchDados(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Executou');
            }, 3000);
        });
    }
    console.log('Processamento finalizado')
}*/

export async function fetchDados(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Executou');
        }, 3000);
    });
}
const dados = await fetchDados()
console.log(dados)
console.log('Processamento finalizado')