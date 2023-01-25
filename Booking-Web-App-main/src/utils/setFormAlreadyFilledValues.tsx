export default function setFormAlreadyFilledValues(
  name: string,
  value: Date|number|string | undefined,
  setValue: any
) {
  if (!value) return;
  setValue(name, value);
}
