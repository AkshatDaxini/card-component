import './table.css'
import avatar from "../../assets/images/img_avatar.png";
import avatar2 from "../../assets/images/img_avatar2.png";
const Card = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <img src={avatar} alt="Profile"/><br />
                    <div className="text-zone">
                        <span>Akshat Daxini</span>
                        <p>Some random things about yourself </p>
                    </div>
                    <a href="https://akshat-daxini.netlify.app/"><button className="btn-portfolio">Portfolio</button></a>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <img src={avatar2} alt="Profile" /><br />
                    <div className="text-zone">
                        <span>Divya</span>
                        <p>Some random things about yourself </p>
                    </div>
                    <a href="https://akshat-daxini.netlify.app/"><button className="btn-portfolio">Portfolio</button></a>
                </div>
            </div>
        </div>
    )
}

export default Card;