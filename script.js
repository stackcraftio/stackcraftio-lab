// Edit project information here. Planned projects deliberately have no fake repository URLs.
const repo = (name) => `https://github.com/stackcraftio/${name}`;
const fun = [
 {name:'ByteBuddy',file:'bytebuddy',type:'fun',status:'planned',desc:'a tiny virtual pet with animations and interactive care.',color:'#f8c1ee',edge:'#d47cbf',icon:'♡'},
 {name:'AfterDark',file:'afterdark',type:'fun',status:'planned',desc:'an astronomy dashboard with moon phases, stars and night skies.',color:'#d5c6ff',edge:'#9382e6',icon:'☾'},
 {name:'StudyBloom',file:'studybloom',type:'fun',status:'planning',desc:'a pomodoro study timer that helps you grow while you focus.',color:'#c2f0df',edge:'#6ebdb1',icon:'✿'},
 {name:'PixelWeather',file:'pixelweather',type:'fun',status:'planned',desc:'a pixel-art weather application with changing skies.',color:'#bee8ff',edge:'#77c6e3',icon:'☁'},
 {name:'Moodify',file:'moodify',type:'fun',status:'planning',desc:'mood-based music discovery with beautiful visuals.',color:'#ffd1cb',edge:'#ed9a9e',icon:'♫'},
 {name:'CodeVault',file:'codevault',type:'fun',status:'planned',desc:'a personal code snippet manager and organiser.',color:'#e6caff',edge:'#ad87e5',icon:'▤'},
 {name:'Calculator',file:'calculator',type:'fun',status:'complete',desc:'a pastel-themed calculator built with Flask.',color:'#ffe6ac',edge:'#d9af70',icon:'✧',url:repo('Calculator')}
];
const science = [
 {name:'BioSignal Studio',file:'biosignal',status:'planned',desc:'an interactive biomedical signal explorer for ECG, PPG and more.',color:'#baf0e1',edge:'#65bba5',icon:'∿'},
 {name:'ECGLab',file:'ecglab',status:'planned',desc:'ECG signal processing toolkit with analysis, visualisation and feature extraction.',color:'#ffd0eb',edge:'#d884b9',icon:'♡'},
 {name:'Wearable ECG Classification',file:'wearable',status:'building',desc:'on-device classification of wearable ECG signals. Dissertation project in progress.',color:'#c3ddff',edge:'#719ddd',icon:'▥'}
];
const growing = [
 
 
 {name:'little-bloom',desc:'animated digital flower',icon:'🌷',url:'https://stackcraftio.github.io/little-bloom/'},
 {name:'SpendScope',desc:'personal finance tracker',icon:'🪙',url:repo('SpendScope')},
 {name:'TaskFlow',desc:'productivity tool',icon:'📋',url:repo('taskflow')},
 {name:'Spotify EDA',desc:'music data analysis',icon:'🎵',url:repo('Spotify-popularity-eda')},
 {name:'and more ...',desc:'many more ideas to come ♡',icon:'✦'}
];
const esc = t=>String(t).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function action(p){return p.url?`<a class="card-action" target="_blank" rel="noopener noreferrer" href="${esc(p.url)}">VIEW REPO →</a>`:`<button class="card-action" data-coming="${esc(p.name)}" type="button">COMING SOON ♡</button>`}
function small(p){return `<article class="project" data-status="${p.status}" style="--tint:${p.color};--edge:${p.edge};--deep:#655085"><div class="window-top"><span class="w-title">${p.icon} ${esc(p.name)}.exe</span><span class="controls">▣ ×</span></div><img class="project-art" src="assets/${p.file}.webp" alt="Pixel-art illustration for ${esc(p.name)}" loading="lazy"><div class="project-body"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><span class="status ${p.status}">${p.status}</span>${action(p)}</div></article>`}
function big(p){return `<article class="science-card" data-status="${p.status}" style="--tint:${p.color};--edge:${p.edge};--deep:#655085"><div class="science-content"><div class="window-top"><span>${p.icon} ${esc(p.name)}</span><span>▣ ×</span></div><div class="science-inner"><img src="assets/${p.file}.webp" alt="Pixel-art illustration for ${esc(p.name)}" loading="lazy"><div class="science-copy"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><span class="status ${p.status}">${p.status==='building'?'in progress':p.status}</span>${action(p)}</div></div></div></article>`}
document.querySelector('#fun-cards').innerHTML=fun.map(small).join('');document.querySelector('#science-cards').innerHTML=science.map(big).join('');
document.querySelector('#grow-list').innerHTML=growing.map(p=>`<a class="grow" ${p.url?`href="${esc(p.url)}" target="_blank" rel="noopener noreferrer"`:`href="#currently-growing" data-coming="${esc(p.name)}"`}><span class="emoji">${p.icon}</span><span><strong>${esc(p.name)}</strong><small>${esc(p.desc)}</small></span><b>→</b></a>`).join('');
const sections=[document.querySelector('#little-worlds'),document.querySelector('#science-greenhouse'),document.querySelector('#currently-growing')];
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;sections[0].classList.toggle('hidden',f==='science');sections[1].classList.toggle('hidden',f==='fun');sections[2].classList.toggle('hidden',f==='science'||f==='fun'||f==='building'||f==='planned');document.querySelectorAll('.project,.science-card').forEach(el=>el.classList.toggle('hidden',(f==='building'&&!['building','planning'].includes(el.dataset.status))||(f==='planned'&&el.dataset.status!=='planned')));if(f==='all'||f==='building'||f==='planned'){sections[0].classList.remove('hidden');sections[1].classList.remove('hidden')} }));
let toastTimer;document.addEventListener('click',e=>{const b=e.target.closest('[data-coming]');if(!b)return;e.preventDefault();const toast=document.querySelector('#toast');toast.textContent=`${b.dataset.coming} is still growing ✿ Check back soon!`;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)});
