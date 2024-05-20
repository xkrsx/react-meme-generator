// import { useState } from 'react';

export default function CreateMemeTextBox({
  onCaptionSubmit,
  onIdSubmit,
  // memeText,
  templateId,
  // idPreview,
}) {
  // const [memeText, setMemeText] = useState({
  //   topText: '',
  //   bottomText: '',
  // });
  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     onCaptionSubmit(event.currentTarget.value);
  //   }
  // }
  // function handleSubmit(event) {
  //   onIdSubmit(event.currentTarget.value);
  //   event.preventDefault();
  // }

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     onCaptionSubmit(event.currentTarget.value);
  //   }
  // }

  function handleKeyDown(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      onIdSubmit(event.currentTarget.value);
    }
  }

  return (
    <div
      style={{
        border: '1px black dotted',
        borderRadius: '10px',
        height: '100%',
        padding: '32px',
        textAlign: 'center',
      }}
    >
      <h3>Add your own captions!</h3>
      <form
        // onKeyDown={handleKeyDown}
        // onSubmit={(event) => event.preventDefault()}
        // onSubmit={
        //   handleSubmit(topText)
        // // (event) => event.preventDefault()
        // onCaptionSubmit(topText)
        // // onCaptionSubmit(memeText);
        // }
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label style={{ display: 'flex', justifyContent: 'space-between' }}>
          Top text
          <input
            value={templateId}
            onKeyDown={handleKeyDown}
            // onChange={(event) => onCaptionSubmit(event.currentTarget.value)}
          />
        </label>
        {/* <label style={{ display: 'flex', justifyContent: 'space-between' }}>
          Bottom text */}
        {/* <input
            value={memeText.bottomText}
            onChange={(event) => memeText.bottomText(event.currentTarget.value)}
          /> */}
        {/* </label> */}
        {/* <button>Generate captions</button> */}
      </form>
    </div>
  );
}
