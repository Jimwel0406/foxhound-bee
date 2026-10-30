import Link from "next/link";
import Sprite from "../../components/Sprite";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Entrance from "../../components/Entrance";
import Behaviours from "../../components/Behaviours";
import "../../components/Home.css";
import "./Journal.css";
export const metadata = {title:"Journal — FoxHound Bee",description:"From the yards: episodes, field notes, and guides from FoxHound Bee."};
const photo=(id,w=1200)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=90`;
const stories=[
 {title:"Valley Floor",meta:"Episode 11 · 9 min",image:"1745742902043-f2f085a87c83"},
 {title:"First Frost",meta:"Episode 10 · 7 min",image:"1749628523016-c33a7ecffa2a"},
 {title:"Queen Cells",meta:"Episode 09 · 12 min",image:"1748286206989-170a93a3223a"},
 {title:"The Nuc Yard",meta:"Episode 08 · 6 min",image:"1702396304193-bb39891d9d02"}
];
const guides=[{type:"Guide",title:"Reading a frame",image:photo("1619522893151-bb5138b60292",640)},{type:"Field note",title:"First frost",image:photo("1749628523016-c33a7ecffa2a",640)},{type:"Data",title:"Yield curve",visual:"curve"},{type:"Species",title:"Forage map",visual:"map"},{type:"Archive",title:"2013 ledger",image:photo("1455390582262-044cdead277a",640)}];
function Story({story}) {return <article><div className="jn-photo" data-entrance="image" data-motion-effect="wipe-right"><img src={photo(story.image)} alt="" width="1200" height="900" loading="lazy" /></div><div data-entrance="rise"><p className="jn-meta">{story.meta}</p><h3>{story.title}</h3></div></article>}
export default function Journal(){return <><Sprite/><Header/><main id="top" className="fh-home fh-journal-page"><Entrance/>
 <section className="jn-opening fh-shell" data-entrance-opening aria-labelledby="journal-title">
  <div className="jn-masthead" data-entrance="rise"><h1 id="journal-title"><span className="fh-title-line"><span>Journal.</span></span></h1><p>From the yards.<br/>Through the seasons.</p></div>
  <div className="jn-feature-grid">
   <div className="jn-lead-copy" data-entrance="rise" data-motion-effect="from-left"><p className="jn-meta">Episode 12 · 14 min</p><h2>North <br/>Ridge.</h2><p>Nine hundred metres up, three days before the fire road closes for winter.</p><a className="fh-link" href="#field-notes">Browse the field notes <span aria-hidden="true">↓</span></a></div>
   <div className="jn-lead-photo jn-photo" data-entrance="image" data-motion-effect="shutter"><img src={photo("1784623153560-f9e6abb6dfe4",1800)} alt="A beekeeper inspecting a frame covered in honeybees" width="1800" height="1350" fetchPriority="high"/></div>
   <div className="jn-sidebar">{stories.slice(0,2).map(story=><Story key={story.title} story={story}/>)}</div>
  </div>
 </section>
 <section className="jn-more fh-shell" aria-labelledby="rounds-title"><div className="jn-section-head" data-entrance="rise"><h2 id="rounds-title">On the rounds.</h2><p>More from the yards.</p></div><div className="jn-story-pair">{stories.slice(2).map(story=><Story key={story.title} story={story}/>)}</div></section>
 <section className="jn-notes" id="field-notes" aria-labelledby="notes-title">
  <div className="jn-notes-layout fh-shell">
   <div className="jn-notes-intro" data-entrance="rise" data-motion-effect="from-right">
    <h2 id="notes-title">The field notes.</h2>
    <p>Frames, forage, and the record.</p>
   </div>
  </div>
  <div className="jn-notes-content fh-shell">
   <ul className="jn-topics" aria-label="Field note categories">{guides.map(({type})=><li key={type}>{type}</li>)}</ul>
   <ul className="jn-index">{guides.map(({type,title,image,visual},i)=><li key={title} className="jn-note-card"><article>
    <div className="jn-entry-copy" data-entrance="rise" data-motion-effect={i%2===0 ? "from-left" : "from-right"}><h3>{title}</h3><span className="jn-type">{type}</span></div>
    <figure className={visual ? "jn-preview jn-preview--" + visual : "jn-preview"} aria-hidden="true" data-entrance="image" data-motion-effect={i%2===0 ? "wipe-right" : "wipe-up"}>{visual === "curve" ? <svg viewBox="0 0 240 160" role="presentation"><path className="jn-chart-grid" d="M24 24H224M24 64H224M24 104H224M24 144H224M24 24V144"/><path className="jn-chart-line" d="M28 126C55 118 61 94 87 98S124 111 146 74 183 67 220 30"/><circle className="jn-chart-point" cx="220" cy="30" r="5"/></svg> : visual === "map" ? <svg viewBox="0 0 240 160" role="presentation"><path className="jn-map-line" d="M-8 44C31 8 54 76 96 40s70-37 91-1 44 22 67-10M-7 72c34-31 58 34 100 1s66-37 91-4 37 25 65-5M-8 101c40-33 59 30 101-1s64-34 89-1 42 21 67-5M-8 130c38-31 61 30 102 0s63-33 88-2 40 20 67-5"/><circle className="jn-map-point" cx="64" cy="57" r="5"/><circle className="jn-map-point" cx="153" cy="91" r="5"/><circle className="jn-map-point" cx="194" cy="49" r="5"/><path className="jn-map-flower" d="M64 67v12m-5-12 5 3 5-3m84 26v12m-5-12 5 3 5-3m36-47v12m-5-12 5 3 5-3"/></svg> : <img src={image} alt="" width="1200" height="800" loading="lazy" />}</figure>
   </article></li>)}</ul>
  </div>
 </section>
 <section className="jn-ending fh-shell" data-entrance="rise"><p>The work behind the stories.</p><Link className="fh-link" href="/story">Meet FoxHound <span aria-hidden="true">↗</span></Link></section>
 </main><Footer/><Behaviours/></>}



