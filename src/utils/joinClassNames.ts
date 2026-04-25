export function joinClassNames(...classNames: Array<string | undefined | null | false>) {
  return classNames.filter(Boolean).join(" ");
}
