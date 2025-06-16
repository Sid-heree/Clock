setInterval(() => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hh = document.getElementById('hh');
  const mm = document.getElementById('mm');
  const ss = document.getElementById('ss');

  const sec_dot = document.querySelector('.sec_dot');
  const min_dot = document.querySelector('.min_dot');
  const hr_dot = document.querySelector('.hr_dot');

  const hr = document.getElementById('hr');
  const mn = document.getElementById('mn');
  const sc = document.getElementById('sc');

  // Function to update stroke dynamically
  function updateStroke(circle, value, max) {
    const r = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * r;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (circumference * value) / max;
  }

  updateStroke(hh, h % 12 + m / 60, 12);
  updateStroke(mm, m, 60);
  updateStroke(ss, s, 60);

  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  hr_dot.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;

  hr.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;
  mn.style.transform = `rotateZ(${m * 6}deg)`;
  sc.style.transform = `rotateZ(${s * 6}deg)`;
}, 1000);
