import './App.css';
import { useEffect } from 'react';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if(permission === "granted"){
      const token = await getToken(messaging, { 
        vapidKey: "BKPRqoiJjey-hcm0q_s8Ad3lYKjTjZtsxlnpTCuoKIjjuh8GC0BbaC-mnoShxDTbWPT6kuevtTtDR97mZiiTwYI" 
      })
      console.log("Token gen :-",token);
    } else if (permission === "denied") {
      alert("You denied for the notification")

      
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <div className="App">
    <h1>hello</h1>
    </div>
  );
}

export default App;
