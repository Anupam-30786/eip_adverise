let slideCounter = 1;
let starId;
const totalSlides = 1;
let introduction = [
  { title: "introductory video", videoPath: "./assets/videos/Eip.mp4" },
];
let services = [
  {
    title: "Mobile-LED-Van Services",
    imagePath: "./assets/services/mobile-vehicle.jpg",
    description:
      "This is a dummy descriptiupnn denoted for demo purpose you can tajke it as a examlpenj how are doing",
    quotationPageLink: "bulksmsprice.html",
  },
  {
    title: "Social-Media promotion",
    imagePath: "./assets/services/social-media.jpg",
    description:
      "Let make your brand famous with us,We provide Social Medeia promotions for our customer over different platforms like facebook,youtube,instagram, whatsapp,twitter etc",
    quotationPageLink: "bulksmsprice.html",
  },
  {
    title: "Business & Political Event Mangement",
    imagePath: "./assets/slides/1.jpg",
    description:
      "This is a dummy descriptiupnn denoted for demo purpose you can tajke it as a examlpenj how are doing",
    quotationPageLink: "bulksmsprice.html",
  },
  {
    title: "Bulk Calling<br>Services",
    imagePath: "./assets/services/bulk-calling.jpg",
    description:
      "This is a dummy descriptiupnn denoted for demo purpose you can tajke it as a examlpenj how are doing",
    quotationPageLink: "bulksmsprice.html",
  },
  {
    title: "Bulk Messages Service",
    imagePath: "./assets/services/bulksms.jpg",
    description:
      "Bulk SMS will improve your marketing and customer communication. Why? Because it is fast, cost-effective, it builds meaningful conversation and is a permission-based (opt-in), which customers appreciate a lot.",
    quotationPageLink: "bulksmsprice.html",
  },
  {
    title: "Video-Making Services",
    imagePath: "./assets/services/video-editing.jpg",
    description:
      "This is a dummy descriptiupnn denoted for demo purpose you can tajke it as a examlpenj how are doing",
    quotationPageLink: "bulksmsprice.html",
  },
];

function sendDataToStore(data) {
  fetch("https://api.apispreadsheets.com/data/9872/", {
    method: "POST",
    body: JSON.stringify({
      data: { name: data.name, review: data.comment, starno: data.starno },
    }),
  }).then((res) => {
    if (res.status === 201) {
      alert(" thank you for rating us");
    } else {
      alert(err.value);
    }
  });
}

/*          var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  document.getElementById("demo").innerHTML = this.responseText;
                }
              };
              xhttp.open("POST", "../php/store.php", true);
              xhttp.setRequestHeader("Content-type", "application/string");
              xhttp.send("fname=Henry&lname=Ford");
            }*/

function ShowServices() {
  let servicecontainer = document.querySelector(
    `div[class*="service-container"]`
  );
  let centr = document.createElement("center");
  let title = document.createElement("h1");
  title.innerHTML = "Services";
  title.setAttribute("style", "background-color: black;color:white;");
  centr.appendChild(title);
  let div = document.createElement("div");
  div.setAttribute("class", "row serviceP");
  servicecontainer.appendChild(centr);
  let i = 8;

  services.forEach((service) => {
    let servicedescription = document.createElement("p");
    servicedescription.setAttribute("class", "para");
    servicedescription.innerText = service.description;

    let servicetitle = document.createElement("h3");
    servicetitle.innerHTML = service.title;
    let titlecentr = document.createElement("center");
    titlecentr.appendChild(servicetitle);

    let innerservicediv = document.createElement("div");
    innerservicediv.setAttribute("class", "col-md-3 service");

    let img = document.createElement("img");
    img.setAttribute("class", "servimg");
    img.setAttribute("src", service.imagePath);
    img.setAttribute("style", "position: relative; height: 120; width: 100%;");

    let pricelink = document.createElement("a");
    pricelink.setAttribute("class", "quotation");
    pricelink.setAttribute("id", i++);
    pricelink.setAttribute("href", "pricing.html");
    pricelink.innerText = "Get Quotes";
    pricelink.setAttribute("onClick", "SaveServiceId(this)");

    innerservicediv.appendChild(titlecentr);
    innerservicediv.appendChild(img);
    innerservicediv.appendChild(servicedescription);
    innerservicediv.appendChild(pricelink);
    div.appendChild(innerservicediv);
  });
  servicecontainer.appendChild(div);
}

function populateCities() {
  let cityDropDown = document.querySelector("#city");
  cities.forEach((cityData) => {
    let optionTag = document.createElement("option");
    //optionTag.setAttribute("value", cityData.city);
    optionTag.innerHTML = cityData.city;
    cityDropDown.appendChild(optionTag);
  });
}

