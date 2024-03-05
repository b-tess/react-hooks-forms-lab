import React, { useState } from 'react'
import ItemForm from './ItemForm'
import Filter from './Filter'
import Item from './Item'

function ShoppingList({ items, onItemFormSubmit }) {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [search, setSearch] = useState('')

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value)
    }

    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === 'All' && search === '') return true
        console.log(selectedCategory)
        return item.category === selectedCategory || item.name.includes(search)
    })

    return (
        <div className='ShoppingList'>
            <ItemForm
                items={items}
                onItemFormSubmit={onItemFormSubmit}
            />
            <Filter
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                searchTerm={search}
                onSearchChange={setSearch}
            />
            <ul className='Items'>
                {itemsToDisplay.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
