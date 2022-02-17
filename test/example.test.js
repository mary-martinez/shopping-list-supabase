// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItem } from '../utils.js';
const test = QUnit.test;

test('renderItem should return an li with the class item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="item">Lettuce</li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({
        complete: false,
        created_at: '2022-02-17T22:54:31+00:00',
        id: 1,
        item: 'Lettuce',
        user_id: '81f7b3f0-c985-43ab-a1dd-d879667dabd1'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
