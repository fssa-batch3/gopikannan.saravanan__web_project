let json = [];

const Pid = window.location.search;
const idParams = new URLSearchParams(Pid);
const getIDdetails = idParams.get("product_id");
console.log(getIDdetails);
let create_card = JSON.parse(localStorage.getItem("carddetails"));

let fundraiseDetails = create_card.find(function (event) {
  let id = event["product_id"];

  console.log(id);

  if (getIDdetails == id) {
    return true;
  }
});

let amountRaised = fundraiseDetails["amount_raised"];
console.log(amountRaised);
let expected_amount = fundraiseDetails["expected_amt"];
console.log(expected_amount);

let percentage = Math.floor((amountRaised / expected_amount) * 100);

console.log(percentage);
let content;
content = document.createElement("div");
content.setAttribute("class", "content");

let heading;
heading = document.createElement("h4");
heading.innerText = fundraiseDetails["title"];
content.append(heading);

let image;
image = document.createElement("img");
image.setAttribute("class", "image");
image.setAttribute("src", fundraiseDetails["img"]);
image.setAttribute("alt", fundraiseDetails["alt"]);
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
  fundraiseDetails["amount_raised"] +
  "&nbsp" +
  "out of" +
  "&nbsp" +
  "Rs." +
  fundraiseDetails["expected_amt"];

amount.append(amount_count);

let storybtn;
storybtn = document.createElement("div");
storybtn.setAttribute("class", "story-btn");
storybtn.innerText = "Story";
content.append(storybtn);

let story;
story = document.createElement("div");
story.setAttribute("class", "story");
story.innerHTML = fundraiseDetails["storySum"] + "&nbsp" + "&nbsp";
content.append(story);

let story_more;
story_more = document.createElement("span");
story_more.setAttribute("id", "more");
story_more.innerText = fundraiseDetails["story"];
story.append(story_more);

let img_document;
img_document = document.createElement("img");
img_document.setAttribute("id", "document");
img_document.setAttribute("src", fundraiseDetails["image_doc"]);
story.append(img_document);

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

let user1;
user1 = document.createElement("div");
user1.setAttribute("class", "user");
content.append(user1);

let nameLabel;
nameLabel = document.createElement("span");
nameLabel.setAttribute("class", "name-label");
nameLabel.innerHTML = "Created by" + "&nbsp";
user1.append(nameLabel);

let userName;
userName = document.createElement("span");
userName.setAttribute("class", "name");
userName.innerText = fundraiseDetails["fundraiser"];
user1.append(userName);

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
spanSecondhead.innerHTML = "Support";
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
imageqr.setAttribute("src", fundraiseDetails["upiUrl"]);
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
gpay.setAttribute("src", "../../Assets/images/google-pay-Logo-PNG_awihaa.png");
gpay.setAttribute("alt", "gpay");
gpay.setAttribute("width", "30");
gpay.setAttribute("height", "40");
gpay.setAttribute("class", "gpay");
gpay.setAttribute("style", "padding-bottom: -15px");
imgqr.append(gpay);

document.querySelector(".content-supporter-container").append(content, upibox);

// url params user id
const getuserID = idParams.get("userid");

// check and userid and userid in the url
let userdetails = JSON.parse(window.localStorage.getItem("userDetails"));
let userid = JSON.parse(window.localStorage.getItem("userID"));
let user_id = userdetails.find(function (user) {
  let id_user = user["userid"];
  console.log(id_user);
  if (userid == id_user) {
    return true;
  }
});
console.log(user_id);

let commentArr = [];

// function to send comment and to set in the local storage
function send() {
  const msginput = document.getElementById("msg").value;
  const coverpic = user_id["user_pic"];
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const currentTime = `${hours}:${minutes}`;

  const Userid = user_id["userid"];

  const username = user_id["user_name"];

  const fundraiseid = fundraiseDetails["product_id"];

  const commentid = Date.now();

  if (msginput == "" || msginput == null) {
    alert("You can't send empty comment");
    return;
  } else {
    let commentObj = {
      userpic: coverpic,
      userName: username,
      user_ID: Userid,
      fundraiseId: fundraiseid,
      commentId: commentid,
      time: currentTime,
      msg: msginput,
    };
    console.log(commentObj);
    commentArr.push(commentObj);
    window.localStorage.setItem("commentmain", JSON.stringify(commentArr));
  }
  location.reload();
}

