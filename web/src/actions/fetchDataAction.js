import { fetchDataBegin, fetchDataSuccess, fetchDataFailure, UpdatePage, UpdateKeywordAndFilters, ClearKeywordAndFilters } from './dataAction';
import axios from 'axios';

const getAll = (category) => async (dispatch) => {
	try {
		dispatch(fetchDataBegin());
		const result = await axios(
			'https://yellow-blue.net/api/v1/' + category + '?sort=name',
		);
		console.log(result);
		dispatch(fetchDataSuccess(result.data));
	} catch (error) {
		console.log(error);
		dispatch(fetchDataFailure(error));
	}
};

const getWithOptions = (category, keyword, filters, page) => async (dispatch) => {
	try {
		const querystring = require('querystring');

		let stanceAndOption = {
			stance: [],
			option: [],
			page: page - 1
		}
		if (keyword) {
			stanceAndOption.keyword = keyword;
		}
		if (filters.stances) {
			for (let i = 0; i < filters.stances.length; i++) {
				stanceAndOption.stance.push(filters.stances[i].value);
			}
		}
		if (filters.options) {
			for (let j = 0; j < filters.options.length; j++) {
				stanceAndOption.option.push(filters.options[j].value);
			}
		}
		let queryString = querystring.stringify(stanceAndOption);

		dispatch(fetchDataBegin());
		console.log("query string: "+queryString);
		const result = await axios(
			'https://yellow-blue.net/api/v1/' + category + '?' + queryString + '&sort=name',
		);
		dispatch(fetchDataSuccess(result.data));
	} catch (error) {
		console.log(error);
		dispatch(fetchDataFailure(error));
	}
};

const updatePage = (page) => (dispatch) => {
	console.log("the page is " + page);
	dispatch(UpdatePage(page));
};

const updateKeywordAndFilters = (keyword, filters) => (dispatch) => {
	console.log("keyword: " + keyword);
	console.log("filters: ");
	console.log(filters);
	dispatch(UpdateKeywordAndFilters(keyword, filters));
};

const clearKeywordAndFilters = () => (dispatch) => {
	dispatch(ClearKeywordAndFilters());
};

export const dataActions = {
	getAll,
	getWithOptions,
	updatePage,
	updateKeywordAndFilters,
	clearKeywordAndFilters,
};