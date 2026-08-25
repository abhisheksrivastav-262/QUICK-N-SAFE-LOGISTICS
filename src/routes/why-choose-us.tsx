import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, PackageCheck, Truck, Boxes, Smile, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-moving.jpg";
import { PHONE } from "@/lib/constants";

export const Route = createFileRoute("/why-choose-us")({
  component: WhyChooseUsPage,
});

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-muted-foreground">{text}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-[300px] w-full overflow-hidden sm:h-[400px]">
      <div className="absolute inset-0">
        <img src={aboutImg} alt="Why Choose Us" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-up">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Advantage
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Why Choose Us?</h1>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: ShieldCheck, title: "Safe & Secure Handling", text: "Your goods are handled with utmost care at every step of the move. We use standard protocols to ensure complete safety." },
  { icon: PackageCheck, title: "Professional Packing", text: "We use high-quality packing materials like bubble wrap, corrugated sheets, and cartons to prevent damage." },
  { icon: Truck, title: "Reliable Transportation", text: "Our fleet of well-maintained vehicles ensures the timely and safe transport of your goods to the destination." },
  { icon: Boxes, title: "Careful Loading & Unloading", text: "Our trained professionals use proper equipment to safely load and unload heavy and delicate items alike." },
  { icon: Smile, title: "Hassle-Free Moving", text: "We manage the entire process seamlessly so that you can relax and focus on settling into your new place." },
  { icon: HeartHandshake, title: "Customer-Focused Service", text: "Clear communication, transparent pricing, and 24/7 support throughout your move." },
];

function BenefitsDetailed() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Benefits"
          title="A moving partner you can truly rely on"
          text="We understand that choosing the right movers is critical. Here is why hundreds of customers trust us."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/50"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
           <div>
              <p className="text-5xl font-extrabold mb-2">100%</p>
              <p className="font-medium text-primary-foreground/80 uppercase tracking-widest text-xs">Safe Delivery</p>
           </div>
           <div>
              <p className="text-5xl font-extrabold mb-2">24/7</p>
              <p className="font-medium text-primary-foreground/80 uppercase tracking-widest text-xs">Support</p>
           </div>
           <div>
              <p className="text-5xl font-extrabold mb-2">Top</p>
              <p className="font-medium text-primary-foreground/80 uppercase tracking-widest text-xs">Rated Service</p>
           </div>
           <div>
              <p className="text-5xl font-extrabold mb-2">Fast</p>
              <p className="font-medium text-primary-foreground/80 uppercase tracking-widest text-xs">Response Time</p>
           </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
     <section className="py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
           <span className="grid size-20 place-items-center rounded-full bg-primary/10 text-primary mx-auto mb-6">
              <ShieldCheck className="size-10" />
           </span>
           <h2 className="text-3xl font-bold sm:text-4xl mb-6">Our Commitment to You</h2>
           <p className="text-muted-foreground leading-relaxed text-lg">
              At QUICK N SAFE LOGISTICS, we don't just move boxes; we move memories and valuable assets. Our commitment is to provide a service that prioritizes the safety of your goods above all else. We guarantee professional behavior, transparent pricing with no hidden costs, and a dedication to making your relocation as smooth as possible.
           </p>
           <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {['No Hidden Costs', 'Trained Professionals', 'Punctual Service', 'Quality Packing Material'].map((item) => (
                 <li key={item} className="flex items-center gap-3 font-medium bg-card p-4 rounded-xl shadow-soft border border-border">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    {item}
                 </li>
              ))}
           </ul>
        </div>
     </section>
  );
}

function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-14 text-center shadow-card sm:px-12">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Experience the difference with our team.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsPage() {
  return (
    <>
      <Hero />
      <BenefitsDetailed />
      <Stats />
      <Guarantee />
      <CTA />
    </>
  );
}
