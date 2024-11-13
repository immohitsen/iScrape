import React from "react";
import img from "../assets/img.png";

const About = () => {
  return (
    <>
    <div className="about-container">
      {/* About Header Section */}
      <section className="about-header text-center py-5">
        <div className="container">
          <h1 className="display-4">About Me</h1>
          <p className="lead text-muted">
            I am a passionate developer committed to creating innovative
            solutions that empower businesses and individuals.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2>Mission</h2>
            <p>
              My goal is to make note-taking effortless and intuitive for
              everyone. I want to provide users with a simple, clean, and
              reliable space to capture their thoughts, ideas, and important
              tasks. By focusing on user experience, I aim to create a tool that
              helps you stay organized and productive, without any distractions.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <h2>Vision</h2>
            <p>
              I envision this app becoming a go-to resource for individuals who
              want to streamline their day-to-day activities. Whether you're a
              student, professional, or entrepreneur, my vision is to provide a
              seamless experience that helps you manage your notes, boost your
              productivity, and ultimately achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section
        className="developer-section text-center py-5"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <img
                src={img}
                alt="Developer Photo"
                className="rounded-circle mb-4"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3 className="mb-3">Mohit Sen</h3>
              <p className="aboutp">Founder & Lead Developer</p>
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "Building solutions that simplify lives and empower growth."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Goals for Side Projects */}
      <section className="goals-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">My Goals for Side Projects</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="goals-card p-4 text-dark rounded"
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
              >
                <h4>Innovative Solutions</h4>
                <p>
                  I'm constantly striving to create simple, powerful tools that
                  make everyday tasks easier for people. My goal is to build
                  scalable and intuitive applications that serve the needs of
                  both individuals and businesses.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="goals-card p-4 text-dark rounded"
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
              >
                <h4>Growth and Learning</h4>
                <p>
                  I'm dedicated to continuous learning, staying up-to-date with
                  the latest technologies, and expanding my skill set to take on
                  more complex projects. My long-term goal is to build solutions
                  that positively impact the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
      {/* Contact Us Section */}
      <section
        className="contact-us text-center py-5"
        style={{ backgroundColor: "#343a40", color: "#fff" }}
      >
        <div className="">
          <h2>Get In Touch</h2>
          <p>
            I'd love to hear from you! Whether it's a collaboration, project, or
            inquiry, feel free to reach out to me.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons mb-4">
            <a
              href="https://www.linkedin.com/in/immohitsen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon mx-3"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/immohitsen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon mx-3"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          {/* Contact Button */}
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </section>
    </>
  );
};

export default About;
