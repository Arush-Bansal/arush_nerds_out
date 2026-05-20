import Link from "next/link";
import { resume } from "@/lib/content";

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t-[3px] border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-hand text-xl font-bold text-red">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Resume() {
  return (
    <article className="brutal-card rounded-md p-8 md:p-12">
      <header>
        <h1
          id="resume-heading"
          className="font-display text-4xl text-fg md:text-5xl"
        >
          {resume.name}
        </h1>
        <p className="mt-2 text-lg font-bold text-fg">{resume.title}</p>
        <p className="mt-1 text-sm font-medium text-fg-muted">{resume.location}</p>
      </header>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={resume.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-btn btn-red rounded-md px-6 py-3.5 text-sm"
        >
          {resume.pdfLabel}
        </a>
      </div>

      <div className="mt-10 space-y-8">
        <ResumeSection title="Contact">
          <ul className="space-y-2">
            {resume.contact.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-fg transition-colors hover:text-red"
                >
                  <span className="text-fg-muted">{item.label}: </span>
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Summary">
          <p className="text-base leading-relaxed font-medium text-fg-muted">
            {resume.summary}
          </p>
        </ResumeSection>

        <ResumeSection title="Experience">
          <ul className="space-y-6">
            {resume.experience.map((job) => (
              <li key={`${job.company}-${job.role}`}>
                <div className="brutal-border brutal-shadow-sm rounded-md bg-white p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg text-fg">{job.company}</h3>
                    <span className="font-hand text-sm font-bold text-red">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-fg">
                    {job.role}
                    <span className="font-medium text-fg-muted"> · {job.location}</span>
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm font-medium text-fg-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Projects">
          <ul className="space-y-4">
            {resume.projects.map((project) => (
              <li
                key={project.name}
                className="brutal-border brutal-shadow-sm rounded-md bg-white p-5"
              >
                <h3 className="font-display text-lg text-fg">{project.name}</h3>
                <p className="mt-1 text-sm font-bold text-fg">{project.subtitle}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-fg-muted">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="brutal-border rounded-md bg-yellow-soft px-2 py-0.5 text-xs font-bold tracking-wide text-fg uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Achievements">
          <ul className="space-y-4">
            {resume.achievements.map((item) => (
              <li
                key={item.title}
                className="brutal-border brutal-shadow-sm rounded-md bg-white p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg text-fg">{item.title}</h3>
                  <span className="font-hand text-sm font-bold text-red">{item.period}</span>
                </div>
                <p className="mt-2 text-sm font-medium leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Education">
          <ul className="space-y-4">
            {resume.education.map((edu) => (
              <li
                key={edu.school}
                className="brutal-border brutal-shadow-sm rounded-md bg-white p-5"
              >
                <h3 className="font-display text-lg text-fg">{edu.school}</h3>
                <p className="mt-1 text-sm font-bold text-fg">{edu.degree}</p>
                <p className="mt-1 font-hand text-sm font-bold text-red">{edu.period}</p>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Skills">
          <ul className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <li
                key={skill}
                className="brutal-border brutal-shadow-sm rounded-md bg-yellow px-3 py-1.5 text-xs font-bold tracking-wide text-fg uppercase"
              >
                {skill}
              </li>
            ))}
          </ul>
        </ResumeSection>
      </div>
    </article>
  );
}

export function ResumePageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-border bg-white">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-fg sm:text-xl"
        >
          Arush<span className="text-red">Bansal</span>
        </Link>
        <Link
          href="/"
          className="brutal-btn btn-white rounded-md px-4 py-2 text-xs sm:px-5 sm:text-sm"
        >
          ← Back home
        </Link>
      </div>
    </header>
  );
}
