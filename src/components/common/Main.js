import { useState } from 'react';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';

export default function Main() {
  // TODO add random meme template id on start
  const [newTemplateId, setNewTemplateId] = useState('aag');

  function changeTemplateId(userInput) {
    setNewTemplateId(userInput);
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
        style={{ width: '49%' }}
      />
      <RightSide templateId={newTemplateId} style={{ width: '49%' }} />
    </div>
  );
}
