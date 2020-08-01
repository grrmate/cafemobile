//import I18n from 'i18n-js';
import I18n from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './en';
import pt from './pt';

I18n.locale = Localization.locale;;


I18n.translations = {
  default: en,
  'en': en,
  'pt': pt,
};

I18n.fallbacks = true;
export default I18n;
