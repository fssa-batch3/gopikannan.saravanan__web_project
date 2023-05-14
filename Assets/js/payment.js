const Pid = window.location.search;
const idParams = new URLSearchParams(Pid);
const getIDdetails = idParams.get("product_id");
console.log(getIDdetails);
let create_card = JSON.parse(window.localStorage.getItem("carddetails"));

let userIDdetails = JSON.parse(window.localStorage.getItem("userCheckdetails"));
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
  if (userIDdetails["userid"] == userid) {
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

// function to store the donor donate details
function debitcard() {
  const fundraiseimg = fundraiseDetails["img"];
  const fundraiseTitle = fundraiseDetails["title"];
  const fundraiseName = fundraiseDetails["fundraiser"];
  const fundraiseId = fundraiseDetails["product_id"];
  const fundraiserUserid = fundraiseDetails["userId"];
  const fundraiseAmountraise = fundraiseDetails["amount_raised"];
  const fundraiseExpectedamount = fundraiseDetails["expected_amt"];
  const donaterName = userdetailsfind["user_name"];
  const donaterpic = userdetailsfind["user_pic"];
  const donaterid = userdetailsfind["userid"];
  const donaterContribution = document.getElementById("Contribution").value;
  const paymentThrough = "debitcard";
  const paymentId = Date.now();
  // to get the current date
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  console.log(fundraiserUserid);

  if (donaterContribution == "" || donaterContribution == null) {
    return;
  }

  let paymentContri = {
    fundraiseimg: fundraiseimg,
    fundraiseTitle: fundraiseTitle,
    fundraiseName: fundraiseName,
    fundraiseId: fundraiseId,
    fundraiserUserid: fundraiserUserid,
    fundraiseAmountraise: fundraiseAmountraise,
    fundraiseExpectedamount: fundraiseExpectedamount,
    donaterName: donaterName,
    donaterpic: donaterpic,
    donaterid: donaterid,
    donaterContribution: donaterContribution,
    paymentThrough: paymentThrough,
    paymentId: paymentId,
    dateofdonation: currentDate,
  };

  if (window.localStorage.getItem("donerDonatedetails") !== null) {
    paymentarr = JSON.parse(localStorage.getItem("donerDonatedetails"));
  }
  paymentarr.push(paymentContri);

  window.localStorage.setItem("donerDonatedetails", JSON.stringify(paymentarr));
}

// function to store the payment id
function paymentid() {
  let payment = JSON.parse(localStorage.getItem("donerDonatedetails"));

  for (let i = 0; i < payment.length; i++) {
    const element = payment[payment.length - 1]["paymentId"];

    window.localStorage.setItem("paymentid", JSON.stringify(element));
  }

  const donaterContribution = document.getElementById("Contribution").value;
  if (donaterContribution == "" || donaterContribution == null) {
    alert("Fill your contribution for the next process");
    return;
  }

  window.location.href = "../../webpage/fundraiser/debitcard.html";
}

// function to add the contribution in the card after each contribution by the donater
function addAmount() {
  let card = JSON.parse(window.localStorage.getItem("carddetails"));
  let donerdetails = JSON.parse(localStorage.getItem("donerDonatedetails"));
  let paymentid = JSON.parse(localStorage.getItem("paymentid"));
  // console.log(paymentid);
  let donaorgetdetails = donerdetails.find(function (id) {
    let payment = id["paymentId"];
    if (paymentid == payment) {
      return true;
    }
  });
  console.log(donaorgetdetails);

  let carddetails = card.find(function (details) {
    let cardid = details["product_id"];
    let donor_fundraiseid = donaorgetdetails["fundraiseId"];
    if (cardid == donor_fundraiseid) {
      return true;
    }
  });
  //original object
  let wholecard = card.find(function (details) {
    let cardid = details["product_id"];
    let donor_fundraiseid = donaorgetdetails["fundraiseId"];
    if (cardid == donor_fundraiseid) {
      return true;
    }
  });
  console.log(wholecard);

  const amountraise = parseInt(carddetails["amount_raised"]);
  const donorcontribution = parseInt(donaorgetdetails["donaterContribution"]);
  carddetails["amount_raised"] = donorcontribution + amountraise;

  let detailscard = Object.assign(wholecard, carddetails);
  console.log(detailscard);

  console.log(carddetails["amount_raised"]);
  console.log(carddetails);
  let details = card.indexOf(wholecard);
  console.log(details);
  card[details] = detailscard;

  localStorage.setItem("carddetails", JSON.stringify(card));
}

// function to store the donor donate details
function dirdectbank() {
  const fundraiseimg = fundraiseDetails["img"];
  const fundraiseTitle = fundraiseDetails["title"];
  const fundraiseName = fundraiseDetails["fundraiser"];
  const fundraiseId = fundraiseDetails["product_id"];
  const fundraiserUserid = fundraiseDetails["userId"];
  const fundraiseAmountraise = fundraiseDetails["amount_raised"];
  const fundraiseExpectedamount = fundraiseDetails["expected_amt"];
  const donaterName = userdetailsfind["user_name"];
  const donaterpic = userdetailsfind["user_pic"];
  const donaterid = userdetailsfind["userid"];
  const donaterContribution = document.getElementById("Contribution").value;
  const paymentThrough = "Direct_bank_transfer";
  const paymentId = Date.now();
  // to get the current date
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;
  console.log(fundraiserUserid);

  if (donaterContribution == "" || donaterContribution == null) {
    return;
  }

  let paymentContri = {
    fundraiseimg: fundraiseimg,
    fundraiseTitle: fundraiseTitle,
    fundraiseName: fundraiseName,
    fundraiseId: fundraiseId,
    fundraiserUserid: fundraiserUserid,
    fundraiseAmountraise: fundraiseAmountraise,
    fundraiseExpectedamount: fundraiseExpectedamount,
    donaterName: donaterName,
    donaterid: donaterid,
    donaterpic: donaterpic,
    donaterContribution: donaterContribution,
    paymentThrough: paymentThrough,
    paymentId: paymentId,
    dateofdonation: currentDate,
  };

  if (window.localStorage.getItem("donerDonatedetails") !== null) {
    paymentarr = JSON.parse(localStorage.getItem("donerDonatedetails"));
  }
  paymentarr.push(paymentContri);
  window.localStorage.setItem("donerDonatedetails", JSON.stringify(paymentarr));
}

// function to store the paymentid

function paymentDBid() {
  let payment = JSON.parse(localStorage.getItem("donerDonatedetails"));
  console.log(payment);
  for (let i = 0; i < payment.length; i++) {
    const element = payment[payment.length - 1]["paymentId"];
    console.log(element);
    window.localStorage.setItem("paymentid", JSON.stringify(element));
  }
  const donaterContribution = document.getElementById("Contribution").value;
  if (donaterContribution == "" || donaterContribution == null) {
    alert("Fill your contribution for the next process");
    return;
  }
  window.location.href =
    "../../webpage/fundraiser/directbanktransfer.html?fundraiseUserID=" +
    fundraiseDetails["userId"] +
    "&donaterUserId=" +
    userdetailsfind["userid"];
}
