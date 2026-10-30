import Link from "next/link";
import Sprite from "../../components/Sprite";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Entrance from "../../components/Entrance";
import Behaviours from "../../components/Behaviours";
import "../../components/Home.css";
import "./Story.css";

export const metadata = { title: "Our Story — FoxHound Bee", description: "Sixteen yards, three valleys, and the daily work of keeping bees." };
const practices = [
  ["Keep count.", "Mite counts weekly from June, always written down."],
  ["Keep the honey super clear.", "Never a chemical treatment inside a honey super."],
  ["Work with the colony.", "Split early, combine late, interfered with rarely."],
];
export default function Story() {
  return <><Sprite /><Header /><main id="top" className="fh-home fh-story-page"><Entrance />
    <section className="st-opening fh-shell" data-entrance-opening aria-labelledby="story-title">
      <h1 id="story-title" data-entrance="rise"><span className="fh-title-line"><span>It starts</span></span><span className="fh-title-line"><span>with the bees.</span></span></h1>
      <p data-entrance="rise">Sixteen yards. Three valleys.<br />The daily work behind every jar.</p>
      <a className="fh-link" href="#yards" data-entrance="rise">Meet the keepers’ world <span aria-hidden="true">↓</span></a>
    </section>
    <div className="st-landscape" data-entrance="image" data-motion-effect="wipe-up"><img src="/img/story-apiary-full-bleed.webp" alt="A beekeeper tending wooden hives in a wildflower meadow above a forested valley" width="1672" height="941" fetchPriority="high" /></div>
    <section className="st-yards st-yards-harvestam" id="yards" aria-labelledby="yards-title"><div className="fh-shell st-yards-inner">
      <div className="st-harvestam-top">
        <div className="st-harvestam-side-label">Field record</div>
        <div className="st-harvestam-heading"><h2 id="yards-title" data-entrance="rise" data-motion-effect="from-right"><span className="fh-title-line"><span>Close to the yards.</span></span><span className="fh-title-line"><span>Close to the work.</span></span></h2></div>
      </div>
      <div className="st-harvestam-collage" aria-label="FoxHound Bee apiary and field record">
        <div className="st-harvestam-left">
          <figure className="st-harvestam-photo-small" data-entrance="image" data-motion-effect="wipe-left"><img src="/img/story-yards.webp" alt="Wooden hives standing in a wildflower meadow" width="1122" height="1402" loading="eager" decoding="async" /></figure>
          <p className="st-harvestam-established" data-entrance="rise"><span>Established</span><strong>2013</strong></p>
        </div>
        <figure className="st-harvestam-photo-main" data-entrance="image" data-motion-effect="wipe-up"><img src="/img/story-valleys.webp" alt="A beekeeping yard set into a green mountain valley" width="1122" height="1402" loading="eager" fetchPriority="high" decoding="async" /></figure>
        <div className="st-harvestam-right" aria-label="FoxHound Bee by the numbers">
          <div className="st-harvestam-stat" data-entrance="rise" data-motion-effect="from-right"><div className="st-harvestam-counter">16</div><h3>Yards</h3></div>
          <div className="st-harvestam-stat" data-entrance="rise" data-motion-effect="row"><div className="st-harvestam-counter">3</div><h3>Valleys</h3></div>
        </div>
      </div>
    </div></section>
    <section className="st-practices" id="practices" aria-labelledby="practices-title"><div className="fh-shell">
      <div className="st-keeping-intro">
        <div className="st-keeping-copy"><h2 id="practices-title" data-entrance="rise" data-motion-effect="from-left"><span className="fh-title-line"><span>How we</span></span><span className="fh-title-line"><span>keep bees.</span></span></h2><p data-entrance="rise">The work is in the rounds.<br />And in knowing when to leave the box alone.</p></div>
        <div className="st-keeping-photos">
          <div className="st-keeping-yard" data-entrance="image" data-motion-effect="wipe-right"><img src="/img/story-working-hives.webp" alt="Weathered wooden beehives standing in meadow grasses beside an orchard" width="1122" height="1402" loading="lazy" /></div>
          <div className="st-keeping-inspection" data-entrance="image" data-motion-effect="wipe-up"><img src="/img/story-practice-inspection.webp" alt="A beekeeper carefully inspecting a honeycomb frame at the apiary" width="1122" height="1402" loading="lazy" /></div>
        </div>
      </div>
      <div className="st-keeping-principles">{practices.map(([title,copy])=><article className="st-keeping-principle" key={title} data-entrance="rise" data-motion-effect="row"><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="st-last fh-shell"><div className="st-comb" data-entrance="image" data-motion-effect="wipe-left"><img src="https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?auto=format&fit=crop&w=1200&q=90" alt="Honeycomb and a wooden honey dipper on a pale wooden surface" width="1200" height="1400" loading="lazy" /></div><div className="st-last-copy" data-entrance="rise" data-motion-effect="from-right"><h2>From the rounds<br />to the harvest.</h2><p>Wildflower, buckwheat, apple bloom, and clover. Meet the honey at the end of the work.</p><Link className="fh-link" href="/harvest">Explore the harvest <span aria-hidden="true">↗</span></Link><Link className="fh-link" href="/hives">Inside the hive <span aria-hidden="true">↗</span></Link></div></section>
  </main><Footer /><Behaviours /></>;
}


