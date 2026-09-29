const UNSPLASH = "https://images.unsplash.com";

const PHOTOS = {
  solsticeJar: `${UNSPLASH}/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=900&q=80`,
  smoker: `${UNSPLASH}/photo-1781498269243-ca6119bd96a9?auto=format&fit=crop&w=800&q=80`,
  comb: `${UNSPLASH}/photo-1570634433336-be7629414ce1?auto=format&fit=crop&w=800&q=80`,
  crowdedHive: `${UNSPLASH}/photo-1702396304193-bb39891d9d02?auto=format&fit=crop&w=800&q=80`,
  springJars: `${UNSPLASH}/photo-1572102329980-f9e3c4b955e1?auto=format&fit=crop&w=800&q=80`,
  collage1: `${UNSPLASH}/photo-1748286206989-170a93a3223a?auto=format&fit=crop&w=500&q=75`,
  collage2: `${UNSPLASH}/photo-1679923976613-86113e863b34?auto=format&fit=crop&w=500&q=75`,
  collage3: `${UNSPLASH}/photo-1688940738708-5a59256ab294?auto=format&fit=crop&w=500&q=75`,
  field1: `${UNSPLASH}/photo-1758522965330-21f181a3ce16?auto=format&fit=crop&w=700&q=80`,
  field2: `${UNSPLASH}/photo-1758522965231-4d7dde21ae7b?auto=format&fit=crop&w=700&q=80`,
  field3: `${UNSPLASH}/photo-1736578147818-ab483af93646?auto=format&fit=crop&w=700&q=80`,
};

