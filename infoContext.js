import React from 'react';


export const informations = {
	detail: {
		name: '김륜기',
		class: '상병',
		army: '육군',
		start: '20200601',
		final: '20210924',
	},
	set: {
		name: '',
		class: '',
		army: '',
		start: '',
		final: '',
	},
};


export const InfoContext = React.createContext(informations.detail);