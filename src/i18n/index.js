import I18n from 'i18n-js';
import * as RnLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import en from './en';
import tr from './tr';

const translations ={
    tr,
    en,
};

const locales = RnLocalize.getLocales();

console.log("Locales",locales);

//dilimizin kodunu getirir
I18n.locale = locales[0].languageTag;

export const changeLanguage = language => {
    I18n.locale = language;
};

//gelen dil nereden başlıyor sol mu sağ mı
export const isRtl = locales[0].isRTL;

//duyamadım
I18nManager.forceRTL = isRtl;

//gelen dil bende yoksa öbür dile geçer
I18n.fallbacks = true;

//default tr
I18n.locales.no ='tr';

//dilleri nesne olarak aldık dışarıda kullanacağız
I18n.translations = translations;
export default I18n;