"use client";

export default function Skills() {
  const skills = [
    // Languages
    "Python",
    "Java",
    "C++",
    "JavaScript/TypeScript",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "React",
    "Next.js",
    "SvelteKit",
    "PostgreSQL",
    "AWS",
    "Microsoft Azure",
    "GitHub Actions",
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="mb-2">
          <h2 className="section-header mb-0">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
