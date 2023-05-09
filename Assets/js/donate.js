let json = [
  // {
  //   img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1667841206/production/images/campaign/587864/IMG20221009062455_ovmi0x_1667842343.jpg",
  //   alt: "education",
  //   title: "Help me study to win in life",
  //   amount_raised: 600000,
  //   expected_amt: 3000000,
  //   supporters: 550,
  //   fundraiser: "Kumar",
  // },
  // {
  //   img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663057048/production/images/campaign/562956/Divyam_4_luynfw_1663057051.jpg",
  //   alt: "baby",
  //   title: "Help Divyam Fight From Leukaemia",
  //   amount_raised: 1300000,
  //   expected_amt: 5000000,
  //   supporters: 350,
  //   fundraiser: "Ajay",
  // },
  // {
  //   img: "https://kettocdn.gumlet.io/media/campaign/625000/625122/image/627fff291f29d.png?w=768&dpr=1.5",
  //   alt: "school for special needs ",
  //   title: "School For Special Needs",
  //   amount_raised: 463521,
  //   expected_amt: 1000000,
  //   supporters: 240,
  //   fundraiser: "Ram",
  // },
  // {
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowM5xzcQl9XbrUJsI29z-cEaJK-BXh69GSA&usqp=CAU",
  //   alt: "babyemerg",
  //   title: "My Baby Battles For His Life And We Need Your Support To Save Him",
  //   amount_raised: 363521,
  //   expected_amt: 500000,
  //   supporters: 482,
  //   fundraiser: "Somu",
  // },
  // {
  //   img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/street_dog_5.jpg?v=1645437822",
  //   alt: "shelter for dog",
  //   title: "HELP US BUILD A SHELTER HOME",
  //   amount_raised: 158152,
  //   expected_amt: 700000,
  //   supporters: 50,
  //   fundraiser: "Veera",
  // },
  // {
  //   img: "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/6089ceb85c0bd.jpeg?w=768&dpr=1.5",
  //   alt: "food distribution",
  //   title: "Feeding From Far-Ration Distribution Amid Lockdown",
  //   amount_raised: 8000000,
  //   expected_amt: 10000000,
  //   supporters: 9716,
  //   fundraiser: "Pooja",
  // },
];
let create_card = JSON.parse(localStorage.getItem("carddetails"));
console.log(create_card);
for (let i = 0; i < create_card.length; i++) {
  json.push(create_card[i]);
  console.log(json);
}

// let searchDiv;
// searchDiv = document.createElement("span");
// searchDiv.setAttribute("class", "search");

// URL PARAMS CODE TO SHOW THE AND FIND THE FILTER CONTENT

const cause = window.location.search;
const causeParams = new URLSearchParams(cause);
const getcause = causeParams.get("cause");
console.log(getcause);

let anchordrop;
anchordrop = document.createElement("a");
anchordrop.setAttribute("href", "../../webpage/donate/My donations.html");
document.querySelector(".search").append(anchordrop);

let donationBtn;
donationBtn = document.createElement("button");
donationBtn.setAttribute("class", "donation");
donationBtn.innerText = "My Donation";
anchordrop.append(donationBtn);

let inputSearch;
inputSearch = document.createElement("input");
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "Search by name,location,cause...");
inputSearch.setAttribute("name", "search");
document.querySelector(".search").append(inputSearch);

let dropDiv;
dropDiv = document.createElement("div");
dropDiv.setAttribute("class", "abc");
document.querySelector(".search").append(dropDiv);

let dropBtn;
dropBtn = document.createElement("button");
dropBtn.setAttribute("class", "dropbtn");
dropBtn.setAttribute("onclick", "myFunction()");
dropBtn.innerHTML = "Filter" + "&nbsp";
dropDiv.append(dropBtn);

let cartDownArrow;
cartDownArrow = document.createElement("i");
cartDownArrow.setAttribute("class", "fa fa-caret-down");
cartDownArrow.setAttribute("style", "color: #f9f9f9");
dropBtn.append(cartDownArrow);

let dropdowncontentDiv;
dropdowncontentDiv = document.createElement("div");
dropdowncontentDiv.setAttribute("class", "dropdown-content");
dropdowncontentDiv.setAttribute("id", "myDropdown");
dropDiv.append(dropdowncontentDiv);

let anchorMedical;
anchorMedical = document.createElement("a");
anchorMedical.setAttribute(
  "href",
  "../../webpage/donate/donateFilter.html?cause=" + "Medical"
);
anchorMedical.innerText = "Medical";
dropdowncontentDiv.append(anchorMedical);

