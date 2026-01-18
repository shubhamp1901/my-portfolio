export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubham Patel",
    jobTitle: "Frontend Engineer",
    email: "pshubham1886@gmail.com",
    telephone: "+91-9350047443",
    url: "https://shubhampatel.dev",
    sameAs: [
      "https://github.com/shubhamp1901",
      "https://www.linkedin.com/in/ishubhampatel/"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Shri Mata Vaishno Devi University",
      department: "Computer Science"
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "City",
        name: "India"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}
