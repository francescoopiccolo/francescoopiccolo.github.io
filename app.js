const articles = [
  ['fuffaguru-dubai', 'Ho lavorato con un fuffaguru di Dubai', 'I worked with a Dubai fake guru'],
  ['lancio-40k', 'Ho fatto un lancio da 40k in una settimana. In questa skill ho messo tutto quello che abbiamo fatto', 'I did a 40k launch in a week. This skill contains everything we did'],
  ['skill-substack', 'Ho creato una skill per Substack che ha portato un mio cliente nella top 50 tech', 'I created a Substack skill that helped a client reach the tech top 50'],
  ['brand-offer', 'Brand based VS Offer based', 'Brand based VS Offer based'],
  ['eureka', 'Ho aiutato un mio amico con una startup (Eureka)', 'I helped a friend with a startup (Eureka)'],
  ['clipping', 'Ho venduto il primo servizio di clipping in Italia', 'I sold the first clipping service in Italy'],
];
const copy = {
  it: { blog: 'Blog', blogIntro: 'Storie, esperimenti e cose che ho imparato.', writing: 'Cose che ho scritto', back: 'Torna al blog', draft: 'Questo articolo è ancora da scrivere. Per ora, c’è il titolo.', skip: 'Salta al contenuto', navigation: 'Navigazione principale', language: 'Lingua' },
  en: { blog: 'Blog', blogIntro: 'Stories, experiments, and things I’ve learned.', writing: 'Things I’ve written', back: 'Back to the blog', draft: 'This article hasn’t been written yet. For now, here’s the title.', skip: 'Skip to content', navigation: 'Main navigation', language: 'Language' }
};
const homeContent = {
  en: `
    <h1>Hi I’m Francesco</h1>
    <div class="intro">
      <p>And in the last 5 years I’ve been simultaneously studying statistics and working as a marketer for different businesses online.</p>
      <p>I made my first money in the physical world at 10 when I sold presepi as a scout outside a church after Sunday mass.</p>
      <p>I always believed in having various interests and I came to notice there’s a compound interest that gets collected when applying to different fields.</p>
      <p>There’s been intuition in my marketing experiences that I wouldn’t have thought about if not for my technical statistics studies.</p>
      <p>And research theses I would have approached in a whole different way if not thanks to my work experiences.</p>
      <p>I have helped a YouTuber sell his first product to his subscribers and built a funnel that made 40k euros in a single week of launch organically with 100 paying users.</p>
      <p>I built an AI skill for writing content for a client’s Substack newsletter and climbed to the top 50 in tech in Italy.</p>
      <p>Worked on a dynamic AI Agent Harness inspired by Pi Agent that leverages very few essential tools and extensions, using a routing model to keep context lean and emulate the ease of use of much bigger harnesses than Pi Agent. Keeping 40% fewer tokens on average.</p>
      <p>Currently leading the growth for <a href="https://www.dodotag.com/it">Dodotag</a>, the search engine for YouTubers.</p>
      <p>Built <a href="https://www.writehugs.com/">Writehugs</a>, a web app to send digital envelopes with cute messages and stickers.</p>
      <p>Now some little <em>learning opportunities</em> I encountered:</p>
      <ul class="stories">
        <li>Social network for students who want to be founders → did my first sales calls for a product that wasn’t myself. Got on a call with a Harvard student association. Reached 1000 users. Nobody was actually using it though.</li>
        <li>Stand-up comedian career → 5k followers on TikTok but it was not as exciting as expected.</li>
        <li>Built a chatbot for the #1 finance podcast in Italy → at the question “Cool! Where do you see this being helpful for the podcast?” I had no reply.</li>
      </ul>
      <p>Endless more projects didn’t work.<br>But I learned a lot.</p>
      <p>Sometimes I write about my mess-ups building stuff or when things went really right. If you want me to hit you up when I write, drop your email below.</p>
    </div>`,
  it: `
    <h1>Ciao, sono Francesco</h1>
    <div class="intro">
      <p>Negli ultimi cinque anni ho studiato statistica e, allo stesso tempo, lavorato come marketer per diverse attività online.</p>
      <p>Ho guadagnato i miei primi soldi nel mondo fisico a dieci anni, quando da scout vendevo presepi fuori da una chiesa dopo la messa della domenica.</p>
      <p>Ho sempre creduto nel coltivare interessi diversi. Mi sono accorto che applicare ciò che impari in un campo a un altro crea una sorta di interesse composto.</p>
      <p>Nel marketing ho avuto intuizioni che non avrei avuto senza i miei studi tecnici di statistica.</p>
      <p>E ho affrontato tesi di ricerca in modo diverso grazie alle esperienze di lavoro.</p>
      <p>Ho aiutato uno YouTuber a vendere il suo primo prodotto agli iscritti e costruito un funnel che ha generato 40mila euro in una settimana di lancio organico, con 100 clienti paganti.</p>
      <p>Ho creato una skill AI per scrivere i contenuti della newsletter Substack di un cliente, arrivata nella top 50 tech in Italia.</p>
      <p>Ho lavorato a un AI Agent Harness dinamico ispirato a Pi Agent: pochi strumenti ed estensioni essenziali, più un modello di routing per mantenere leggero il contesto e offrire la semplicità d’uso di harness molto più grandi. In media, con il 40% di token in meno.</p>
      <p>Ora mi occupo della crescita di <a href="https://www.dodotag.com/it">Dodotag</a>, il motore di ricerca per YouTuber.</p>
      <p>Ho creato <a href="https://www.writehugs.com/">Writehugs</a>, una web app per inviare buste digitali con messaggi carini e sticker.</p>
      <p>Ho avuto anche qualche piccola <em>occasione per imparare</em>:</p>
      <ul class="stories">
        <li>Un social network per studenti che volevano fondare una startup → le mie prime chiamate di vendita per un prodotto che non ero io. Ho parlato con un’associazione studentesca di Harvard. Siamo arrivati a 1000 utenti, ma nessuno lo usava davvero.</li>
        <li>Una carriera da stand-up comedian → 5mila follower su TikTok, ma non era emozionante come immaginavo.</li>
        <li>Un chatbot per il podcast di finanza numero uno in Italia → alla domanda «Bello! In che modo potrebbe essere utile per il podcast?» non avevo una risposta.</li>
      </ul>
      <p>Infiniti altri progetti non hanno funzionato.<br>Ma ho imparato molto.</p>
      <p>Ogni tanto scrivo degli errori che ho fatto costruendo qualcosa, o delle volte in cui è andata davvero bene. Se vuoi sapere quando pubblico, lascia la tua email qui sotto.</p>
    </div>`
};
let language = 'en';
const main = document.querySelector('main');
function title(article) { return article[language === 'it' ? 1 : 2]; }
function list() { return `<ul class="essays">${articles.map(article => `<li><a href="#blog/${article[0]}">${title(article)}</a></li>`).join('')}</ul>`; }
function newsletterForm() {
  return `<div class="newsletter">
    <iframe src="https://francescopiccolo.substack.com/embed?transparent=1" title="${language === 'it' ? 'Iscriviti alla newsletter di Francesco Piccolo' : 'Subscribe to Francesco Piccolo’s newsletter'}" width="480" height="320" loading="lazy" scrolling="no"></iframe>
  </div>`;
}
function render() {
  const route = location.hash.slice(1) || 'home';
  if (route === 'moah') {
    location.replace('https://francescoopiccolo.github.io/moah-website/index.html');
    return;
  }
  const text = copy[language];
  const article = articles.find(item => route === `blog/${item[0]}`);
  const page = article ? 'blog' : ['home', 'blog', 'moah'].includes(route) ? route : 'home';
  document.documentElement.lang = language;
  document.querySelector('.skip-link').textContent = text.skip;
  document.querySelector('nav').setAttribute('aria-label', text.navigation);
  document.querySelector('.languages').setAttribute('aria-label', text.language);
  document.querySelectorAll('[data-page]').forEach(link => { link.removeAttribute('aria-current'); if (link.dataset.page === page) link.setAttribute('aria-current', 'page'); });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  if (article) main.innerHTML = `<a class="back" href="#blog">${text.back}</a><h1>${title(article)}</h1><p class="note">${text.draft}</p>`;
  else if (page === 'blog') main.innerHTML = `<h1>${text.blog}</h1><p>${text.blogIntro}</p><h2>${text.writing}</h2>${list()}`;
  else main.innerHTML = homeContent[language] + newsletterForm();
  document.title = `${article ? title(article) : page === 'home' ? '' : page === 'moah' ? 'MoAH' : 'Blog'}${page === 'home' ? '' : ' · '}Francesco Piccolo`;
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => { language = button.dataset.language; render(); }));
document.querySelector('.skip-link').addEventListener('click', event => { event.preventDefault(); main.focus(); });
window.addEventListener('hashchange', () => { render(); main.focus(); window.scrollTo(0, 0); });
render();
