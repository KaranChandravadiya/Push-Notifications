import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAvQk9XkwIZfdy883zvYCokCUVCJX3g7EU",
  authDomain: "pushnotifications-test-209bb.firebaseapp.com",
  projectId: "pushnotifications-test-209bb",
  storageBucket: "pushnotifications-test-209bb.firebasestorage.app",
  messagingSenderId: "848943960525",
  appId: "1:848943960525:web:79e8e33c8116db69423484",
  measurementId: "G-BG3PKM6YW0"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// export const generateToken = async () => {
//   const permission = await Notification.requestPermission();
//   console.log(permission);
//   if(permission === "granted") {
//     const token = await getToken(messaging, {
//       vapiKey: "BKPRqoiJjey-hcm0q_s8Ad3lYKjTjZtsxlnpTCuoKIjjuh8GC0BbaC-mnoShxDTbWPT6kuevtTtDR97mZiiTwYI"
//     });
//     console.log(token);  }
// };