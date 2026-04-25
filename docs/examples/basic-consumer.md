# Basic Consumer Example

Use this as a complete starter pattern for consuming `@condor/classic-ui` with the public API and the required layout class names.

```tsx
import '@condor/classic-ui/styles.css';

import {
  ClassicThemeProvider,
  ClassicWindow,
  ClassicButton,
  ClassicInput,
  ClassicSelect,
  ClassicTextarea,
  ClassicStatusBar,
} from '@condor/classic-ui';

export function BasicConsumerExample() {
  return (
    <ClassicThemeProvider theme="win9x" skin="95">
      <main className="condor-workstation">
        <ClassicWindow title="CONDOR Example">
          <form className="condor-form">
            <label htmlFor="unitId">Unit ID</label>
            <ClassicInput id="unitId" name="unitId" defaultValue="U-102" />

            <label htmlFor="priority">Priority</label>
            <ClassicSelect id="priority" name="priority" defaultValue="routine">
              <option value="routine">Routine</option>
              <option value="urgent">Urgent</option>
            </ClassicSelect>

            <label htmlFor="notes">Notes</label>
            <ClassicTextarea
              id="notes"
              name="notes"
              rows={4}
              defaultValue="System check complete."
            />

            <div />
            <div className="condor-actions">
              <ClassicButton type="submit">Save</ClassicButton>
              <ClassicButton type="button">Cancel</ClassicButton>
            </div>
          </form>

          <ClassicStatusBar>Ready</ClassicStatusBar>
        </ClassicWindow>
      </main>
    </ClassicThemeProvider>
  );
}
```

## Class naming contract used

- `condor-workstation` wrapper for workspace-level layout.
- `condor-form` layout for aligned form controls.
- `condor-actions` row for trailing action buttons.
