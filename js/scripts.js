var a = 3;
var	b = 2;
var	value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
	console.log('Wynik dodatni');
}
else if (value < 0) {
	console.log('Wynik ujemny');
}
else if (value == 0) {
	console.log('Twój wynik to 0');
}