export default function Main() {
  return (
    <main id="app">
      <section className="page">
        <div className="hero" id="top">
          <div className="comb-bg"></div>
          <div className="wrap stack">
            <p className="eyebrow">New &mdash; 2026 Harvest</p>
            <h1 className="h-xl" style={{ marginTop: "14px" }}>Solstice.</h1>
            <p className="sub" style={{ marginTop: "18px" }}>
              Single-extraction wildflower honey, pressed once and never blended.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#harvest">Buy &mdash; $28</a>
              <a className="btn btn--outline" href="#harvest">Learn more</a>
            </div>
          </div>
          <figure className="hero-art art-photo">
            <img
              src={PHOTOS.solsticeJar}
              alt="A jar of Solstice wildflower honey with fresh comb"
              fetchPriority="high"
              width="900"
              height="1200"
            />
          </figure>
        </div>

        <div className="panel panel--light" id="hives">
          <div className="stack wrap">
            <p className="eyebrow">Hive Systems</p>
            <h2 className="h-lg" style={{ marginTop: "14px" }}>HX-1.</h2>
            <p className="sub" style={{ marginTop: "16px" }}>
              Twenty frames of milled cedar, wired for a Monitor that never sleeps.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#hives">Buy &mdash; $420</a>
              <a className="btn btn--outline" href="#hives">Learn more</a>
            </div>
          </div>
          <figure className="band-art band-art--tall art-photo">
            <img
              src="/img/hx1-hive.jpg"
              alt="The HX-1 cedar hive with the Hive Monitor clipped to its front"
              width="1448"
              height="1086"
            />
          </figure>
        </div>

        <div className="panel panel--dark on-dark" id="harvest">
          <div className="comb-bg"></div>
          <div className="stack wrap">
            <p className="eyebrow">Late Season</p>
            <h2 className="h-lg" style={{ marginTop: "14px" }}>
              <em className="accent-word">Vesper</em>.
            </h2>
            <p className="sub" style={{ marginTop: "16px" }}>
              Buckwheat honey, pulled after the first frost. Dark, mineral, almost molasses.
            </p>
            <div className="btn-row">
              <a className="btn btn--light" href="#harvest">Buy &mdash; $34</a>
              <a className="btn btn--outline-dark" href="#harvest">Learn more</a>
            </div>
          </div>
          <figure className="band-art art-photo">
            <img
              src="/img/vesper.jpg"
              alt="Vesper buckwheat honey, near-black in the jar"
              width="1448"
              height="1086"
            />
          </figure>
        </div>

        <div className="panel panel--wash">
          <div className="stack wrap">
            <p className="eyebrow">Field Instruments</p>
            <h2 className="h-lg" style={{ marginTop: "14px" }}>Optics.</h2>
            <p className="sub" style={{ marginTop: "16px" }}>
              A lens that counts wings at the entrance and tells you when to open the box.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#hives">Buy &mdash; $189</a>
              <a className="btn btn--outline" href="#hives">Learn more</a>
            </div>
          </div>
          <figure className="band-art art-photo">
            <img
              src="/img/optics-entrance.jpg"
              alt="The Optics camera watching bees at the hive entrance"
              width="1445"
              height="1088"
            />
          </figure>
        </div>

        <div className="bento">
          <div className="panel panel--light panel--tight">
            <div className="stack wrap">
              <h3 className="h-md">Hive Monitor.</h3>
              <p className="sub sub--muted" style={{ marginTop: "12px", fontSize: "clamp(16px,1.7vw,21px)" }}>
                Weight, weather, and queen status. Logged every six minutes.
              </p>
              <div className="btn-row">
                <a className="btn btn--outline btn--sm" href="#hives">Learn more</a>
              </div>
            </div>
            <figure className="band-art art-photo">
              <img
                src="/img/hive-monitor.jpg"
                alt="The Hive Monitor, a brass-mounted hive weight sensor"
                width="1254"
                height="1254"
              />
            </figure>
          </div>

          <div className="panel panel--dark panel--tight on-dark">
            <div className="stack wrap">
              <h3 className="h-md">Smoker No. 4.</h3>
              <p className="sub" style={{ marginTop: "12px", fontSize: "clamp(16px,1.7vw,21px)" }}>
                Brass, stainless, leather bellows. Fired a thousand times and counting.
              </p>
              <div className="btn-row">
                <a className="btn btn--light btn--sm" href="#harvest">Buy &mdash; $96</a>
              </div>
            </div>
            <figure className="band-art art-photo">
              <img
                src={PHOTOS.smoker}
                alt="Beekeeper in protective suit operating a metal bee smoker"
                loading="lazy"
                width="800"
                height="600"
              />
            </figure>
          </div>

          <div className="panel panel--light panel--tight">
            <div className="stack wrap">
              <h3 className="h-md">Frame 12.</h3>
              <p className="sub sub--muted" style={{ marginTop: "12px", fontSize: "clamp(16px,1.7vw,21px)" }}>
                Wax foundation cured in our own hives. No plastic, no coatings.
              </p>
              <div className="btn-row">
                <a className="btn btn--outline btn--sm" href="#hives">Learn more</a>
              </div>
            </div>
            <figure className="band-art art-photo">
              <img
                src={PHOTOS.comb}
                alt="Honeycomb dripping with golden honey"
                loading="lazy"
                width="800"
                height="600"
              />
            </figure>
          </div>

          <div className="panel panel--dark panel--tight on-dark">
            <div className="stack wrap">
              <h3 className="h-md">Nuc Box.</h3>
              <p className="sub" style={{ marginTop: "12px", fontSize: "clamp(16px,1.7vw,21px)" }}>
                Five frames, one laying queen, ready to move in by the weekend.
              </p>
              <div className="btn-row">
                <a className="btn btn--light btn--sm" href="#hives">Buy &mdash; $145</a>
              </div>
            </div>
            <figure className="band-art art-photo">
              <img
                src={PHOTOS.crowdedHive}
                alt="Close-up of a hive crowded with bees"
                loading="lazy"
                width="800"
                height="600"
              />
            </figure>
          </div>

          <div className="panel panel--light panel--tight">
            <div className="stack wrap">
              <h3 className="h-md">Field Journal.</h3>
              <p className="sub sub--muted" style={{ marginTop: "12px", fontSize: "clamp(16px,1.7vw,21px)" }}>
                Every inspection, weight shift, and robbing event &mdash; mapped and dated.
              </p>
              <div className="btn-row">
                <a className="btn btn--outline btn--sm" href="#journal">Read the journal</a>
              </div>
            </div>
            <div className="collage" aria-hidden="true">
              <i><img src={PHOTOS.collage1} alt="" loading="lazy" width="500" height="667" /></i>
              <i><img src={PHOTOS.collage2} alt="" loading="lazy" width="500" height="667" /></i>
              <i><img src={PHOTOS.collage3} alt="" loading="lazy" width="500" height="667" /></i>
            </div>
          </div>

          <div className="panel panel--dark panel--tight on-dark">
            <div className="stack wrap">
              <h3 className="h-md">Spring No. 2.</h3>
              <p className="sub" style={{ marginTop: "12px", fontSize: "clamp(16px,1.7vw,21px)" }}>
                The pale one. Apple bloom and clover, pulled in the first week of May.
              </p>
              <div className="btn-row">
                <a className="btn btn--light btn--sm" href="#harvest">Buy &mdash; $26</a>
              </div>
            </div>
            <figure className="band-art art-photo">
              <img
                src={PHOTOS.springJars}
                alt="Jars of pale spring honey"
                loading="lazy"
                width="800"
                height="600"
              />
            </figure>
          </div>
        </div>

        <div className="field-band">
          <div className="section-head" style={{ marginBottom: "26px" }}>
            <p className="eyebrow">In the field</p>
            <h2 className="h-md" style={{ marginTop: "12px" }}>Keepers, at work.</h2>
          </div>
          <div className="wrap">
            <div className="field-grid">
              <figure>
                <img
                  src={PHOTOS.field1}
                  alt="Beekeeper in a protective suit working beside hives in a field"
                  loading="lazy"
                  width="700"
                  height="875"
                />
              </figure>
              <figure>
                <img
                  src={PHOTOS.field2}
                  alt="Beekeeper holding up a frame heavy with bees"
                  loading="lazy"
                  width="700"
                  height="875"
                />
              </figure>
              <figure>
                <img
                  src={PHOTOS.field3}
                  alt="Beekeeper inspecting a honeycomb frame in the apiary"
                  loading="lazy"
                  width="700"
                  height="875"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="rail-head" id="journal">
          <div className="section-head">
            <p className="eyebrow">FoxHound Stories</p>
            <h2 className="h-lg" style={{ marginTop: "12px" }}>Field Journal.</h2>
            <p className="sub sub--muted" style={{ marginTop: "14px", fontSize: "clamp(16px,1.8vw,21px)" }}>
              Films, inspections, and long nights at the out-apiary.
            </p>
          </div>
        </div>

        <EpisodesRail />
        <GuidesRail />

        <div className="copy-band">
          <div className="wrap">
            <div className="copy-grid">
              <div className="copy-block">
                <h3 className="h-sm">What comes with the HX-1.</h3>
                <ul>
                  <li data-n="01">Deep brood body, twenty frames, wired and waxed</li>
                  <li data-n="02">Telescoping lid with a ventilated crown board</li>
                  <li data-n="03">Monitor cradle, load cells pre-calibrated</li>
                  <li data-n="04">Entrance reducer, mouse guard, robber screen</li>
                  <li data-n="05">Ten-year cedar warranty, transferable once</li>
                </ul>
                <p className="lede">
                  Every HX-1 leaves the shop assembled, squared, and signed by the maker.
                  Nothing arrives in a flat pack, and nothing needs a second pair of hands to
                  put together.
                </p>
              </div>
              <div className="copy-block">
                <h3 className="h-sm">How we keep bees.</h3>
                <ol>
                  <li data-n="01">One yard, one queen line &mdash; no open mating, no surprises</li>
                  <li data-n="02">We feed nothing but our own capped stores</li>
                  <li data-n="03">Mite counts weekly from June, always written down</li>
                  <li data-n="04">Never a chemical treatment inside a honey super</li>
                  <li data-n="05">Split early, combine late, interfered with rarely</li>
                </ol>
                <p className="lede">
                  Sixteen yards across three valleys, all within an hour of the extraction
                  house. Short haul means warm frames and a cleaner pour.
                </p>
              </div>
            </div>
          </div>
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
  {
    bg: "#5A4632",
    img: `${UNSPLASH}/photo-1745742902043-f2f085a87c83?auto=format&fit=crop&w=900&q=80`,
    imgW: 900,
    imgH: 731,
    kicker: "Episode 11 · 9 min",
    title: "Valley Floor",
    body: null,
    btn: "btn--light",
  },
  {
    bg: "#1F1A14",
    img: `${UNSPLASH}/photo-1749628523016-c33a7ecffa2a?auto=format&fit=crop&w=900&q=80`,
    imgW: 900,
    imgH: 731,
    kicker: "Episode 10 · 7 min",
    title: "First Frost",
    body: null,
    btn: "btn--light",
    noScrim: true,
  },
  {
    bg: "#8A7350",
    img: `${UNSPLASH}/photo-1748286206989-170a93a3223a?auto=format&fit=crop&w=900&q=80`,
    imgW: 900,
    imgH: 731,
    kicker: "Episode 09 · 12 min",
    title: "Queen Cells",
    body: null,
    btn: "btn--light",
    noScrim: true,
  },
  {
    bg: "#2E2A22",
    img: `${UNSPLASH}/photo-1702396304193-bb39891d9d02?auto=format&fit=crop&w=900&q=80`,
    imgW: 900,
    imgH: 731,
    kicker: "Episode 08 · 6 min",
    title: "The Nuc Yard",
    body: null,
    btn: "btn--light",
    noScrim: true,
  },
];

function EpisodesRail() {
  return (
    <div className="rail-wrap">
      <div className="rail" tabIndex={0} role="region" aria-label="Episodes">
        <div className="rail-track">
          {EPISODES.map((e) => (
            <a
              key={e.title}
              className={e.feature ? "tile tile--feature" : "tile tile--sm"}
              href="#journal"
              style={e.bg ? { background: e.bg } : undefined}
            >
              <img
                className="tile-art"
                src={e.img}
                alt=""
                loading="lazy"
                width={e.imgW}
                height={e.imgH}
              />
              <span className="tile-vignette"></span>
              {!e.noScrim && <span className="tile-scrim"></span>}
              <span className="tile-copy">
                <span className="kicker">{e.kicker}</span>
                <h3 className={e.stencil ? "stencil" : undefined}>{e.title}</h3>
                {e.body && <p>{e.body}</p>}
                <span className={`btn ${e.btn} btn--sm`}>Watch</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <button className="rail-nav rail-nav--prev" type="button" aria-label="Scroll episodes back" disabled>
        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ transform: "rotate(180deg)" }}>
          <use href="#i-chev" />
        </svg>
      </button>
      <button className="rail-nav rail-nav--next" type="button" aria-label="Scroll episodes forward">
        <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-chev" /></svg>
      </button>
    </div>
  );
}

const GUIDES = [
  {
    bg: "#3B2E20",
    img: `${UNSPLASH}/photo-1573697610008-4c72b4e9508f?auto=format&fit=crop&w=600&q=75`,
    kicker: "Guide",
    title: "Reading a frame",
    whiteMark: false,
  },
  {
    bg: "#5A4632",
    img: `${UNSPLASH}/photo-1749628523016-c33a7ecffa2a?auto=format&fit=crop&w=600&q=75`,
    kicker: "Field note",
    title: "First frost",
    whiteMark: false,
  },
  {
    bg: "#1F1A14",
    img: `${UNSPLASH}/photo-1503040421714-b569d90342cb?auto=format&fit=crop&w=600&q=75`,
    kicker: "Data",
    title: "Yield curve",
    whiteMark: false,
  },
  {
    bg: "#8A7350",
    img: `${UNSPLASH}/photo-1727120279660-5c28b8461609?auto=format&fit=crop&w=600&q=75`,
    kicker: "Species",
    title: "Forage map",
    whiteMark: true,
  },
  {
    bg: "#2E2A22",
    img: `${UNSPLASH}/photo-1691567116139-6b60b78c595b?auto=format&fit=crop&w=600&q=75`,
    kicker: "Archive",
    title: "2013 ledger",
    whiteMark: false,
  },
];

function GuidesRail() {
  return (
    <div className="rail-row2">
      {GUIDES.map((g) => (
        <a key={g.title} className="tile" href="#journal" style={{ background: g.bg }}>
          <img
            className="tile-art"
            src={g.img}
            alt=""
            loading="lazy"
            width="600"
            height="673"
          />
          <span className="tile-vignette"></span>
          <svg
            className="tile-mark"
            viewBox="0 0 32 32"
            aria-hidden="true"
            style={g.whiteMark ? { color: "#fff" } : undefined}
          >
            <use href="#i-mark" />
          </svg>
          <span className="tile-copy">
            <span className="kicker">{g.kicker}</span>
            <h3>{g.title}</h3>
            <span className="btn btn--light btn--sm">Open</span>
          </span>
        </a>
      ))}
    </div>
  );
}
