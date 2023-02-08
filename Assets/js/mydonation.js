let details = [
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663057048/production/images/campaign/562956/Divyam_4_luynfw_1663057051.jpg",
    title: "Help Divyam Fight From Leukaemia",
    fund_percentage: "30%",
    value_progress: 30,
    amount_raised: " Rs.13,00,000 out of 50,00,000",
    supporters: 350,
    fundraiser: "Ajay",
    donater_contribution: "RS.10,000",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/6089ceb85c0bd.jpeg?w=768&dpr=1.5",
    title: "Feeding From Far-Ration Distribution Amid Lockdown",
    fund_percentage: "80%",
    value_progress: "80",
    amount_raised: "Rs.80,00,000  out of 1,00,00,000 ",
    supporters: 9716,
    fundraiser: "Pooja",
    donater_contribution: "RS.25,000",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/street_dog_5.jpg?v=1645437822",
    title: "HELP US BUILD A SHELTER HOME",
    fund_percentage: "23%",
    value_progress: "23",
    amount_raised: "Rs.1,58,152  out of 7,00,000 ",
    supporters: 50,
    fundraiser: "Veera",
    donater_contribution: "RS.5,000",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowM5xzcQl9XbrUJsI29z-cEaJK-BXh69GSA&usqp=CAU",
    title: "My Baby Battles For His Life And We Need Your Support To Save Him",
    fund_percentage: "72%",
    value_progress: 72,
    amount_raised: "Rs.3,63,521 out of 5,00,000 ",
    supporters: 482,
    fundraiser: "Somu",
    donater_contribution: "RS.8,000",
  },
];

let container;
let first_box;
let anchor;
let first_span_tag;
let image;
let h4_tag;
let user_div;
let span_name;
let span_fundraiser_name;

let second_box;
let amount_details_head;
let progress_div;
let p_tag;
let progress_tag;
let progress_span_tag;
let a_span_like;
let image_like;
let a_span_share;
let image_share;
let amount_sec;
let txt_amount;
let cash;
let count;
let hr_tag;
let contribution_head;
let div_class;
let donater_details;
let doanter_img;
let donater_name;
let donater_contribution;

