let numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

let gem_value = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

var class_for_shine = ["r", "g", "b", "y", "o", "p"];
var colors = ["red", "green", "blue", "yellow", "orange", "purple"];
var name_of_gems = ["Reality", "Time", "Space", "Mind", "Soul", "Power"];
var color_for_svg = [
  "rgb(204, 10, 10)",
  "rgb(62, 196, 9)",
  "rgb(0, 106, 255)",
  "rgb(255, 200, 0)",
  "rgb(255, 140, 0)",
  "rgb(179, 8, 170)"
];
var color_list = [];
var shine_me = [];
var color_of_stones = [];
var name_of_stones = [];

function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
var random_num = shuffle(numbers);

for (i = 0, z = 1; i <= 6; i++, z++) {
  color_list[z] = colors[i];
  shine_me[z] = class_for_shine[i];
  color_of_stones[z] = color_for_svg[i];
  name_of_stones[z] = name_of_gems[i];
}

var count = 0;
for (i = 1; i <= 25; i++) {
  if (random_num[i] >= 10 && random_num[i] <= 16 && count < 6) {
    gem_value[i] = 1;
    console.log(`at ${i}: ` + gem_value[i]);
    count++;
  } else {
    gem_value[i] = 0;
  }
}

var score = 0;
index = 1;
count_chances = 1;
$(document).ready(function() {
  $(
    "#gem1,#gem2,#gem3,#gem4,#gem5,#gem6,#gem7,#gem8,#gem9,#gem10,#gem11,#gem12,#gem13,#gem14,#gem15,#gem16,#gem17,#gem18,#gem19,#gem20,#gem21,#gem22,#gem23,#gem24,#gem25"
  ).click(function() {
    if(count_chances < 16){
    id_number = $(this).attr("value");
    // console.log(gem_value[id_number]);
    if (index <= 10 && gem_value[id_number] === 1) {
      score++;
      document.getElementById("message").innerText = `YOU HAVE EARNED THE ${
        name_of_stones[index]
      } STONE`;
      $(this).addClass(`${shine_me[index]}-glow`);
      $(this).addClass("hide");
      $(this).attr("src", `./assets/img/${color_list[index]}.svg`);

      $(`#${shine_me[index]}`).css("fill", `${color_of_stones[index]}`);
      $("#message").css("color", `${color_of_stones[index]}`);
      var st = document.getElementById(`stoned${index}`);
      st.play();
      index++;
      if (index >= 7) {
        
        var g = document.getElementById("snap");
        g.play();

        document.getElementById("message").innerText =
          "YOU ARE SPREME YOU HAVE THE 6 INFINITY STONES";
      }
    } else {
      $(this).addClass("hide");
    }
    document.getElementById("score-display").innerText = `YOU HAVE USED ${count_chances} LIFE[s]`;
    count_chances++;
  }
  else{
    var r = confirm("You failed to earn all the stones!");
    if (r == true){
      window.location.reload();
    }
  }
  });
});
