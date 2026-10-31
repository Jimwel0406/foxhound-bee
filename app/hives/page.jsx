import Link from "next/link";
import Sprite from "../../components/Sprite";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Entrance from "../../components/Entrance";
import Behaviours from "../../components/Behaviours";
import "../../components/Home.css";
import "./Hives.css";

export const metadata = { title: "Hives & Equipment — FoxHound Bee", description: "Meet the HX-1 cedar hive, Hive Monitor, Optics, and the tools for keeping bees." };
const photo = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&q=90`;
const equipment = [
  { id: "smoker", product: "smoker", name: "Smoker No. 4", price: "$96", note: ["Brass, stainless, leather bellows."], image: photo("1781498269243-ca6119bd96a9"), alt: "A beekeeper using a metal smoker" },
  { id: "frame", name: "Frame 12", note: ["Wax foundation cured in our own hives.", "No plastic, no coatings."], image: photo("1570634433336-be7629414ce1"), alt: "Golden wax honeycomb" },
  { id: "nuc", product: "nuc", name: "Nuc Box", price: "$145", note: ["Five frames, one laying queen,", "ready to move in."], image: photo("1702396304193-bb39891d9d02"), alt: "Honeybees gathered on a hive" },
];

export default function Hives() {
  return <><Sprite /><Header /><main id="top" className="fh-home fh-hives-page"><Entrance />
    <section className="hi-opening" data-entrance-opening aria-labelledby="hives-title">
      <div className="hi-open-copy">
        <div className="hi-title" data-entrance="rise"><h1 id="hives-title"><span className="fh-title-line"><span>Built around</span></span><span className="fh-title-line"><span>the hive.</span></span></h1><p>Hives, instruments, and tools.<br />For the work of keeping bees.</p></div>
        <div className="hi-bar" data-entrance="rise" data-motion-effect="from-left"><div><h2>HX-1.</h2><p>Twenty frames.<br />Milled cedar.</p></div><div><strong>$420</strong><Link className="fh-link" href="/product/hx1">Buy the HX-1 <span aria-hidden="true">↗</span></Link></div></div>
      </div>
      <div className="hi-stage-image" data-entrance="image"><img src="/img/hx1-hive.jpg" alt="HX-1 cedar hive with its lid lifted to reveal the frames" width="1448" height="1086" fetchPriority="high" /></div>
    </section>
    <section className="hi-instruments" aria-labelledby="instruments-title"><div className="fh-shell"><div className="hi-section-head" data-entrance="rise"><h2 id="instruments-title">Know your hive.</h2><p>From the weight of the box<br />to the wings at the entrance.</p></div><div className="hi-instrument-grid">
      <article id="monitor"><div className="hi-instrument-photo" data-entrance="image" data-motion-effect="wipe-up"><img src="/img/hive-monitor.jpg" alt="Hive Monitor with its brass mounting hardware" width="1448" height="1086" loading="lazy" /></div><div data-entrance="rise"><h3>Hive Monitor.</h3><p>Weight, weather, and queen status.<br />Logged every six minutes.</p><Link className="fh-link" href="/product/monitor">Shop the Monitor <span aria-hidden="true">↗</span></Link></div></article>
      <article id="optics"><div className="hi-instrument-photo" data-entrance="image" data-motion-effect="wipe-up"><img src="/img/optics-entrance.jpg" alt="Optics camera mounted at the hive entrance" width="1445" height="1088" loading="lazy" /></div><div data-entrance="rise"><div className="hi-product-title"><h3>Optics.</h3><strong>$189</strong></div><p>A lens that counts wings at the entrance and tells you when to open the box.</p><Link className="fh-link" href="/product/optics">Shop Optics <span aria-hidden="true">↗</span></Link></div></article>
    </div></div></section>
    <section className="hi-equipment" id="equipment" aria-labelledby="equipment-title"><div className="fh-shell"><div className="hi-section-head" data-entrance="rise"><h2 id="equipment-title">Tools for<br />the rounds.</h2><p>From the first inspection<br />to the next colony.</p></div></div><div className="hi-equipment-grid">{equipment.map(item=><article id={item.id} key={item.id}><div className="hi-tool-photo" data-entrance="image" data-motion-effect="settle"><img src={item.image} alt={item.alt} width="1100" height="1100" loading="lazy" /></div><div className="hi-tool-copy" data-entrance="rise"><h3>{item.name}</h3><p>{item.note.map((l,i)=><span key={l}>{i>0&&<br />}{l}</span>)}</p><div className="hi-tool-row">{item.product?<Link className="fh-link" href={`/product/${item.product}`}>Shop {item.name} <span aria-hidden="true">↗</span></Link>:<span />}{item.price&&<strong>{item.price}</strong>}</div></div></article>)}</div></section>
    <section className="hi-ending"><div className="hi-ending-photo"><img src="/img/harvest-honeycomb-hero.webp" alt="" width="1122" height="1402" loading="lazy" /></div><Link className="hi-ending-band fh-shell" href="/harvest" aria-label="Explore the harvest"><h2>From the box<br />to the table.</h2><span className="hi-ending-go" aria-hidden="true">↗</span></Link></section>
  </main><Footer /><Behaviours /></>;
}

