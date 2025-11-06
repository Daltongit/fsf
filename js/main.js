// URLs de formularios
const FORM_URLS = {
  es1:"https://docs.google.com/forms/d/e/1FAIpQLSeCBdHUIledYtSLNmpkxq3MHQF6h8bYOG9ZSGfT6cdEFbVwVA/viewform?usp=header",
  es2:"https://docs.google.com/forms/d/e/1FAIpQLSfCzx3jeM2WJuBFyY3XAvF-Viim0h9G6HP1LDGbcqjOSMMhXw/viewform?usp=header",
  es3:"https://docs.google.com/forms/d/e/1FAIpQLSflGSidgSZJcrJYWTQNKbctFpVfzS3qVSlcjm9NS_2sRPORQQ/viewform?usp=header",
  es4:"https://docs.google.com/forms/d/e/1FAIpQLSfuA8SGSYIsWMt4EXqMiMpjpUvcb46Ox51-y9QUASH6I_xA0A/viewform?usp=header",
  i1:"httpshttps://docs.google.com/forms/d/e/1FAIpQLSe6jzmwWf7z6r1iKkrqsJpkKTqNlvmjzMEsKOIyCIHD1fdSTg/viewform?usp=header",
  i2:"https://docs.google.com/forms/d/e/1FAIpQLSdygMifXyF3wZ-He_X8plCIKJU8eKmU7FG6b10HbjNmBnDuYQ/viewform?usp=header",
  i3:"https://docs.google.com/forms/d/e/1FAIpQLSdJKRkm_jNDUxr3F2yjuODOuQBeSgPEx0B7HsS1lbRdJqz-tg/viewform?usp=header",
  i4:"https://docs.google.com/forms/d/e/1FAIpQLSffIHyMblXI4Yp9xp6NoSdp9HG2z1q7WHm48gabBTBZRnXrrw/viewform?usp=header",
  l1:"https://docs.google.com/forms/d/e/1FAIpQLSeo4O-7omTSS6hIuWbHo_RCJPTkP3xZYo05Vm1KO89InTPJtQ/viewform?usp=header",
  l2:"https://docs.google.com/forms/d/e/1FAIpQLSc97pVjlQ9vUl3WHR3Go9lfQnawY3uI0_1_Hsdid_S7K9kxaw/viewform?usp=header",
  l3:"https://docs.google.com/forms/d/e/1FAIpQLSegJM1kPxfHSHTcIq6-0fN0mnV65B4cOd451p_UGI4basM54g/viewform?usp=header",
  l4:"https://docs.google.com/forms/d/e/1FAIpQLSduJY-jkte7npVrCMZiVGoHENNGJa_-RKBlS81NBy53SsaGGw/viewform?usp=header",
  m1:"https://docs.google.com/forms/d/e/1FAIpQLSffkgk_xgKKYteMgw-6aSwoJut1mXF9Zn_2kcxEsYX5HN8exg/viewform?usp=header",
  m2:"https://docs.google.com/forms/d/e/1FAIpQLSfwBsaCAUsLVtmNfIm6SLewmG-1KAJwMDFBSjfGZEpdqXo2gg/viewform?usp=header",
  m3:"https://docs.google.com/forms/d/e/1FAIpQLSfMUzEcHGcgdwjEVxKrKTkpBxfPUaWnO5zZA3_zBdxMdVI7Yw/viewform?usp=header",
  m4:"https://docs.google.com/forms/d/e/1FAIpQLSfjky0r3wYebeoNlYqE81vBY4FlmKWN9mD8yZ5bVtXE_oR1jA/viewform?usp=header",
  p1:"https://docs.google.com/forms/d/e/1FAIpQLScKtQOF_tJ8JCWJrrVI5xTqs9xSvMhiGHIT1MK7AMtIrlnl6Q/viewform?usp=header",
  p2:"https://docs.google.com/forms/d/e/1FAIpQLSeADNP2ISB0J4IGz92GpELqN0NXC7vAUKZps-cipgV5seEiTQ/viewform?usp=header",
  p3:"https://docs.google.com/forms/d/e/1FAIpQLScGqZ4cdszEQLta8ZbFe-H93vLloSeaKz0M-w4jUoQnJXS6eA/viewform?usp=header",
  p4:"https.google.com/forms/d/e/1FAIpQLSfqFEnDXO3RND16J0gbkSxvot1IcBjc5cE9IsGKtxqgs5Nb-w/viewform?usp=header",
  p5:"https://docs.google.com/forms/d/e/1FAIpQLScoDzv2xrlKaNcflOSjcsj47EppNgLF-ztM6oJLXMulwkf1EQ/viewform?usp=header",
  p6:"https://docs.google.com/forms/d/e/1FAIpQLSdWbpIfWK2sHtfmu-cjqgLusgax5Xb40lcOpAWSvbMgSQu81Q/viewform?usp=header",
  p7:"https://docs.google.com/forms/d/e/1FAIpQLSdk3Jdid-LbWV7rnzD54GF_Pwn7r9b7xHD9ftk1Kd5o2p6ILg/viewform?usp=header"
};

