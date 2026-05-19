import { ContactChannelIcon } from "@/components/ContactChannelIcon";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t-[3px] border-border bg-[color-mix(in_srgb,var(--teal)_40%,white)] py-16 md:py-24"
    >
      <div className="site-container">
        <div className="brutal-card brutal-shadow-lg rounded-md p-8 md:p-12">
          <p className="font-hand text-2xl font-bold text-red">Contact</p>
          <h2 className="font-display mt-2 text-4xl text-fg md:text-5xl">
            {contact.headline}
          </h2>
          <p className="mt-4 max-w-md text-base font-medium text-fg-muted">
            {contact.subtext}
          </p>

          <ul className="mt-10 flex flex-wrap gap-4">
            {contact.channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={
                    channel.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  aria-label={`${channel.label}: ${channel.value}`}
                  title={`${channel.label}: ${channel.value}`}
                  className="brutal-btn btn-white group flex size-14 items-center justify-center rounded-full normal-case tracking-normal hover:text-red"
                >
                  <ContactChannelIcon label={channel.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
