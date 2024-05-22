import { saveAs } from 'file-saver';
import useSWR from 'swr';

export default function MemeBox({
  templateId,
  topText,
  bottomText,
  onTopSubmit,
  onBottomSubmit,
  captionsUrl,
  onCaptionsUrlSubmit,
}) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const apiUrl = 'https://api.memegen.link/';

  const { data, error, isValidating } = useSWR(
    // `https://api.memegen.link/templates/${templateId}`,
    // gives an 'Invalid type "any" of template literal expression.'
    apiUrl + 'templates/' + templateId,
    fetcher,
  );

  if (error) {
    return <div>Failed to load '{templateId}' template.</div>;
  }
  if (isValidating) {
    return <div>Loading '{templateId}' template...</div>;
  }

  function handleKeyDownTopText(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  }
  function handleKeyDownBottomText(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  }

  function handleReset(event) {
    event.preventDefault();
    onTopSubmit('');
    onBottomSubmit('');
    onCaptionsUrlSubmit('');
  }

  // TODO fix special characters
  // .replace(' ', '_')
  // .replace('?', '~q')
  // .replace('#', '~h')
  // .replace('/', '~s')

  function handleSubmit(event) {
    // if (topText.findAll('?')) {
    //   setTopText(topText + '~q');
    // }

    if (topText === '') {
      event.preventDefault();
      onTopSubmit('_');
    } else if (bottomText === '') {
      event.preventDefault();
      onBottomSubmit('_');
    }
    event.preventDefault();
    onCaptionsUrlSubmit(
      // `https://api.memegen.link/images/${templateId}/${topText}/${bottomText}.png`,
      // gives an 'Invalid type "any" of template literal expression.'
      apiUrl +
        'images/' +
        templateId +
        '/' +
        topText +
        '/' +
        bottomText +
        '.png',
    );
  }

  function handleDownload() {
    saveAs(captionsUrl, 'meme.png');
  }

  // function noMemeId() {
  //   return <p>Please type meme ID.</p>;
  // }

  console.log(captionsUrl);

  return (
    // {data.blank === undefined ? (
    //   noMemeId()
    // ) : (
    <div
      style={{
        width: '500px',
      }}
    >
      <div
        style={{
          border: '1px black dotted',
          borderRadius: '10px',
          padding: '32px',
          flexFlow: 'flex column',
          justifyContent: 'space-between',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>Add your own captions!</h3>

        <form
          className="create-custom-captions"
          style={{ flexFlow: 'flex column', justifyContent: 'flex-end' }}
        >
          <label
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}
          >
            Top text{' '}
            <input
              required
              value={topText}
              onKeyDown={handleKeyDownTopText}
              onChange={(event) => onTopSubmit(event.currentTarget.value)}
              style={{
                border: '1px black solid',
                marginLeft: '0.5rem',
                width: '50%',
              }}
            />
          </label>

          <label
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: '1.2rem',
            }}
          >
            Bottom text
            <input
              required
              value={bottomText}
              onKeyDown={handleKeyDownBottomText}
              onChange={(event) => onBottomSubmit(event.currentTarget.value)}
              style={{
                border: '1px black solid',
                marginLeft: '0.5rem',
                width: '50%',
              }}
            />
          </label>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleReset}
              style={{
                padding: '0.5rem 2rem',
                margin: '0.5rem',
                backgroundColor: 'lightgrey',
                borderRadius: '10px',
                color: 'crimson',
                fontSize: '1.2rem',
                border: '1px white solid',
              }}
            >
              Reset captions
            </button>

            <button
              onClick={handleSubmit}
              data-test-id="generate-meme"
              style={{
                padding: '0.5rem 1rem',
                margin: '0.5rem',
                backgroundColor: 'raspberry',
                borderRadius: '10px',
                color: 'carmine',
                fontSize: '1.2rem',
                border: '1px white solid',
              }}
            >
              Generate captions
            </button>
          </div>
        </form>

        {captionsUrl === '' ? (
          <img
            src={data.blank}
            alt="Meme template"
            data-test-id="meme-image"
            style={{ width: '100%' }}
          />
        ) : (
          <img
            src={captionsUrl}
            alt="Your meme"
            className="meme-to-download"
            data-test-id="meme-image"
            style={{ width: '100%' }}
          />
        )}
        <p>
          Meme template ID: <strong>{templateId}</strong>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleDownload}
            style={{
              padding: '0.5rem',
              width: '100%',
              margin: '0.7rem',
              backgroundColor: 'green',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1.5rem',
              border: '1px white solid',
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
    // )}
  );
}
