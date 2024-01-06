type oregCallback = (oreg: Oreg) => Oreg;

class Oreg {
    oreg: RegExp | undefined = undefined;

    constructor() {}

    get #oregString(): string {
        return this.oreg?.toString().slice(1, -1) || "";
    }

    startsWith(prefix: string = "") {
        const newOreg = this.#oregString + `^${prefix}`;
        this.oreg = new RegExp(newOreg);
        return this;
    }

    startsWithAny(prefixes: string[]) {
        this.oreg = `^(${prefixes.join("|")})`;
        return this;
    }

    endsWith(suffix: string) {
        const newOreg = this.#oregString + `${suffix}$`;
        this.oreg = new RegExp(newOreg);
        return this;
    }

    endsWithAny(suffixes: string[]) {
        this.oreg += `(${suffixes.join("|")})$`;
        return this;
    }

    anyOf(oregs: oregCallback[]) {
        const results = oregs.map(oreg => oreg(new Oreg()).#oregString);
        const newOreg = this.#oregString + `(${results.join("|")})`;
        this.oreg = new RegExp(newOreg);
        return this;
    }

    chars(chars: string) {
        const newOreg = this.#oregString + `${chars}`;
        this.oreg = new RegExp(newOreg);
        return this;
    }

    string(string: string) {
        this.oreg += string;
        return this;
    }

    digits() {
        const newOreg = this.#oregString + `\\d`;
        this.oreg = new RegExp(newOreg);
        return this;
    }

    caseInsensitive() {
        const newOreg = this.#oregString;
        this.oreg = new RegExp(newOreg, "i");
        return this;
    }

    getRegex() {
        return this.oreg;
    }

    getRegexObject() {
        // recall constructor on this??
        return new RegExp(this.oreg);
    }

    getRegexString() {
        return this.#oregString;
    }

    getRegexStringWithoutSlashes() {
        return this.oreg.toString().slice(1, -1);
    }

    getRegexStringWithoutSlashesAndModifiers() {
        return this.oreg.toString().slice(1, -3);
    }

    getRegexStringWithoutModifiers() {
        return this.oreg.toString().slice(0, -3);
    }

}





function oreg() { //arg1: string

    return new Oreg(); // arg1

}

export default oreg;
