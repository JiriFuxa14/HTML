let C = document.getElementById('grid-container'), g = Array(49).fill(0);
for (let i = 0; i < 49; i++) C.appendChild(document.createElement('div')).onclick = () => { g[i] ^= 1; d() };
function d() { for (let i = 0; i < 49; i++) C.children[i].className = g[i] ? 'alive' : ''; }
setInterval(() => {
    if (g.reduce((a, b) => a + b, 0) <= 1) return;
    g = g.map((v, i) => {
        let n = 0, r = i / 7 | 0, c = i % 7;
        for (let x = -1; x < 2; x++) for (let y = -1; y < 2; y++) {
            if ((x || y) && r + x >= 0 && r + x < 7 && c + y >= 0 && c + y < 7) n += g[i + x * 7 + y];
        }
        return (v && n > 1 && n < 4) || (!v && n == 3) ? 1 : 0;
    }); d();
}, 1000);
