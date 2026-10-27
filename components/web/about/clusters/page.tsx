import Link from "next/link";
import { ArrowRight, Coffee, Leaf, PackageCheck } from "lucide-react";

const areas = [
  { title: "Coffee export", icon: Coffee, description: "Ethiopia is known for its coffee. Our work in this area is focused on connecting quality coffee with export markets and building strong relationships along the way." },
  { title: "Agricultural products", icon: Leaf, description: "We work across agricultural trade, with attention to sourcing, product quality and the needs of local and international partners." },
  { title: "Trade & logistics", icon: PackageCheck, description: "Moving goods depends on coordination and reliability. We support trade with logistics and transportation services designed around each business need." },
];

export default function ClustersPage() {
  return <div className="site-page"><section className="page-hero"><div className="section-wrap"><p className="eyebrow">OUR WORK</p><h1>Connected work across the trade journey.</h1><p>Our business brings together complementary areas of trade and service. Each is shaped by a shared commitment to quality, reliable partnerships and lasting value.</p></div></section><section className="content-section"><div className="section-wrap"><div className="work-grid">{areas.map(({ title, icon: Icon, description }, i) => <article className="work-card" key={title}><span><Icon size={20} /></span><h2>{title}</h2><p>{description}</p></article>)}</div><div style={{ marginTop: 45 }}><Link href="/web/about/services" className="text-link">Explore our services <ArrowRight size={16} /></Link></div></div></section></div>;
}
