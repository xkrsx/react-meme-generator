import MemeTemplateTextInput from './MemeTemplateTextInput.js';

export default function LeftSide({ TemplateId, onIdSubmit }) {
  return (
    <>
      <MemeTemplateTextInput TemplateId={TemplateId} userInputId={onIdSubmit} />
      {/* <TextBox /> */}
    </>
  );
}
