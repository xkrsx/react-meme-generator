import { useState } from 'react';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';

export default function Main() {
  const [newTemplateId, setNewTemplateId] = useState('aag');

  // TODO style component with flex

  function changeTemplateId(userInput) {
    setNewTemplateId(userInput);
  }

  return (
    <div
      style={{
        margin: '10px auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        // flexDirection: 'row',
      }}
    >
      <LeftSide
        templateId={newTemplateId}
        onIdSubmit={changeTemplateId}
        style={{ width: '50vw' }}
      />
      <RightSide templateId={newTemplateId} style={{ width: '50vw' }} />
    </div>
  );
}
