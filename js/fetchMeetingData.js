const firebase = require("firebase/auth");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
const { firebaseConfig } = require("../../res/firebase-config");

firebase.initializeApp(firebaseConfig());
const db = getFirestore(firebaseConfig());

const selectAllData = async () => {
    const querySnapshot = await getDocs(collection(db, "meetings"));
    if (querySnapshot.exists()) {
        const docData = querySnapshot.data();
        console.log(`${JSON.stringify(docData)}`);
    }
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });
};
// firebase
//     .database()
//     .ref("meetings")
//     .once("value", (AllRecords) => {
//         AllRecords.array.forEach((currentRecord) => {
//             let date = currentRecord.val().dateTime;
//             // let time;
//             let title = currentRecord.val().title;
//             let link = currentRecord.val().link;
//             addItemsToTable(id, date, title, link);
//         });
//     });
// };

let id = 0;

const addItemsToTable = (date, title, link) => {
    let tbody = document.getElementById("meeting-table-body");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = ++id;
    td2.innerHTML = date;
    td3.innerHTML = title;
    td4.innerHTML = link;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    tbody.appendChild(row);
};

window.onload = selectAllData;
