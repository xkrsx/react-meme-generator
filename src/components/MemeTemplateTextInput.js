import { useState } from 'react';

export default function MemeTemplateTextInput({ templateId, userInputId }) {
  const [idPreview, setIdPreview] = useState(templateId);

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      userInputId(event.currentTarget.value);
      // alert('Enter key was pressed ' + event.currentTarget.value);
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label
        onMouseDownCapture={() => {
          setIdPreview('');
          userInputId('');
        }}
      >
        Meme template
        <p>
          Type name in and hit 'enter' to choose it as a background image.
          <br />
          If no meme template is found, you will receive an error.
          <br />
          WARNING! Clicking inside this box clears text input.
        </p>
        <label>
          Meme ID:{' '}
          <input
            value={idPreview}
            onKeyDown={handleKeyDown}
            onChange={(event) => setIdPreview(event.currentTarget.value)}
            // userInputId(event.currentTarget.value)}
          />
        </label>
      </label>
    </form>
  );
}
