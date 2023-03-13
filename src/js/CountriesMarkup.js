import { refs } from "./refs";

function CardsListMarkup(data) {
    ClearMarkup();

    return data.map(({ name: { common },
        flags: {svg} }) => {
        return ` 
    <li class="country-list__item">
        <img src="${svg} " alt="${common}" width="30px" height="20px">
        <h2 class="country-list__name">${common}</h2>
      </li>
`;
    })
    .join(''); 
};

function SingleCardMarkup({
  name: { common },
  capital,
  population,
  flags: { svg },
  languages,
}) {
const language = Object.values(languages)
    ClearMarkup();
        return ` 
    <div>
  <div class="header">
<img src="${svg} " alt="${common}" width="60px" height="40px">
<h1>${common}</h1>
</div>
<p><b>Capital:</b> ${capital}</p>
<p><b>Population:</b> ${population}</p>
<p><b>Languages:</b> ${language}</p>
</div>
`;   
}

function ClearMarkup() {
    refs.CountryInfo.innerHTML = '';
    refs.Countrylist.innerHTML = '';
}
export { ClearMarkup, SingleCardMarkup, CardsListMarkup }
