export default function Skills() {
  const projects = [
    {
      title: "Front-End Development",
      description: "NextJS, Tailwind CSS, HTML, CSS, JavaScript, Twig, and Drupal CMS.",
    },
    {
      title: "Core Competencies",
      description: "A/B Testing, Technical and Organic SEO, Quality Assurance, Project Management, Asana, and Google Analytics.",
    },
  ];

  return (
    <section id="experience" className="bg-blue py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
            <p className="uppercase tracking-widest text-lt-beige">
                Explore my
            </p>
            <h3 className="text-4xl font-bold text-lt-beige font-moontime">
                Experience
            </h3>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] bg-lt-beige border border-lt-beige rounded-lg shadow-sm flex flex-col"
            >
              <div className="p-5 flex flex-col flex-1">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue">
                    {project.title}
                  </h5>
                <p className="mb-3 font-normal text-blue">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
