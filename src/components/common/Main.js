import { useState } from 'react';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';

export default function Main() {
  // TODO add random meme template id on start
  // TODO refactor top and bottomText into one useState object?
  // TODO replace spaces in string with '%20' (not only empty string)
  const [newTemplateId, setNewTemplateId] = useState('aag');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [captionsUrl, setCaptionsUrl] = useState('');
  const apiUrl = 'https://api.memegen.link/';

  function changeTemplateId(userInput) {
    setNewTemplateId(userInput);
    if (topText === '') {
      changeCaptionsUrl(
        apiUrl + 'images/' + userInput + '/%20/' + bottomText + '.png',
      );
    } else if (bottomText === '') {
      changeCaptionsUrl(
        apiUrl + 'images/' + userInput + '/' + topText + '.png',
      );
    } else {
      changeCaptionsUrl(
        apiUrl +
          'images/' +
          userInput +
          '/' +
          topText +
          '/' +
          bottomText +
          '.png',
      );
    }
  }

  function changeTopText(userInput) {
    setTopText(userInput);
  }
  function changeBottomText(userInput) {
    setBottomText(userInput);
  }
  function changeCaptionsUrl(userInput) {
    setCaptionsUrl(userInput);
  }

  console.log(captionsUrl);

  return (
    <div
      style={{
        margin: '10px auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '99vw',
      }}
    >
      <LeftSide
        templateId={newTemplateId}
        onIdSubmit={changeTemplateId}
        onTopSubmit={changeTopText}
        onBottomSubmit={changeBottomText}
        onCaptionsUrlSubmit={changeCaptionsUrl}
      />
      <RightSide
        templateId={newTemplateId}
        topText={topText}
        bottomText={bottomText}
        onTopSubmit={changeTopText}
        onBottomSubmit={changeBottomText}
        captionsUrl={captionsUrl}
        onCaptionsUrlSubmit={changeCaptionsUrl}
      />
    </div>
  );
}
