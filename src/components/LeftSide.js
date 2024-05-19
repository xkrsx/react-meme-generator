import MemeTemplateTextInput from './MemeTemplateTextInput.js';

export default function LeftSide({ templateId, onIdSubmit }) {
  return (
    <>
      <MemeTemplateTextInput templateId={templateId} userInputId={onIdSubmit} />
      {/* <TextBox /> */}
    </>
  );
}
