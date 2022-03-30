import resume from "./../images/Eric B.pdf";

function AboutMe() {
  return (
    <section>
      <h1 className="section-title">About Me</h1>

      <div className="section-details">
        <p>I am an accomplished accounting contractor, and I enjoy using my skills to help various accounting departments advance their processes and procedures through VBA Macros. I graduated from Georgia Southern University in 2020 with a master’s in accounting. While attending school and working for Coca-Cola, I became drawn towards VBA scripts. This burning interest led me to want to know more about scripting languages. So, I enrolled in a Full-stack development bootcamp at Georgia Institute of Technology. My goal is to garnish a better understand of scripting languages and utilize this knowledge within my career.</p>
        <p>
          <a href={resume}>
            Resume Here!
          </a>
        </p>
      </div>
    </section>
  );
}
export default AboutMe;
