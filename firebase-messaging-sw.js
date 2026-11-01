importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
firebase.initializeApp({apiKey:"AIzaSyDIigMruwB9agz8mRK6e2sa53n9VpCJcdw",authDomain:"manasa2026.firebaseapp.com",projectId:"manasa2026",messagingSenderId:"110485096204",appId:"1:110485096204:web:13ffa365b6de66db452b29"});
const messaging=firebase.messaging();
// الرسائل التي تحمل notification تعرضها المكتبة تلقائيًا؛ نعرض هنا رسائل data فقط لتجنب التكرار
messaging.onBackgroundMessage(p=>{if(p.notification)return;const d=p.data||{};self.registration.showNotification(d.title||"منصة المجتهد",{body:d.body||"",icon:"icon-192.png"})});
