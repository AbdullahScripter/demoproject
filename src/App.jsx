import { useState } from "react";
import "./App.css";
import { GiRose } from "react-icons/gi";
import img from "../src/assets/boyimg.png";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  const messages = [
    "Are you sure? 🥺",
    "Think again... 💭",
    "No way! 🙅‍♀ ️",
    "I’ll ask again 😌",
    "Still running? 😂",
    "You can’t escape sister! 😏",
    "Last chance! 😏",
    "Okay now you’re being mean 😭",
    "You  have no option madam 😄🌼",
  ];

  const [noStyle, setNoStyle] = useState({});
  const [escapeCount, setEscapeCount] = useState(0);
  const [shakeYes, setShakeYes] = useState(false);
  const [message, setMessage] = useState("");

  const moveNoButton = () => {
    // ✅ Show message
    if (escapeCount < messages.length) {
      setMessage(messages[escapeCount]);
    } else {
      setMessage("Haha… you’re stuck with me, Raz. You can’t escape 😏🥱");

    }

    // ✅ Hide behind YES after many escapes
    if (escapeCount > 8) {
      setNoStyle({
        position: "absolute",
        bottom: "45px",
        left: "95px",
        zIndex: -1,
      });

      setShakeYes(true);
      setTimeout(() => setShakeYes(false), 1500);
      return;
    }

    // ✅ Move randomly INSIDE card
    const randomX = Math.random() * 250;
    const randomY = Math.random() * 180;

    setNoStyle({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: "0.25s",
    });

    setEscapeCount((prev) => prev + 1);
  }
  const handleYes = () => {
    navigate("/success");
  };


  return (
    <div className="container">
      <div className="innerdiv">
        {/* <div className="head">
          <p className="headpara1">Hello Raz..</p>

          <p className="headpara2">
            Sissy, Will You Be My Valentine!{" "}
            <GiRose size={32} color="crimson" />
          </p>
        </div>

        <div className="image">
          <img src={img} alt="cute" />
        </div>

        <div className="btns">
          <button
            className={`yesbtn ${shakeYes ? "shakeYes" : ""}`}
            onClick={handleYes}
          >
            YES! 💖
          </button>

          <button className="nobtn" style={noStyle} onMouseEnter={moveNoButton}>
            No 🥺
          </button>
        </div> */}
      </div>

      {/* ✅ Message BELOW card */}
      {message && <div className="funMessage">{message}</div>}
    </div>
  );
}

export default App;
