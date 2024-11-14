import { Link } from "react-router-dom";
import Header from "../Component/Header";
const Dashboard =()=>{

    return(
    <>
    <Header/>
    
    
  <div className="warning">
    <h2>
      {" "}
      Sorry, this page doesn't support your device, Please use large screen
      device to see this page{" "}
    </h2>
  </div>
  <section>
   
    <div className="navbar" id="navigation">
      <img src="logo.png" alt="" />
      <ul className="center-nav">
        <li>
          <i className="fa-solid fa-house" />
          <Link to="#"> Dashboard </Link>
        </li>
        <li>
          <i className="fa-solid fa-copy" />
          <Link to="#"> Content </Link>
        </li>
        <li>
          <i className="fa-sharp fa-solid fa-chart-simple" />
          <Link to="#"> Analytics </Link>
        </li>
        <li>
          <i className="fa-solid fa-thumbs-up" />
          <Link to="#"> Likes </Link>
        </li>
        <li>
          <i className="fa-solid fa-comment" />
          <Link to="#"> Comments </Link>
        </li>
        <li>
          <i className="fa-sharp fa-solid fa-floppy-disk" />
          <Link to="#"> Saves </Link>
        </li>
        <li>
          <i className="fa-solid fa-share" />
          <Link to="#"> Share </Link>
        </li>
        <li>
          <i className="fa-solid fa-rectangle-ad" />
          <Link to="#"> Ads </Link>
        </li>
      </ul>
      <ul className="bottom-nav">
        <hr />
        <li>
          <i className="fa-solid fa-gear" />
          <Link to="#"> Settings </Link>
        </li>
        <li>
          <i className="fa-solid fa-power-off" />
          <Link to="#"> Logout </Link>
        </li>
      </ul>
    </div>
    {/* User Top Naviagation Starts from Here */}
    <div className="main-content">
      <div className="main-top">
        <div className="bars" id="menu">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <div className="input">
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="user">
          <img src="./user.png" alt="" />
        </div>
      </div>
      {/* User Dashboard Starts from Here */}
      <div className="dashboard">
        <h2 className="heading"> Dashboard </h2>
        <div className="color-box">
          <div className="box skyblue">
            <p>
              {" "}
              <i className="fa-solid fa-thumbs-up" />{" "}
            </p>
            <p> Total Likes </p>
            <h3> 50,120 </h3>
          </div>
          <div className="box yellow">
            <p>
              <i className="fa-solid fa-comment" />
            </p>
            <p> Total Comments </p>
            <h3> 25,120 </h3>
          </div>
          <div className="box purple">
            <p>
              {" "}
              <i className="fa-solid fa-share" />{" "}
            </p>
            <p> Total Share </p>
            <h3> 10,320 </h3>
          </div>
          <div className="box red">
            <p>
              {" "}
              <i className="fa-sharp fa-solid fa-floppy-disk" />{" "}
            </p>
            <p> Total Saves </p>
            <h3> 20,129 </h3>
          </div>
        </div>
      </div>
      {/* User Activity Starts from Here */}
      <div className="activity">
        <h2 className="heading"> Recent Activity </h2>
        <div className="activities">
          <table>
            <thead>
              <tr>
                <th> Name </th>
                <th> Email </th>
                <th> Joined </th>
                <th> Type </th>
                <th> Status </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Raju </td>
                <td> contact.geekshelp@gmail.com </td>
                <td> 01-12-2020 </td>
                <td> Member </td>
                <td> Active </td>
              </tr>
              <tr>
                <td> Jassi </td>
                <td> jassisheoran@gmail.com </td>
                <td> 03-01-2022 </td>
                <td> New </td>
                <td> Active </td>
              </tr>
              <tr>
                <td> John Doe </td>
                <td> johndoe@gmail.com </td>
                <td> 22-10-2020 </td>
                <td> New </td>
                <td> Active </td>
              </tr>
              <tr>
                <td> Franda </td>
                <td> frand.geekshelp@gmail.com </td>
                <td> 22-12-2020 </td>
                <td> Member </td>
                <td> Active </td>
              </tr>
              <tr>
                <td> Raj </td>
                <td> testmain@gmail.com </td>
                <td> 20-12-2019 </td>
                <td> New </td>
                <td> Active </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</>



    

    )
}
export default Dashboard;
