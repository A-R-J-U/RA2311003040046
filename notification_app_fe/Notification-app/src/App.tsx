import "./App.css";
import { noti } from "./util/noti";
import { useEffect,useState } from "react";

const App = () => {

  const [notiData, setNotiData] = useState<Array<any>>([]);

  useEffect(() => {
    const request = async () => {
      const res = await fetch("http://20.207.122.201/evaluation-service/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "as2353@srmist.edu.in",
          name: "arjun kaymala",
          rollNo: "RA2311003040046",
          accessCode: "QkbpxH",
          clientID: "8c6eda0d-3a38-468b-989e-5d4cad1a737b",
          clientSecret: "TzfRhfrczRuHBDBD",
        }),
      });

     res.json().then((data) => {
        const token = data.access_token;
        noti(token, 10, 1, "Result").then((data) => {
          setNotiData(data.notifications);
          console.log(data.notifications);
        })
      });
    };

    request();
    
  }, []);


  return <>
  
    <div className="App">
      <h1>Notification App</h1>

      <div className="view">
      {
        notiData ? notiData.map((noti : any, key:any) => {
          return <div className="noti" key={key}>
            <h2>{noti.Message}</h2>
            <p>{noti.Type}</p>
            <p>{noti.Timestamp}</p>
          </div>
        }) : <p>Loading...</p>
      }
      </div>
      
    </div>
  </>;
};

export default App;
