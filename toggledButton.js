import {InfoContext} from './infoContext';
import React, {useContext } from 'react';


function ToggledButton() {
  // ThemeTogglerButton는 context로부터
  // theme 값과 함께 toggleTheme 매서드도 받고 있습니다.
const info = useContext(InfoContext);
	
  return (
    <InfoContext.Consumer>
      {({info, toggleInfo}) => (
			  <Button color="white" title="설정 완료" onPress={() => info.toggleInfo()} />
      )}
    </InfoContext.Consumer>
  );
}

export default ToggledButton;