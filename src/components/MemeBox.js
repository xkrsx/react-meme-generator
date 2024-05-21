import { saveAs } from 'file-saver';
import { useState } from 'react';
import useSWR from 'swr';

export default function MemeBox({ templateId }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [captionsUrl, setCaptionsUrl] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const { data, error, isValidating } = useSWR(
    // `https://api.memegen.link/templates/${templateId}`,
    // gives an 'Invalid type "any" of template literal expression.'
    'https://api.memegen.link/templates/' + templateId,
    fetcher,
  );

  if (error) {
    return <div>Failed to load '{templateId}' template.</div>;
  }
  if (isValidating) {
    return <div>Loading '{templateId}' template...</div>;
  }

  function handleReset(event) {
    event.preventDefault();
    setTopText('');
    setBottomText('');
    setCaptionsUrl('');
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

    // console.log(topText);
    event.preventDefault();
    // if (topText.search('?')) {
    //   topText.replace('?', '~q');
    // }
    setCaptionsUrl(
      // `https://api.memegen.link/images/${templateId}/${topText}/${bottomText}.png`,
      // gives an 'Invalid type "any" of template literal expression.'
      'https://api.memegen.link/images/' +
        templateId +
        `/${topText}/${bottomText}.png`,
    );
  }

  function handleDownload() {
    saveAs(captionsUrl, 'meme.png');
  }

  function noMemeId() {
    return <p>Please type meme ID.</p>;
  }

  return (
    <div
      style={{
        border: '1px black dotted',
        borderRadius: '10px',
        height: '100%',
        padding: '32px',
      }}
    >
      {data.blank === undefined ? (
        noMemeId()
      ) : (
        <div
          style={{
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
                value={topText}
                onChange={(event) => setTopText(event.currentTarget.value)}
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
                value={bottomText}
                onChange={(event) => setBottomText(event.currentTarget.value)}
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
                  padding: '15px 45px',
                  margin: '0.5rem',
                  backgroundColor: 'lightgrey',
                  borderRadius: '10px',
                  color: 'black',
                  fontSize: '1.5rem',
                  border: '1px white solid',
                }}
              >
                Reset preview
              </button>

              <button
                onClick={handleSubmit}
                data-test-id="generate-meme"
                style={{
                  padding: '15px 45px',
                  margin: '0.5rem',
                  backgroundColor: 'green',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1.5rem',
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
              style={{ height: '500px' }}
            />
          ) : (
            <img
              src={captionsUrl}
              alt="Your meme"
              className="meme-to-download"
              data-test-id="meme-image"
              style={{ height: '500px' }}
            />
          )}
          <p>
            Meme template ID: <strong>{templateId}</strong>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleDownload}
              style={{
                padding: '15px 45px',
                margin: '1rem',
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
      )}
    </div>
  );
}
