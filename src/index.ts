

class reg extends RegExp {
    oreg: string;

    constructor(argA: any, argB: any) {
        super(argA, argB);
        this.oreg = "";

        return this;
    }
}

export default reg;