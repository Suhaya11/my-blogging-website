const Contact = () => {
  return (
    <>
      <div className="contactForm">
        <form action="mailto:suhaya1082@gmail.com" className="contact">
          <input
            type="text"
            className="contactorName logingInputs"
            placeholder="Enter real name"
          />
          <input
            type="email"
            name="contactorEmail"
            id="contactorEmail"
            className="contactorEmail logingInputs"
            placeholder="Enter valid email address"
          />
          <input
            type="tel"
            name="contactorPhone"
            id="contactorPhone"
            className="logingInputs"
            placeholder="Valid phone number"
          />
          <input
            type="text"
            className="logingInputs"
            placeholder="Contacting reason"
          />
          <textarea
            placeholder="Describe your message here ...."
            name="contactBody"
            id="contactBody"
          ></textarea>
          <input type="submit" className="button" value={"Send message"} />
        </form>
      </div>
    </>
  );
};

export default Contact;
