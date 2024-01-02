

class oreg extends RegExp {
    oreg: string;

    constructor(argA: any, argB: any) {
        super(argA, argB);
        this.oreg = "";

        return this;
    }

    startsWith(prefix: string) {
        this.oreg = '^' + prefix;
        return this;
    }
    startsWithAny(prefixes: string[]) {
        this.oreg = '^(' + prefixes.join('|') + ')';
        return this;
    }

    endsWith(suffix: string) {
        this.oreg += suffix + '$';
        return this;
    }

    
    chars(chars: string) {
        this.oreg += '[' + chars + ']';
        return this;
    }
    
    string(string: string) {
        this.oreg += string;
        return this;
    }

    digit() {
        this.oreg += '\\d';
        return this;
    }

    caseInsensitive() {
        this.oreg += '/i';
        return this;
    }
    getRegex() {
        return this.reg;
    }

    getRegexObject() {
        // recall constructor on this??
        return new RegExp(this.reg);
    }

    getRegexString() {
        return this.reg.toString();
    }

    getRegexStringWithoutSlashes() {
        return this.reg.toString().slice(1, -1);
    }

    getRegexStringWithoutSlashesAndModifiers() {
        return this.reg.toString().slice(1, -3);
    }

    getRegexStringWithoutModifiers() {
        return this.reg.toString().slice(0, -3);
    }

}

export default oreg;