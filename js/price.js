function showServiceCharges() {
  let serviceDiv = document.getElementById("ServiceCharge");

  serviceCharge.forEach((service) => {
    let center = document.createElement("center");

    let divPanel = document.createElement("div");

    divPanel.setAttribute("class", "col-md-11 priceinfo");
    divPanel.setAttribute("id", service.id);
    let priceSection = document.createElement("section");
    priceSection.setAttribute("class", "amountsection");
    priceSection.setAttribute("style", "float:left");
    let h1 = document.createElement("h1");
    h1.setAttribute("style", "color:black;margin-top:10");
    h1.innerHTML = service.title;
    center.appendChild(h1);
    divPanel.appendChild(center);

    let table = document.createElement("table");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.innerText = "Description";
    th2.innerText = "Price";
    let heradeRow = document.createElement("tr");
    heradeRow.appendChild(th1);
    heradeRow.appendChild(th2);
    table.appendChild(heradeRow);
    service.packages.forEach((package) => {
      let packageRow = document.createElement("tr");
      let initialize = 0;
      Object.keys(package).forEach((key) => {
        ++initialize;
        let data = package[key];
        let td = document.createElement("td");
        td.innerHTML = data;

        if (initialize % 2 == 0) {
          packageRow.appendChild(td);
          table.appendChild(packageRow);
          packageRow = document.createElement("tr");
        } else {
          packageRow.appendChild(td);
        }
      });

      //table.appendChild(packageRow);
    });
    priceSection.appendChild(table);
    divPanel.appendChild(priceSection);

    priceSection = document.createElement("section");
    priceSection.setAttribute("class", "imgsection");
    priceSection.setAttribute("style", "float:right");
    let img = document.createElement("img");
    img.setAttribute("class", "imgsec");
    img.setAttribute("src", service.imagePath);
    img.setAttribute(
      "style",
      " box-shadow: 0px 0px 5px white; height: 400px;width: 600;margin:40px;    margin-top: 80px;"
    );
    priceSection.appendChild(img);
    divPanel.appendChild(priceSection);
    serviceDiv.appendChild(divPanel);
  });
  if (localStorage.getItem("serviceId") != null) fetchServiceDiv();
}
showServiceCharges();

function fetchServiceDiv() {
  let containerTop;
  let ServiceId = parseInt(localStorage.getItem("serviceId"));

  switch (ServiceId) {
    case 8:
      containerTop = document
        .getElementById(`ledvan`)
        .getBoundingClientRect().top;
      window.scrollBy(0, containerTop);
      localStorage.removeItem("serviceId");
      break;

    case 9:
      containerTop = document
        .getElementById(`socialmedia `)
        .getBoundingClientRect().top;
      window.scrollBy(0, containerTop);
      localStorage.removeItem("serviceId");
      break;

    case 10:
      containerTop = document
        .getElementById(`Business & Political Event Mangements`)
        .getBoundingClientRect().top;
      window.scrollBy(0, containerTop);
      localStorage.removeItem("serviceId");
      break;

    case 11:
      containerTop = document
        .getElementById(`bulkcalling`)
        .getBoundingClientRect().top;
      window.scrollBy(0, containerTop);
      localStorage.removeItem("serviceId");
      break;

    case 12:
      containerTop = document
        .getElementById(`bulkmassage`)
        .getBoundingClientRect().top;
      window.scrollBy(0, containerTop);
      localStorage.removeItem("serviceId");
      break;

    case 13:
      containerTop = document
        .getElementById(`videocreating`)
        .getBoundingClientRect().top;
      window.scrollBy(0, containerTop);
      localStorage.removeItem("serviceId");
      break;
  }
}

document.getElementById("contactUs").addEventListener("click", () => {
  localStorage.setItem("contactus", "yes");
});
