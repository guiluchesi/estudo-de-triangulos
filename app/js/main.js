// setTimeout(() => document.querySelector('.super-logo-princi svg').classList.add('up'), 3000);
const durationTime = 2000;
const superTriangulo = document.querySelector('.super-logo-princi svg');

const triangulo1 = anime({
	targets: '.triangulo12',
	translateX: -730,
	translateY: -120,
	rotateZ: -35,
	scale: 0.7,
	easing: 'easeInQuad',
	direction: 'reverse',
	duration: durationTime,
	autoplay: false
});

const triangulo2 = anime({
	targets: '.triangulo11',
	translateX: -100,
	rotateZ: 30,
	scale: 0.6,
	easing: 'easeInQuad',
	direction: 'reverse',
	duration: durationTime,
	autoplay: false
});

const pezao = anime({
	targets: '.super-logo-princi svg',
	perspective: '70em',
	rotateX: 50,
	translateX: 40,
	scaleX: 0.75,
	easing: 'easeInQuad',
	direction: 'reverse',
	duration: durationTime,
	autoplay: false
});

window.scroll(0, 1);
window.onscroll = scroll => {
	const top = document.body.scrollTop;
	const topInverse = top * -1;
	const topReduzido = topInverse * 12.5;
	const topFinal = durationTime + topReduzido;

	pezao.seek(top * 12.5);
	triangulo1.seek(topFinal);
	triangulo2.seek(topFinal);
};

