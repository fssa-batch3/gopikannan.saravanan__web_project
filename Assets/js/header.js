let allarray = JSON.parse(window.localStorage.getItem("userDetails"));
let userId = JSON.parse(window.localStorage.getItem("userCheckdetails"));

if (userId != null) {
  let user = allarray.find(function (profile) {
    let user_profile = profile["userid"];

    if (user_profile == userId["userid"]) {
      return true;
    }
  });
  console.log(user);
  let spanMenu;
  spanMenu = document.createElement("span");
  spanMenu.setAttribute("class", "menudiv");
  document.querySelector("header").append(spanMenu);

  let anchormenuLink;
  anchormenuLink = document.createElement("a");
  anchormenuLink.setAttribute("class", "menulink");
  anchormenuLink.setAttribute("onclick", "togglemenu()");
  spanMenu.append(anchormenuLink);

  let imgMenu;
  imgMenu = document.createElement("img");
  imgMenu.setAttribute("class", "menu");
  imgMenu.setAttribute("src", "../../Assets/images/menu (2).png");
  imgMenu.setAttribute("alt", "menu");
  imgMenu.setAttribute("width", "25");
  anchormenuLink.append(imgMenu);

  let divLogo;
  divLogo = document.createElement("div");
  divLogo.setAttribute("class", "image-txt");
  document.querySelector("header").append(divLogo);

  let imgSpan;
  imgSpan = document.createElement("span");
  divLogo.append(imgSpan);

  let logo;
  logo = document.createElement("img");
  logo.setAttribute("id", "logoid");
  logo.setAttribute("src", "../../Assets/images/business-community.png");
  logo.setAttribute("alt", "group of people");
  logo.setAttribute("class", "logo");
  imgSpan.append(logo);

  let spanName;
  spanName = document.createElement("span");
  spanName.setAttribute("id", "logonameid");
  spanName.setAttribute("class", "name");
  spanName.innerText = "People In Need";
  divLogo.append(spanName);

  let headerNav;
  headerNav = document.createElement("div");
  headerNav.setAttribute("class", "nav");
  document.querySelector("header").append(headerNav);

  let divSidebar;
  divSidebar = document.createElement("div");
  divSidebar.setAttribute("id", "sidebar");
  divSidebar.setAttribute("onclick", "togglemenu()");
  headerNav.append(divSidebar);

  let home;
  home = document.createElement("a");
  home.setAttribute("href", "/index.html");
  home.setAttribute("class", "nav-anchor");
  home.setAttribute("id", "homeId");
  home.innerText = "Home";
  divSidebar.append(home);

  let donate1;
  donate1 = document.createElement("a");
  donate1.setAttribute("href", "../../webpage/donate/donate.html");
  donate1.setAttribute("class", "nav-anchor donate");
  donate1.setAttribute("id", "donateid");
  donate1.innerText = "Donate";
  divSidebar.append(donate1);

  let fundraise;
  fundraise = document.createElement("a");
  fundraise.setAttribute(
    "href",
    "../../webpage/fundraiser/fundraiser.html?userid=" + user["userid"]
  );
  fundraise.setAttribute("id", "fundraiseid");
  fundraise.setAttribute("class", "nav-anchor fundraise");
  fundraise.innerText = "Fundraise";
  divSidebar.append(fundraise);

  let about;
  about = document.createElement("a");
  about.setAttribute("href", "../../webpage/header/about.html");
  about.setAttribute("class", "nav-anchor");
  about.setAttribute("id", "aboutId");
  about.innerText = "About";
  divSidebar.append(about);

  let contact;
  contact = document.createElement("a");
  contact.setAttribute("href", "../../webpage/header/contact.html");
  contact.setAttribute("class", "nav-anchor");
  contact.setAttribute("id", "contactId");
  contact.innerText = "Contact";
  divSidebar.append(contact);

  let imgProfile;
  imgProfile = document.createElement("img");
  imgProfile.setAttribute("class", "profile");
  imgProfile.setAttribute("src", user["user_pic"]);
  imgProfile.setAttribute("alt", "Profile");
  imgProfile.setAttribute("title", "profile");
  imgProfile.setAttribute("id", "profileid");
  imgProfile.setAttribute("onclick", "profile()");
  divSidebar.append(imgProfile);
} else {
  let spanMenu;
  spanMenu = document.createElement("span");
  spanMenu.setAttribute("class", "menudiv");
  document.querySelector("header").append(spanMenu);

  let anchormenuLink;
  anchormenuLink = document.createElement("a");
  anchormenuLink.setAttribute("class", "menulink");
  anchormenuLink.setAttribute("onclick", "togglemenu()");
  spanMenu.append(anchormenuLink);

  let imgMenu;
  imgMenu = document.createElement("img");
  imgMenu.setAttribute("class", "menu");
  imgMenu.setAttribute("src", "../../Assets/images/menu (2).png");
  imgMenu.setAttribute("alt", "menu");
  imgMenu.setAttribute("width", "25");
  anchormenuLink.append(imgMenu);

  let divLogo;
  divLogo = document.createElement("div");
  divLogo.setAttribute("class", "image-txt");
  document.querySelector("header").append(divLogo);

  let imgSpan;
  imgSpan = document.createElement("span");
  divLogo.append(imgSpan);

  let logo;
  logo = document.createElement("img");
  logo.setAttribute("id", "logoid");
  logo.setAttribute("src", "../../Assets/images/business-community.png");
  logo.setAttribute("alt", "group of people");
  logo.setAttribute("class", "logo");
  imgSpan.append(logo);

  let spanName;
  spanName = document.createElement("span");
  spanName.setAttribute("id", "logonameid");
  spanName.setAttribute("class", "name");
  spanName.innerText = "People In Need";
  divLogo.append(spanName);

  let headerNav;
  headerNav = document.createElement("div");
  headerNav.setAttribute("class", "nav");
  document.querySelector("header").append(headerNav);

  let divSidebar;
  divSidebar = document.createElement("div");
  divSidebar.setAttribute("id", "sidebar");
  divSidebar.setAttribute("onclick", "togglemenu()");
  headerNav.append(divSidebar);

  let home;
  home = document.createElement("a");
  home.setAttribute("href", "/index.html");
  home.setAttribute("class", "nav-anchor");
  home.setAttribute("id", "homeId");
  home.innerText = "Home";
  divSidebar.append(home);

  let donate1;
  donate1 = document.createElement("a");
  donate1.setAttribute("href", "../../webpage/donate/donate.html");
  donate1.setAttribute("class", "nav-anchor donate");
  donate1.setAttribute("id", "donateid");
  donate1.innerText = "Donate";
  divSidebar.append(donate1);

  let fundraise;
  fundraise = document.createElement("a");
  fundraise.setAttribute(
    "href",
    "../../webpage/fundraiser/fundraiser.html?userid=" + userId
  );
  fundraise.setAttribute("id", "fundraiseid");
  fundraise.setAttribute("class", "nav-anchor fundraise");
  fundraise.innerText = "Fundraise";
  divSidebar.append(fundraise);

  let about;
  about = document.createElement("a");
  about.setAttribute("href", "../../webpage/header/about.html");
  about.setAttribute("class", "nav-anchor");
  about.setAttribute("id", "aboutId");
  about.innerText = "About";
  divSidebar.append(about);

  let contact;
  contact = document.createElement("a");
  contact.setAttribute("href", "../../webpage/header/contact.html");
  contact.setAttribute("class", "nav-anchor");
  contact.setAttribute("id", "contactId");
  contact.innerText = "Contact";
  divSidebar.append(contact);

  let signin;
  signin = document.createElement("a");
  signin.setAttribute("href", "../../webpage/login-signup/signup.html");
  signin.setAttribute("class", "nav-anchor");
  signin.setAttribute("id", "signinId");
  signin.innerText = "Signup";
  divSidebar.append(signin);

  let login;
  login = document.createElement("a");
  login.setAttribute("href", "../../webpage/login-signup/login.html");
  login.setAttribute("class", "nav-anchor");
  login.setAttribute("id", "loginId");
  login.innerText = "Login";
  divSidebar.append(login);
}

// let signupid = document.getElementById("signinId");
// let loginId = document.getElementById("loginId");
// let profileid = document.getElementById("profileid");

// if (userId[0]["loginCheck"] == "yes") {
//   signupid.style.display = "none";
//   loginId.style.display = "none";
// } else {
//   signupid.style.display = "block";
//   loginId.style.display = "block";
//   profileid.style.display = "none";
// }
function profile() {
  window.location.href = "../../webpage/header/profile.html";
}
