import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Export services", description: "Support for businesses looking to bring Ethiopian products to international markets, with attention to quality and the requirements of each trade relationship." },
  { title: "Logistics & transportation", description: "Coordination that helps goods move from source to destination. We work with partners to support efficient, dependable delivery." },
  { title: "Trade & business support", description: "A responsive partner for trade inquiries, procurement discussions and business development opportunities connected to our areas of work." },
];

export default function ServicesPage() {
  return <div className="site-page"><section className="page-hero"><div className="section-wrap"><p className="eyebrow">OUR SERVICES</p><h1>Practical support for trade and movement.</h1><p>We work with businesses and partners to support products as they move through the supply chain—from the point of origin to the wider market.</p></div></section><section className="content-section"><div className="section-wrap"><div className="service-list">{services.map((service, i) => <article className="service-row" key={service.title}><span className="service-number">0{i + 1}</span><h2>{service.title}</h2><p>{service.description}</p></article>)}</div><div style={{ marginTop: 42 }}><Link href="/web/contact" className="text-link">Discuss a business need <ArrowRight size={16} /></Link></div></div></section></div>;
}
