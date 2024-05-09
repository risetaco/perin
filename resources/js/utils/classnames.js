
 export default function classnames(...classes) {
  return classes.filter(c => typeof(c) === 'string').join(' ').trim();
}
