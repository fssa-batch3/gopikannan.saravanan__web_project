// get the fundraiser id from the url

const fundraiseUserID = window.location.search;
const idParams = new URLSearchParams(fundraiseUserID);
const getid = idParams.get("fundraiseUserID");
console.log(getid);

const userdetails = JSON.parse(localStorage.getItem("userDetails"));
console.log(userdetails);

// get trh donater id from the url

const donaterUserId = window.location.search;
const donateridParams = new URLSearchParams(donaterUserId);
const getdonaterId = donateridParams.get("donaterUserId");
console.log(getdonaterId);

// to find the fundraiser obj in the user main arr
let fundraiseuser = userdetails.find(function (id) {
  let userId = id["userid"];

  if (userId == getid) {
    return true;
  }
});
console.log(fundraiseuser);

// to find the donater obj in the user main arr
let donateruser = userdetails.find(function (id) {
  let userId = id["userid"];

  if (userId == getdonaterId) {
    return true;
  }
});
console.log(donateruser);

// to get the payment id
const PaymenID = JSON.parse(window.localStorage.getItem("paymentid"));
const donerDonatedetails = JSON.parse(
  window.localStorage.getItem("donerDonatedetails")
);

let paymentGetId = donerDonatedetails.find(function (idPayment) {
  let donorPaymentId = idPayment["paymentId"];

  if (PaymenID == donorPaymentId) {
    return true;
  }
});

// to show the bank details of the fundraiser to the donater
const fundraiserbankname = document.getElementById("fundraiserbankname");
fundraiserbankname.innerText = "Bank Name : " + fundraiseuser["userbankname"];

const fundraiseraccNo = document.getElementById("fundraiseraccNo");
fundraiseraccNo.innerHTML = "Virtual A/C No : " + fundraiseuser["useracco"];

const fundraiseraccname = document.getElementById("fundraiseraccname");
fundraiseraccname.innerHTML =
  "Virtual A/C Name : " + fundraiseuser["user_name"];

const fundraiserifc = document.getElementById("fundraiserifc");
fundraiserifc.innerHTML = "IFSC : " + fundraiseuser["userifsc"];

const fundraiserPhno = document.getElementById("fundraiserPhno");
fundraiserPhno.innerHTML = "Mobile No : " + fundraiseuser["user_phno"];

// TO store the donater details with fundraiser details

function donate() {
  let donaterbankdetailsArr = [];
  const Bankname = document.getElementById("bankname").value.trim();
  const Accno = document.getElementById("accno").value.trim();
  const ifsc = document.getElementById("ifsc").value.trim();
  const phno = document.getElementById("phno").value.trim();

  if (
    Bankname != fundraiseuser["userbankname"] ||
    Accno != fundraiseuser["useracco"] ||
    ifsc != fundraiseuser["userifsc"] ||
    phno != fundraiseuser["user_phno"]
  ) {
    alert("Fill in the correct details");
    return;
  }
  if (window.localStorage.getItem("Directbankdetails") !== null) {
    donaterbankdetailsArr = JSON.parse(
      localStorage.getItem("Directbankdetails")
    );
  }

  let donaterbankdetailsOBJ = {
    From_bankname: donateruser["userbankname"],
    From_AccholderName: donateruser["user_name"],
    From_ACCNO: donateruser["useracco"],
    From_ifsc: donateruser["userifsc"],
    From_phno: donateruser["user_phno"],
    From_userid: donateruser["userid"],
    To_bankname: fundraiseuser["userbankname"],
    To_AccholderName: fundraiseuser["user_name"],
    To_AccNo: fundraiseuser["useracco"],
    To_ifsc: fundraiseuser["userifsc"],
    To_phno: fundraiseuser["user_phno"],
    TO_userid: fundraiseuser["userid"],
    paymentId: paymentGetId["paymentId"],
  };
  donaterbankdetailsArr.push(donaterbankdetailsOBJ);
  window.localStorage.setItem(
    "Directbankdetails",
    JSON.stringify(donaterbankdetailsArr)
  );
  window.location.href = "../../webpage/donate/mydonations.html";
}
