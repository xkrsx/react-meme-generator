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
    <>
      <LeftSide TemplateId={newTemplateId} onIdSubmit={changeTemplateId} />
      <RightSide />
    </>
  );
}
