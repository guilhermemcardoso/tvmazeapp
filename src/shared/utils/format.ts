export function removeTagsFromString(text: string) {
  return text.replace(/<.*?>/g, '');
}
