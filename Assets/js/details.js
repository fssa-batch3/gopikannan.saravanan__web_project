let support_arr;

let json = [
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1667841206/production/images/campaign/587864/IMG20221009062455_ovmi0x_1667842343.jpg",
    alt: "education",
    title: "Help me study to win in life",
    percent: 20,
    story_txt:
      "Pavneeta and Sumeet are supporting an NGO called Shishu Mangal Orphanage in Tellapur, Hyderabad.\n Its run by Dr Sreenivas, a courageous young yoga teacher who manages to light up the life of 37 young minds\n",
    story_more:
      "Despite having hardly any resources and is now struggling to pay their school fees.\n Most of the children are girls from nursery to Class X.\n\nThere are so many needs of these children that go unfulfilled and our heart goes out to the solo effort of of one man.\n\n We believe if privileged citizens can fund their school fee, then few of us can work on their health, living hygiene and overall wellbeing.\n\nThey study in a school in Lingampally.\n Average fee per child is INR 36,000/- per annum.\n While any financial support is welcome, We would prefer if you can sponsor one child for a period of two years.\n However, any help is welcome at the stage they are in.\nAttached is the list of children, with names.\n Once you donate, you can write to me the name of child you wish to support and interest to meet up periodically.\n\n Would be happy to organize.\nThank you and God bless,",
    amount_raised: 600000,
    expected_amt: 3000000,
    supporters: 550,
    fundraiser: "Kumar",
  },
];

const Pid = window.location.search;
const idParams = new URLSearchParams(Pid);
const getIDdetails = idParams.get("product_id");
console.log(getIDdetails);
let create_card = JSON.parse(localStorage.getItem("carddetails"));
console.log(create_card);

