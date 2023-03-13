import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import {CardsListMarkup, ClearMarkup , SingleCardMarkup} from './js/CountriesMarkup';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(OnInput,DEBOUNCE_DELAY))
function OnInput(e) {
  const name = e.target.value.trim();

  if (name) {
    fetchCountries(name)
      .then((data) => {
        console.log(data)
        if (data.length === 1) {
          refs.CountryInfo.innerHTML = SingleCardMarkup(data[0]);
        } else if (data.length > 1 && data.length <= 10) {
          refs.Countrylist.innerHTML = CardsListMarkup(data);
        } else if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      }).catch(error => {
        Notify.failure("Oops, there is no country with that name")
      });
  }
  else {
    ClearMarkup();
  }
 }

