import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import {CardsListMarkup, ClearMarkup, SingleCardMarkup} from './js/ContriesMarkup';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(OnInput,DEBOUNCE_DELAY))
function OnInput(e) {
    console.log(e.target.value)
    Notify.success('Faze idiots')
}


