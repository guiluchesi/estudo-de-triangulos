// setTimeout(() => document.querySelector('.super-logo-princi svg').classList.add('angle'), 3000);

const grupo = document.querySelector('svg g');
const ns = 'http://www.w3.org/2000/svg';

const hipotenusa = (altura, largura) => Math.sqrt((altura ** 2 + largura ** 2));
const distanciaAngular = profundidade => profundidade/2;

const setPoints = (target, points) => {
  const fullString = points.reduce((anterior, atual, indice) => `${anterior} ${atual}`, '');
  target.setAttribute('points', fullString);
  return target;
}

const gerarTriangulo = (altura, largura, classNames) => {
  const triangulo = document.createElementNS(ns, 'polygon');
  const pontos = [
    '0,0',
    `${largura},${altura/2}`,
    `0,${altura}`,
  ];

  classNames.map(className => triangulo.classList.add(className));
  return setPoints(triangulo, pontos);
}

const gerarRetangulo = (altura, largura, classNames, vertical = false) => {
  const retangulo = document.createElementNS(ns, 'polygon');
  const larguraCorrigida = vertical ? largura : hipotenusa(altura/2, largura);

  const pontos = [
    '0,0',
    `${larguraCorrigida},0`,
    `${larguraCorrigida},${altura}`,
    `0,${altura}`,
  ];

  classNames.map(className => retangulo.classList.add(className));
  return setPoints(retangulo, pontos);
}

const buildElement = (altura, largura, profundidade) => {
  grupo.appendChild(gerarRetangulo(profundidade, largura, ['azul', 'lateral-esquerda']));
  grupo.appendChild(gerarTriangulo(altura, largura, ['cinza', 'base']));
  grupo.appendChild(gerarRetangulo(altura, (profundidade * -1), ['verde', 'fundo'], true));
  grupo.appendChild(gerarRetangulo(profundidade, largura, ['laranja', 'lateral-direita']));
  grupo.appendChild(gerarTriangulo(altura, largura, ['cinzaEscuro', 'topo']));
}

buildElement(110, 140, 60);
