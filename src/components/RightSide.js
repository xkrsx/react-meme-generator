import MemeBox from './MemeBox';

export default function RightSide({ templateId, onCaptionSubmit, topText }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MemeBox
        templateId={templateId}
        onCaptionSubmit={onCaptionSubmit}
        topText={topText}
      />
    </div>
  );
}
