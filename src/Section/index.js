import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <h2 className="section__heading">{title}
            {extraHeaderContent}
        </h2>
        <div>
            {body}
        </div>
      </section>
);

export default Section;