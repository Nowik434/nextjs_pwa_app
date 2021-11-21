import { createContext, useState } from "react";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState();
    console.log(items)
    // for creating an item
    const addItem = async (item) => {
        console.log("ADD ITEM.............STRINGIFY", JSON.stringify(item))
        console.log("ADD ITEM.............", item)
        try {
            // we will send a POST request with the data required to create an item
            const res = await fetch("/api/updateUserData", {
                method: "POST",
                body: JSON.stringify({ item }),
                headers: { "Content-Type": "application/json" },
            });
            await res.json();

            // then we will update the 'items' adding the newly added item to it
            // setItems((prevItems) => [newItem, ...prevItems]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateItem = async (updatedItem) => {
        console.log('UPDATED ITEM', updatedItem)
        try {
            // we will send a PUT request with the updated information
            const res = await fetch("/api/updateUserData", {
                method: "PUT",
                body: JSON.stringify(updatedItem),
                headers: { "Content-Type": "application/json" },
            });
            await res.json();
            // then we will update the 'items' by replacing the fields of existing item.
            // setItems((prevItems) => {
            //     const existingItems = [...prevItems];
            //     const existingItem = existingItems.find(
            //         (item) => item.id === updatedItem.id
            //     );
            //     existingItem.fields = updatedItem.fields;
            //     return existingItems;
            // });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                setItems,
                addItem,
                updateItem
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export { ItemsContext, ItemsProvider };