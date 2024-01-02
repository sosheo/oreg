class oreg extends RegExp {
    oreg: string;

    constructor(argA: any, argB: any) {
        super(argA, argB);
        this.oreg = "";
    }

    startsWith(prefix: string) {
        this.oreg = `^${prefix}`;
        return this;
    }

    startsWithAny(prefixes: string[]) {
        this.oreg = `^(${prefixes.join("|")})`;
        return this;
    }

    endsWith(suffix: string) {
        this.oreg += `${suffix}$`;
        return this;
    }

    endsWithAny(suffixes: string[]) {
        this.oreg += `(${suffixes.join("|")})$`;
        return this;
    }

    anyOf(callback: Function) {
        // TODO: placeholder fix this
        this.oreg += `(${callback(this)})`;
        return this;
    }

    chars(chars: string) {
        this.oreg += `[${chars}]`;
        return this;
    }

    string(string: string) {
        this.oreg += string;
        return this;
    }

    digit() {
        this.oreg += "\\d";
        return this;
    }

    caseInsensitive() {
        this.oreg += "/i";
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
        return this.oreg.toString();
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

export default oreg;