// not to get value replace in the comment main array in the local storage
if (localStorage.getItem("commentmain") !== null) {
  commentArr = JSON.parse(window.localStorage.getItem("commentmain"));
}
console.log(commentArr);

let commentNewarr = [];
let commentnewob = {};

// to show the appropriate fundraise card comment
// loop to assignit to a new object then push it into the new array and store it in a localstorage
for (let i = 0; i < commentArr.length; i++) {
  if (getIDdetails == commentArr[i]["fundraiseId"]) {
    commentNewarr.push(commentArr[i]);
  }
}
console.log(commentNewarr);
window.localStorage.setItem("comment", JSON.stringify(commentNewarr));

let comment = JSON.parse(window.localStorage.getItem("comment"));
console.log(comment);

// to read the comment by the donater

for (let i = 0; i < comment.length; i++) {
  console.log(comment[i]["user_ID"]);
  console.log(user_id["userid"]);
  if (comment[i]["user_ID"] == user_id["userid"]) {
    let commentMsg = document.createElement("div");
    commentMsg.setAttribute("class", "chat-message");

    let userImg;
    userImg = document.createElement("img");
    userImg.setAttribute("src", comment[i]["userpic"]);
    userImg.setAttribute("alt", "profile");
    userImg.setAttribute("width", "32");
    userImg.setAttribute("height", "32");
    userImg.setAttribute("style", "border-radius: 50%");
    commentMsg.append(userImg);

    let msgcontent;
    msgcontent = document.createElement("div");
    msgcontent.setAttribute("class", "chat-message-content");
    commentMsg.append(msgcontent);

    let spanTime;
    spanTime = document.createElement("div");
    spanTime.setAttribute("class", "chat-time");
    spanTime.innerText = comment[i]["time"];
    msgcontent.append(spanTime);

    let heading_user;
    heading_user = document.createElement("h5");
    heading_user.innerText = comment[i]["userName"];
    msgcontent.append(heading_user);

    let msg;
    msg = document.createElement("p");
    msg.setAttribute("style", "color: black");
    msg.innerText = comment[i]["msg"];
    msg.setAttribute("id", "msg_content");
    msgcontent.append(msg);

    let editDeldiv;
    editDeldiv = document.createElement("div");
    editDeldiv.setAttribute("class", "editdeldiv");
    commentMsg.append(editDeldiv);

    let edit;
    edit = document.createElement("img");
    edit.setAttribute("src", "../../Assets/images/draw.png");
    edit.setAttribute("width", "20");
    edit.setAttribute("height", "20");
    edit.setAttribute("onclick", "edit(this.id)");
    edit.setAttribute("id", comment[i]["commentId"]);
    edit.setAttribute("class", "edit");
    edit.setAttribute("style", "cursor:pointer");
    editDeldiv.append(edit);

    let del;
    del = document.createElement("img");
    del.setAttribute("src", "../../Assets/images/delete.png");
    del.setAttribute("width", "20");
    del.setAttribute("height", "20");
    del.setAttribute("id", comment[i]["commentId"]);
    del.setAttribute("onclick", "del(this.id)");
    del.setAttribute("style", "cursor:pointer");
    editDeldiv.append(del);

    let hr;
    hr = document.createElement("hr");

    document.querySelector(".chat-history").append(commentMsg, hr);
  } else {
    let commentMsg = document.createElement("div");
    commentMsg.setAttribute("class", "chat-message");
    let userImg;
    userImg = document.createElement("img");
    userImg.setAttribute("src", comment[i]["userpic"]);
    userImg.setAttribute("alt", "profile");
    userImg.setAttribute("width", "32");
    userImg.setAttribute("height", "32");
    userImg.setAttribute("style", "border-radius: 50%");
    commentMsg.append(userImg);
    let msgcontent;
    msgcontent = document.createElement("div");
    msgcontent.setAttribute("class", "chat-message-content");
    commentMsg.append(msgcontent);
    let spanTime;
    spanTime = document.createElement("div");
    spanTime.setAttribute("class", "chat-time");
    spanTime.innerText = comment[i]["time"];
    msgcontent.append(spanTime);
    let heading_user;
    heading_user = document.createElement("h5");
    heading_user.innerText = comment[i]["userName"];
    msgcontent.append(heading_user);
    let msg;
    msg = document.createElement("p");
    msg.setAttribute("style", "color: black");
    msg.innerText = comment[i]["msg"];
    msgcontent.append(msg);
    let hr;
    hr = document.createElement("hr");
    document.querySelector(".chat-history").append(commentMsg, hr);
  }
}

