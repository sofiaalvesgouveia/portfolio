// Cursor customizado
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.5)";
});

document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
});

const linksBotoes = document.querySelectorAll("a, button");
linksBotoes.forEach((elemento) => {
    elemento.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.6)";
    });

    elemento.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// Dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

  });
});

// Raspar com rato
const canvas = document.getElementById('telaCor');
const ctx = canvas?.getContext('2d');

function resizeCanvas() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let desenhar = false;

document.addEventListener('mousedown', () => desenhar = true);
document.addEventListener('mouseup', () => desenhar = false);
document.addEventListener('mouseleave', () => desenhar = false);

document.addEventListener('mousemove', (e) => {
  if (!desenhar || !ctx) return;
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 90, 0, Math.PI * 2);
  ctx.fill();
});

const links = document.querySelectorAll("a");

document.addEventListener("mousedown", () => {
  links.forEach(link => {
    link.dataset.href = link.getAttribute("href");
    link.removeAttribute("href");
  });
});

document.addEventListener("mouseup", () => {
  links.forEach(link => {
    if (link.dataset.href) {
      link.setAttribute("href", link.dataset.href);
      delete link.dataset.href;
    }
  });
});

const textoRaspa = document.getElementById('raspar');
document.addEventListener('mousedown', () => {
  if (textoRaspa) textoRaspa.style.opacity = '0';
});

function rasparAutomaticamente() {
  if (ctx) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 70, 0, Math.PI * 2);
    ctx.fill();
  }
}
rasparAutomaticamente();

let raspou = false;

document.addEventListener('mousedown', () => {
  raspou = false;
});
document.addEventListener('mousemove', () => {
  raspou = true;
});

links.forEach(link => {
  link.addEventListener("click", (e) => {
    if (raspou) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll('#amorperfeito');
  const aparece = document.querySelector('#apareceAmor');

  titulos.forEach(titulo => {
    titulo.addEventListener('mouseenter', () => {
      aparece.style.display = 'block';
    });

    titulo.addEventListener('mouseleave', () => {
      aparece.style.display = 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll('#virgem');
  const aparece = document.querySelector('#apareceVirgem');

  titulos.forEach(titulo => {
    titulo.addEventListener('mouseenter', () => {
      aparece.style.display = 'block';
    });

    titulo.addEventListener('mouseleave', () => {
      aparece.style.display = 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll('#ta-fechado');
  const aparece = document.querySelector('#apareceTaFechado');

  titulos.forEach(titulo => {
    titulo.addEventListener('mouseenter', () => {
      aparece.style.display = 'block';
    });

    titulo.addEventListener('mouseleave', () => {
      aparece.style.display = 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll('#arquivista');
  const aparece = document.querySelector('#apareceArquivo');

  titulos.forEach(titulo => {
    titulo.addEventListener('mouseenter', () => {
      aparece.style.display = 'block';
    });

    titulo.addEventListener('mouseleave', () => {
      aparece.style.display = 'none';
    });
  });
});


