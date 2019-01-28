
export default (items, event) => {
    switch (event.type) {
        case "ItemAddedToCart":
            return {
                ...items,
            };
        case "ItemRemovedFromCart":
            return {};
    }
};
