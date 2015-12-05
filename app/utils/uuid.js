export default function uuid() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r, v;
    r = Math.random() * 16 | 0;
    v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
