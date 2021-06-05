import React from 'react';


export const informations = {
	detail: {
		name: '김륜기',
		classes: '상병',
		army: '육군',
		start: '20200601',
		final: '20210924',
	},
	toggleInfo: () => {},
};


export const InfoContext = React.createContext(informations.detail);