let form;
form = document.createElement("form");

let form2;
form2 = document.createElement("form");

form.prepend(form2);

let fieldset2;
fieldset2 = document.createElement("fieldset");
fieldset2.setAttribute("id", "editfieldset");
form2.append(fieldset2);

let editinput;
editinput = document.createElement("input");
editinput.setAttribute("type", "text");
editinput.setAttribute("autocomplete", "off");
editinput.setAttribute("id", "editinput");
editinput.setAttribute("placeholder", "edit Your message");
fieldset2.append(editinput);

let sendIcon2;
sendIcon2 = document.createElement("img");
sendIcon2.setAttribute("src", "../../Assets/images/send-message.png");
sendIcon2.setAttribute("alt", "send");
sendIcon2.setAttribute("class", "send");
sendIcon2.setAttribute("onclick", "sendedit()");
sendIcon2.setAttribute("width", "20");
sendIcon2.setAttribute("height", "20");
sendIcon2.setAttribute("style", "padding-top: 5px");
fieldset2.append(sendIcon2);

let fieldset;
fieldset = document.createElement("fieldset");
form.append(fieldset);

let inputMsg;
inputMsg = document.createElement("input");
inputMsg.setAttribute("type", "text");
inputMsg.setAttribute("autocomplete", "off");
inputMsg.setAttribute("id", "msg");
inputMsg.setAttribute("placeholder", "Send your message");
fieldset.append(inputMsg);

let sendIcon;
sendIcon = document.createElement("img");
sendIcon.setAttribute("src", "../../Assets/images/send-message.png");
sendIcon.setAttribute("alt", "send");
sendIcon.setAttribute("class", "send");
sendIcon.setAttribute("onclick", "send()");

sendIcon.setAttribute("width", "20");
sendIcon.setAttribute("height", "20");
sendIcon.setAttribute("style", "padding-top: 5px");
fieldset.append(sendIcon);

document.querySelector(".chat-history").append(form);

// to edit the comment
function edit(id) {
  console.log(id);
  window.localStorage.setItem("commentId", JSON.stringify(id));
  document.getElementById("editfieldset").classList.toggle("active");
}

function sendedit() {
  let userallComments = JSON.parse(window.localStorage.getItem("commentmain"));
  let userCommentId = JSON.parse(window.localStorage.getItem("commentId"));
  console.log(userCommentId);
  let Com = userallComments.find(function (comment) {
    let Comment = parseInt(comment["commentId"]);
    console.log(Comment);

    if (userCommentId == Comment) {
      return true;
    }
  });
  console.log(Com);
  let msg = document.getElementById("editinput").value;

  let neweditObj = {
    msg,
  };
  console.log(neweditObj);
  let merge;
  merge = Object.assign(Com, neweditObj);
  let usereditmsg;
  usereditmsg = userallComments.indexOf(Com);
  userallComments[usereditmsg] = merge;
  window.localStorage.setItem("commentmain", JSON.stringify(userallComments));
  location.reload();
}

// to delete the comment
function del(commentid) {
  let userallComments = JSON.parse(window.localStorage.getItem("commentmain"));
  let userCommentId = JSON.parse(window.localStorage.getItem("commentId"));
  console.log(userCommentId);
  let Com = userallComments.find(function (comment) {
    let Comment = parseInt(comment["commentId"]);
    console.log(Comment);

    if (userCommentId == Comment) {
      return true;
    }
  });
  console.log(Com);

  let commentINdex = userallComments.indexOf(Com);

  let alertComfirm = confirm("Are you sure you want to delete this comment");

  if (alertComfirm) {
    window.localStorage.setItem("commentId", JSON.stringify(commentid));
    userallComments.splice(commentINdex, 1);
    window.localStorage.setItem("commentmain", JSON.stringify(userallComments));
    location.reload();
  } else {
    return;
  }
}

function paymentpage() {
  window.location.href =
    "../../webpage/donate/payment1stpage.html?product_id=" +
    fundraiseDetails["product_id"];
}
