import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import svcHousehold from "@/assets/svc-household.jpg";
import svcOffice from "@/assets/svc-office.jpg";
import svcPacking from "@/assets/svc-packing.jpg";
import svcLoading from "@/assets/svc-loading.jpg";
import svcLocal from "@/assets/svc-local.jpg";
import svcTransport from "@/assets/svc-transport.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px]">
      <div className="absolute inset-0">
        <img src={svcTransport} alt="Our Services" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-up">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary">
            What We Do
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Our Professional Services</h1>
        </div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    id: "household-shifting",
    title: "Household Shifting",
    desc: "Moving to a new home can be an overwhelming experience. Our household shifting services are designed to take the stress off your shoulders. We carefully pack your household belongings, ensuring everything from fragile glassware to heavy furniture is securely wrapped and handled with care.",
    benefits: ["Complete packing of all household items", "Careful handling of fragile items", "Safe and timely delivery"],
    img: svcHousehold,
    reverse: false,
  },
  {
    id: "office-relocation",
    title: "Office Relocation",
    desc: "Minimize downtime and ensure a smooth transition with our professional office relocation services. We understand that business continuity is critical. Our team works efficiently to securely pack and transport office equipment, documents, and furniture, allowing you to get back to work quickly.",
    benefits: ["Minimal disruption to business operations", "Secure transport of sensitive equipment", "Organized unpacking and setup support"],
    img: svcOffice,
    reverse: true,
  },
  {
    id: "packing-services",
    title: "Professional Packing Services",
    desc: "Proper packing is the key to a successful move. We use high-quality packing materials including bubble wrap, sturdy cartons, and specialized packing paper to ensure maximum protection for your belongings. Our trained staff packs every item methodically to prevent damage during transit.",
    benefits: ["High-quality protective materials", "Specialized packing for delicate items", "Methodical labeling for easy unpacking"],
    img: svcPacking,
    reverse: false,
  },
  {
    id: "loading-unloading",
    title: "Loading & Unloading",
    desc: "Heavy lifting requires expertise. Our trained professionals handle the loading and unloading of your goods with precision. We use the right equipment and techniques to ensure that your items are loaded securely into the transport vehicle and unloaded safely at the destination.",
    benefits: ["Trained personnel for heavy lifting", "Use of proper equipment", "Damage-free loading and unloading"],
    img: svcLoading,
    reverse: true,
  },
  {
    id: "local-moving",
    title: "Local Moving",
    desc: "Even a short distance move requires careful planning and execution. Our local moving services offer quick, reliable, and efficient relocation support within the city. We know the local routes well, ensuring that your belongings arrive at your new location safely and on time.",
    benefits: ["Familiarity with local routes", "Quick and efficient relocation", "Flexible scheduling options"],
    img: svcLocal,
    reverse: false,
  },
  {
    id: "transportation",
    title: "Safe Transportation",
    desc: "The journey is just as important as the packing. We provide a fleet of well-maintained transport vehicles suited for different volumes of goods. Our drivers are experienced, and we ensure that your belongings are transported securely over any distance.",
    benefits: ["Well-maintained transport vehicles", "Experienced drivers", "Secure transit for all belongings"],
    img: svcTransport,
    reverse: true,
  },
];

function ServiceBlock({ service }: { service: typeof servicesData[0] }) {
  return (
    <section id={service.id} className={`py-20 lg:py-24 ${service.reverse ? "bg-surface" : "bg-background"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center ${service.reverse ? "lg:flex-row-reverse" : ""}`}>
        <div className={service.reverse ? "lg:order-2" : ""}>
          <div className="overflow-hidden rounded-3xl shadow-card h-[400px] lg:h-[500px]">
             <img src={service.img} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
        <div className={service.reverse ? "lg:order-1" : ""}>
          <h2 className="text-3xl font-bold sm:text-4xl">{service.title}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            {service.desc}
          </p>
          <ul className="mt-8 space-y-4">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Get a Quote for this Service
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="flex flex-col">
        {servicesData.map((service) => (
          <ServiceBlock key={service.id} service={service} />
        ))}
      </div>
    </>
  );
}
