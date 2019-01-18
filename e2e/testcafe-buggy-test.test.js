fixture`my-buggy-fixture`
    .page('http://localhost:4200');

    test('This test behaviour is different than it is in normal browser', async t => {
        await t
            .debug();
    });