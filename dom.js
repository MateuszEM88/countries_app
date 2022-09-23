const createInfoElement = (label, value) => {
  const infoElement = document.createElement("div");

  const labelElement = document.createElement("strong");
  labelElement.innerText = label;
  const valueElement = document.createElement("span");
  valueElement.innerText = value;

  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);

  return infoElement;
};

const createFlagElement = (country) => {
  const imageContainerElement = document.createElement("div");
  const flagElement = document.createElement("img");
  flagElement.src = country.flagURL;
  imageContainerElement.appendChild(flagElement);

  return imageContainerElement;
};

const createCountryListElement = (country) => {
  const countryElement = document.createElement("li");

  const anchorElement = document.createElement("a");
  anchorElement.href = `?country=${country.code}`;

  anchorElement.appendChild(createFlagElement(country));

  const countryInfoContainer = document.createElement("div");
  countryInfoContainer.classList.add("infoContainer");

  const countryNameElement = document.createElement("strong");
  countryNameElement.innerText = country.name;
  countryNameElement.classList.add("countryName");

  countryInfoContainer.appendChild(countryNameElement);

  countryInfoContainer.appendChild(
    createInfoElement("Population:", country.population)
  );
  countryInfoContainer.appendChild(
    createInfoElement("Region:", country.region)
  );
  countryInfoContainer.appendChild(
    createInfoElement("Capital:", country.capital)
  );

  anchorElement.appendChild(countryInfoContainer);

  countryElement.appendChild(anchorElement);

  return countryElement;
};

const createListElement = (countries) => {
  const listElement = document.createElement("ul");
  countries.forEach((country) => {
    listElement.appendChild(createCountryListElement(country));
  });

  return listElement;
};

const createDetailElement = (country) => {
  const detailContainerElement = document.createElement("div");
  detailContainerElement.classList.add("detailContainer");

  const verticalLine = document.createElement("div");
  verticalLine.classList.add("verticalLine");

  const detailContentElement = document.createElement("div");
  detailContentElement.classList.add("contentBorders");

  const detailFullElement = document.createElement("div");
  detailFullElement.classList.add("fullElement");

  const flagElement = createFlagElement(country);
  flagElement.classList.add("detailFlag");

  const detailNameElement = document.createElement("strong");
  detailNameElement.innerText = country.name;
  detailNameElement.classList.add("countryName");
  const detailDescription = document.createElement("div");

  detailContainerElement.appendChild(flagElement);
  detailContainerElement.appendChild(verticalLine);
  detailDescription.appendChild(detailNameElement);

  detailDescription.appendChild(
    createInfoElement("Native Name:", country.nativeName)
  );
  detailDescription.appendChild(
    createInfoElement("Population:", country.population)
  );
  detailDescription.appendChild(createInfoElement("Region:", country.region));
  detailDescription.appendChild(
    createInfoElement("Sub Region:", country.subregion)
  );
  detailDescription.appendChild(createInfoElement("Capital:", country.capital));
  detailDescription.appendChild(
    createInfoElement("Top Level Domain:", country.tld)
  );

  detailDescription.appendChild(
    createInfoElement("Currencies:", country.currencies)
  );

  detailDescription.appendChild(
    createInfoElement("Languages", country.languages)
  );

  if (country.borders && country.borders.length > 0) {
    detailContentElement.appendChild(createBorderCountriesContainer(country));
  }
  detailContainerElement.appendChild(detailDescription);

  detailFullElement.appendChild(detailContainerElement);
  detailFullElement.appendChild(detailContentElement);

  return detailFullElement;
};

const createDetailButton = (text, link) => {
  const anchorElement = document.createElement("a");
  anchorElement.innerText = text;
  anchorElement.classList.add("detail-button");
  anchorElement.href = link;

  return anchorElement;
};

const createBorderCountriesContainer = (country) => {
  const borderCountriesContainerElement = document.createElement("div");
  borderCountriesContainerElement.classList.add("border-countries-container");
  const labelElement = document.createElement("strong");
  labelElement.innerText = "Border Countries";

  borderCountriesContainerElement.appendChild(labelElement);

  country.borders.forEach((border) => {
    borderCountriesContainerElement.appendChild(
      createDetailButton(border, `/?country=${border}`)
    );
  });

  return borderCountriesContainerElement;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailButton("Go back", "/"));
  rootElement.appendChild(createDetailElement(country));
};
