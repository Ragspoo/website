// Basic form handling. Replace the TODO with a real request to your server.
function handle(form, okText){
  if(!form) return;
  const msg = form.querySelector('.msg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(!form.checkValidity()){
      msg.className = 'msg';
      msg.textContent = 'Please fill in all fields correctly.';
      form.reportValidity();
      return;
    }
    // TODO: send new FormData(form) to your backend, e.g. fetch('/api/contact', {method:'POST', body:new FormData(form)})
    msg.className = 'msg ok';
    msg.textContent = okText;
    form.reset();
  });
}
handle(document.getElementById('contactForm'), 'Thanks! We will get back to you soon.');
handle(document.getElementById('loginForm'), 'Logged in (demo only).');
handle(document.getElementById('signupForm'), 'Account created (demo only).');

// Login / Sign up tabs
const tl = document.getElementById('tabLogin'), ts = document.getElementById('tabSignup');
if(tl && ts){
  const lf = document.getElementById('loginForm'), sf = document.getElementById('signupForm');
  const show = n => {
    tl.setAttribute('aria-selected', n === 'login');
    ts.setAttribute('aria-selected', n === 'signup');
    lf.hidden = n !== 'login';
    sf.hidden = n !== 'signup';
  };
  tl.onclick = () => show('login');
  ts.onclick = () => show('signup');
  if(location.hash === '#signup') show('signup');
}