function createMailBody(customerName, customerMail, customerMobile, subject) {
  let mailMessage = `Hello Ankit Singh,<br> A customer has raised a contact us request for you please reply him asap.<br>
       Customer Name: ${customerName} <br> 
       Customer Mail: ${customerMail} <br> 
       Customer Mobile: ${customerMobile} <br> 
       Query Description: ${subject} <br><br><br>
       Thanks & Regards,<br>Eip Site Admin`;

  return mailMessage;
}

function sendContactUsMail(
  customerName,
  customerMail,
  customerMobile,
  subject
) {
  enableLoader();
  let mailBody = createMailBody(
    customerName,
    customerMail,
    customerMobile,
    subject
  );
  Email.send({
    Host: "smtp.mail.yahoo.com",
    Username: config.admin_mail,
    Password: config.admin_app_pass,
    To: config.business_mail,
    From: config.admin_mail,
    Subject: `Raised Query || Customer: ${customerName}`,
    Body: mailBody,
  })
    .then(function (message) {
      alert("mail sent successfully");
      disableLoader();
    })
    .catch((err) => alert(err));
}

function isValidEmailId(mailId) {
  return (
    mailId.indexOf("@") !== -1 &&
    mailId.indexOf(".com") !== -1 &&
    mailId.substring(mailId.indexOf(".com")) === ".com"
  );
}

function enableLoader() {
  document.body.setAttribute("class", "loading");
  document.getElementById("loader").setAttribute("style", "display: block;");
}

function disableLoader() {
  document.body.setAttribute("class", "");
  document.getElementById("loader").setAttribute("style", "display: none;");
}

function showToastMessage(message, timeout) {
  var toast = document.getElementById("snackbar");
  toast.innerHTML = message;
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, timeout);
}

function initializeSlides() {
  showToastMessage(
    `Currentlly site is in-dvelopment, some feature might not work !!`,
    5000
  );
  let introContainer = document.querySelector(`.intro`);
  introduction.forEach((intro) => {
    let vid = document.createElement(`video`);
    vid.setAttribute("class", "slides header");
    vid.setAttribute("src", intro.videoPath);
    vid.setAttribute(
      "style",
      "position: relative; height: 100%; width: 100%;background-color: gray;object-fit: fill;"
    );
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;

    introContainer.appendChild(vid);
  });
  let button1 = document.createElement(`button`);
  button1.setAttribute("class", "prev");
  button1.innerHTML = "&#10094;";
  introContainer.appendChild(button1);

  let button2 = document.createElement(`button`);
  button2.setAttribute("class", "next");
  button2.innerHTML = "&#10095;";
  introContainer.appendChild(button2);

  let innerDiv = document.createElement(`div`);
  innerDiv.setAttribute("style", "text-align:center");

  introContainer.appendChild(innerDiv);

  let slides = document.querySelectorAll(".slides");
  for (let i = 0; i < slides.length; i++) {
    let span = document.createElement(`span`);
    span.setAttribute("class", "dot");
    innerDiv.appendChild(span);
    if (i > 0) {
      slides[i].style.display = "none";
    } else {
      span.setAttribute("style", "background-color:#717171;");
    }
  }
}

initializeSlides();
ShowServices();
populateCities();
showReview();

async function showReview() {
  let totalStar = 0;
  let avagstats = 0;
  let data = await drive("1aogk1FM5NFVTt-t9zeG37gHBSSHRemYHfUhxqQ9Q7-8");

  var reviw = document.querySelector('div[class*="reviewpanel"]');

  data.forEach((data) => {
    //making fa fa star
    let fa;

    totalStar = totalStar + parseInt(data.starno);
    let arrangediv = document.createElement("div");
    arrangediv.setAttribute("class", "row");

    let name = data.name;
    let nameparts = name.split(" ");
    let initials =
      nameparts[0].charAt(0).toUpperCase() +
      nameparts[1].charAt(0).toUpperCase();

    let div = document.createElement("div");
    div.setAttribute("class", "col-md-10 offset-1 userreviewpanel");
    let namediv = document.createElement("div");
    namediv.setAttribute("class", "col-md-8");
    let p = document.createElement("p");
    p.setAttribute("class", "para", "style", "color:red");
    p.innerHTML = data.review;

    let h1 = document.createElement("h5");
    h1.setAttribute("style", "color:black");
    h1.innerHTML = data.name + "<br>";

    namediv.appendChild(h1);
    namediv.appendChild(p);

    let letterspan = document.createElement("span");
    letterspan.setAttribute("class", "col-md-4 type1", "style", "padding:5px");

    let hr = document.createElement("hr");
    hr.setAttribute("style", "border:3px solid #f1f1f1");

    letterspan.innerHTML = initials;
    arrangediv.appendChild(letterspan);
    arrangediv.appendChild(namediv);

    //  div.appendChild(h1);
    //  div.appendChild(p);
    //reviw.appendChild(letdiv)
    let fafadiv = document.createElement("div");
    fafadiv.setAttribute("class", "col fafadiv");

    for (i = 5; i >= 1; i--) {
      fa = document.createElement("span");
      if (i <= data.starno) {
        fa.setAttribute("class", "fa fa-star checked");
      } else {
        fa.setAttribute("class", "fa fa-star");
      }
      fa.setAttribute("id", i);
      fa.setAttribute("style", "float:right;position:relative");
      fafadiv.appendChild(fa);
    }
    arrangediv.appendChild(fafadiv);
    div.appendChild(arrangediv);
    reviw.appendChild(div);
    reviw.appendChild(hr);
  });
  avagstats = totalStar / data.length;
  document.getElementById("reviewstats").innerHTML =
    avagstats + "  " + "star rating review based on" + "   " + data.length;
}

