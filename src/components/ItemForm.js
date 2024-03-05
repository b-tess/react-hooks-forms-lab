import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function ItemForm({ items, onItemFormSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Produce',
    })

    console.log('not in app', items)

    function handleOnChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newItemObj = {
            id: uuid(),
            name: formData.name,
            category: formData.category,
        }

        onItemFormSubmit(newItemObj)
    }

    return (
        <form
            className='NewItem'
            onSubmit={handleSubmit}
        >
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleOnChange}
                />
            </label>

            <label>
                Category:
                <select
                    name='category'
                    value={formData.category}
                    onChange={handleOnChange}
                >
                    <option value='Produce'>Produce</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Dessert'>Dessert</option>
                </select>
            </label>

            <button type='submit'>Add to List</button>
        </form>
    )
}

export default ItemForm
