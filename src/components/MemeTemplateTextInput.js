import { useState } from 'react';

export default function MemeTemplateTextInput({ templateId, onIdSubmit }) {
  const [idPreview, setIdPreview] = useState(templateId);

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      onIdSubmit(event.currentTarget.value);
    }
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      style={{
        border: '1px black dotted',
        borderRadius: '10px',
        height: '100%',
        padding: '32px',
      }}
    >
      <label>
        Meme template
        <p>
          Type name in and hit 'enter' to choose it as a background image.
          <br />
          If no meme template is found, you will receive an error.
          <br />
        </p>
        Meme ID:{' '}
        <input
          value={idPreview}
          onKeyDown={handleKeyDown}
          onChange={(event) => setIdPreview(event.currentTarget.value)}
          onMouseDownCapture={() => {
            setIdPreview('');
            onIdSubmit('');
          }}
        />
      </label>
    </form>
  );
}
