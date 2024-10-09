export function _StringReplaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}