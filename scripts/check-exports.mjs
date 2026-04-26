import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const declarationPath = resolve("dist/index.d.ts");
const expectedExports = [
  ["ClassicButton", "./controls/ClassicButton", "dist/controls/ClassicButton.d.ts"],
  ["ClassicInput", "./controls/ClassicInput", "dist/controls/ClassicInput.d.ts"],
  ["ClassicTextarea", "./controls/ClassicTextarea", "dist/controls/ClassicTextarea.d.ts"],
  ["ClassicSelect", "./controls/ClassicSelect", "dist/controls/ClassicSelect.d.ts"],
  ["ClassicFieldset", "./controls/ClassicFieldset", "dist/controls/ClassicFieldset.d.ts"],
  ["ClassicDesktop", "./shell/ClassicDesktop", "dist/shell/ClassicDesktop.d.ts"],
  ["ClassicWindow", "./shell/ClassicWindow", "dist/shell/ClassicWindow.d.ts"],
  ["ClassicWindowFrame", "./shell/ClassicWindowFrame", "dist/shell/ClassicWindowFrame.d.ts"],
  ["ClassicWindowBody", "./shell/ClassicWindowBody", "dist/shell/ClassicWindowBody.d.ts"],
  ["ClassicTitleBar", "./shell/ClassicTitleBar", "dist/shell/ClassicTitleBar.d.ts"],
  ["ClassicStatusBar", "./shell/ClassicStatusBar", "dist/shell/ClassicStatusBar.d.ts"],
  ["ClassicPanel", "./shell/ClassicPanel", "dist/shell/ClassicPanel.d.ts"],
  ["ClassicMenuBar", "./shell/ClassicMenuBar", "dist/shell/ClassicMenuBar.d.ts"],
  ["ClassicMenu", "./shell/ClassicMenu", "dist/shell/ClassicMenu.d.ts"],
  ["ClassicMenuItem", "./shell/ClassicMenuItem", "dist/shell/ClassicMenuItem.d.ts"],
  ["ClassicMenuStrip", "./shell/ClassicMenuStrip", "dist/shell/ClassicMenuStrip.d.ts"],
  ["ClassicDetailedTable", "./table/ClassicDetailedTable", "dist/table/ClassicDetailedTable.d.ts"],
  ["ClassicDetailedTableHead", "./table/ClassicDetailedTableHead", "dist/table/ClassicDetailedTableHead.d.ts"],
  ["ClassicDetailedTableBody", "./table/ClassicDetailedTableBody", "dist/table/ClassicDetailedTableBody.d.ts"],
  ["ClassicDetailedTableCell", "./table/ClassicDetailedTableCell", "dist/table/ClassicDetailedTableCell.d.ts"],
  ["ClassicDetailedTableHeaderCell", "./table/ClassicDetailedTableHeaderCell", "dist/table/ClassicDetailedTableHeaderCell.d.ts"],
  ["ClassicDialog", "./dialog/ClassicDialog", "dist/dialog/ClassicDialog.d.ts"],
  ["ClassicDialogTitle", "./dialog/ClassicDialogTitle", "dist/dialog/ClassicDialogTitle.d.ts"],
  ["ClassicDialogBody", "./dialog/ClassicDialogBody", "dist/dialog/ClassicDialogBody.d.ts"],
  ["ClassicDialogActions", "./dialog/ClassicDialogActions", "dist/dialog/ClassicDialogActions.d.ts"],
  ["ClassicThemeProvider", "./theme/ClassicThemeProvider", "dist/theme/ClassicThemeProvider.d.ts"],
  ["getSkinsForTheme", "./theme/classicThemes", "dist/theme/classicThemes.d.ts"],
  ["getDefaultSkinForTheme", "./theme/classicThemes", "dist/theme/classicThemes.d.ts"],
  ["isSkinValidForTheme", "./theme/classicThemes", "dist/theme/classicThemes.d.ts"]
];

if (!existsSync(declarationPath)) {
  throw new Error(`Missing declaration file: ${declarationPath}`);
}

const declarationContents = readFileSync(declarationPath, "utf8").trim();
if (!declarationContents || declarationContents === "export {}" || declarationContents === "export { }") {
  throw new Error(`Declaration file is empty: ${declarationPath}`);
}

const missing = [];
for (const [name, entryPath, sourceFile] of expectedExports) {
  if (!declarationContents.includes(`export * from \"${entryPath}\"`) && !declarationContents.includes(`export * from '${entryPath}'`)) {
    missing.push(`${name} (missing entry export ${entryPath})`);
    continue;
  }

  if (!existsSync(sourceFile)) {
    missing.push(`${name} (missing declaration file ${sourceFile})`);
    continue;
  }

  const sourceContents = readFileSync(sourceFile, "utf8");
  if (!sourceContents.includes(name)) {
    missing.push(`${name} (missing symbol in ${sourceFile})`);
  }
}

if (missing.length > 0) {
  throw new Error(`Missing expected exports in dist declarations: ${missing.join(", ")}`);
}

console.log(`Declaration export check passed for ${expectedExports.length} exports.`);
