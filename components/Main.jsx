import Link from "next/link";
import HomeMotion from "./HomeMotion";
import "./Home.css";

const UNSPLASH = "https://images.unsplash.com";
const photo = (id, width = 1000) => `${UNSPLASH}/photo-${id}?auto=format&fit=crop&w=${width}&q=90`;
const hexPath = x => `M${x+20} 0L${x+40} 11.5V34.5L${x+20} 46L${x} 34.5V11.5Z`;
const combRuns = Array.from({ length: 6 }, (_, r) => Array.from({ length: 6 }, (_, c) => hexPath((r * 6 + c) * 40)).join(""));

const honey = [
  { name: "Solstice", price: "$28", note: "Wildflower. Pressed once, never blended.", image: photo("1558642452-9d2a7deb7f62"), alt: "Golden honey dripping from a wooden dipper" },
  { name: "Vesper", price: "$34", note: "Buckwheat. Dark, mineral, almost molasses.", image: "/img/vesper.jpg", alt: "Vesper buckwheat honey in a glass jar" },
  { name: "Spring No. 2", price: "$26", note: "Apple bloom and clover. The pale one.", image: photo("1572102329980-f9e3c4b955e1"), alt: "Jars of pale spring honey" },
];
const tools = [
  { name: "Hive Monitor", note: "Weight, weather, queen status.", image: "/img/hive-monitor.jpg", alt: "Brass-mounted hive weight sensor", href: "/hives" },
  { name: "Smoker No. 4", price: "$96", note: "Brass and leather bellows.", image: photo("1781498269243-ca6119bd96a9"), alt: "Beekeeper operating a metal smoker", href: "/hives#smoker" },
  { name: "Frame 12", note: "Wax foundation, no plastic.", image: photo("1570634433336-be7629414ce1"), alt: "Golden honeycomb", href: "/hives" },
  { name: "Nuc Box", price: "$145", note: "Five frames and a laying queen.", image: photo("1702396304193-bb39891d9d02"), alt: "Honeybees gathered on a hive", href: "/hives" },
];

// Presets are chosen by element role (see HomeMotion.jsx): peers in a group share one preset and differ only by stagger.
const cardMotion = [
  { image: "iris", badge: "pop", title: "lines", note: "fade", link: "wipe-l" },
  { image: "iris", badge: "pop", title: "lines", note: "fade", link: "wipe-l" },
  { image: "iris", badge: "pop", title: "lines", note: "fade", link: "wipe-l" },
];
const tileMotion = ["shutter", "shutter", "shutter", "shutter"];
const guideMotion = ["wipe-u", "wipe-u", "wipe-u", "wipe-u", "wipe-u"];
const practiceMotion = ["pan-r", "pan-r", "pan-r"];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function TextLink({ href, anim, children }) { return <Link className="fh-link" href={href} data-anim={anim}>{children}<Arrow /></Link>; }