// Modal
const modal = document.getElementById('modal');
const frame = document.getElementById('formFrame');
const closeEls = modal.querySelectorAll('[data-close]');
let lastTrigger = null;

function openModal(url, trigger){
  lastTrigger = trigger;
  frame.src = url;
  modal.classList.add('show');
  document.body.style.overflow='hidden';
  // Focus trap básico
  const focusables = modal.querySelectorAll('button,[href],iframe,[tabindex]:not([tabindex="-1"])');
  const first = focusables[0], last = focusables[focusables.length-1];
  first.focus();
  modal.onkeydown = (e)=>{
    if(e.key==='Tab'){
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
    }
    if(e.key==='Escape'){closeModal();}
  };
}
function closeModal(){
  modal.classList.remove('show');
  frame.src = '';
  modal.onkeydown = null;
  document.body.style.overflow='';
  if(lastTrigger) lastTrigger.focus();
}
closeEls.forEach(el=>el.addEventListener('click', closeModal));
modal.addEventListener('click', (e)=>{ if(e.target.classList.contains('overlay')) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.classList.contains('show')) closeModal(); });

// Lanzadores de formularios (Ahora .test-card)
// --- ¡CAMBIO IMPORTANTE AQUÍ! ---
document.querySelectorAll('.test-card').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.getAttribute('data-test');
    const url = FORM_URLS[key];
    if(url) openModal(url, btn);
  });
});

// Acordeones con animación de altura (Sin cambios, esto sigue igual)
document.querySelectorAll('[data-acc]').forEach(acc=>{
  const btn = acc.querySelector('.header-btn');
  const panel = acc.querySelector('.panel');
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // cerrar si está abierto
    if(expanded){
      btn.setAttribute('aria-expanded','false');
      panel.style.height = panel.scrollHeight + 'px'; // fijar para animar
      requestAnimationFrame(()=>{ panel.style.height = '0px'; panel.classList.remove('open'); });
      return;
    }
    // cerrar otros abiertos (acordeón exclusivo)
    document.querySelectorAll('[data-acc] .header-btn[aria-expanded="true"]').forEach(openBtn=>{
      openBtn.setAttribute('aria-expanded','false');
      const p = openBtn.closest('[data-acc]').querySelector('.panel');
      p.style.height = p.scrollHeight + 'px';
      requestAnimationFrame(()=>{ p.style.height = '0px'; p.classList.remove('open'); });
    });
    // abrir actual
    btn.setAttribute('aria-expanded','true');
    panel.classList.add('open');
    panel.style.height = 'auto';
    const end = panel.scrollHeight + 'px';
    panel.style.height = '0px';
    requestAnimationFrame(()=>{ panel.style.height = end; });
    panel.addEventListener('transitionend', ()=>{ if(btn.getAttribute('aria-expanded')==='true'){ panel.style.height='auto'; }}, { once:true });
  });
});
