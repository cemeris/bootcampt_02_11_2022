const size = 10;
const coords = [];
for (let index = 0; index < (size * size); index++) {
  coords.push(index);
}

const start_position = getRandomPosition();
const finish_position = getRandomPosition();
const bombs = [];

for (let index = 0; index < Math.floor(size * size * 0.2); index++) {
  bombs.push(getRandomPosition());
}

function getRandomPosition() {
  const index = Math.floor(Math.random() * coords.length);
  const rand_number = coords[index];
  coords.splice(index, 1);

  return rand_number;
}
