const helloalert = require('./hello');

test('La función helloalert debe retornar este texto: "Hola World"', () => {
    expect(helloalert()).toBe("Hola World");
});