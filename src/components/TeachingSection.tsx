interface Course {
  name: string;
  role: string;
  term: string;
}

const courses: Course[] = [
  {
    name: "Econometrics",
    role: "Teaching Assistant",
    term: "Spring 2024",
  },
  {
    name: "Microeconomics",
    role: "Teaching Assistant",
    term: "Fall 2023",
  },
];

export function TeachingSection() {
  return (
    <section id="teaching" className="py-12 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary mb-6">Teaching</h2>

        <div>
          <h3 className="section-heading">Copenhagen Business School</h3>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index}>
                <strong>{course.name}</strong> — {course.role}, {course.term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
