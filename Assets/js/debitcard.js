function donate() {
  const donardetails = JSON.parse(
    window.localStorage.getItem("donerDonatedetails")
  );
  console.log(donardetails);
  const paymentid = JSON.parse(window.localStorage.getItem("paymentid"));
  console.log(paymentid);

  let debitcarddetails = donardetails.find(function (card) {
    let idPayment = card["paymentId"];
    console.log(idPayment);
    if (paymentid == idPayment) {
      return true;
    }
  });

  console.log(debitcarddetails);

  let cardname = document.getElementById("cardname").value;
  let cvv = document.getElementById("cvv").value;
  let cardnum = document.getElementById("cardnum").value;
  let expirymonth = document.getElementById("months").value;
  let expiryyear = document.getElementById("years").value;

  let carddetails = [];
  let carddetailsobj = {
    cardname: cardname,
    cvv: cvv,
    cardnum: cardnum,
    expirymonth: expirymonth,
    expiryyear: expiryyear,
    donaterid: debitcarddetails["donaterid"],
    paymentId: debitcarddetails["paymentId"],
  };

  if (window.localStorage.getItem("carddetails") !== null) {
    carddetails = JSON.parse(localStorage.getItem("carddetails"));
  }
  carddetails.push(carddetailsobj);
  window.localStorage.setItem("debitcarddetails", JSON.stringify(carddetails));
  window.location.href = "../../webpage/donate/My donations.html";
}

const inputElement = document.getElementById("cardnum");

inputElement.addEventListener("keyup", function (e) {
  console.log(e.keyCode);
  if (e.keyCode !== 8) {
    if (
      this.value.length === 4 ||
      this.value.length === 9 ||
      this.value.length === 14
    ) {
      this.value = this.value += " ";
    }
  }
});
