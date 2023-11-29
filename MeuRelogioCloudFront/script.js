function showTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const session = h >= 12 ? 'PM' : 'AM';

  const formattedH = (h % 12).toString().padStart(2, '0');
  const formattedM = m.toString().padStart(2, '0');
  const formattedS = s.toString().padStart(2, '0');

  const time = `${formattedH}:${formattedM}:${formattedS} ${session}`;
  document.getElementById('MeuRelogio').textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

