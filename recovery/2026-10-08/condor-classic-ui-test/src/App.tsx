import { useEffect, useMemo, useState } from "react";
import {
  CLASSIC_THEMES,
  ClassicButton,
  ClassicFieldset,
  ClassicInput,
  ClassicSelect,
  ClassicStatusBar,
  ClassicTextarea,
  ClassicThemeProvider,
  ClassicWindow,
  getDefaultSkinForTheme,
  getSkinsForTheme,
  isSkinValidForTheme,
  type ClassicSkin,
  type ClassicTheme
} from "@condor/classic-ui";

function App() {
  const [theme, setTheme] = useState<ClassicTheme>("win9x");
  const [skin, setSkin] = useState<ClassicSkin>("red-white-and-blue");

  const availableSkins = useMemo(() => {
    return getSkinsForTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!isSkinValidForTheme(theme, skin)) {
      setSkin(getDefaultSkinForTheme(theme));
    }
  }, [theme, skin]);
  
  function handleThemeChange(nextTheme: ClassicTheme) {
    setTheme(nextTheme);
    setSkin(getDefaultSkinForTheme(nextTheme));
  }

  return (
    <>
      <ClassicThemeProvider theme={theme} skin={skin} />

      <main className="desktop padding condor-workstation">
        <ClassicWindow title="Condor Classic UI Test">
          <div className="padding">
            <ClassicFieldset legend="Theme Test">
              <div className="flex-column gap">
                <label htmlFor="theme">Theme</label>
				<ClassicSelect
  id="theme"
  value={theme}
  wrapperClassName="condor-control-sm"
  onChange={(event) =>
    handleThemeChange(event.target.value as ClassicTheme)
  }
>
				  {CLASSIC_THEMES.map((item) => (
					<option key={item} value={item}>
					  {item}
					</option>
				  ))}
				</ClassicSelect>

                <label htmlFor="skin">Skin</label>
<ClassicSelect
  id="skin"
  value={skin ?? ""}
  wrapperClassName="condor-control-md"
  disabled={availableSkins.length === 0}
  onChange={(event) => setSkin(event.target.value || null)}
>
				  {availableSkins.length === 0 ? (
					<option value="">No skins for this theme</option>
				  ) : (
					availableSkins.map((item) => (
					  <option key={item} value={item}>
						{item}
					  </option>
					))
				  )}
				</ClassicSelect>
              </div>
            </ClassicFieldset>

            <br />

            <ClassicFieldset legend="Native Controls">
              <div className="condor-form">
                <label htmlFor="unit">Unit</label>
<ClassicInput
  id="unit"
  className="condor-control-md"
  defaultValue="FR\M01"
/>

                <label htmlFor="status">Status</label>
<ClassicSelect
  id="status"
  defaultValue="available"
  wrapperClassName="condor-control-sm"
>
                  <option value="available">Available</option>
                  <option value="assigned">Assigned</option>
                  <option value="enroute">Enroute</option>
                  <option value="onscene">On Scene</option>
                </ClassicSelect>

                <label htmlFor="notes">Notes</label>
<ClassicTextarea
  id="notes"
  className="condor-textarea-md"
  defaultValue="This is a classic textarea."
/>

                <div />

                <div className="condor-actions">
                  <ClassicButton>Save</ClassicButton>
                  <ClassicButton>Cancel</ClassicButton>
                  <ClassicButton disabled>Disabled</ClassicButton>
                </div>
              </div>
            </ClassicFieldset>

            <br />

            <div className="raised padding">
              <div className="lowered padding">
                Raised panel containing a lowered panel.
              </div>
            </div>

            <br />

            <ClassicStatusBar>
              Theme: {theme} | Skin: {skin}
            </ClassicStatusBar>
          </div>
        </ClassicWindow>
      </main>
    </>
  );
}

export default App;