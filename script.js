:root{
  --ink:#1b2430;
  --muted:#6b7b8c;
  --bg:#f6f8fb;
  --brand:#2166f3;
  --brand-2:#00c2c7;
  --card:#ffffff;
  --ok:#1e7e34;
}

*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--ink);
  background:var(--bg);
  line-height:1.6;
}

/* Nav */
.site-header{position:sticky;top:0;z-index:50;background:#0f1623cc;backdrop-filter:saturate(150%) blur(6px)}
.nav{max-width:1100px;margin:auto;display:flex;align-items:center;gap:1rem;padding:.8rem 1rem}
.logo{color:#fff;text-decoration:none;font-weight:700}
.nav-toggle{display:none;background:transparent;border:1px solid #3a4a62;color:#fff;padding:.2rem .5rem;border-radius:6px}
.nav-links{list-style:none;margin:0;padding:0;display:flex;gap:1rem}
.nav-links a{color:#cfe3ff;text-decoration:none;padding:.4rem .6rem;border-radius:6px}
.nav-links a:hover{background:#223148}

/* Hero with optional background.jpg */
.hero{
  min-height:62vh;
  background:
    linear-gradient(180deg, #0f1623 0%, #15223a 60%, #0f1623 100%),
    url('background.jpg') center/cover no-repeat;
  color:#fff;
  display:grid;
  place-items:center;
}
.hero-overlay{background:linear-gradient(0deg, #0f1623cc, #0f162388);width:100%;height:100%}
.hero-content{max-width:900px;margin:auto;text-align:center;padding:3rem 1rem}
.hero h1{font-size:clamp(1.8rem, 3.5vw, 3rem);margin:.2rem 0}
.hero p{color:#d9e6ff}
.hero .meta{font-size:.9rem;color:#b9c7e6;margin-top:1rem}
.hero-cta{display:flex;gap:.8rem;justify-content:center;margin-top:1rem}
.btn{display:inline-block;border:1px solid #7aa7ff;color:#e3eeff;padding:.6rem .9rem;border-radius:8px;text-decoration:none}
.btn:hover{background:#233757}
.btn.primary{background:var(--brand);border-color:var(--brand);color:#fff}
.btn.primary:hover{background:#1d57c5}
.btn.ghost{background:transparent}

/* Sections */
.section{max-width:1100px;margin:auto;padding:3rem 1rem}
.section h2{margin:0 0 .8rem}
.note{background:#eef5ff;border-left:4px solid var(--brand);padding:.8rem;border-radius:6px}
.muted{color:var(--muted)}
.small{font-size:.9rem}

/* Cards */
.cards .card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1rem;margin-top:1rem}
.card{background:var(--card);border:1px solid #e6ecf5;border-radius:12px;padding:1rem;box-shadow:0 1px 2px rgba(10,20,30,.05)}

/* Eligibility */
.elig-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:1rem}
.checklist{list-style:none;padding:0;margin:.3rem 0}
.checklist li{padding:.45rem .6rem .45rem 2rem;position:relative;background:#fff;border:1px solid #ebf0f6;border-radius:8px;margin:.4rem 0}
.checklist li::before{content:"✔";color:var(--ok);position:absolute;left:.6rem}

/* Steps */
.steps .stepper{counter-reset:s;list-style:none;padding:0;margin:1rem 0}
.steps .stepper li{counter-increment:s;background:#fff;border:1px solid #ebf0f6;border-radius:12px;padding:1rem 1rem 1rem 3.2rem;margin:.8rem 0;position:relative}
.steps .stepper li::before{content:counter(s);position:absolute;left:.9rem;top:1rem;background:var(--brand);color:#fff;width:1.6rem;height:1.6rem;border-radius:999px;display:grid;place-items:center;font-size:.9rem}

/* FAQ */
.faq{background:#fff;border:1px solid #e6ecf5;border-radius:10px;margin:.6rem 0;padding:.4rem .8rem}
.faq > summary{cursor:pointer;font-weight:600;list-style:none}
.faq[open]{border-color:#bcd0ff}
.faq > div{margin:.6rem 0 .2rem 0;color:#2a3447}

/* Timeline / Stats */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin:1rem 0}
.stat{background:#fff;border:1px solid #e6ecf5;border-radius:12px;padding:1rem;text-align:center}
.stat-number{font-size:2rem;font-weight:800;color:#1d57c5}
.stat-label{color:var(--muted)}

/* Action buttons */
.action .action-buttons{display:flex;flex-wrap:wrap;gap:1rem;margin-top:1rem}
.btn-petition{background:var(--brand);color:#fff;border-radius:8px;padding:.7rem 1rem;text-decoration:none}
.btn-donate{background:#28a745;color:#fff;border-radius:8px;padding:.7rem 1rem;text-decoration:none}

/* Contact form */
.contact form{max-width:640px;margin:1rem auto}
.form-row{display:flex;flex-direction:column;gap:.3rem;margin:.7rem 0}
input,textarea{border:1px solid #cfd9e6;border-radius:8px;padding:.7rem;font:inherit;background:#fff}
input:focus,textarea:focus{outline:2px solid #bcd0ff}
.form-status{margin-top:.6rem;color:var(--ok);min-height:1.2rem}

/* Footer */
.site-footer{background:#0f1623;color:#cdd8ec;text-align:center;padding:1.4rem}

/* Mobile menu */
@media (max-width: 820px){
  .nav-toggle{display:inline-block}
  .nav-links{display:none;flex-direction:column;background:#0f1623;padding:1rem;border-radius:10px;position:absolute;right:1rem;top:3.2rem}
  .nav-links.show{display:flex}
}
