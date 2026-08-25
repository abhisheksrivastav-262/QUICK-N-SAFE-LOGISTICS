import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, PackageCheck, Truck, HeartHandshake, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-moving.jpg";
import svcPacking from "@/assets/svc-packing.jpg";
import svcTransport from "@/assets/svc-transport.jpg";

export const Route = createFileRoute("/about")({
  component: About,
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

function AboutHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px]">
      <div className="absolute inset-0">
        <img src={aboutImg} alt="About Quick N Safe Logistics" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-up">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Story
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">About QUICK N SAFE LOGISTICS</h1>
        </div>
      </div>
    </section>
  );
}

function CompanyIntro() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading eyebrow="Introduction" title="Professional packing and moving, handled with care" />
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-left">
            <p>
              QUICK N SAFE LOGISTICS is a premier Packers and Movers service based in Kolkata. We provide professional packing and moving solutions focused on safe handling, careful packing and reliable transportation of your belongings.
            </p>
            <p>
              Our mission is to simplify the often stressful process of relocating. We believe that every item, big or small, holds value to you, which means it holds value to us. Our dedicated team is trained in modern packing techniques and safe handling procedures to ensure that your goods reach their destination exactly as they left.
            </p>
            <p>
              From household shifting to office relocation, our team manages the packing, loading, transportation and unloading so your move stays organized and hassle-free from start to finish. We pride ourselves on customer convenience and transparent communication throughout the entire moving process.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Safe and secure handling",
              "Professional packing techniques",
              "Reliable transportation fleet",
              "Smooth and hassle-free relocation",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-card h-[600px]">
          <img src={svcPacking} alt="Packing Services" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  const approaches = [
    { icon: PackageCheck, title: "Careful Packing", desc: "Using high-quality materials to protect your items during transit." },
    { icon: ShieldCheck, title: "Safe Handling", desc: "Our trained staff ensures every item is moved with care." },
    { icon: Truck, title: "Reliable Transportation", desc: "Modern vehicles to safely transport your belongings on time." },
    { icon: HeartHandshake, title: "Customer Support", desc: "We keep you informed and supported throughout the journey." },
  ];
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Approach" title="How we ensure a smooth move" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((a) => (
            <div key={a.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft text-center hover:-translate-y-1 transition-transform">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <a.icon className="size-7" />
              </span>
              <h3 className="mt-6 text-lg font-bold">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-card h-[400px] sm:h-[500px]">
          <img src={svcTransport} alt="Transportation Fleet" className="h-full w-full object-cover" />
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
          Ready to experience a stress-free move?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Reach out to our experts and get a customized moving plan today.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Contact Us Now
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <OurApproach />
      <ImageSection />
      <CTA />
    </>
  );
}
