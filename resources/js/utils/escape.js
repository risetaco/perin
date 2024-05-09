export default function escape(text) {
  return text.replace(/<[^>]*>?/gm, "")
}