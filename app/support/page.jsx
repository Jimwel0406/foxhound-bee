import Sprite from "../../components/Sprite";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Entrance from "../../components/Entrance";
import Behaviours from "../../components/Behaviours";
import "../../components/Home.css";
import PostCard from "./PostCard";
import "./Support.css";

export const metadata = { title: "Support — FoxHound Bee", description: "Orders, hives, honey. Ask the keepers." };
const topics = [
  ["Orders & delivery", "#orders"],
  ["Shipping & returns", "#shipping"],
  ["Warranty", "#warranty"],
  ["Hive care", "#hive-care"],
  ["Contact", "#contact"],
];
const steps = [
  ["Ordered", "Email at once"],
  ["Packed", "Mon and Thu"],
  ["Shipped", "Tracking sent"],
  ["Delivered", "2 to 4 days"],
];
const rates = [
  ["Over $60", "Free"],
  ["Under $60", "$6 flat"],
  ["Hives and equipment", "$45 freight"],
  ["Ships to", "All 50 states"],
];
const week = [
  ["Level the stand", "Day one"],
  ["Seat the frames", "Day one"],
  ["Pair the monitor", "Day two"],
  ["Leave the colony alone", "Day seven"],
];
export default function Support() {
  return <><Sprite /><Header /><main id="top" className="fh-home fh-support-page"><Entrance />
    <section className="sp-opening fh-shell" data-entrance-opening aria-labelledby="support-title">
      <h1 id="support-title" data-entrance="rise"><span className="fh-title-line"><span>Support.</span></span></h1>
      <p data-entrance="rise">Orders, hives, honey.<br />Ask the keepers.</p>
      <nav className="sp-topics" aria-label="Support topics" data-entrance="rise">{topics.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
    </section>
    <div className="sp-strip" data-entrance="image" data-motion-effect="wipe-up"><img src="/img/story-apiary-full-bleed.webp" alt="A beekeeper tending wooden hives in a wildflower meadow above a forested valley" width="1672" height="941" fetchPriority="high" /></div>
    <section className="sp-orders fh-shell" id="orders" aria-labelledby="orders-title">
      <h2 id="orders-title" data-entrance="rise">Orders &amp; delivery.</h2>
      <p data-entrance="rise">Four steps from the extractor<br />to your door.</p>
      <ol className="sp-route">{steps.map(([title, note]) => <li className="sp-cell" key={title} data-entrance="rise" data-motion-effect="row"><b>{title}</b><span>{note}</span></li>)}</ol>
    </section>
    <section className="sp-shipping" id="shipping" aria-labelledby="shipping-title"><div className="fh-shell sp-shipping-in">
      <div className="sp-shipping-copy"><h2 id="shipping-title" data-entrance="rise" data-motion-effect="from-left">Shipping &amp;<br />returns.</h2><p data-entrance="rise">Everything you need to know<br />sits on the label.</p></div>
      <div className="sp-label" data-entrance="rise" data-motion-effect="from-right">
        <div className="sp-label-top"><b>FoxHound Bee</b><span>Priority</span></div>
        {rates.map(([k, v]) => <div className="sp-label-row" key={k}>{k}<span>{v}</span></div>)}
        <div className="sp-label-bars" aria-hidden="true" />
        <p className="sp-label-slip">Returns: 30 days, unopened jars, full refund.</p>
      </div>
    </div></section>
    <section className="sp-warranty" id="warranty" aria-labelledby="warranty-title"><div className="fh-shell sp-warranty-in">
      <div className="sp-warranty-copy"><h2 id="warranty-title" data-entrance="rise" data-motion-effect="from-left">Warranty.</h2><p data-entrance="rise">Two years on every hive.<br />If it fails, we fix it.</p></div>
      <div className="sp-cert" data-entrance="rise" data-motion-effect="from-right">
        <div className="sp-seal"><b>2</b><span>Years</span></div>
        <h3>Hive warranty</h3>
        <p>Boxes, frames and stands.<br />Defects in wood and build.</p>
        <div className="sp-cert-sn"><span>No. FH-2026</span><span>Keeper approved</span></div>
      </div>
    </div></section>
    <section className="sp-care" id="hive-care" aria-labelledby="care-title"><div className="fh-shell">
      <div className="sp-care-head"><h2 id="care-title" data-entrance="rise" data-motion-effect="from-left">Hive care.</h2><p data-entrance="rise">Your first week,<br />in four ticks.</p></div>
      <ul className="sp-care-list">{week.map(([task, when]) => <li className="sp-care-row" key={task} data-entrance="rise" data-motion-effect="row"><span className="sp-tick" aria-hidden="true">✓</span><b>{task}</b><em>{when}</em></li>)}</ul>
    </div></section>
    <section className="sp-contact" id="contact" aria-labelledby="contact-title"><div className="fh-shell">
      <div className="sp-contact-head"><h2 id="contact-title" data-entrance="rise" data-motion-effect="from-left">Contact.</h2><p data-entrance="rise">Drop the keepers a line.</p></div>
      <div data-entrance="rise" data-motion-effect="wipe-up"><PostCard /></div>
    </div></section>
  </main><Footer /><Behaviours /></>;
}
