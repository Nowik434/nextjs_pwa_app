import { createContext, useState } from "react";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState();

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
                updateItem,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export { ItemsContext, ItemsProvider };