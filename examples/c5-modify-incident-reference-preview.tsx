import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  C5ModifyIncidentReference,
  ClassicThemeProvider,
  getSkinsForTheme,
  type ClassicTheme
} from "../src";

type ThemeProfile = { theme: ClassicTheme; skin: string };

const PROFILES: Record<string, ThemeProfile> = {
  "cde/default": { theme: "cde", skin: "default" },
  "win9x/2000": { theme: "win9x", skin: "2000" }
};

function PreviewApp() {
  const [profileKey, setProfileKey] = useState<keyof typeof PROFILES>("cde/default");
  const profile = useMemo(() => PROFILES[profileKey], [profileKey]);

  return (
    <>
      <ClassicThemeProvider theme={profile.theme} skin={profile.skin} />
      <main style={{ padding: "1rem", minHeight: "100vh" }}>
        <label htmlFor="profile"><strong>Profile:</strong> </label>
        <select
          id="profile"
          value={profileKey}
          onChange={(event) => setProfileKey(event.target.value as keyof typeof PROFILES)}
        >
          {Object.keys(PROFILES).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <p style={{ marginTop: "0.5rem" }}>
          Available skins for <code>{profile.theme}</code>: {getSkinsForTheme(profile.theme).join(", ")}
        </p>
        <C5ModifyIncidentReference />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<PreviewApp />);
