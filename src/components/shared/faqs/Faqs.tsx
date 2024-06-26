const Faqs = (props: { faqs: any }) => {
  const faqs = props.faqs || [];
  return (
    <section id="faq" className="faq section-bg py-5">
      <div className="container">
        <div className="section-title mb-3 ">
          <h2 style={{ textAlign: "left" }}>Frequently Asked Questions</h2>
          {/* <p></p> */}
        </div>

        <ul className="faq-list">
          {faqs.map((faq: any, index: any) => {
            return (
              <li key={index}>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  data-bs-target={"#d" + index}
                >
                  {faq.question}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                  id={"d" + index}
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
