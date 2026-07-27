import "./Certificates.css";

const certificates = [
  "Python Programming",
  "Django Web Development",
  "Machine Learning",
  "React.js",
  "Git & GitHub"
];

export default function Certificates() {
  return (
    <section id="certificates" className="certificates">

      <div className="container">

        <h2>Certificates</h2>

        <div className="certificate-grid">

          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              {certificate}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}