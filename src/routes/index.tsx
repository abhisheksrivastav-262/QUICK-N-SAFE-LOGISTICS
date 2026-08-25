import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  PackageCheck,
  Truck,
  Boxes,
  Smile,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-packers.jpg";
import aboutImg from "@/assets/about-moving.jpg";
import svcHousehold from "@/assets/svc-household.jpg";
import svcOffice from "@/assets/svc-office.jpg";
import svcPacking from "@/assets/svc-packing.jpg";
import svcLoading from "@/assets/svc-loading.jpg";
import svcLocal from "@/assets/svc-local.jpg";
import svcTransport from "@/assets/svc-transport.jpg";
import { PHONE, ADDRESS_LINE1, ADDRESS_LINE2 } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QUICK N SAFE LOGISTICS | Packers and Movers in Kolkata" },
      {
        name: "description",
        content:
          "QUICK N SAFE LOGISTICS offers professional packing, household shifting, office relocation and safe transportation in Kolkata. Call 9433222282 for a free quote.",
      },
    ],
  }),
  component: Index,
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
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Packers and Movers · Kolkata
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Safe, Reliable &amp; Hassle-Free Moving Solutions
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            QUICK N SAFE LOGISTICS provides professional packing and moving solutions designed to make your relocation safe, smooth and stress-free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-colors hover:bg-primary/8"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now: {PHONE}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <img
              src={heroImg}
              alt="Professional packers"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustHighlights() {
  const highlights = [
    { icon: ShieldCheck, title: "Safe Handling", desc: "Your items are safe." },
    { icon: PackageCheck, title: "Professional Packing", desc: "Top packing materials." },
    { icon: Truck, title: "Reliable Transport", desc: "Timely and secure." },
    { icon: Smile, title: "Hassle-Free", desc: "We manage everything." },
  ];
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-4 sm:px-6 lg:justify-between lg:px-8">
        {highlights.map((h, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
              <h.icon className="size-6" />
            </span>
            <div>
              <h4 className="font-bold">{h.title}</h4>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img src={aboutImg} alt="About Us" className="h-full w-full object-cover" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Who We Are</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Professional packing and moving, handled with care
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We understand that moving can be a stressful experience. At QUICK N SAFE LOGISTICS, we bring years of logistical expertise to handle your belongings with the utmost care. From the moment we pack your first box to the safe delivery at your new destination, we ensure everything is organized and secure.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Read More
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    { title: "Household Shifting", text: "Safe relocation of household belongings.", img: svcHousehold },
    { title: "Office Relocation", text: "Professional moving support for offices.", img: svcOffice },
    { title: "Packing Services", text: "Careful packing and handling.", img: svcPacking },
    { title: "Loading & Unloading", text: "Proper handling during loading.", img: svcLoading },
    { title: "Local Moving", text: "Reliable relocation within the local area.", img: svcLocal },
    { title: "Transportation", text: "Safe transport to the destination.", img: svcTransport },
  ];

  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="Moving services built around safety" />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:-translate-y-1 transition-transform">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Plan Your Move", desc: "Understand the customer's moving requirements." },
    { num: "02", title: "Professional Packing", desc: "Carefully pack belongings for safe transportation." },
    { num: "03", title: "Safe Loading", desc: "Handle and load items carefully." },
    { num: "04", title: "Secure Transportation", desc: "Transport belongings safely to the destination." },
    { num: "05", title: "Careful Unloading", desc: "Unload and handle belongings responsibly." },
  ];
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Our Moving Process" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.num} className="relative rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="text-4xl font-extrabold text-primary/20">{s.num}</span>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i !== steps.length - 1 && <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block"><ArrowRight className="size-6 text-muted-foreground/30" /></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const benefits = [
    { icon: ShieldCheck, title: "Safe & Secure Handling" },
    { icon: PackageCheck, title: "Professional Packing" },
    { icon: Truck, title: "Reliable Transportation" },
    { icon: Boxes, title: "Careful Loading & Unloading" },
    { icon: Smile, title: "Hassle-Free Moving" },
    { icon: HeartHandshake, title: "Customer-Focused Service" },
  ];
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading eyebrow="Why Choose Us" title="A moving partner you can rely on" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft">
                  <b.icon className="size-5 text-primary" />
                  <span className="font-semibold text-sm">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card h-[500px]">
             <img src={svcTransport} alt="Truck" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageGallery() {
  const images = [heroImg, svcPacking, aboutImg, svcHousehold];
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <SectionHeading eyebrow="Gallery" title="Relocation Showcase" />
         <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-square shadow-soft group">
                <img src={img} alt="Gallery item" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-14 text-center shadow-card sm:px-12">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Planning Your Move? We're Ready to Help.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Contact QUICK N SAFE LOGISTICS for your packing and moving requirements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactPreview() {
  return (
    <section className="bg-surface py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-2xl font-bold">Quick Contact</h2>
         <div className="mt-8 flex justify-center gap-12 flex-wrap">
            <div className="flex items-center gap-3">
              <Phone className="size-6 text-primary" />
              <div className="text-left">
                 <p className="text-xs uppercase text-muted-foreground">Call Us</p>
                 <a href={`tel:${PHONE}`} className="font-bold text-lg">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-6 text-primary" />
              <div className="text-left">
                 <p className="text-xs uppercase text-muted-foreground">Address</p>
                 <p className="font-bold text-sm">{ADDRESS_LINE1}, {ADDRESS_LINE2}</p>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <AboutPreview />
      <ServicesPreview />
      <Process />
      <WhyUs />
      <ImageGallery />
      <CTA />
      <ContactPreview />
    </>
  );
}
