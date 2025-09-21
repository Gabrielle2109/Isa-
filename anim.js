// anim.js
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con cada línea y su tiempo
var lyricsData = [
  { text: "Tu sonrisa tan resplandeciente", time: 5 },
  { text: "A mi corazon deja encantado", time: 10 },
  { text: "Ven toma mi mano", time: 14 },
  { text: "Para huir de esta terrible oscuridad", time: 16 },
  { text: "En el instante en que te volvi a encontrar", time: 29 },
  { text: "Mi mente trajo a mi aquel hermoso lugar", time: 32 },
  { text: "Que cuando era niño fue tan valioso para mi", time: 36 },
  { text: "Quiero saber si acaso tu conmigo quieres bailar", time: 42 },
  { text: "Si me das tu mano te llevare", time: 47 },
  { text: "Por un camino cubierto de luz y oscuridad", time: 51 },
  { text: "Tal vez sigues pensando en el ", time: 56 },
  { text: "no puedo yo saberlo, pero se y entiendo", time: 59 },
  { text: "Que amor necesitas tu", time: 60 },
  { text: "Y el valor para pelear en mi lo hallaras", time: 63 },
  { text: "Mi corazon encantado vibra", time: 69 },
  { text: "Por el polvo de esperanza y magia", time: 72 },
  { text: "Del universo que ", time: 76 },
  { text: "Ambicionan todos poseer", time: 79 },
  { text: "Voy a amarte para toda la vida", time: 83 },
  { text: "No me importa si aun no te intereso", time: 86 },
  { text: "Ven Toma mi mano", time: 91 },
  { text: "Parar huir de esta infinita oscuridad", time: 133 },
  { text: "La verdad no creo que", time: 206 },
  { text: "escuches la canción completa", time: 144 },
  { text: "Mucho menos la leas así", time: 150 },
  { text: "Espero no me funes", time: 156 },
  { text: "Solo es un detallito chiquito", time: 160 },
  { text: "Atte: Aaron", time: 162 },
  { text: "Para:", time: 164 },
  { text: "La niña mas bonita", time: 166 },
];

// Función que sincroniza letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}