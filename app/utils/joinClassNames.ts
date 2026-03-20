export default function(...classNames: any[]) {
  return classNames.filter(x => !!x).join(" ")
}
