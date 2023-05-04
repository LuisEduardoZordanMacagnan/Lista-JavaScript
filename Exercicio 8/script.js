let c = document.getElementById('c');
let f = document.getElementById('f');
let k = document.getElementById('k');

function calcula(element) {
    if (c.value != null && c == element) {
        f.value = Number(c.value) * 1.8 + 32;
        k.value = Number(c.value) + 273;
    }
    if (f.value != null && f == element) {
        c.value = (Number(f.value) - 32) / 1.8;
        k.value = (Number(f.value) - 32) * 5 / 9 + 273;
    }
    if (k.value != null && k == element) {
        c.value = Number(k.value) - 273;
        f.value = (Number(k.value) - 273) * 1.8 + 32;
    }
}