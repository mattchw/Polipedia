export const CHANGE_LANGUAGE   = 'CHANGE_LANGUAGE';

export const ChangeLanguage = lang => ({
  type: CHANGE_LANGUAGE,
  lang: lang
});

const changeLanguage = (lang) => (dispatch) => {
	dispatch(ChangeLanguage(lang));
};

export const generalActions = {
	changeLanguage,
};