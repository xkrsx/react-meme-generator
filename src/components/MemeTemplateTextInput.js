export default function MemeTemplateTextInput({ TemplateId, userInputId }) {
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      alert('Enter key was pressed ' + TemplateId);
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label onMouseDownCapture={() => userInputId('')}>
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
            value={TemplateId}
            onKeyDown={handleKeyDown}
            onChange={(event) => userInputId(event.currentTarget.value)}
          />
        </label>
      </label>
    </form>
  );
}
