const Pid = window.location.search;
const idParams = new URLSearchParams(Pid);
const getIDdetails = idParams.get("product_id");
console.log(getIDdetails);
let create_card = JSON.parse(window.localStorage.getItem("carddetails"));

let userIDdetails = JSON.parse(window.localStorage.getItem("userID"));
let userDetails = JSON.parse(window.localStorage.getItem("userDetails"));

let fundraiseDetails = create_card.find(function (event) {
  let id = event["product_id"];

  console.log(id);

  if (getIDdetails == id) {
    return true;
  }
});

let userdetailsfind = userDetails.find(function (user) {
  let userid = user["userid"];
  if (userIDdetails == userid) {
    return true;
  }
});

let amountRaised = fundraiseDetails["amount_raised"];
console.log(amountRaised);
let expected_amount = fundraiseDetails["expected_amt"];
console.log(expected_amount);

let percentage = Math.floor((amountRaised / expected_amount) * 100);

console.log(fundraiseDetails);
console.log(userdetailsfind);

let paymentarr = [];

function debitcard() {
  if (localStorage.getItem("donerDonatedetails") !== null) {
    paymentarr = JSON.parse(localStorage.getItem("donerDonatedetails"));
  }
  const fundraiseimg = fundraiseDetails["img"];
  const fundraiseTitle = fundraiseDetails["title"];
  const fundraiseName = fundraiseDetails["fundraiser"];
  const fundraiseId = fundraiseDetails["product_id"];
  const fundraiseAmountraise = fundraiseDetails["amount_raised"];
  const fundraiseExpectedamount = fundraiseDetails["expected_amt"];
  const donaterName = userdetailsfind["user_name"];
  const donaterpic = userdetailsfind["user_pic"];
  const donaterid = userdetailsfind["userid"];
  const donaterContribution = document.getElementById("Contribution").value;
  const paymentThrough = "debitcard";
  const paymentId = Date.now();

  let paymentContri = {
    fundraiseimg: fundraiseimg,
    fundraiseTitle: fundraiseTitle,
    fundraiseName: fundraiseName,
    fundraiseId: fundraiseId,
    fundraiseAmountraise: fundraiseAmountraise,
    fundraiseExpectedamount: fundraiseExpectedamount,
    donaterName: donaterName,
    donaterpic: donaterpic,
    donaterid: donaterid,
    donaterContribution: donaterContribution,
    paymentThrough: paymentThrough,
    paymentId: paymentId,
  };
  if (window.localStorage.getItem("donerDonatedetails") !== null) {
    paymentarr = JSON.parse(localStorage.getItem("donerDonatedetails"));
  }
  paymentarr.push(paymentContri);

  window.localStorage.setItem("donerDonatedetails", JSON.stringify(paymentarr));
}

function dirdectbank() {
  const fundraiseimg = fundraiseDetails["img"];
  const fundraiseTitle = fundraiseDetails["title"];
  const fundraiseName = fundraiseDetails["fundraiser"];
  const fundraiseId = fundraiseDetails["product_id"];
  const fundraiseAmountraise = fundraiseDetails["amount_raised"];
  const fundraiseExpectedamount = fundraiseDetails["expected_amt"];
  const donaterName = userdetailsfind["user_name"];
  const donaterpic = userdetailsfind["user_pic"];
  const donaterid = userdetailsfind["userid"];
  const donaterContribution = document.getElementById("Contribution").value;
  const paymentThrough = "Direct_bank_transfer";
  const paymentId = Date.now();

  let paymentContri = {
    fundraiseimg: fundraiseimg,
    fundraiseTitle: fundraiseTitle,
    fundraiseName: fundraiseName,
    fundraiseId: fundraiseId,
    fundraiseAmountraise: fundraiseAmountraise,
    fundraiseExpectedamount: fundraiseExpectedamount,
    donaterName: donaterName,
    donaterid: donaterid,
    donaterpic: donaterpic,
    donaterContribution: donaterContribution,
    paymentThrough: paymentThrough,
    paymentId: paymentId,
  };

  if (window.localStorage.getItem("donerDonatedetails") !== null) {
    paymentarr = JSON.parse(localStorage.getItem("donerDonatedetails"));
  }
  paymentarr.push(paymentContri);
  window.localStorage.setItem("donerDonatedetails", JSON.stringify(paymentarr));
}
