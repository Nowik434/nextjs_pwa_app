import { createContext, useState } from "react";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState();
    const addItem = async (item) => {
        try {
            const res = await fetch("/api/updateUserData", {
                method: "POST",
                body: JSON.stringify({ item }),
                headers: { "Content-Type": "application/json" },
            });
            await res.json();

        } catch (error) {
            console.error(error);
        }
    };

    const updateItem = async (updatedItem) => {
        try {
            const res = await fetch("/api/updateUserData", {
                method: "PUT",
                body: JSON.stringify(updatedItem),
                headers: { "Content-Type": "application/json" },
            });
            await res.json();
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