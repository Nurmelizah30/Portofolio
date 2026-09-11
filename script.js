const projects = {
  mybouquet: { title: 'MyBouquet', label: 'Personal project - Web Development', text: 'Website e-commerce sederhana untuk menampilkan dan menjual produk buket secara online, dengan fokus pada tampilan produk yang menarik dan proses pemesanan yang mudah.', tools: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'VS Code'] },
  merch: { title: 'Merch HIMATIF', label: 'Group project - Web Development', text: 'Aplikasi pemesanan merchandise online yang memudahkan pengguna melihat produk dan melakukan pemesanan. Berkontribusi pada front-end, database, dan penulisan laporan proyek.', tools: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'VS Code'] },
  space: { title: 'Space Rescue: The Lost Mission', label: 'Group project - Game Design', text: 'Maze game bertema petualangan luar angkasa. Pemain menyelesaikan labirin dalam sebuah misi penyelamatan dengan konsep cerita dongeng.', tools: ['Alice', 'Game Design', 'Story Concept'] },
  healthcare: { title: 'Online Healthcare Reservation', label: 'Group project - UI/UX Design', text: 'Sistem reservasi layanan kesehatan online yang dirancang untuk memberi pengalaman reservasi yang lebih mudah dan terstruktur bagi pengguna.', tools: ['Figma', 'UI/UX Design', 'System Design'] },
  labirin: { title: 'Labirin Waktu', label: 'Group project - Short Film', text: 'Film pendek thriller tentang balas dendam, pengkhianatan, dan perjalanan waktu. Berkontribusi dalam pengembangan alur cerita dan penulisan naskah film.', tools: ['Scriptwriting', 'Adobe Photoshop', 'Adobe Premiere Pro'] },
  velocity: { title: 'Velocity Strike', label: 'Group project - Game Design', text: 'Game 2D bertema shooting dengan pergerakan kiri-kanan dan pertarungan melawan musuh. Berperan dalam merancang desain visual dan tampilan game.', tools: ['Greenfoot', 'Game Design', 'Visual Design'] },
  portfolio: { title: 'My Portfolio', label: 'Personal project - Full-stack Development', text: 'Website portofolio pribadi untuk menampilkan profil, keterampilan, dan berbagai project yang pernah dikerjakan.', tools: ['HTML', 'CSS', 'JavaScript', 'SQL', 'VS Code'] }
};
const achievements = {qris:['Top 10 Finalist - QRIS Jelajah Indonesia','Bank Indonesia - Tingkat Provinsi - 2026','Top%2010%20Finalist.jpg'],design:['Best Participant - ERCOM Academy Graphic Design Class','Tingkat Universitas - 2025','Best%20participant.jpg'],bright:['BRIGHT Scholarship Awardee','YBM BRILiaN - Tingkat Nasional - 2024','awardee%20bright%20scholarship.jpg'],osnk:['1st Winner - National Science Olympiad in Astronomy (OSN-K)','BPTI Kemendikbudristek - Tingkat Kabupaten - 2023','osn.jpg'],paskibraka:['PASKIBRAKA Member','DISPORA Kabupaten Kaur - Tingkat Kabupaten - 2022','paskibraka.jpg'],poif:['4th Place (Juara Harapan 1) - POIF XXIV Plus','HIMAFI FKIP - Tingkat Regional Sumbagsel - 2022','poif.jpg']};
const modal = document.querySelector('.project-modal');
document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.project];
  modal.querySelector('.modal-content').innerHTML = `<p class="modal-label">${p.label}</p><h2>${p.title}</h2><p>${p.text}</p><div class="modal-tools">${p.tools.map(tool => `<span>${tool}</span>`).join('')}</div>`;
  modal.showModal();
}));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
const achievementModal=document.querySelector('.achievement-modal');
document.querySelectorAll('.achievement-card').forEach(card=>card.addEventListener('click',()=>{const a=achievements[card.dataset.achievement];const photo=a[2]?`<img src="${a[2]}" alt="${a[0]}">`:'+ Foto dokumentasi pencapaian';achievementModal.querySelector('.achievement-content').innerHTML=`<div class="achievement-photo-slot">${photo}</div><h2>${a[0]}</h2>`;achievementModal.showModal()}));
document.querySelector('.achievement-close').addEventListener('click',()=>achievementModal.close());
achievementModal.addEventListener('click',e=>{if(e.target===achievementModal)achievementModal.close()});
const certificateCaptions = {
  'Coding Camp Software Engineer': 'Pelatihan intensif pengembangan keterampilan software engineering, meliputi dasar pemrograman, pengembangan aplikasi, dan penerapan konsep teknologi dalam proyek.',
  'Gemini AI Certification': 'Pelatihan dan sertifikasi yang berfokus pada pemanfaatan Gemini AI untuk meningkatkan produktivitas, eksplorasi ide, dan penyelesaian berbagai kebutuhan berbasis AI.',
  'Design Class Training': 'Pelatihan desain grafis yang mengembangkan kemampuan dalam menyusun konsep visual, komposisi, serta menghasilkan desain yang komunikatif dan menarik.',
  'Microsoft Office Training': 'Pelatihan untuk meningkatkan keterampilan menggunakan Microsoft Office, khususnya dalam pengolahan dokumen, presentasi, dan data secara efektif.',
  'Scientific Essay Training Prapena': 'Pelatihan penulisan esai ilmiah yang membahas penyusunan ide, struktur tulisan, argumentasi, serta penyampaian gagasan secara sistematis.',
  'Student Leadership Education': 'Pelatihan pengembangan kepemimpinan mahasiswa yang berfokus pada kemampuan komunikasi, kerja sama tim, tanggung jawab, dan pengembangan diri.',
  'PPKO Training': 'Pelatihan pengembangan kapasitas mahasiswa yang membekali peserta dengan pemahaman mengenai perencanaan, pengelolaan, dan pelaksanaan program organisasi kemahasiswaan.'
};
const certificateModal = document.querySelector('.certificate-modal');
document.querySelectorAll('.cert-card').forEach(card => {
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  const title = card.querySelector('h3').textContent.replace(/\s+/g, ' ').trim();
  const openCertificate = () => {
    const media = card.querySelector('.certificate-image iframe, .certificate-image img');
    const modalTitle = title === 'Student Leadership Education' ? 'Student Leadership Education (SLE)' : title === 'PPKO Training' ? 'PPKO Training - Winter School' : title;
    const mediaMarkup = media.tagName === 'IFRAME'
      ? `<iframe src="${media.src}" title="${title}"></iframe>`
      : `<img src="${media.src}" alt="${title}">`;
    certificateModal.querySelector('.certificate-modal-content').innerHTML = `<div class="certificate-full-media">${mediaMarkup}</div><p class="modal-label">Sertifikat pelatihan</p><h2>${modalTitle}</h2><p>${certificateCaptions[title]}</p>`;
    certificateModal.showModal();
  };
  card.addEventListener('click', openCertificate);
  card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openCertificate(); } });
});
document.querySelector('.certificate-close').addEventListener('click', () => certificateModal.close());
certificateModal.addEventListener('click', event => { if (event.target === certificateModal) certificateModal.close(); });
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active'); button.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => { card.style.display = button.dataset.filter === 'all' || card.dataset.type === button.dataset.filter ? '' : 'none'; });
}));
const skillLogoGroups = [
  [['photoshop logo.webp', 'Photoshop'], ['figma logo.png', 'Figma'], ['canva logo.png', 'Canva'], ['capcut logo.png', 'CapCut']],
  [['html logo.webp', 'HTML'], ['csslogo.png', 'CSS'], ['javascript logo.png', 'JavaScript'], ['sql logo.jpg', 'SQL'], ['vscode logo.png', 'VS Code']],
  [['linkedin logo.webp', 'LinkedIn'], ['tiktok logo.png', 'TikTok'], ['instagram logo.png', 'Instagram'], ['youtube logo.webp', 'YouTube']]
];
document.querySelectorAll('.technical-cards .app-logos .logo-cloud').forEach((cloud, index) => {
  cloud.innerHTML = skillLogoGroups[index].map(([file, label]) => `<img src="${encodeURIComponent(file)}" alt="${label}" title="${label}" />`).join('');
});
const trainingCards = document.querySelectorAll('.cert-card');
[['sertif revou.png', 'Sertifikat Coding Camp Software Engineer'], ['sertif gemini.png', 'Sertifikat Gemini AI Certification']].forEach(([src, alt], index) => {
  const frame = trainingCards[index]?.querySelector('.certificate-image iframe');
  if (frame) frame.outerHTML = `<img src="${src}" alt="${alt}" />`;
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('scrolled', scrollY > 20));
const pages = [...document.querySelectorAll('.page')];
function showPage(id) {
  const target = document.getElementById(id);
  if (!target || !target.classList.contains('page')) return false;
  pages.forEach(page => page.classList.toggle('active', page === target));
  document.querySelectorAll('.site-header nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  target.querySelectorAll('.reveal').forEach(item => item.classList.add('visible'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return true;
}
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const id = link.getAttribute('href').slice(1);
  if (link.closest('.site-header nav')) {
    document.querySelectorAll('.site-header nav a').forEach(menu => menu.classList.remove('menu-click'));
    void link.offsetWidth;
    link.classList.add('menu-click');
  }
  if (showPage(id)) event.preventDefault();
}));
showPage('home');
