import MemeTemplateTextInput from './MemeTemplateTextInput.js';

export default function LeftSide({
  templateId,
  onIdSubmit,
  onTopSubmit,
  onBottomSubmit,
  onCaptionsUrlSubmit,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MemeTemplateTextInput
        templateId={templateId}
        onIdSubmit={onIdSubmit}
        onTopSubmit={onTopSubmit}
        onBottomSubmit={onBottomSubmit}
        onCaptionsUrlSubmit={onCaptionsUrlSubmit}
      />
    </div>
  );
}
