:root {
  --bg: #07111f;
  --bg-2: #0d1729;
  --panel: #101e34;
  --panel-2: #172c46;
  --line: rgba(255,255,255,0.08);
  --text: #edf4ff;
  --muted: #9cb3c9;
  --green: #2ef2a3;
  --green-2: #13c97b;
  --gold: #f8b52b;
  --orange: #ff9a3d;
  --red: #ff5c7a;
  --blue: #5bc0ff;
  --shadow: 0 20px 40px rgba(0,0,0,0.28);
  --radius: 22px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Cairo", sans-serif;
  background:
    radial-gradient(circle at top right, rgba(46, 242, 163, 0.12), transparent 30%),
    radial-gradient(circle at bottom left, rgba(91, 192, 255, 0.12), transparent 30%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
  color: var(--text);
  line-height: 1.7;
}

a { text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(7, 17, 31, 0.78);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 900;
  color: var(--text);
  letter-spacing: 0.5px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: var(--bg);
  background: linear-gradient(135deg, var(--green), #8ef5c8);
  box-shadow: 0 0 25px rgba(46, 242, 163, 0.5);
}

.brand span { color: var(--green); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 14px;
}

.nav-links a {
  color: var(--muted);
  transition: 0.2s ease;
}

.nav-links a:hover { color: var(--text); }

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--gold), #f79a10);
  color: var(--bg);
  font-weight: 800;
  box-shadow: 0 10px 25px rgba(248, 181, 43, 0.3);
}

.hero {
  padding: 42px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(46, 242, 163, 0.08);
  border: 1px solid rgba(46, 242, 163, 0.25);
  color: var(--green);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 22px;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 4.3rem);
  line-height: 1.12;
  margin: 0 0 18px;
  font-weight: 900;
  color: var(--text);
}

.hero h1 .accent { color: var(--green); }

.lead {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 640px;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: 14px;
  font-weight: 800;
  transition: 0.22s ease;
  border: 1px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--green), var(--green-2));
  color: #062818;
  box-shadow: 0 12px 30px rgba(46, 242, 163, 0.3);
}

.btn-secondary {
  background: rgba(255,255,255,0.04);
  border-color: var(--line);
  color: var(--text);
}

.btn:hover { transform: translateY(-1px); }

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 10px;
}

.stat {
  min-width: 120px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 18px;
}

.stat strong {
  display: block;
  font-size: 1.6rem;
  color: var(--green);
  font-weight: 900;
  margin-bottom: 4px;
}

.stat span {
  display: block;
  color: var(--muted);
  font-size: 13px;
}

.hero-visual {
  position: relative;
  padding: 18px;
  border-radius: 30px;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  box-shadow: var(--shadow);
}

.phone-card {
  position: relative;
  border-radius: 26px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(9,18,30,0.68), rgba(9,18,30,0.95)),
    url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
  border: 1px solid rgba(255,255,255,0.08);
  min-height: 620px;
}

.camera-panel {
  position: absolute;
  inset: 18px 18px auto 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(10, 15, 25, 0.58);
  border: 1px solid rgba(255,255,255,0.09);
  backdrop-filter: blur(8px);
}

.camera-panel .live {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-weight: 700;
  font-size: 13px;
}

.panel-mini {
  font-size: 12px;
  color: var(--muted);
  font-weight: 700;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 12px rgba(255,92,122,0.8);
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

.mini-info {
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 200px;
  background: rgba(7, 17, 31, 0.8);
  border: 1px solid rgba(46,242,163,0.3);
  border-radius: 18px;
  padding: 14px 16px;
  box-shadow: var(--shadow);
}

.mini-info .title {
  color: var(--green);
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 8px;
}

.mini-info .value {
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 6px;
  color: var(--text);
}

.mini-info .meta {
  font-size: 12px;
  color: var(--muted);
}

.section {
  padding: 88px 0 0;
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.section-label {
  color: var(--green);
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 8px;
  display: inline-block;
}

h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.2;
  color: var(--text);
}

.subtext {
  color: var(--muted);
  max-width: 560px;
  font-size: 15px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 28px;
}

.feature-card {
  background: linear-gradient(180deg, rgba(16,30,52,0.9), rgba(11,20,33,0.9));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 20px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.feature-card:before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: linear-gradient(90deg, var(--green), var(--blue), var(--gold));
}

.feature-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: linear-gradient(135deg, rgba(46,242,163,0.14), rgba(91,192,255,0.12));
  border: 1px solid rgba(46,242,163,0.2);
  color: var(--green);
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 26px;
}

