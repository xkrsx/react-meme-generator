import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TemplateBox() {
  // TODO templateName comes from user input
  const templateName = 'x';
  const {
    // data: countries,
    data,
    error,
    isValidating,
  } = useSWR(`https://api.memegen.link/templates/${templateName}`, fetcher);

  // Handles error and loading state
  if (error) {
    return (
      <div className="failed">Failed to load ${templateName} template.</div>
    );
  }
  if (isValidating) {
    return <div className="Loading">Loading ${templateName} template...</div>;
  }

  return <div>{data && <img src={data.blank} alt="Meme template" />}</div>;
}
