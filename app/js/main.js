const canvas = document.getElementById('myCanvas');
const larguraTela = window.innerWidth;
const alturaTela = window.innerHeight;
const safeArea = [680, 240];

const generateSafetyArea = area => {
  const halfWidth = larguraTela / 2;
  const halfHeight = alturaTela / 2;

  const safeAreaMinWidth = halfWidth - (area[0] / 2);
  const safeAreaMaxWidth = halfWidth + (area[0] / 2);

  const safeAreaMinHeight = halfHeight - (area[1] / 2);
  const safeAreaMaxHeight = halfHeight + (area[1] / 2);

  return {
    min: {
      width: safeAreaMinWidth,
      height: safeAreaMinHeight
    },
    max: {
      width: safeAreaMaxWidth,
      height: safeAreaMaxHeight
    }
  }
}

const safetyArea = generateSafetyArea(safeArea);
const numeroDeTriangulos = 4;
const cores = [
  '#008cd4',
  '#9bd93e',
  '#f1008f',
  '#a2007b',
  '#fa7b06',
  '#d2d3d5',
];

canvas.width = larguraTela;
canvas.height = alturaTela;

const getRandom = (array, minNum = 0) => {
  if(!array) return {
    x: Math.floor(Math.random() * larguraTela),
    y: Math.floor(Math.random() * alturaTela)
  }

  const maxNum = array.length;
  const randomNum = Math.floor(Math.random() * maxNum) + minNum;
  return array[randomNum];
}

const generatePosition = () => {
  const cords = getRandom();

  if (
    cords.x > safetyArea.max.width && cords.x < safetyArea.min.width
    && cords.y > safetyArea.max.height && cords.y < safetyArea.min.height
  ) return generatePosition();

  return [cords.x, cords.y];
}

const getSecondPoint = ponto1 => {
  const cords = generatePosition();

  if(cords[0] < ponto1[0] || cords[0] > (ponto1[0] + 50) || cords[1] > ponto1[1] )
    return getSecondPoint(ponto1);

  console.log(cords[0], cords[1]);
  return [cords[0], cords[1]];
}

const getThirdPoint = ponto1 => {
  const cords = generatePosition();

  if( cords[0] > (ponto1[0] - 50) || cords[0] < (ponto1[0] - 150) || cords[1] > ponto1[1] )
    return getThirdPoint(ponto1);

  return [cords[0], cords[1]];
}

const draw = () => {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const ponto1 = generatePosition();
    const ponto2 = getSecondPoint(ponto1);
    const ponto3 = getThirdPoint(ponto1);

    ctx.beginPath();
    ctx.fillStyle = getRandom(cores);
    ctx.moveTo(ponto1[0], ponto1[1]);
    ctx.lineTo(ponto2[0], ponto2[1]);
    ctx.lineTo(ponto3[0], ponto3[1]);
    ctx.fill();
  }
}

for (var i = 0; i < numeroDeTriangulos; i++) {
  draw();
}

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
ctx.moveTo(safetyArea.min.width, safetyArea.min.height);
ctx.lineTo(safetyArea.max.width, safetyArea.min.height);
ctx.lineTo(safetyArea.max.width, safetyArea.max.height);
ctx.lineTo(safetyArea.min.width, safetyArea.max.height);
ctx.fill();
