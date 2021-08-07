const shoppingList = require('./shopping-list')


describe('ShoppingList function', () => {
  it('Fetch the lists based on User Name', async () => {
    const list = await shoppingList('Winston')
    expect(list).toBe([])
  })
})