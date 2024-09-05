//criar uma constante com a chave api
const key = "e0283766cee7e7e70be7e75409ae8042"
//função capturar o valor do input
function Coletar() {
  let cidade = document.querySelector('.input-cidade').value
  console.log(cidade)
  dados(cidade)
}

//consumindo dados da api openweather
async function dados(cidade) {
  let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
  console.log(dados)
  exibirDados(dados)
}

//função trocar dados na tela

function exibirDados(dados) {
    document.querySelector('.cidade').innerHTML = "tempo em " + dados.name
    document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.Previsao').innerHTML = dados.weather[0].description
    document.querySelector('.Umidade').innerHTML = "umidade = " + dados.main.humidity + "%"
    document.querySelector('.imagem').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.pressao').innerHTML = "Pressão = " + dados.main.pressure + "hpa"
}