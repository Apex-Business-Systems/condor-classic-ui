import '@condor/classic-ui/styles.css';

import {
  ClassicThemeProvider,
  ClassicWindow,
  ClassicButton,
  ClassicInput,
  ClassicSelect,
  ClassicTextarea,
} from '@condor/classic-ui';

export function Example() {
  return (
    <>
      <ClassicThemeProvider theme="win9x" skin="95" />

      <main className="condor-workstation">
        <ClassicWindow title="CONDOR Example">
          <form className="condor-form">
            <label htmlFor="unit">Unit ID</label>
            <ClassicInput id="unit" name="unit" />

            <label htmlFor="priority">Priority</label>
            <ClassicSelect id="priority" name="priority">
              <option value="routine">Routine</option>
              <option value="urgent">Urgent</option>
            </ClassicSelect>

            <label htmlFor="comment">Comment</label>
            <ClassicTextarea id="comment" name="comment" />

            <div />
            <div className="condor-actions">
              <ClassicButton type="submit">Save</ClassicButton>
              <ClassicButton>Cancel</ClassicButton>
            </div>
          </form>
        </ClassicWindow>
      </main>
    </>
  );
}