import test from "ava";
import oreg from "../src/index";

test("test test", (t: any) => {
    t.is(1, 1);
});

test("create greater london postcode regex", (t: any) => {
    const greaterLondonServiceAreaRegex = oreg() 
        .startsWith() // ^
        .anyOf([ // (
                (o) => o.chars('w').digits(), // w\d
                (o) => o.chars('sw').digits(), // sw\d
                (o) => o.chars('se').digits(), // se\d
                (o) => o.chars('nw').digits(), // nw\d
                (o) => o.chars('n').digits(), // n\d
                (o) => o.chars('e').digits(), // e\d
                (o) => o.chars('ec').digits(), // ec\d
                (o) => o.chars('wc').digits(), // wc\d
                (o) => o.chars('ha').digits(), // ha\d
                (o) => o.chars('br').digits(), // br\d
                (o) => o.chars('cr').digits(), // cr\d
                (o) => o.chars('da').digits(), // da\d
                (o) => o.chars('ig').digits(), // ig\d
                (o) => o.chars('kt').digits(), // kt\d
                (o) => o.chars('rm').digits(), // rm\d
                (o) => o.chars('sm').digits(), // sm\d
                (o) => o.chars('tw').digits(), // tw\d
                (o) => o.chars('ub').digits(), // ub\d
                (o) => o.chars('w').digits(), // w\d
                (o) => o.chars('wd').digits(), // wd\d
                (o) => o.chars('en').digits(), // en\d
            ]) // )
        .endsWith() // $
        .caseInsensitive(); // /i

    t.deepEqual(greaterLondonServiceAreaRegex.oreg, /^(w\d|sw\d|se\d|nw\d|n\d|e\d|ec\d|wc\d|ha\d|br\d|cr\d|da\d|ig\d|kt\d|rm\d|sm\d|tw\d|ub\d|w\d|wd\d|en\d)$/i);

    const croydon = "cr0";
    const southend = "ss11";

    // @ts-ignore
    t.is(greaterLondonServiceAreaRegex.oreg.test(croydon), true);
    // @ts-ignore
    t.is(greaterLondonServiceAreaRegex.oreg.test(southend), false);
});
