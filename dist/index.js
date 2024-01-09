var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Oreg_instances, _Oreg_oregString_get;
class Oreg {
    constructor() {
        _Oreg_instances.add(this);
        this.oreg = undefined;
    }
    startsWith(prefix = "") {
        const newOreg = __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get) + `^${prefix}`;
        this.oreg = new RegExp(newOreg);
        return this;
    }
    // startsWithAny(prefixes: string[]) {
    //     this.oreg = `^(${prefixes.join("|")})`;
    //     return this;
    // }
    endsWith(suffix = "") {
        const newOreg = __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get) + `${suffix}$`;
        this.oreg = new RegExp(newOreg);
        return this;
    }
    // endsWithAny(suffixes: string[]) {
    //     this.oreg += `(${suffixes.join("|")})$`;
    //     return this;
    // }
    anyOf(oregs) {
        const results = oregs.map(oreg => __classPrivateFieldGet(oreg(new Oreg()), _Oreg_instances, "a", _Oreg_oregString_get));
        const newOreg = __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get) + `(${results.join("|")})`;
        this.oreg = new RegExp(newOreg);
        return this;
    }
    chars(chars) {
        const newOreg = __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get) + `${chars}`;
        this.oreg = new RegExp(newOreg);
        return this;
    }
    // string(string: string) {
    //     this.oreg += string;
    //     return this;
    // }
    digits() {
        const newOreg = __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get) + `\\d`;
        this.oreg = new RegExp(newOreg);
        return this;
    }
    caseInsensitive() {
        const newOreg = __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get);
        this.oreg = new RegExp(newOreg, "i");
        return this;
    }
    // getRegex() {
    //     return this.oreg;
    // }
    // getRegexObject() {
    //     // recall constructor on this??
    //     return new RegExp(this.oreg);
    // }
    getRegexString() {
        return __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get);
    }
    // getRegexStringWithoutSlashes() {
    //     return this.oreg.toString().slice(1, -1);
    // }
    getRegexStringWithoutSlashesAndModifiers() {
        return __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get).slice(1, -3);
    }
    getRegexStringWithoutModifiers() {
        return __classPrivateFieldGet(this, _Oreg_instances, "a", _Oreg_oregString_get).toString().slice(0, -3);
    }
}
_Oreg_instances = new WeakSet(), _Oreg_oregString_get = function _Oreg_oregString_get() {
    return this.oreg?.toString().slice(1, -1) || "";
};
function oreg() {
    return new Oreg(); // arg1
}
export default oreg;