let fundraiseDetails = create_card.find(function (event) {
  let id = event["product_id"];

  console.log(id);

  if (getIDdetails == id) {
    let amountRaised = event["amount_raised"];
    console.log(amountRaised);
    let expected_amount = event["expected_amt"];
    console.log(expected_amount);

    let percentage = Math.floor((amountRaised / expected_amount) * 100);

    console.log(percentage);
    let content;
    content = document.createElement("div");
    content.setAttribute("class", "content");
    // container.append(content);

    let heading;
    heading = document.createElement("h4");
    heading.innerText = event["title"];
    content.append(heading);

    let image;
    image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", event["img"]);
    image.setAttribute("alt", event["alt"]);
    content.append(image);

    let progress;
    progress = document.createElement("div");
    progress.setAttribute("class", "progress-sec");
    content.append(progress);

    let progress_div;
    progress_div = document.createElement("div");
    progress_div.setAttribute("class", "progressdiv");
    progress.append(progress_div);

    let para;
    para = document.createElement("p");
    para.setAttribute("id", "percent");
    // para.innerText = percentage + "%";
    progress_div.append(para);

    let b_tag;
    b_tag = percentage + "%";
    para.append(b_tag);

    let progress_tag;
    progress_tag = document.createElement("progress");
    progress_tag.setAttribute("id", "file");
    progress_tag.setAttribute("value", percentage);
    progress_tag.setAttribute("max", "100");
    progress_div.append(progress_tag);

    let span_like;
    span_like = document.createElement("span");
    span_like.setAttribute("class", "like");
    progress_div.append(span_like);

    let span_anchor;
    span_anchor = document.createElement("a");
    span_anchor.setAttribute("href", "#");
    span_like.append(span_anchor);

    let share_img;
    share_img = document.createElement("img");
    share_img.setAttribute("class", "share");
    share_img.setAttribute("src", "../../Assets/images/share.png");
    share_img.setAttribute("alt", "share");
    share_img.setAttribute("width", "30px");
    span_anchor.append(share_img);

    let amount;
    amount = document.createElement("div");
    amount.setAttribute("class", "amount");
    progress.append(amount);

    let amount_txt;
    amount_txt = document.createElement("span");
    amount_txt.setAttribute("id", "txt-amt");
    amount_txt.innerHTML = "Raised:" + "&nbsp";
    amount.append(amount_txt);

    let amount_count;
    amount_count = document.createElement("span");
    amount_count.setAttribute("id", "class");
    amount_count.innerHTML =
      "Rs." +
      event["amount_raised"] +
      "&nbsp" +
      "out of" +
      "&nbsp" +
      "Rs." +
      event["expected_amt"];

    amount.append(amount_count);

    let storybtn;
    storybtn = document.createElement("div");
    storybtn.setAttribute("class", "story-btn");
    storybtn.innerText = "Story";
    content.append(storybtn);

    let story;
    story = document.createElement("div");
    story.setAttribute("class", "story");
    story.innerHTML = event["storySum"] + "&nbsp" + "&nbsp";
    content.append(story);

    let story_more;
    story_more = document.createElement("span");
    story_more.setAttribute("id", "more");
    story_more.innerText = event["story"];
    story.append(story_more);

    let viewmore;
    viewmore = document.createElement("div");
    viewmore.setAttribute("class", "viewmore");
    content.append(viewmore);

    let imgArrow;
    imgArrow = document.createElement("img");
    imgArrow.setAttribute(
      "src",
      "../../Assets/images/arrow-down-sign-to-navigate.png"
    );
    imgArrow.setAttribute("alt", "arrow");
    imgArrow.setAttribute("class", "arrow");
    viewmore.append(imgArrow);

    let viewmoreBtn;
    viewmoreBtn = document.createElement("div");
    viewmoreBtn.setAttribute("style", "z-index: 5;");
    viewmore.append(viewmoreBtn);

    let btnview;
    btnview = document.createElement("button");
    btnview.setAttribute("id", "mybtn");
    btnview.setAttribute("onclick", "myFunction()");
    btnview.innerText = "View More";
    viewmoreBtn.append(btnview);

    let user;
    user = document.createElement("div");
    user.setAttribute("class", "user");
    content.append(user);

    let nameLabel;
    nameLabel = document.createElement("span");
    nameLabel.setAttribute("class", "name-label");
    nameLabel.innerHTML = "Created by" + "&nbsp";
    user.append(nameLabel);

    let userName;
    userName = document.createElement("span");
    userName.setAttribute("class", "name");
    userName.innerText = event["fundraiser"];
    user.append(userName);

    // document.querySelector(".content-supporter-container").append(content);

    // UPI box

    let upibox;
    upibox = document.createElement("div");
    upibox.setAttribute("class", "upi-box");

    let upihead;
    upihead = document.createElement("div");
    upihead.setAttribute("class", "upi-head");
    upibox.append(upihead);

    let spanFirsthead;
    spanFirsthead = document.createElement("span");
    spanFirsthead.setAttribute("id", "first-head");
    spanFirsthead.innerText = "Donate";
    upihead.append(spanFirsthead);

    let spanSecondhead;
    spanSecondhead = document.createElement("span");
    spanSecondhead.setAttribute("id", "sec-head");
    spanSecondhead.innerHTML = "550" + "&nbsp" + "Supporters";
    upihead.append(spanSecondhead);

    let donateBtn;
    donateBtn = document.createElement("div");
    donateBtn.setAttribute("class", "donate-btn-sec");
    upibox.append(donateBtn);

    let donatebutton;
    donatebutton = document.createElement("button");
    donatebutton.setAttribute("class", "donate-btn");
    donatebutton.setAttribute("onclick", "paymentpage()");
    donatebutton.innerText = "DONATE NOW";
    donateBtn.append(donatebutton);

    let carddetail;
    carddetail = document.createElement("div");
    carddetail.setAttribute("class", "card-detail");
    carddetail.innerText = "Donate using Card,netbanking";
    upibox.append(carddetail);

    let qrimg;
    qrimg = document.createElement("div");
    qrimg.setAttribute("class", "qr-img");
    upibox.append(qrimg);

    let imageqr;
    imageqr = document.createElement("img");
    imageqr.setAttribute("src", "../../Assets/images/qr.jpg");
    imageqr.setAttribute("alt", "Qr");
    imageqr.setAttribute("id", "qr");
    qrimg.append(imageqr);

    let upitxt;
    upitxt = document.createElement("div");
    upitxt.setAttribute("class", "upi-down-txt");
    upitxt.innerText = "Or donate using UPI";
    upibox.append(upitxt);

    let imgqr;
    imgqr = document.createElement("div");
    imgqr.setAttribute("class", "img-qr");
    upibox.append(imgqr);

    let upiimg;
    upiimg = document.createElement("img");
    upiimg.setAttribute("class", "qr-img");
    upiimg.setAttribute("src", "../../Assets/images/upi-icon.png");
    upiimg.setAttribute("alt", "upiimg");
    upiimg.setAttribute("width", "60");
    upiimg.setAttribute("height", "60");
    imgqr.append(upiimg);

    let gpay;
    gpay = document.createElement("img");
    gpay.setAttribute(
      "src",
      "../../Assets/images/google-pay-Logo-PNG_awihaa.png"
    );
    gpay.setAttribute("alt", "gpay");
    gpay.setAttribute("width", "30");
    gpay.setAttribute("height", "40");
    gpay.setAttribute("class", "gpay");
    gpay.setAttribute("style", "padding-bottom: -15px");
    imgqr.append(gpay);

    document
      .querySelector(".content-supporter-container")
      .append(content, upibox);

    return true;
  }
});
console.log(fundraiseDetails);

