import * as s1 from './sample1.js';
import * as t1 from './test_cascading.js';
import * as t2 from './test_js_anno.js';
import * as t3 from './test_anno.js';
import * as test_map$ from './test_map.js';
import * as test_strange from './test_strange.js';

// Can I use a ts namespace to to this ?
window["tests"] = {
    testAsync: s1.testAsync,
    testCascading: t1.testCascading,
    test_js_anno: t2,
    testMetadata: t3.testMetadata,
    propAnno: t3.propAnno,
    test_map: test_map$,
    test_strange: test_strange

};