import MemeBox from './MemeBox';

export default function RightSide({
  templateId,
  topText,
  bottomText,
  onTopSubmit,
  onBottomSubmit,
  onCaptionsUrlSubmit,
  captionsUrl,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MemeBox
        templateId={templateId}
        topText={topText}
        bottomText={bottomText}
        onTopSubmit={onTopSubmit}
        onBottomSubmit={onBottomSubmit}
        captionsUrl={captionsUrl}
        onCaptionsUrlSubmit={onCaptionsUrlSubmit}
      />
    </div>
  );
}
