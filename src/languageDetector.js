import i18n from './i18n'; // i18n instance with static imports

// Map of country code to language code
const countryToLangMap = {
  DE: 'de',  
  CN: 'zh',  
  FR: 'fr',  
  ES: 'es', 
  JP: 'ja',
  KO: 'ko',
};

export const detectAndSetLanguage = async () => {
  try {
    const res = await fetch('https://ipinfo.io/json?token=6bcec797ff8746'); // get a free token from ipinfo.io
    const data = await res.json();
    const countryCode = data.country;

    // Get the corresponding language code from the map
    const lang = countryToLangMap[countryCode] || 'en';
    console.log('Detected country code:', countryCode);
    console.log('Setting language to:', lang);

    // Set the language in i18n (no need to dynamically import the language file, as it's already imported in i18n.js)
    i18n.changeLanguage(lang);

    return lang;
  } catch (err) {
    console.error('IP detection failed:', err);
    // Fallback to English if there is an error
    i18n.changeLanguage('en');
    return 'en';
  }
};