for (let i = 0; i < create_card.length; i++) {
  json.push(create_card[i]);
}

// let container;
// container = document.createElement("div");
// container.setAttribute("class", "content-supporter-container");
// for (let i = 0; i < json.length; i++) {
// let content;
// content = document.createElement("div");
// content.setAttribute("class", "content");
// // container.append(content);

// let heading;
// heading = document.createElement("h4");
// heading.innerText = json["title"];
// content.append(heading);

// let image;
// image = document.createElement("img");
// image.setAttribute("class", "image");
// image.setAttribute("src", json["img"]);
// image.setAttribute("alt", json["alt"]);
// content.append(image);

// let progress;
// progress = document.createElement("div");
// progress.setAttribute("class", "progress-sec");
// content.append(progress);

// let progress_div;
// progress_div = document.createElement("div");
// progress_div.setAttribute("class", "progressdiv");
// progress.append(progress_div);

// let para;
// para = document.createElement("p");
// para.setAttribute("id", "percent");
// // para.innerText = percentage + "%";
// progress_div.append(para);

// let b_tag;
// b_tag = percentage + "%";
// para.append(b_tag);

// let progress_tag;
// progress_tag = document.createElement("progress");
// progress_tag.setAttribute("id", "file");
// progress_tag.setAttribute("value", percentage);
// progress_tag.setAttribute("max", "100");
// progress_div.append(progress_tag);

// let span_like;
// span_like = document.createElement("span");
// span_like.setAttribute("class", "like");
// progress_div.append(span_like);

// let span_anchor;
// span_anchor = document.createElement("a");
// span_anchor.setAttribute("href", "#");
// span_like.append(span_anchor);

// let share_img;
// share_img = document.createElement("img");
// share_img.setAttribute("class", "share");
// share_img.setAttribute("src", "../../Assets/images/share.png");
// share_img.setAttribute("alt", "share");
// share_img.setAttribute("width", "30px");
// span_anchor.append(share_img);

// let amount;
// amount = document.createElement("div");
// amount.setAttribute("class", "amount");
// progress.append(amount);

// let amount_txt;
// amount_txt = document.createElement("span");
// amount_txt.setAttribute("id", "txt-amt");
// amount_txt.innerText = "Raised :";
// amount.append(amount_txt);

// let amount_count;
// amount_count = document.createElement("span");
// amount_count.setAttribute("id", "class");
// amount_count.innerText =
//   "RS" + json["amount_raised"] + "out of" + "Rs." + json["expected_amt"];

// amount.append(amount_count);

// let storybtn;
// storybtn = document.createElement("div");
// storybtn.setAttribute("class", "story-btn");
// storybtn.innerText = "Story";
// content.append(storybtn);

// let story;
// story = document.createElement("div");
// story.setAttribute("class", "story");
// story.innerText = json["story_txt"];
// content.append(story);

// let story_more;
// story_more = document.createElement("span");
// story_more.setAttribute("id", "more");
// story_more.innerText = json["story_more"];
// story.append(story_more);

// let viewmore;
// viewmore = document.createElement("div");
// viewmore.setAttribute("class", "viewmore");
// content.append(viewmore);

// let imgArrow;
// imgArrow = document.createElement("img");
// imgArrow.setAttribute(
//   "src",
//   "../../Assets/images/arrow-down-sign-to-navigate.png"
// );
// imgArrow.setAttribute("alt", "arrow");
// imgArrow.setAttribute("class", "arrow");
// viewmore.append(imgArrow);

// let viewmoreBtn;
// viewmoreBtn = document.createElement("div");
// viewmoreBtn.setAttribute("style", "z-index: 5;");
// viewmore.append(viewmoreBtn);

// let btnview;
// btnview = document.createElement("button");
// btnview.setAttribute("id", "mybtn");
// btnview.setAttribute("onclick", "myFunction()");
// btnview.innerText = "View More";
// viewmoreBtn.append(btnview);

// let user;
// user = document.createElement("div");
// user.setAttribute("class", "user");
// content.append(user);