for (let i = 0; i <= details.length; i++) {
  container = document.createElement("div");
  container.setAttribute("class", "first-second-box-container");

  //  <div class="box"></div>

  box = document.createElement("div");
  box.setAttribute("class", "box");
  container.append(box);

  //<a href="./Divyam.html" style="text-decoration: none">

  anchor = docuemnt.createElement("a");
  anchor.setAttribute("href", "./Divyam.html");
  anchor.setAttribute("style", "text-decoration: none");
  box.append(anchor);

  //<span class="linkspanner"></span>;

  first_span_tag = docuemnt.createElement("span");
  first_span_tag.setAttribute("class", "linkspanner");
  anchor.append(first_span_tag);

  //<img class="image" src="../../Assets/images/baby.jpg" height="255" />

  image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", details[i]["img"]);
  anchor.append(image);

  // <h4>Help Divyam Fight From Leukaemia</h4>
  h4_tag = document.createElement("h4");
  h4_tag.innerText = details[i]["title"];
  anchor.append(h4_tag);

  // <div class="user">

  user_div = document.createElement("div");
  user_div.setAttribute("class", "user");
  anchor.append(user_div);

  //<span class="name-label">Created by</span>
  span_name = document.createElement("span");
  span_name.setAttribute("class", "name-label");
  span_name.innerText = "Created by";
  user_div.append(span_name);

  //<span class="name">Ajay </span>
  span_fundraiser_name = document.createElement("span");
  span_fundraiser_name.setAttribute("class", "name");
  span_fundraiser_name.innerText = details[i]["fundraiser"];
  user_div.append(span_fundraiser_name);

  //   <div class="second-box">
  second_box = document.createElement("div");
  second_box.setAttribute("class", "second-box");
  container.append(second_box);

  //<div class="amountdetails">Amount Details</div>

  amount_details_head = document.createElement("div");
  amount_details_head.setAttribute("class", "amountdetails");
  amount_details_head.innerHTML = "Amount Details";
  second_box.append(amount_details_head);

  // <div class="progress-sec">

  progress_div = document.createElement("div");
  progress_div.setAttribute("class", "progress-sec");
  second_box.append(progress_div);

  //<p id="percent"> 30%</p>
  p_tag = document.createElement("p");
  p_tag.setAttribute("id", "percent");
  p_tag.innerText = details[i]["fund_percentage"];
  progress_div.append(p_tag);

  //<progress id="file" value="45" max="100">45%</progress>
  progress_tag = document.createElement("progress");
  progress_tag.setAttribute("id", "file");
  progress_tag.setAttribute("value", details[i]["value_progress"]);
  progress_tag.setAttribute("max", "100");
  progress_tag.innerText = "20%";
  progress_div.append(progress_tag);

  //span
  progress_span_tag = document.createElement("span");
  progress_span_tag.setAttribute("class", "like");
  progress_div.append(progress_span_tag);

  //   a
  a_span_like = document.createElement("a");
  a_span_like.setAttribute("href", "#");
  progress_span_tag.append(a_span_like);

  // img

  image_like = document.createElement("img");
  image_like.setAttribute("src", "../../Assets/images/icons8-favorite-50.png");
  image_like.setAttribute("alt", "Like");
  image_like.setAttribute("class", "icon-like");
  image_like.setAttribute("width", "30px");
  a_span_like.append(image_like);

  // a
  a_span_share = document.createElement("a");
  a_span_share.setAttribute("href", "#");
  progress_span_tag.append(a_span_share);

  // img
  image_share = document.createElement("img");
  image_share.setAttribute("src", "../../Assets/images/share.png");
  image_share.setAttribute("class", "share");
  image_share.setAttribute("alt", "share");
  image_share.setAttribute("width", "30px");
  a_span_share.append(image_share);

  // <div class="amount">
  amount_sec = document.createElement("div");
  amount_sec.setAttribute("class", "amount");
  progress_div.append(amount_sec);

  // <span id="txt-amt"></span>
  txt_amount = document.createElement("span");
  txt_amount.setAttribute("id", "txt-amt");
  txt_amount.innerText = "Raised :";
  amount_sec.append(txt_amount);

  // <span id="cash"></span>
  cash = document.createElement("span");
  cash.setAttribute("id", "cash");
  cash.innerText = details[i]["amount_raised"];
  amount_sec.append(cash);

  // <span class="count"></span>
  count = document.createElement("span");
  count.setAttribute("class", "count");
  count.innerText = details[i]["supporters"];
  progress_div.append(count);

  //hrtag
  hr_tag = document.createElement("hr");
  second_box.append(hr_tag);

  //   <div class="contribution">Your Contribution</div>
  contribution_head = document.createElement(div);
  contribution_head.setAttribute("class", "contribution");
  contribution_head.innerText = "Your Contribution";
  second_box.append(contribution_head);

  //<div style="display: flex">

  div_class = document.createElement("div");
  div_class.setAttribute("style", "display: flex");
  second_box.append(div_class);

  //<div class="yourdetails">
  donater_details = document.createElement("div");
  donater_details.setAttribute("class", "yourdetails");
  div_class.append(donater_details);

  //<img class="donater_img"></>
  doanter_img = document.createElement("img");
  doanter_img.setAttribute("class", "donater_img");
  doanter_img.setAttribute(
    "src",
    "https://ca.slack-edge.com/T032648LE-U041NKBPV4N-27e46ea9ea9e-512"
  );
  donater_details.append(doanter_img);

  donater_name = document.createElement("div");
  donater_name.setAttribute("class", "profile-name");
  donater_name.innerText = "GopiKannan";
  div_class.append(donater_name);

  donater_contribution = document.createElement("div");
  donater_contribution.setAttribute("class", "rs");
  donater_contribution.innerText = details[i]["donater_contribution"];
  div_class.append(donater_contribution);

  document.querySelector(".overallcontainer").append(container);
}
