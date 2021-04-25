var firebaseConfig = {
    apiKey: "AIzaSyARyHYp2vxj0VhT4h0zhel3a14vT4wA3tc",
    authDomain: "test-815c5.firebaseapp.com",
    databaseURL: "https://test-815c5-default-rtdb.firebaseio.com",
    projectId: "test-815c5",
    storageBucket: "test-815c5.appspot.com",
    messagingSenderId: "975985532749",
    appId: "1:975985532749:web:7caaf32ff7434634cba104"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const toggleButton = document.getElementsByClassName('lines')[0]
const navItems = document.getElementsByClassName('navItems')[0]

toggleButton.addEventListener('click', () => {
    navItems.classList.toggle('active')
})



let retrieveData = () => {
    let ref = firebase.database().ref('imgs');
    ref.on('value', gotData);
}
let gotData = (data) => {
    let info = data.val();
    let keys = Object.keys(info);
    let elements = document.getElementsByClassName('toInject');
    let srcs = [];
    for (let i = 0; i < keys.length; i++) {
        document.getElementsByClassName('toInject')[i].src = info[`img${i + 1}`].src;
    }

}

retrieveData();