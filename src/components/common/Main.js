import { useState } from 'react';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';

export default function Main() {
  // TODO add random meme template id on start
  // TODO refactor top and bottomText into one useState object?
  const [newTemplateId, setNewTemplateId] = useState('aag');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [captionsUrl, setCaptionsUrl] = useState('');

  function changeTemplateId(userInput) {
    setNewTemplateId(userInput);
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
