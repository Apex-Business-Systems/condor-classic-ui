import {
  ClassicButton,
  ClassicDetailedTable,
  ClassicDetailedTableBody,
  ClassicDetailedTableCell,
  ClassicDetailedTableHead,
  ClassicDetailedTableHeaderCell,
  ClassicFieldset,
  ClassicInput,
  ClassicSelect,
  ClassicStatusBar,
  ClassicTextarea,
  ClassicTitleBar,
  ClassicWindow,
  ClassicWindowBody,
  ClassicWindowFrame
} from "../index";

import "./c5-modify-incident.css";

const comments = [
  { time: "09:17:35", actor: "1432 (Dispatch)", body: "C12 is on scene.", kind: "dispatch" },
  { time: "09:16:03", actor: "1432 (Dispatch)", body: "Keypad reports: Front Door Contact - OPEN.", kind: "dispatch" },
  { time: "09:15:48", actor: "SYSTEM", body: "ALARM: BURGLAR ALARM · Zone: Front Door Contact", kind: "system" },
  { time: "09:15:42", actor: "SYSTEM", body: "Incident INC-1 created.", kind: "system" },
  { time: "09:15:42", actor: "1432 (Dispatch)", body: "100 Main St", kind: "dispatch" }
] as const;

const activity = [
  ["09:15:42", "SYSTEM", "CAD", "Incident created by 1432"],
  ["09:15:48", "FIELD", "1432", "Call received from Acme Security"],
  ["09:16:03", "COMMENT", "1432", "Panel reports front door contact open"],
  ["09:17:21", "UNIT", "E201", "Unit enroute"],
  ["09:17:35", "UNIT", "C12", "Unit on scene"],
  ["09:19:11", "HAZARD", "SYSTEM", "Premise Hazard: Caution note available"]
] as const;

export function C5ModifyIncidentReference() {
  return (
    <ClassicWindow className="c5-modify-incident" aria-label="Modify Incident reference window">
      <ClassicTitleBar>
        <div className="title-bar-text">Modify Incident</div>
      </ClassicTitleBar>
      <ClassicWindowFrame>
        <ClassicWindowBody className="c5-body">
          <section className="c5-summary" aria-label="Incident summary">
            <div><strong>INCIDENT TYPE:</strong> Alarm</div>
            <div><strong>LOCATION 1:</strong> 100 Main St</div>
            <div><strong>LOCATION 2:</strong> Suite 200</div>
            <div><strong>STATUS:</strong> <span className="c5-active">ACTIVE</span></div>
            <div><strong>DISPOSITION:</strong> N/A</div>
          </section>
          <section className="c5-hazard">⚠ Premise Hazard: Caution note available</section>

          <main className="c5-columns">
            <section className="c5-left">
              <ClassicFieldset legend="Incident Details">
                <div className="c5-grid2">
                  <label>Incident Type <ClassicSelect defaultValue="Alarm"><option>Alarm</option></ClassicSelect></label>
                  <label>Summary <ClassicInput defaultValue="Commercial Burglar Alarm" /></label>
                  <label>Location 1 <ClassicInput defaultValue="100 Main St" /></label>
                  <label>Location 2 <ClassicInput defaultValue="Suite 200" /></label>
                  <label>City <ClassicInput defaultValue="Riverview" /></label>
                  <label>Caller Name <ClassicInput defaultValue="Acme Security" /></label>
                </div>
              </ClassicFieldset>

              <ClassicFieldset legend="Attached Units">
                <div className="c5-units-strip">
                  <ClassicInput aria-label="Dispatch Unit" placeholder="Dispatch Unit" />
                  <ClassicButton type="button">Attach</ClassicButton>
                  <ClassicButton type="button">Recommendations...</ClassicButton>
                </div>
                <div className="c5-unit-cards">
                  <div>E201 · ENROUTE</div><div>E204 · ON SCENE</div><div>C12 · ON SCENE</div><div>M7 · STANDBY</div>
                </div>
              </ClassicFieldset>

              <ClassicFieldset legend="Activity" className="c5-activity-fieldset">
                <div className="c5-tabs"><ClassicButton type="button">Events (1)</ClassicButton><ClassicButton type="button">Alarms (3)</ClassicButton></div>
                <div className="c5-scroll c5-activity-scroll">
                  <ClassicDetailedTable>
                    <ClassicDetailedTableHead>
                      <tr><ClassicDetailedTableHeaderCell>Time</ClassicDetailedTableHeaderCell><ClassicDetailedTableHeaderCell>Type</ClassicDetailedTableHeaderCell><ClassicDetailedTableHeaderCell>Source</ClassicDetailedTableHeaderCell><ClassicDetailedTableHeaderCell>Event</ClassicDetailedTableHeaderCell></tr>
                    </ClassicDetailedTableHead>
                    <ClassicDetailedTableBody>
                      {activity.map((row) => <tr key={row.join("-")}>{row.map((cell) => <ClassicDetailedTableCell key={cell}>{cell}</ClassicDetailedTableCell>)}</tr>)}
                    </ClassicDetailedTableBody>
                  </ClassicDetailedTable>
                </div>
              </ClassicFieldset>
            </section>

            <section className="c5-right">
              <ClassicFieldset legend="Comments" className="c5-comments-fieldset">
                <div className="c5-scroll c5-comments-scroll">
                  {comments.map((comment) => <article key={`${comment.time}-${comment.actor}`} className={`c5-comment ${comment.kind}`}><strong>{comment.time} {comment.actor}</strong><p>{comment.body}</p></article>)}
                </div>
              </ClassicFieldset>
              <ClassicFieldset legend="New Comment" className="c5-new-comment-fieldset">
                <ClassicTextarea aria-label="New Comment" rows={7} />
                <div className="c5-actions"><ClassicButton type="button">Clear</ClassicButton><ClassicButton type="button">Submit</ClassicButton></div>
              </ClassicFieldset>
            </section>
          </main>
        </ClassicWindowBody>
      </ClassicWindowFrame>
      <ClassicStatusBar>
        <p className="status-bar-field">Status: N/A</p>
        <p className="status-bar-field">Last Update: 05/23/2026 09:22:34</p>
        <p className="status-bar-field">Timer: 00:10:11</p>
      </ClassicStatusBar>
    </ClassicWindow>
  );
}
