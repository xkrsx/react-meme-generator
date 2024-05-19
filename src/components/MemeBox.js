import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MemeBox({ templateId }) {
  // TODO templateName comes from user input
  const {
    // data: countries,
    data,
    error,
    isValidating,
  } = useSWR(`https://api.memegen.link/templates/${templateId}`, fetcher);

  // Handles error and loading state
  if (error) {
    return <div>Failed to load '{templateId}' template.</div>;
  }
  if (isValidating) {
    return <div>Loading '{templateId}' template...</div>;
  }

  return (
    <div>
      {data.blank === undefined ? (
        'Please type meme ID.'
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <img src={data.blank} alt="Meme template" />
          <p style={{ textAlign: 'center' }}>
            Meme template ID: <strong>{templateId}</strong>
          </p>

          {/* TODO add functionality and style button  */}
          <button>Download!</button>
        </div>
      )}
    </div>
  );
}
