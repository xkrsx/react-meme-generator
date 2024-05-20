import MemeTemplateTextInput from './MemeTemplateTextInput.js';

export default function LeftSide({ templateId, onIdSubmit }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MemeTemplateTextInput templateId={templateId} onIdSubmit={onIdSubmit} />
    </div>
  );
}