export default function Main() {
  return (
    <main id="app" className="fh-home" data-motion-home>
      <HomeMotion />
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="fh-hex-clip" clipPathUnits="objectBoundingBox"><path d="M0.45 0.025Q0.5 0 0.55 0.025L0.95 0.225Q1 0.25 1 0.3L1 0.7Q1 0.75 0.95 0.775L0.55 0.975Q0.5 1 0.45 0.975L0.05 0.775Q0 0.75 0 0.7L0 0.3Q0 0.25 0.05 0.225Z" /></clipPath>
        </defs>
      </svg>
      <section className="fh-hero" id="top" aria-labelledby="home-title">
        <div className="fh-hero-photo" data-anim="focus" data-anim-delay="120">
          <img src={photo("1558642452-9d2a7deb7f62", 2600)} alt="A wooden dipper lifted from golden wildflower honey" width="2600" height="1733" fetchPriority="high" />
        </div>
        <div className="fh-hero-shade" />
        <div className="fh-shell fh-hero-inner">
          <div className="fh-hero-copy">
            <h1 id="home-title" data-anim="lines" data-anim-delay="500"><span className="fh-title-line"><span>Keepers of</span></span><span className="fh-title-line"><span>the comb.</span></span></h1>
            <Link className="btn btn--primary fh-button" href="/harvest" data-anim="pop" data-anim-delay="800">Explore the harvest <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="fh-shelf" id="harvest" aria-labelledby="harvest-title">
        <div className="fh-shell fh-section">
          <h2 id="harvest-title" className="fh-shelf-title" data-anim="lines"><span className="fh-title-line"><span>A season.</span></span><span className="fh-title-line"><span>Its own character.</span></span></h2>
          <svg className="fh-comb" aria-hidden="true" data-anim="draw" viewBox="0 0 1440 46" preserveAspectRatio="xMinYMid slice">{combRuns.map((d, i) => <path key={i} d={d} />)}</svg>
          <div className="fh-hex-grid">
            {honey.map((item, i) => { const m = cardMotion[i]; return <article key={item.name} data-anim-step={i}>
              <div className="fh-hex-wrap">
                <Link className="fh-photo-link fh-hex" href="/harvest" aria-label={`Explore ${item.name}`}><img src={item.image} alt={item.alt} width="1000" height="1100" loading="lazy" data-anim={m.image} data-anim-origin={m.origin} /></Link>
                <b className="fh-hex-badge" data-anim={m.badge} data-anim-delay="500">{item.price}</b>
              </div>
              <h3 data-anim={m.title}>{item.name}</h3><p data-anim={m.note}>{item.note}</p><TextLink href="/harvest" anim={m.link}>Explore {item.name}</TextLink>
            </article>; })}
          </div>
        </div>
      </section>

      <section className="fh-hive" id="hives" aria-labelledby="hive-title">
        <div className="fh-hive-image" data-anim="wipe-l"><img src="/img/hx1-hive.jpg" alt="HX-1 cedar hive with its Hive Monitor attached" width="1448" height="1086" loading="lazy" /></div>
        <div className="fh-hive-copy">
          <h2 id="hive-title" data-anim="lines">Meet<br />the HX-1.</h2>
          <p className="fh-large-copy" data-anim="words">Twenty frames of milled cedar, wired for a Monitor that never sleeps.</p>
          <Link className="btn btn--light fh-button" href="/hives" data-anim="pop">Explore HX-1 — $420 <Arrow /></Link>
        </div>
      </section>

      <section className="fh-bench" aria-labelledby="tools-title">
        <div className="fh-shell fh-section">
          <div className="fh-bench-grid">
            <div className="fh-bench-head"><h2 id="tools-title" data-anim="lines">Know your<br />hives.</h2></div>
            <Link className="fh-tile fh-tile-big" href="/hives#optics" data-anim="shutter" data-anim-step="2">
              <img src="/img/optics-entrance.jpg" alt="The Optics camera observing the hive entrance" width="1445" height="1088" loading="lazy" />
              <div className="fh-tile-ov" data-anim="rise" data-anim-delay="500"><h3>Optics.</h3><p>Counts wings at the entrance.</p><span className="fh-tile-go">Explore Optics <Arrow /></span></div>
            </Link>
            {tools.map((item, i) => <Link className="fh-tile" href={item.href} key={item.name} data-anim={tileMotion[i]} data-anim-step={[0, 1, 3, 4][i]}>
              <img src={item.image} alt={item.alt} width="800" height="800" loading="lazy" />
              <div className="fh-tile-ov" data-anim="rise" data-anim-delay="500"><div className="fh-product-title"><h3>{item.name}</h3></div><p>{item.note}</p><span className="fh-tile-go">Explore <Arrow /></span></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="fh-field" aria-labelledby="keepers-title">
        <div className="fh-field-band">
          <div className="fh-field-photo" data-anim="zoom"><img src={photo("1758522965330-21f181a3ce16", 1400)} alt="A beekeeper working beside hives in a field" width="1400" height="1750" loading="lazy" /></div>
          <div className="fh-field-shade" />
          <div className="fh-shell fh-field-in"><h2 id="keepers-title" data-anim="lines" data-anim-delay="250">Keepers,<br />at work.</h2><p className="fh-large-copy" data-anim="drift" data-anim-delay="500">Sixteen yards. Three valleys. All within an hour of the extraction house.</p></div>
        </div>
        <div className="fh-shell">
          <div className="fh-field-panel" data-anim="wipe-u">
            <p data-anim="burst" data-anim-delay="350">Short haul, warm frames, cleaner pour.</p>
            <ul>
              <li data-anim={practiceMotion[0]} data-anim-step="0" data-anim-delay="450"><svg className="fh-field-mark" viewBox="0 0 40 40" aria-hidden="true" data-anim="draw" data-anim-delay="700"><path d="M20 3 35 11.5v17L20 37 5 28.5v-17Z" /><g transform="translate(8 8)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M6 6v12M10 6v12M14 6v12M18 6v12M4 16 20 8" /></g></svg><p>Mite counts weekly from June, always written down.</p></li>
              <li data-anim={practiceMotion[1]} data-anim-step="1" data-anim-delay="450"><svg className="fh-field-mark" viewBox="0 0 40 40" aria-hidden="true" data-anim="draw" data-anim-delay="700"><path d="M20 3 35 11.5v17L20 37 5 28.5v-17Z" /><g transform="translate(8 8)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 4c3 4 5 6.5 5 9.5a5 5 0 0 1-10 0C7 10.5 9 8 12 4Z" /><path d="M5 5l14 14" /></g></svg><p>Never a chemical treatment inside a honey super.</p></li>
              <li data-anim={practiceMotion[2]} data-anim-step="2" data-anim-delay="450"><svg className="fh-field-mark" viewBox="0 0 40 40" aria-hidden="true" data-anim="draw" data-anim-delay="700"><path d="M20 3 35 11.5v17L20 37 5 28.5v-17Z" /><g transform="translate(8 8)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 4v6M12 10 6 16M12 10l6 6M6 16v4M18 16v4" /></g></svg><p>Split early, combine late, interfered with rarely.</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fh-journal" id="journal" aria-labelledby="journal-title">
        <div className="fh-shell fh-section">
          <div className="fh-section-head"><h2 id="journal-title" data-anim="lines">Field Journal.</h2></div>
          <article className="fh-screen" data-anim="iris" data-anim-origin="82% 50%">
            <div className="fh-perf" aria-hidden="true" data-anim="wipe-l" data-anim-delay="500" />
            <div className="fh-screen-frame">
              <img src={EPISODES[0].img} alt="The landscape around the North Ridge apiary" width="1400" height="788" loading="lazy" />
              <div className="fh-screen-shade" aria-hidden="true" />
              <Link className="fh-play" href="/journal" aria-label={`Watch ${EPISODES[0].title}`} data-anim="pop" data-anim-delay="700"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5Z" /></svg></Link>
              <div className="fh-screen-cap"><p className="fh-meta" data-anim="typewriter" data-anim-delay="650">{EPISODES[0].kicker}</p><h3 data-anim="lines" data-anim-delay="800">{EPISODES[0].title}</h3><p data-anim="blur" data-anim-delay="1000">{EPISODES[0].body}</p><Link className="fh-screen-btn" href="/journal" data-anim="rise" data-anim-delay="1150">Watch the film <Arrow /></Link></div>
            </div>
            <div className="fh-perf" aria-hidden="true" data-anim="wipe-r" data-anim-delay="500" />
          </article>
          <nav className="fh-guides" aria-label="Field guides">{GUIDES.map((item, i) => <Link key={item.title} href="/journal" data-anim={guideMotion[i]} data-anim-step={i} style={{ backgroundImage: `url(${item.img})` }}><span className="fh-guide-v" aria-hidden="true">{item.title}</span><span className="fh-guide-in"><span>{item.kicker}</span><strong>{item.title}</strong></span><span className="fh-guide-arrow" aria-hidden="true">↗</span></Link>)}</nav>
        </div>
      </section>
    </main>
  );
}

const EPISODES = [
  {
    feature: true,
    bg: null,
    img: `${UNSPLASH}/photo-1784623153560-f9e6abb6dfe4?auto=format&fit=crop&w=1400&q=80`,
    imgW: 1400,
    imgH: 788,
    kicker: "Episode 12 · 14 min",
    title: "North Ridge",
    body: "Nine hundred metres up, three days before the fire road closes for winter.",
    btn: "btn--primary",
    stencil: true,
  },
];


const GUIDES = [
  {
    bg: "#3B2E20",
    img: `${UNSPLASH}/photo-1573697610008-4c72b4e9508f?auto=format&fit=crop&w=900&q=75`,
    kicker: "Guide",
    title: "Reading a frame",
    whiteMark: false,
  },
  {
    bg: "#5A4632",
    img: `${UNSPLASH}/photo-1749628523016-c33a7ecffa2a?auto=format&fit=crop&w=900&q=75`,
    kicker: "Field note",
    title: "First frost",
    whiteMark: false,
  },
  {
    bg: "#1F1A14",
    img: `${UNSPLASH}/photo-1503040421714-b569d90342cb?auto=format&fit=crop&w=900&q=75`,
    kicker: "Data",
    title: "Yield curve",
    whiteMark: false,
  },
  {
    bg: "#8A7350",
    img: `${UNSPLASH}/photo-1727120279660-5c28b8461609?auto=format&fit=crop&w=900&q=75`,
    kicker: "Species",
    title: "Forage map",
    whiteMark: true,
  },
  {
    bg: "#2E2A22",
    img: `${UNSPLASH}/photo-1691567116139-6b60b78c595b?auto=format&fit=crop&w=900&q=75`,
    kicker: "Archive",
    title: "2013 ledger",
    whiteMark: false,
  },
];
