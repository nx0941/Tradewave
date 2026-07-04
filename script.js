
const nav=document.querySelector('.nav');
document.querySelector('.mobile-toggle')?.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});
document.querySelectorAll('.fade-up,.card,.product-card').forEach(el=>{el.classList.add('fade-up');io.observe(el)});
document.querySelectorAll('[data-year]').forEach(el=>{const y=new Date().getFullYear(); el.textContent=y;});
