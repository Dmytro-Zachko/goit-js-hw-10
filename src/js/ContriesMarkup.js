import { refs } from "./refs";

function CardsListMarkup(data) {
    ClearMarkup();

    return data.map(({ name: { official },
        flags: {svg} }) => {
        return ` 
    <li class="country-list__item">
        <img src="${svg} " alt="${official}" width="60px" height="40px">
        <h2>${official}</h2>
      </li>
`;
    })
    .join(''); 
};

function SingleCardMarkup({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) {

    ClearMarkup();
        return ` 
    <div>
  <div class="header">
<img src="${svg} " alt="${official}" width="60px" height="40px">
<h1>Capital: ${capital}</h1>
</div>
<p>Population: ${population}</p>
<p>Languages: ${languages}</p>
</div>
`;   
}

function ClearMarkup() {
    refs.CountryInfo.innerHTML = '';
    refs.Countrylist.innerHTML = '';
}
export {ClearMarkup, SingleCardMarkup, CardsListMarkup}