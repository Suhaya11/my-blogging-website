const About = () => {
  return (
    <>
      <div className="aboutPage">
        <div
          className="aboutImage"
          style={{
            textAlign: "center",
          }}
        >
          <img
            style={{
              maxWidth: "80vw",
              maxHeight: "200px",
              borderRadius: "10px",
            }}
            src={"src/assets/IMG_20240426_105342_620.jpg"}
          />
          <h2>SULAIMAN HALADU YAU</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum
          pariatur tempora deleniti laudantium voluptates doloribus ea corporis
          exercitationem tenetur consequuntur dolores asperiores cumque maiores
          architecto, modi enim facilis! Expedita!
        </p>
        <p className="introToPage">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, facilis
          commodi sapiente possimus iure mollitia magni blanditiis enim harum
          quo illum architecto molestiae praesentium est tempora alias. Qui,
          aperiam iure.
        </p>
        <h3 className="howPageWorks"> How this page works.</h3>
        <p className="pp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia
          asperiores repellat nam quod, animi porro quasi repudiandae nobis nemo
          necessitatibus nostrum delectus totam fugiat ut nihil, quaerat, iure
          quas.
        </p>
      </div>
    </>
  );
};

export default About;
