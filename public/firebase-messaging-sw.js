importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = { 
    apiKey: "AIzaSyAvQk9XkwIZfdy883zvYCokCUVCJX3g7EU",
    authDomain: "pushnotifications-test-209bb.firebaseapp.com",
    projectId: "pushnotifications-test-209bb",
    storageBucket: "pushnotifications-test-209bb.firebasestorage.app",
    messagingSenderId: "848943960525",
    appId: "1:848943960525:web:79e8e33c8116db69423484",
    measurementId: "G-BG3PKM6YW0"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});