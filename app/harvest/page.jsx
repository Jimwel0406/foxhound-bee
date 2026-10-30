import Link from "next/link";
import Sprite from "../../components/Sprite";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Behaviours from "../../components/Behaviours";
import Entrance from "../../components/Entrance";
import "../../components/Home.css";
import "./Harvest.css";

export const metadata = { title: "The Harvest — FoxHound Bee", description: "Explore Solstice wildflower, Vesper buckwheat, and Spring No. 2 apple bloom and clover honey." };
const photo = (id, width = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=90`;
const honeys = [
  { id: "solstice", name: "Solstice", flower: "Wildflower", price: "$28", line: "The season,\nin a jar.", note: "Single-extraction wildflower honey. Pressed once, never blended.", image: photo("1558642452-9d2a7deb7f62"), alt: "Golden honey streaming from a wooden dipper" },
  { id: "vesper", name: "Vesper", flower: "Buckwheat", price: "$34", line: "A darker\ncharacter.", note: "Dark, mineral, almost molasses. Buckwheat honey with a character of its own.", image: "/img/vesper.jpg", alt: "A glass jar of Vesper buckwheat honey" },
  { id: "spring-no-2", name: "Spring No. 2", flower: "Apple bloom & clover", price: "$26", line: "The pale\none.", oneLine: true, note: "Apple bloom and clover. A different expression of the harvest.", image: photo("1572102329980-f9e3c4b955e1"), alt: "Spring honey in glass jars" },
];

export default function Harvest() {
  return <><Sprite /><Header /><main className="fh-home fh-harvest-page" id="top"><Entrance />
    <section className="hv-opening fh-shell" aria-labelledby="harvest-page-title" data-entrance-opening>
      <div className="hv-opening-copy">
        <h1 id="harvest-page-title" data-entrance="rise"><span className="fh-title-line"><span>The</span></span><span className="fh-title-line"><span>harvest.</span></span></h1>
        <p data-entrance="rise">Wildflower. Buckwheat. Apple bloom and clover. A season with more than one character.</p>
        <Link className="fh-link" href="#collection" data-entrance="rise">Find your honey <span aria-hidden="true">↓</span></Link>
        <div className="hv-season" data-entrance="rise"><strong>2026</strong><span>From the hive<br />to the table.</span></div>
      </div>
      <div className="hv-opening-photo" data-entrance="image" data-motion-effect="shutter"><img src="/img/harvest-honeycomb-hero.webp" alt="Golden honeycomb resting in an ivory dish with amber honey on a wooden table" width="1122" height="1402" fetchPriority="high" /></div>
    </section>
    <div className="hv-collection fh-shell" id="collection">{honeys.map((h, i) => <section className={`hv-story hv-story-${i}`} id={h.id} key={h.id} aria-labelledby={`${h.id}-title`}>
      <div className="hv-story-photo" data-entrance="image" data-motion-effect={h.id === "vesper" ? "wipe-right" : "wipe-left"}><Link className="hv-photo-link" href={`/product/${h.id}`}><img src={h.image} alt={h.alt} width="1400" height="1600" loading="lazy" /></Link></div>
      <div className="hv-story-copy" data-entrance="rise" data-motion-effect={h.id === "vesper" ? "from-left" : "from-right"}><div className="hv-name"><h2 id={`${h.id}-title`}>{h.name}</h2><span>{h.price}</span></div><p className="hv-flower">{h.flower}</p><h3 className={h.oneLine ? "hv-one" : undefined}>{h.line}</h3><p>{h.note}</p><div className="hv-actions"><Link className="btn btn--primary fh-button" href={`/product/${h.id}`}>Shop {h.name} <span aria-hidden="true">↗</span></Link></div></div>
    </section>)}</div>
  </main><Footer /><Behaviours /></>;
}

