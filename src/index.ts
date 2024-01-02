

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

    

}

export default oreg;