let details = [
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1667841206/production/images/campaign/587864/IMG20221009062455_ovmi0x_1667842343.jpg",
    title: "Help me study to win in life",
    fund_percentage: "30%",
    value_progress: 30,
    amount_raised: "Rs.6,00,000",
    supporters: 550,
    fundraiser: "Kumar",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/5fa2e0550e953.jpeg?w=576&dpr=1.5",
    title: "Schooling Special needs Children with Custom Education",
    fund_percentage: "90%",
    value_progress: 90,
    amount_raised: "Rs.50,00,000",
    supporters: 2615,
    fundraiser: "Shyam",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/625000/625122/image/627fff291f29d.png?w=768&dpr=1.5",
    title: "School For Special Needs",
    fund_percentage: "45%",
    value_progress: "45",
    amount_raised: "Rs.4,63,521",
    supporters: 240,
    fundraiser: "Ram",
  },
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1664619537/production/images/campaign/573851/WhatsApp_Image_2022-09-29_at_21.11.55_qlata1_1664619541.jpg",
    title: "Enable access to positive Childhood experience",
    fund_percentage: "71%",
    value_progress: "71",
    amount_raised: "Rs.7,12,054",
    supporters: 482,
    fundraiser: "Jack",
  },
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1666890890/production/images/campaign/584128/nawpc_lkzjx1_1666892089.jpg",
    title: "Support training and hostel for students with blindness",
    fund_percentage: "15%",
    value_progress: "15",
    amount_raised: "Rs.74,447",
    supporters: 103,
    fundraiser: "Suraj",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/223000/223866/image/5f47435fc0f94.jpeg?w=576&dpr=1.5",
    title: "Financial Support for Underprivileged Children",
    fund_percentage: "30%",
    value_progress: "30",
    amount_raised: "Rs.3,00,000",
    supporters: 116,
    fundraiser: "Sundar",
  },
];

let card_div;
let anchor;
let span;
let image;
let h4_tag;
let progress_div;
let b_tag;
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
let user_div;
let user_name;
let fundraisername;

for (let i = 0; i <= details.length; i++) {
  //  <div class="box"></div>
  card_div = document.createElement("div");
  card_div.setAttribute("class", "box");

  //<a></a>
  anchor = document.createElement("a");
  anchor.setAttribute("href", "../../webpage/donate/story.html");
  anchor.setAttribute("style", "text-decoration:none;");
  card_div.append(anchor);

  //   <span class="linkspanner"></span>
  span = document.createElement("span");
  span.setAttribute("class", "linkspanner");
  anchor.append(span);

  //   <img class="image" src="../../Assets/images/education.jpg" alt="education" />
  image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", details[i]["img"]);
  image.setAttribute("alt", "education");
  anchor.append(image);

  //   <h4></h4>
  h4_tag = document.createElement("h4");
  h4_tag.innerText = details[i]["title"];
  anchor.append(h4_tag);

  //   <div class="progress-sec"></div>
  progress_div = document.createElement("div");
  progress_div.setAttribute("class", "progress-sec");
  anchor.append(progress_div);

  //   <b> 20%</b>

  b_tag = document.createElement("b");
  b_tag.innerText = details[i]["fund_percentage"];
  progress_div.append(b_tag);

  //   <progress id="file" value="32" max="100">20%</progress>
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

  // <div class="user"></div>
  user_div = document.createElement("div");
  user_div.setAttribute("class", "user");
  anchor.append(user_div);

  // <span class="name-label"></span>
  user_name = document.createElement("span");
  user_name.setAttribute("class", "name-label");
  user_name.innerText = "Created by";
  user_div.append(user_name);

  // <span class="name"></span>
  fundraisername = document.createElement("span");
  fundraisername.setAttribute("class", "name");
  fundraisername = innerText = details[i]["fundraiser"];
  user_div.append(fundraisername);

  document.querySelector(".container").append(card_div);
}
