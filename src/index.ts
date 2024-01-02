

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

    endsWith(suffix: string) {
        this.oreg += suffix + '$';
        return this;
    }

    
    chars(chars: string) {
        this.oreg += '[' + chars + ']';
        return this;
    }
    

}

export default oreg;