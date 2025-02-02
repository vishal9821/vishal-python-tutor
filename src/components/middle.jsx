import { useState ,useEffect, useRef  } from "react";
import "./middle.css";
import axios from 'axios';

function Middle(){

    const [teacher,setTeacher] = useState("Mr.Haruda");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([
      { text: "Hello! I'm Your Ai python Teacher Shall we start : Yes/No", sender: "bot", time: GetTime() },
    ]);
  
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    const handleSendMessage = async () => {
      if (!text.trim()) return;
  
      const userMessage = {
        text: text,
        sender: "user",
        time: GetTime(),
      };
      setMessages((prev) => [...prev, userMessage]);
  
      setText("");
  
      try {
        const response = await axios.post("https://vishal-python-tutor-backend.onrender.com/teacher", { message: userMessage.text });
        console.log(response)
        const botMessage = {
          text:  response.data,
          sender: "bot",
          time: GetTime(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error fetching bot reply:", error);
        const errorMessage = {
          text: "Sorry, something went wrong. Please try again later.",
          sender: "bot",
          time: GetTime(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    };

    function toshinchan(){
        setTeacher("Principal Enchou")
    }
    function tonobita(){
        setTeacher("Mr.Haruda")
    }

    function GetTime(){
        var hr = new Date().getHours()
        var min = new Date().getMinutes()
        if(min===0){
             time = hr+":"+min+"0"
          }else if(min<10){
              var time = hr+":0"+min
             }else{
              time = hr+":"+min
          }
          return time;
     }

    return(
        <div className="middle_continer">
             <div className="top">
                {teacher==="Mr.Haruda"?<>
                <div className="user">
                    <img src="../src/assets/teacher-1.jpg" alt="" />
                    <div className="text">
                    <span>Mr. Haruda</span>
                    <p>Nobita’s Teacher.</p>
                    </div>
                    <span className="changeteacher" onClick={toshinchan}>(Change Teacher !)</span>
                </div>
                <div className="icons">
                    <img src="../src/assets/info.png" alt="" />
                    <div className="about">
                    Hello, students! I am Mr. Haruda, your AI tutor. I guess you already know me! As a strict yet dedicated teacher, I believe in discipline, hard work, and never giving up on my students—no matter how mischievous they are! I will guide you through learning with patience, ensuring that even if you struggle, you always improve. With me, you’ll develop strong fundamentals and responsibility while having fun!
                   </div>
                </div></>:<>
                <div className="user">
                    <img src="../src/assets/teacher-2.jpg" alt="" />
                    <div className="text">
                    <span>Principal Enchou</span>
                    <p>Shinchan’s Principal</p>
                    </div>
                    <span className="changeteacher" onClick={tonobita}>(Change Teacher !)</span>
                </div>
                <div className="icons">
                    <img src="../src/assets/info.png" alt="" />
                    <div className="about">
                    Hey there, kids! I am Principal Enchou, your AI tutor. I bet you know me! Unlike Mr. Haruda, I have a fun and friendly approach to teaching. Learning should be exciting, and I make sure you enjoy every lesson! With wisdom and humor, I’ll help you understand complex topics in a simple way. Let’s laugh, learn, and grow together!
                   </div>
                </div></>}
            </div>
            <div className="middle">
                {messages.map((msg, index) => (
                <div className={`message ${msg.sender === "user" ? "own" : ""}`} key={index}>
                    <div className="text">
                    <p>{msg.text.split("\n").map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}</p>
                    <span>{msg.time}</span>
                    </div>
                </div>
                ))}
            <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="message">
                <input type="text" placeholder="Type a message...." value={text}
                 onChange={(e) => setText(e.target.value)}
                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className="btn btn-primary" onClick={handleSendMessage}>Ask!</button>
                </div>
            </div>
        </div>
    )
}

export default Middle;