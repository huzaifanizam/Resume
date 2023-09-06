import react from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import myImage from "./img/profile.jpg";
import myBlackImage from "./img/Profile black background.jpg";

function Hi() {
  return (
    <center>
      <div className="flex-container">
        <div className="left">
          <img className="img" src={myBlackImage} alt="BigCo Inc. logo" />
          <br></br>
          <br></br>
          <div className="leftContener">
            <h3>EDUCATION</h3>
            <hr></hr>
            <div className="leftContenerBox">
              <table>
                <tr>
                  <td>
                    <i> Virtual University of Pakistan</i>{" "}
                  </td>
                </tr>
                <tr>
                  <td>Bachelor of Business Administration</td>
                </tr>
                <tr>
                  <td>Present</td>
                </tr>
                <br></br>
                <tr>
                  <td>
                    <i>Govt.Comprehensive Higher Sec School For Boys</i>{" "}
                  </td>
                </tr>
                <tr>
                  <td>Board of Intermediate Education Karachi</td>
                </tr>
                <tr>
                  <td>2021 - 2022</td>
                </tr>
                <br></br>
                <tr>
                  <td>
                    <i>MUHAMMADI GRAMMER SCHOOL</i>{" "}
                  </td>
                </tr>
                <tr>
                  <td>Board of Secondary Education Karachi</td>
                </tr>
                <tr>
                  <td>2020</td>
                </tr>
              </table>
            </div>
            <br></br>
            <h3>CONTACT</h3>
            <hr></hr>

            <br></br>
          </div>
          <table className="leftContenerTable">
            <tr>
              <td className="tableYellow">.......</td>
              <td className="tableBlack">Phone </td>
            </tr>
            <tr>
              <td className="tableBlack"> </td>
              <td className="tablegary">
                <a href="callto: 03102831100">03102831100</a>
              </td>
            </tr>
            <tr>
              <td className="tableYellow">.......</td>
              <td className="tableBlack">Email </td>
            </tr>
            <tr>
              <td className="tableBlack"> </td>
              <td className="tablegary">
                <a href="mailto:nizamhuzaifa@email.com">
                  nizamhuzaifa@email.com
                </a>
              </td>
            </tr>
            <tr>
              <td className="tableYellow">.......</td>
              <td className="tableBlack">Address </td>
            </tr>
            <tr>
              <td className="tableBlack"> </td>
              <td className="tablegary">
                <a href="https://goo.gl/maps/NQzmYg8TX5qi9ZRL9">karachi,pakistan</a>
              </td>
            </tr>

            <tr>
              <td className="tableYellow">.......</td>
              <td className="tableBlack">My Github Acount </td>
            </tr>
            <tr>
              <td className="tableBlack"> </td>
              <td className="tablegary">
                <a href="https://github.com/huzaifanizam">Github</a>
              </td>
            </tr>
            <tr>
              <td className="tableYellow">.......</td>
              <td className="tableBlack">My Facebook Acount</td>
            </tr>
            <tr>
              <td className="tableBlack"> </td>
              <td className="tablegary">
                <a href="https://www.facebook.com/huzaifa.nizam.3?mibextid=ZbWKwL">
                   Facebook 
                </a>
              </td>
            </tr>
          </table>
        </div>

        <div className="right">
          <br></br>
          <br></br>
          <br></br>
          <div className="HUZAIFA">
            <strong>HUZAIFA</strong> NIZAM
            <br></br>
            WEB DEVELOPER
          </div>
          <div className="content">
            <h3>ABOUT</h3>
            <hr></hr>
            <p>
              Developer who haspassion for web and app technologies, always
              ready to learn new technologies and to work on them, my first
              priority is to give my best in terms of what i have and indulge
              you at every level.
            </p>
            <br></br>
            <h3>EXPERIUNCE</h3>
            <hr></hr>
            <table className="experinceTable">
              <tr>
                <td>202/-2023</td>
                <td>
                  I like to start my essays by describing the emotional impact
                  my personal experience had on me. You want to create a clear
                  emotional hook in the opening sentence and throughout the
                  essay to help motivate the reader.
                </td>
              </tr>
              <tr>
                <td>202/-2023</td>
                <td>
                  I like to start my essays by describing the emotional impact
                  my personal experience had on me. You want to create a clear
                  emotional hook in the opening sentence and throughout the
                  essay to help motivate the reader.
                </td>
              </tr>
            </table>
            <br></br>
            <h3>SOFTWARE SKILLS</h3>
            <hr></hr>
            <div className="SkillFlexContainer ">
              <div>
              <h4>HTML 5 <br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">95%</meter></h4>
              <h4>CSS 3<br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">95%</meter></h4>
              <h4>JavaScript<br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">60%</meter></h4>
              <h4>Bootstrap<br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">90%</meter></h4>
              </div>
              <div>
              <h4>React<br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">50%</meter></h4>
              <h4>Note.js<br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">80%</meter></h4>
              <h4>Wordpress<br></br>
              <meter className="meta" optimum="30" high="80" max="100" value="100">80%</meter></h4>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </center>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