.service-card {
  background: rgba(16,30,52,0.82);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.service-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.service-body {
  padding: 18px 18px 22px;
}

.service-tag {
  display: inline-block;
  background: rgba(46,242,163,0.09);
  color: var(--green);
  border: 1px solid rgba(46,242,163,0.2);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-card h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.service-card p {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 14px;
}

.price-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-weight: 800;
  color: var(--text);
}

.price-line span:last-child {
  color: var(--gold);
  font-size: 1.1rem;
}

.pricing-wrap {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  margin-top: 26px;
  align-items: stretch;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(16,30,52,0.8);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

th, td {
  padding: 17px 18px;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
  text-align: right;
}

th {
  background: rgba(255,255,255,0.02);
  color: var(--green);
  font-weight: 800;
  font-size: 13px;
}

td {
  color: var(--text);
}

.price-pill {
  color: var(--gold);
  font-weight: 900;
  font-size: 1rem;
}

.mini-box {
  background: linear-gradient(180deg, rgba(17,36,56,0.9), rgba(11,20,33,0.9));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.mini-box .small-label {
  color: var(--green);
  font-weight: 800;
  font-size: 13px;
  margin-bottom: 12px;
  display: inline-block;
}

.mini-box h3 {
  margin: 0 0 14px;
  font-size: 1.45rem;
}

.mini-box ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 14px;
}

.mini-box li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.mini-box li:before {
  content: "✓";
  color: var(--green);
  font-weight: 900;
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 28px;
}

.compare-card {
  background: rgba(16,30,52,0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.compare-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.compare-body {
  padding: 18px 18px 22px;
}

.compare-body h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.compare-body p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.process {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 18px;
  margin-top: 28px;
}

.step {
  background: rgba(16,30,52,0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 18px;
  position: relative;
}

.step-number {
  position: absolute;
  top: 14px;
  left: 18px;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(46,242,163,0.18), rgba(91,192,255,0.15));
  color: var(--green);
  font-weight: 900;
  border: 1px solid rgba(46,242,163,0.25);
}

.step h3 {
  margin: 40px 0 8px;
  font-size: 1.08rem;
}

.step p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 20px;
  margin-top: 28px;
}

.project-card {
  background: rgba(16,30,52,0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.project-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.project-body {
  padding: 18px 18px 20px;
}

.project-body h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.project-body p {
  margin: 0;
  font-size: 14px;
  color: var(--muted);
}

.cta {
  margin-top: 70px;
  background:
    linear-gradient(135deg, rgba(18,31,49,0.96), rgba(12,22,34,0.96)),
    url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 32px;
  box-shadow: var(--shadow);
}

.cta-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px;
  align-items: center;
}

.cta h3 {
  margin: 0 0 10px;
  font-size: clamp(1.9rem, 2vw, 2.6rem);
}

.cta p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

.contact-panel {
  background: rgba(7,16,26,0.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
  margin-top: 32px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 16px;
}

.contact-item {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 16px;
}

.contact-item .icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 18px;
  background: rgba(46,242,163,0.1);
  color: var(--green);
  margin-bottom: 10px;
}

.contact-item h4 {
  margin: 0 0 4px;
  font-size: 1rem;
}

.contact-item a, .contact-item span {
  color: var(--muted);
  font-size: 14px;
}

.footer {
  padding: 36px 0 110px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.cart-panel {
  position: fixed;
  left: 22px;
  right: 22px;
  bottom: 82px;
  z-index: 100;
  background: rgba(16,30,52,0.96);
  border: 1px solid rgba(46,242,163,0.3);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 16px;
  display: none;
}

.cart-panel.show { display: block; }

.cart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 10px;
}

.cart-head h3 {
  margin: 0;
  font-size: 1.05rem;
  color: var(--green);
}

.cart-items {
  max-height: 150px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 8px 10px;
}

.cart-item strong {
  display: block;
  font-size: 13px;
  margin-bottom: 2px;
}

.cart-item small {
  color: var(--muted);
}

.remove-btn {
  border: 1px solid rgba(255,92,122,0.32);
  background: rgba(255,92,122,0.09);
  color: #ff9cb0;
  border-radius: 10px;
  padding: 6px 10px;
  font-weight: 700;
  cursor: pointer;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-top: 8px;
  border-top: 1px solid var(--line);
}

.total {
  color: var(--text);
  font-weight: 800;
}

.total span { color: var(--gold); }

.checkout-btn {
  border: 0;
  background: linear-gradient(135deg, var(--green), var(--green-2));
  color: #041b13;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 900;
  cursor: pointer;
}

.mobile-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 120;
  background: rgba(7, 17, 31, 0.96);
  border-top: 1px solid var(--line);
  backdrop-filter: blur(10px);
  display: flex;
  gap: 8px;
  padding: 10px;
}

.mobile-bar a {
  flex: 1;
  padding: 12px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: var(--text);
}

.wa { background: #25d366; color: #fff; }
.fb { background: #1877f2; color: #fff; }
.call { background: var(--green); color: #041b13; }

@media (max-width: 980px) {
  .hero-grid, .pricing-wrap, .cta-grid {
    grid-template-columns: 1fr;
  }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .services-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .projects-grid { grid-template-columns: 1fr 1fr; }
  .process { grid-template-columns: 1fr 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
}

@media (max-width: 640px) {
  .features-grid, .services-grid, .projects-grid, .compare-grid, .process { grid-template-columns: 1fr; }
  .hero { padding-top: 30px; }
  .phone-card { min-height: 520px; }
  .section { padding-top: 60px; }
  .cta { padding: 24px 18px; }
  .cta-actions { justify-content: flex-start; }
}