document.querySelector(`.next`).addEventListener("click", () => {
  let dots = document.querySelectorAll(".dot");
  let prevSlide = slideCounter;
  slideCounter++;
  if (slideCounter > totalSlides) {
    slideCounter = 1;
  }

  let slides = document.querySelectorAll(".slides");
  slides[prevSlide - 1].style.display = "none";
  slides[slideCounter - 1].style.display = "block";
  dots[prevSlide - 1].setAttribute("style", "background-color:#bbb;");
  dots[slideCounter - 1].setAttribute("style", "background-color:#717171;");
});

document.querySelector(`.prev`).addEventListener("click", () => {
  let dots = document.querySelectorAll(".dot");
  let prevSlide = slideCounter;
  slideCounter--;
  if (slideCounter === 0) {
    slideCounter = totalSlides;
  }

  let slides = document.querySelectorAll(".slides");
  slides[prevSlide === 0 ? 0 : prevSlide - 1].style.display = "none";
  slides[slideCounter - 1].style.display = "block";
  dots[prevSlide - 1].setAttribute("style", "background-color:#bbb;");
  dots[slideCounter - 1].setAttribute("style", "background-color:#717171;");
});

document
  .querySelector("#contactussubmit")
  .addEventListener("click", (event) => {
    let name = document.getElementById("name").value;
    let customerMail = document.getElementById("mail").value;
    let customerMobile = document.getElementById("mobile").value;
    let subject = document.getElementById("subject").value;
    if (name && customerMail && customerMobile && subject) {
      if (!isValidEmailId(customerMail)) {
        alert(`Please enter valid Email ID !!`);
      } else if (customerMobile.length !== 10) {
        alert(`Please enter valid mobile number !!`);
      } else {
        sendContactUsMail(name, customerMail, customerMobile, subject);
      }
    } else {
      alert("All fields are require to fill in the form");
    }
  });

document.querySelector("#rateus").addEventListener("click", () => {
  let customer = document.getElementById("myModal");
  let customerContent = document.querySelector(`.modal-content`);
  customer.setAttribute("style", "display:block;");
  customerContent.setAttribute("style", "display:block;");
});
document.querySelector(".winclose").addEventListener("click", () => {
  let fa = document.querySelectorAll("div.starrating> fa");
  fa.forEach((el) => el.setAttribute("class", "fa fa-star"));

  let customer = document.getElementById("myModal");
  let customerContent = document.querySelector(`.modal-content`);
  customer.setAttribute("style", "display:none;");
  customerContent.setAttribute("style", "display:none;");
});

function starRating(star) {
  let starRate = parseInt(star.id);
  for (i = 1; i <= 5; i++) {
    let fa = document.getElementById(i);
    if (i <= starRate) fa.setAttribute("class", "fa fa-star checked");
    else fa.setAttribute("class", "fa fa-star");
  }
}
function saveStar(save) {
  let fafa = document.querySelectorAll('span[class*="fa fa-star"]');
  starId = parseInt(save.id);
  for (i = 1; i <= 5; i++) {
    let fa = document.getElementById(i);
    if (i <= starId) fa.setAttribute("class", "fa fa-star checked");
  }
}

function pushRating() {
  let span = null;
  var name = document.getElementById("ratinguser").value;
  var ratingcomment = document.getElementById("ratingcomment").value;
  if ((name && starId) != null) {
    let data = { name: name, comment: ratingcomment, starno: starId };
    sendDataToStore(data);
  } else {
    alert("rating star and customer name are required");
  }
}

function saveRatingData(rating, name, comment) {
  var user = [{ name: name, rating: rating, comment: comment }];

  if (localStorage.getItem("ratingData"))
    localStorage.setItem("ratingData", JSON.stringify(user));
}

document.getElementById(`ContactUs`).addEventListener("click", () => {
  let containerTop = document
    .getElementById(`contactus-container`)
    .getBoundingClientRect().top;
  window.scrollBy(0, containerTop);
});

//pricing fuctions
function SaveServiceId(price) {
  let serviceId = price.id;
  localStorage.setItem("serviceId", serviceId);
  window.location.replace("pricing.html");
}
