var listaSagas =["https://img.elo7.com.br/product/zoom/24B46D2/poster-papel-de-parede-harry-potter-250-cm-x-400-cm-posteres.jpg","https://image.tmdb.org/t/p/original/vayx5t1cYCpBGV9ylTGn0Sr9rA2.jpg","https://img.elo7.com.br/product/original/2C25D05/big-poster-filme-star-wars-o-despertar-da-forca-tam-90x60-cm-poster-star-wars.jpg",
"https://uauposters.com.br/media/catalog/product/2/0/201906131069-uau-posters-filmes-avengers-endgame-vingadores-ultimato.jpg","https://img.elo7.com.br/product/zoom/26927C9/poster-o-senhor-dos-aneis-as-duas-torres-lo01-tam-90x60-cm-presente-geek.jpg","https://img.elo7.com.br/product/original/27B86FC/big-poster-filme-disney-toy-story-4-tamanho-90x60-cm-agente-carter.jpg","https://cinesiageek.com.br/wp-content/uploads/2021/12/Matrix-Resurrections-poster.jpg",
"https://c8.alamy.com/comp/DXD4HK/jurassic-park-DXD4HK.jpg","https://cdn.ome.lt/legacy/imagens/cinema/news/narnia/poster.jpg","https://br.web.img2.acsta.net/pictures/14/02/18/21/20/583093.jpg","https://jovemnerd.com.br/wp-content/uploads/img_twilight_poster_gde.jpg","https://img.elo7.com.br/product/original/1D04EBE/poster-o-hobbit-tamanho-90x-0-cm-lo012-poster-o-hobbit.jpg","https://img.elo7.com.br/product/original/4A61436/poster-indiana-jones-g-adesivo-em-ingles-42-5x60cm-decoracao.jpg","https://upload.wikimedia.org/wikipedia/pt/3/3f/Mission_Impossible_Pôster.jpg"];

var nomeSagas = [
  'Harry Potter',
  'Percy Jackson',
  'Star Wars',
  'Avengers',
  'O Senhor Dos Anéis',
  'ToyStory',
  'Matrix',
  'Jurassic Park',
  'As Crônicas de Nárnia' ,
  'Divergente',
  'Crepúsculo',
  'Hobbit',
  'Indiana Jones',
  'Missão Impossível'
];

for (var i = 0; i < listaSagas.length; i++) {
  document.write("<div style='display: inline-block; margin-right: 20px; text-align: center;'>");
  document.write("<img src=" + listaSagas[i] + ">");
  document.write("<p style='color: #ffffff; font-family: 'Merriweather', serif;'>" + nomeSagas[i] + "</p>");
  document.write("</div>");
}