let anchorEducation;
anchorEducation = document.createElement("a");
anchorEducation.setAttribute(
  "href",
  "../../webpage/donate/donateFilter.html?cause=" + "Educational"
);
anchorEducation.innerText = "Education";
dropdowncontentDiv.append(anchorEducation);

let anchorSocial;
anchorSocial = document.createElement("a");
anchorSocial.setAttribute(
  "href",
  "../../webpage/donate/donateFilter.html?cause=" + "Socialcause"
);
anchorSocial.innerText = "Social";
dropdowncontentDiv.append(anchorSocial);

for (let i = 0; i < json.length; i++) {
  let card_div;
  let anchor;
  let image;
  let h4_tag;
  let progress_div;
  let b_tag;
  let progress_tag;
  let progress_span_tag;
  let image_share;
  let amount_sec;
  let txt_amount;
  let cash;
  let user_div;
  let user_name;
  let nameFundraise;

  // TO GET PERCENTAGE OF A CARD
  let amount = parseInt(json[i]["amount_raised"]);

  let expected_amount = parseInt(json[i]["expected_amt"]);

  let jsonCause = json[i]["drop"];
  console.log(jsonCause);

  let percentage = Math.floor((amount / expected_amount) * 100);

  // TO CLOSE A CARD WHEN ITS EXPECTED AMOUNT REACHED
  if (amount == expected_amount || amount >= expected_amount) {
    json[i]["amout"] = "reached";
  }

  if (json[i]["amout"] == "unreach") {
 

    // search div &dropdown

    //   <div class="box"></div>
    card_div = document.createElement("div");
    card_div.setAttribute("class", "box");
    card_div.setAttribute("id", "content");
    // container_div.append(card_div);

    //<a></a>
    anchor = document.createElement("div");
    card_div.append(anchor);

    let a;
    a = document.createElement("a");
    a.setAttribute(
      "href",
      "../../webpage/donate/story.html?product_id=" +
        json[i]["product_id"] +
        "&userid=" +
        json[i]["userId"]
    );
    anchor.append(a);

    //   <img class="image" src="../../Assets/images/education.jpg" alt="education" />
    image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", json[i]["img"]);
    image.setAttribute("onclick", "redirect()");
    image.setAttribute("alt", "education");
    a.append(image);

    //   <h4></h4>
    h4_tag = document.createElement("h4");
    h4_tag.innerText = json[i]["title"];
    anchor.append(h4_tag);

    //   <div class="progress-sec"></div>
    progress_div = document.createElement("div");
    progress_div.setAttribute("class", "progress-sec");
    anchor.append(progress_div);

    //   <b> 20%</b>

    b_tag = document.createElement("b");
    b_tag.innerText = percentage + "%";
    progress_div.append(b_tag);

    //   <progress id="file" value="32" max="100">20%</progress>
    progress_tag = document.createElement("progress");
    progress_tag.setAttribute("id", "file");
    progress_tag.setAttribute("value", percentage);
    progress_tag.setAttribute("max", "100");
    progress_div.append(progress_tag);

    //span
    progress_span_tag = document.createElement("span");
    progress_span_tag.setAttribute("class", "like");
    progress_div.append(progress_span_tag);

    // img
    image_share = document.createElement("img");
    image_share.setAttribute("src", "../../Assets/images/share.png");
    image_share.setAttribute("class", "share");
    image_share.setAttribute("alt", "share");
    image_share.setAttribute("width", "30px");
    progress_span_tag.append(image_share);

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

    cash.innerHTML = "RS." + json[i]["amount_raised"] + "&nbsp" + "&nbsp";

    amount_sec.append(cash);

    // <div class="user"></div>
    user_div = document.createElement("div");
    user_div.setAttribute("class", "user");
    anchor.append(user_div);

    // <span class="name-label"></span>
    user_name = document.createElement("span");
    user_name.setAttribute("class", "name-label");
    user_name.innerHTML = "Created by" + "&nbsp";
    user_div.append(user_name);

    // <span class="name"></span>
    nameFundraise = document.createElement("span");
    nameFundraise.setAttribute("class", "nameFundraiser");
    nameFundraise.innerText = json[i]["fundraiser"];
    user_div.append(nameFundraise);

    // console.log(json);
    document.querySelector(".container").append(card_div);

    const cards = document.getElementsByClassName("box");

    inputSearch.addEventListener("input", () => {
      for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        if (
          element.innerHTML
            .toLowerCase()
            .includes(inputSearch.value.toLowerCase())
        ) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    });
  }
}
