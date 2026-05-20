import { resume, site, siteUrl } from "@/lib/content";

const resumeUrl = `${siteUrl}/resume`;

const personJsonLd = {
  "@type": "Person",
  "@id": `${resumeUrl}#person`,
  name: resume.name,
  jobTitle: resume.title,
  email: site.email,
  url: resumeUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [
    site.links.linkedin,
    site.links.github,
    site.links.x,
    site.links.instagram,
  ],
  worksFor: [
    { "@type": "Organization", name: "Grifi" },
    { "@type": "Organization", name: "Floworks.ai" },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Delhi",
  },
};

const profilePageJsonLd = {
  "@type": "ProfilePage",
  "@id": `${resumeUrl}#webpage`,
  url: resumeUrl,
  name: `Resume · ${site.name}`,
  description: resume.summary,
  mainEntity: { "@id": `${resumeUrl}#person` },
};

export function ResumeJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [profilePageJsonLd, personJsonLd],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
