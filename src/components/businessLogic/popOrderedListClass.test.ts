import PopOrderedListClass from "./popOrderedListClass";

describe('testing PopOrderedListClass', () => {

    test('should pop biggest 3 from the list', () => {
        const list = new PopOrderedListClass();
        for (let i = 1; i <= 3; i++) {
            list.push(i);
        }
        const output = list.pop();
        expect(output).toBe(3);
        const printThis = list.printLinkedList(list.head);
        expect(printThis).toBe('2 --> 1 --> ');
    });

    test('pop should have time complexity O(1) therefore time of simple pop x n should be less or equal to time of pop from n nodes', async () => {
        const list = new PopOrderedListClass();
        const pushstart1 = performance.now();
        list.push(1);
        const pushend1 = performance.now();
        const start1 = performance.now();
        const output1 = await list.pop();
        const end1 = performance.now();
        const time1 = end1 - start1;
        const pushstart2 = performance.now();
        list.push(999);
        for (let i = 1; i <= 998; i++) {
            list.push(i);
        }
        const pushend2 = performance.now();

        const start = performance.now();
        const output = await list.pop();
        const end = performance.now();
        const pushtime1 = pushend1 - pushstart1;
        const pushtime2 = pushend2 - pushstart2;
        const time2 = end - start;

        // optional printing  console.log(
        // 'push time of 1 nodes=O(1) ', pushtime1,
        // 'push time of 998 nodes=O(1)*n/n ', pushtime2,
        // 'pop time of the last in list <= O(n) ', time2,
        // 'pop time from small node X 998 ~=O(1) * n', time1);
        // console.log(time1.toString(), time2.toString());
        expect(output).toBe(999);
        expect(time1).toBeLessThanOrEqual(time2);
        expect(pushtime1).toBeLessThan(pushtime2);
        expect(time2).toBeLessThanOrEqual(time1 * 999);
    });

});
