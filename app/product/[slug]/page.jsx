import Link from "next/link";
import { notFound } from "next/navigation";
import Sprite from "../../../components/Sprite";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Entrance from "../../../components/Entrance";
import Behaviours from "../../../components/Behaviours";
import { PRODUCTS, bySlug } from "../../../components/products";
import SpecIcon from "../../../components/SpecIcon";
import BuyBox from "./BuyBox";
import "../../../components/Home.css";
import "../Product.css";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const p = bySlug((await params).slug);
  if (!p) return {};
  return { title: `${p.name} — FoxHound Bee`, description: p.note };
}

export default async function Product({ params }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  const back = p.kind === "Honey" ? ["/harvest", "The harvest"] : ["/hives", "Hives & equipment"];
  const related = p.related.map(bySlug);

  return <><Sprite /><Header /><main id="top" className="fh-home fh-product-page" data-nav-current={p.kind === "Honey" ? "harvest" : "hives"}><Entrance />
    <section className="pd-main fh-shell" data-entrance-opening aria-labelledby="product-title">
      <div className="pd-photo" data-entrance="image" data-motion-effect="shutter"><img src={p.image} alt={p.alt} width="1448" height="1086" fetchPriority="high" /></div>
      <div className="pd-info" data-entrance="rise" data-motion-effect="from-right">
        <h1 id="product-title">{p.lines.map((l) => <span key={l}>{l}</span>)}</h1>
        <p className="pd-note">{p.note}</p>
        <BuyBox options={p.options} name={p.name} slug={p.slug} image={p.image} />
        <dl className="pd-specs">{p.specs.map(([b, s, icon]) => <div key={s}><SpecIcon name={icon} /><dt>{b}</dt><dd>{s}</dd></div>)}</dl>
      </div>
    </section>
    <section className="pd-more fh-shell" aria-labelledby="more-title">
      <div className="pd-more-head" data-entrance="rise"><h2 id="more-title">More products.</h2><Link className="fh-link" href={back[0]}>{back[1]} <span aria-hidden="true">↗</span></Link></div>
      <div className="pd-more-grid">{related.map((r) => <Link className="pd-card" href={`/product/${r.slug}`} key={r.slug} data-entrance="rise">
        <div className="pd-card-frame"><div className="pd-card-photo"><img src={r.image} alt="" width="800" height="800" loading="lazy" /></div><span className="pd-card-tag">${r.price}</span></div>
        <h3>{r.name}</h3><span className="pd-card-go">View product <span aria-hidden="true">↗</span></span>
      </Link>)}</div>
    </section>
  </main><Footer /><Behaviours /></>;
}
