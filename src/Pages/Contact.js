import Header from "../Component/Header";
const Contact = ()=>{
    return(
        <>
        <Header/>
         
  <div className="contact">
   
  
    <h1>Contact</h1>
    <h2>_________</h2>
    <br/>
    <table
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        alignContent: "center",
        paddingTop: "2%",
        paddingBottom: "3%",
        paddingLeft: "3%",
        paddingRight: "3%",
        backgroundColor: "black",
        color: "white"
      }}
    >
      <tbody>
        <tr>
          <td>
            NAME
            <input
              style={{ marginLeft: "11%", width: "60%", height: "4vh" }}
              type="text"
              placeholder="Enter your name"
            />
          </td>
        </tr>
        <tr>
          <td>
            <br /> EMAIL
            <input
              style={{ marginLeft: "11%", width: "60%", height: "4vh" }}
              type="email"
              placeholder="Enter your email"
            />
          </td>
        </tr>
        <tr>
          <td>
            <br /> NUMBER
            <input
              style={{ marginLeft: "7%", width: "38%", height: "4vh" }}
              type="text"
              placeholder="Enter your Number"
            />
          </td>
        </tr>
        <tr>
          <td>
            <br /> MESSAGE
            <textarea
              style={{ marginLeft: "24%" }}
              rows={7}
              cols={40}
              defaultValue={" "}
            />
          </td>
        </tr>
        <tr>
          <td>
            <br />
            <button
              style={{ marginLeft: "34%", fontSize: "1.40rem", width: "35%" }}
              type=" submit "
            >
              {" "}
              SUBMIT{" "}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 
<br/>
<br/>
{/*topdown start*/}
<div className="topdown">
    <ul>
      <li>
        <i className="fa-solid fa-envelope" /> Email
      </li>
      <li>|</li>
      <li>
        <i className="fa-brands fa-whatsapp" /> WhatsApp
      </li>
      <li>|</li>
      <li>
        <i className="fa-brands fa-linkedin" /> LinkedIn
      </li>
      <li>|</li>
      <li>
        <i className="fa-brands fa-instagram" /> Instagram
      </li>
      <li>|</li>
      <li>
        <i className="fa-brands fa-facebook" /> Facebook
      </li>
    </ul>
  </div>
  {/*topdown end*/}
 
    
 
        </>
    )
}
export default Contact;