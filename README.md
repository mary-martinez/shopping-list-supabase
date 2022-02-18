# To Do App

## Database

-   Set up a table with
    -   id
    -   created_at (date)
    -   description (varchar)
    -   complete (bool)
    -   user_id (foreign key) - default value
-   Set up our policies - ensure that user_id on the Item matches the authed user
-   Add a couple of rows

## Items Page

1. Displaying the list of Items
    1. fetchItems function
    1. TDD renderItem function
    1. renderItems -- fetches the data, loops through the data and appends to the table
    1. Add some CSS to display completed differently from incomplete
2. Creating a new Item
    1. createItem function in fetch-utils.js
    1. form event listener that calls createItem
    1. call renderItems to redisplay the Item list
3. Updating Items
    1. completeItem(id) function in fetch-utils.js 1. Update renderItems to add event listener to each individual Item which calls completeItem function
    1. call renderItems to redisplay the Item list
4. Delete Items
    1. deleteItems function in fetch-utils 1. add event listener to delete button (possibly with a confirm) 1. call renderItems to "redisplay"