// let nameLabel;
// nameLabel = document.createElement("span");
// nameLabel.setAttribute("class", "name-label");
// nameLabel.innerText = "Created by";
// user.append(nameLabel);

// let userName;
// userName = document.createElement("span");
// userName.setAttribute("class", "name");
// userName.innerText = json["fundraiser"];
// user.append(userName);

// // document.querySelector(".content-supporter-container").append(content);

// // UPI box

// let upibox;
// upibox = document.createElement("div");
// upibox.setAttribute("class", "upi-box");

// let upihead;
// upihead = document.createElement("div");
// upihead.setAttribute("class", "upi-head");
// upibox.append(upihead);

// let spanFirsthead;
// spanFirsthead = document.createElement("span");
// spanFirsthead.setAttribute("id", "first-head");
// spanFirsthead.innerText = "Donate";
// upihead.append(spanFirsthead);

// let spanSecondhead;
// spanSecondhead = document.createElement("span");
// spanSecondhead.setAttribute("id", "sec-head");
// spanSecondhead.innerHTML = "550" + "&nbsp" + "Supporters";
// upihead.append(spanSecondhead);

// let donateBtn;
// donateBtn = document.createElement("div");
// donateBtn.setAttribute("class", "donate-btn-sec");
// upibox.append(donateBtn);

// let donatebutton;
// donatebutton = document.createElement("button");
// donatebutton.setAttribute("class", "donate-btn");
// donatebutton.setAttribute("onclick", "paymentpage()");
// donatebutton.innerText = "DONATE NOW";
// donateBtn.append(donatebutton);

// let carddetail;
// carddetail = document.createElement("div");
// carddetail.setAttribute("class", "card-detail");
// carddetail.innerText = "Donate using Card,netbanking";
// upibox.append(carddetail);

// let qrimg;
// qrimg = document.createElement("div");
// qrimg.setAttribute("class", "qr-img");
// upibox.append(qrimg);

// let imageqr;
// imageqr = document.createElement("img");
// imageqr.setAttribute("src", "../../Assets/images/qr.jpg");
// imageqr.setAttribute("alt", "Qr");
// imageqr.setAttribute("id", "qr");
// qrimg.append(imageqr);

// let upitxt;
// upitxt = document.createElement("div");
// upitxt.setAttribute("class", "upi-down-txt");
// upitxt.innerText = "Or donate using UPI";
// upibox.append(upitxt);

// let imgqr;
// imgqr = document.createElement("div");
// imgqr.setAttribute("class", "img-qr");
// upibox.append(imgqr);

// let upiimg;
// upiimg = document.createElement("img");
// upiimg.setAttribute("class", "qr-img");
// upiimg.setAttribute("src", "../../Assets/images/upi-icon.png");
// upiimg.setAttribute("alt", "upiimg");
// upiimg.setAttribute("width", "60");
// upiimg.setAttribute("height", "60");
// imgqr.append(upiimg);

// let gpay;
// gpay = document.createElement("img");
// gpay.setAttribute("src", "../../Assets/images/google-pay-Logo-PNG_awihaa.png");
// gpay.setAttribute("alt", "gpay");
// gpay.setAttribute("width", "30");
// gpay.setAttribute("height", "40");
// gpay.setAttribute("class", "gpay");
// gpay.setAttribute("style", "padding-bottom: -15px");
// imgqr.append(gpay);

// document.querySelector(".content-supporter-container").append(content, upibox);
1;

// supporter box

// let supporterbox;
// supporterbox = document.createElement("div");
// supporterbox.setAttribute("class", "supporters-box");

// let supporterhead;
// supporterhead = document.createElement("div");
// supporterhead.setAttribute("class", "supporterhead");
// supporterhead.innerText = "Supporters";
// supporterbox.append(supporterhead);

// let div_supporter;
// div_supporter = document.createElement("div");
// supporterbox.append(div_supporter);

// let supportername;
// supportername = document.createElement("span");
// supportername.setAttribute("class", "supporter-name");
// supportername.innerText = json[0]["supporters"][0]["user"];
// div_supporter.append(supportername);

// let contribution;
// contribution = document.createElement("span");
// contribution.setAttribute("class", "supporter-name");
// contribution.innerText = json[0]["supporters"][0]["amount"];
// div_supporter.append(contribution);

// document.querySelector(".second-container").append(supporterbox);

function paymentpage() {
  window.location.href = "../../webpage/donate/payment1stpage.html";
}
