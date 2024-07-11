import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./FooterStyles.css";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaLocationDot
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>Faridabad, Haryana</p>
            </div>
          </div>
          <div className="phone">
            <IoCallSharp
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <h4>
                <p>(+91) 8198973815</p>
              </h4>
            </div>
          </div>
          <div className="Email">
            <MdEmail size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>
                <p>goelashu937@gmail.com</p>
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p >
            <ul >
                <li >
                    Never Give Up!
                </li>
                <li>
                    Be Consistent....
                </li>
            </ul>
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/goelsahab/" target="_blank">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/goelashu937" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com/ashu_goel__/" target="_blank">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
