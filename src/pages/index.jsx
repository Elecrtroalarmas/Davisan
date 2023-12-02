import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/buttons/button";
import { RiBox2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./root.css";
import "./index.css";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="promt">
            <h1>Enhance your security with Our Trusted Solutions</h1>
            <p>
              Our solutions are designed to help you to protect your business,
              your customers, and your employees.
            </p>
            <div className="options">
              <Button text="Learn More" />
              <Button text="Contact us" />
            </div>
          </div>
        </section>
        <section>
          <div className="promt">
            <h1>
              Enhance Security with Our State-of-the-Art Physical Protection
              Solutions
            </h1>
            <p>
              Our physical security product offers advanced features and
              cutting-edge technology to ensure the safety of your premises.
              With our reliable solutions, you can have peace of mind knowing
              that your property is well-protected.
            </p>
            <div className="options">
              <div className="n1">
                <h1>Quote</h1>
                <p>Robust Security Features</p>
              </div>
              <div className="n2">
                <h1>Quote</h1>
                <p>Robust Security Features</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt="propImage"
            />
          </div>
        </section>
        <section>
          <div className="promt">
            <div className="sub_promt">
              <p>Protecting What Matters Most</p>
              <h1>Advanced Surveillance Solutions</h1>
              <p>
                Our physical security products provide cutting-edge technology
                and reliable solutions to keep your property, assets, and loved
                ones safe. With our advanced surveillance systems, access
                control systems, and intrusion detection systems, you can have
                peace of mind knowing that your security is in good hands. We
                also offer 24/7 monitoring services to ensure round-the-clock
                protection.
              </p>
            </div>
            <div className="elements">
              <div className="item">
                <RiBox2Line />

                <h1>Access Control Systems</h1>
                <p>
                  Our advanced surveillance solutions utilize state-of-the-art
                  cameras and analytics to provide real-time monitoring and
                  proactive threat detection.
                </p>
              </div>
              <div className="item">
                <RiBox2Line />

                <h1>Intrusion Detection Systems</h1>
                <p>
                  Our access control systems allow you to restrict access to
                  authorized personnel only, enhancing security and preventing
                  unauthorized entry.
                </p>
              </div>
              <div className="item">
                <RiBox2Line />

                <h1>24/7 Monitoring Services</h1>
                <p>
                  Our intrusion detection systems use advanced sensors and
                  alarms to detect and deter intruders, providing an additional
                  layer of security for your property.
                </p>
              </div>
            </div>
            <div className="options">
              <div className="n1">
                <Button text="Learn More" />
              </div>
              <div className="n2">
                <Button text="Learn More" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="promt">
            <div className="n1">
              <FaArrowLeftLong />
            </div>
            <div className="n2">
              <FaArrowLeftLong />
            </div>
            <div className="sub_promt">
              <h2>Idk icon</h2>
              <h2>
                Our physical security product has been a game-changer for our
                organization. Highly recommended!
              </h2>
              <div className="person">
                <FaUser />
                <div className="person_info">
                  <p>
                    <strong>John Doe</strong>
                  </p>
                  <p>CEO, Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="promt">
            <div className="sub_promt">
              <h1>Unlock Your Security Potential</h1>
              <p>
                Schedule a consultation or request more information to learn how
                our physical security solutions can protect your business.
              </p>
              <div className="options">
                <Button text="Schedule" />
                <Button text="Request" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
