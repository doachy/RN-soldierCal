import React, { createContext, useContext, useState } from 'react';

const NameContext = createContext();

// Custom Hooks
export const useName = () => useContext(NameContext);
export const useClasses = () => useContext(ClassContext);
export const useArmy = () => useContext(ArmyContext);

export const NameProvider = ({ children }) => {
	const [name, setName] = useState('김륜기');
	const [classes, setClasses] = useState('상병');
	const [army, setArmy] = useState('육군');

	return (
		<NameContext.Provider value={[name, setName]}>
			<ClassContext.Provider value={[classes, setClasses]}>
				<Army.Provider value={[army, setArmyz]}>{children}</Army.Provider>
			</ClassContext.Provider>
		</NameContext.Provider>
	);
};