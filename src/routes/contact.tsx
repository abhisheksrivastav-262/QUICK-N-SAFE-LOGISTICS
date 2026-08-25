import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { Phone, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { PHONE, ADDRESS_LINE1, ADDRESS_LINE2 } from "@/lib/constants";
import svcOffice from "@/assets/svc-office.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
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

function ContactHero() {
  return (
    <section className="relative h-[300px] w-full overflow-hidden sm:h-[400px]">
      <div className="absolute inset-0">
        <img src={svcOffice} alt="Contact QUICK N SAFE LOGISTICS" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-up">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Contact Us</h1>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }: any) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}

function ContactDetailsAndForm() {
  const mapQuery = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_LINE2}, West Bengal, India`);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const date = formData.get("date")?.toString().trim() || "";
    const from = formData.get("from")?.toString().trim() || "";
    const to = formData.get("to")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !phone || !from || !to) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "919433222282";
    const text = `Hello QUICK N SAFE LOGISTICS,

I would like to request a free quote.

Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}
Moving From: ${from}
Moving To: ${to}
Preferred Moving Date: ${date || "N/A"}
Message: ${message || "N/A"}

Please provide me with a quotation.

Thank you.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Information"
          title="We'd love to hear from you"
          text="Reach out for a free quote or to ask any questions about your upcoming move."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h3 className="text-xl font-bold">QUICK N SAFE LOGISTICS</h3>
              <p className="mt-1 text-sm text-muted-foreground">Professional Packers and Movers</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Phone className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Phone Number
                    </p>
                    <a href={`tel:${PHONE}`} className="text-lg font-bold text-primary mt-1 block hover:underline">
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Our Location
                    </p>
                    <address className="not-italic text-base font-medium leading-relaxed mt-1">
                      {ADDRESS_LINE1}
                      <br />
                      {ADDRESS_LINE2}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <iframe
                title="Location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-10"
          >
            <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" name="name" required placeholder="John Doe" />
              <Field label="Phone Number" name="phone" type="tel" required placeholder="Your phone number" />
              <Field label="Email Address" name="email" type="email" placeholder="john@example.com" />
              <Field label="Preferred Moving Date" name="date" type="date" />
              <Field label="Moving From" name="from" required placeholder="Current location" />
              <Field label="Moving To" name="to" required placeholder="Destination location" />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your move — volume of items, floor level, etc."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-4 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Prefer speaking to an expert? Call us directly at{" "}
              <a href={`tel:${PHONE}`} className="font-bold text-primary hover:underline">
                {PHONE}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { question: "What packing services are available?", answer: "We provide complete packing services using high-quality materials such as bubble wrap, corrugated boxes, and packing paper to ensure the safety of your belongings during transit." },
  { question: "How can I request a moving quote?", answer: "You can request a moving quote by filling out the form on this page, or by calling us directly at our phone number. We will provide a free, no-obligation estimate based on your requirements." },
  { question: "Do you provide loading and unloading?", answer: "Yes, our team of trained professionals handles all the heavy lifting, ensuring that your goods are carefully loaded onto the transport vehicle and safely unloaded at your destination." },
  { question: "Do you provide household shifting?", answer: "Absolutely. Household shifting is one of our core services. We take care of packing, moving, and delivering all your household items securely." },
  { question: "Do you provide office relocation?", answer: "Yes, we offer professional office relocation services designed to minimize downtime and ensure that your office equipment and furniture are moved safely and efficiently." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between font-bold text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <ChevronDown className={`size-5 text-primary transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-14 text-center shadow-card sm:px-12">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready to Move? Contact QUICK N SAFE LOGISTICS Today.
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-5" aria-hidden="true" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetailsAndForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}
