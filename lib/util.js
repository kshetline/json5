const unicode = require('../lib/unicode')

class ValueSourceWrapper {
    constructor (value, source) {
        this.value = value
        this.source = source
    }
}

module.exports = {
    isSpaceSeparator (c) {
        return c === 0x1680 || // OGHAM SPACE MARK
               (0x2000 <= c && c <= 0x200A) || // spaces of various kinds
               c === 0x202F || // NARROW NO-BREAK SPACE
               c === 0x205F || // MEDIUM MATHEMATICAL SPACE
               c === 0x3000 // IDEOGRAPHIC SPACE
    },

    isIdStartChar (c) {
        return !!c && (
            c === 0x24 || c === 0x5F ||
            (0x41 <= c && c <= 0x5A) ||
            (0x61 <= c && c <= 0x7A) ||
            unicode.ID_Start.test(String.fromCodePoint(c))
        )
    },

    isIdContinueChar (c) {
        return !!c && (
            c === 0x24 || c === 0x5F ||
            (0x30 <= c && c <= 0x39) ||
            (0x41 <= c && c <= 0x5A) ||
            (0x61 <= c && c <= 0x7A) ||
            c === 0x200C || c === 0x200D ||
            unicode.ID_Continue.test(String.fromCodePoint(c))
        )
    },

    isDigit (c) {
        return (0x30 <= c && c <= 0x39)
    },

    isHexDigit (c) {
        return (0x30 <= c && c <= 0x39) || (0x41 <= c && c <= 0x46) || (0x61 <= c && c <= 0x66)
    },

    setObjectProperty (obj, key, value) {
        Object.defineProperty(obj, key, {value, writable: true, enumerable: true, configurable: true})
    },

    ValueSourceWrapper,
}
