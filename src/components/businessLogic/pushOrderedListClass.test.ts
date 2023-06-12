import PushOrderedListClass from "./pushOrderedListClass";



describe('testing pushOrderedListClass', () => {
    test('should push integer to the list', () => {
        const list = new PushOrderedListClass();
        list.push(1);
        // list.push(2);
        // list.push(3);
        expect(list.head?.data).toBe(1)
    });

    test('should push 3 nodes to the list', () => {
        const list = new PushOrderedListClass();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.head?.data).toBe(3);
        const printThis = list.printLinkedList(list.head);
        expect(printThis).toBe('3 --> 2 --> 1 --> ');
    });

    test('should pop biggest 3 from the list', () => {
        const list = new PushOrderedListClass();
        list.push(1);
        list.push(2);
        list.push(3);
        const output = list.pop();
        expect(output).toBe(3);
        const printThis = list.printLinkedList(list.head);
        expect(printThis).toBe('2 --> 1 --> ');
    });

    test('should pop biggest 3 from the list', () => {
        const list = new PushOrderedListClass();
        for (let i = 1; i <= 3; i++) {
            list.push(i);
        }
        const output = list.pop();
        expect(output).toBe(3);
        const printThis = list.printLinkedList(list.head);
        expect(printThis).toBe('2 --> 1 --> ');
    });

    test('pop should have time complexity O(n) therefore time of simple pop x n should be less or equal to time of pop from n nodes', async () => {
        const list = new PushOrderedListClass();
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

        console.log(
            'push time of 1 nodes=O(1) ', pushtime1,
            'push time of 998 nodes=O(1)*n/n ', pushtime2 / 998,
            'pop time of the last in list <= O(n) ', time2,
            'pop time from small node X 998 ~=O(1) * n', time1 * 999);
        console.log(time1.toString(), time2.toString());
        expect(output).toBe("999");
        expect(time1).toBeLessThanOrEqual(time2);
        expect(pushtime1).toBeLessThan(pushtime2);
        expect(time2).toBeLessThanOrEqual(time1 * 999);
    });

    test('push should have time complexity O(1) therefoe push 1, time should be less than push 999 nodes.', async () => {
        const list = new PushOrderedListClass();
        const pushstart1 = performance.now();
        list.push(1);
        const pushend1 = performance.now();
        const output1 = await list.pop();
        const pushstart2 = performance.now();
        list.push(999);
        for (let i = 1; i <= 999; i++) {
            let x = Math.round(Math.random() * 998);
            list.push(x);
        }
        const pushend2 = performance.now();

        const output = await list.pop();
        const pushtime1 = pushend1 - pushstart1;
        const pushtime2 = pushend2 - pushstart2;
        console.log(pushtime1, 'x', '998 =', pushtime1 * 998, 'pushtime2=', pushtime2)
        expect(output).toBe("999");
        expect(pushtime1).toBeLessThan(pushtime2);
    });


    test('should pop the node with object.id biggest 3 from the list', () => {
        const list = new PushOrderedListClass();

        const callback = (currentData: any, secondData: any) => {
            return (parseInt(currentData.id) > parseInt(secondData.id));
        }

        list.push({ id: 1, name: 'Aylon Spigel' });
        list.push({ id: 2, name: 'Anne' });
        list.push({ id: 3, name: 'Shay' });
        const output = list.pop();
        expect(output.id).toBe(3);
    });



});

    // { data: 2, next: { data: 1, next: null }, previous: { data: 3, next: { data: 2 } } }
