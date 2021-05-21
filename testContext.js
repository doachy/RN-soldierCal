import React, { createContext, useContext, useState } from 'react';

const NameContext = createContext();

// Custom Hooks
export const useName = () => useContext(NameContext);

export const NameProvider = ({ children }) => {
	const [name, setName] = useState('김륜기');


	return (
		<NameContext.Provider value={[name, setName]}>
{children}
		</NameContext.Provider>
	);
};