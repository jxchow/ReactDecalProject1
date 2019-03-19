# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 
1. The function ReactDOM.render renders an object into the Document Object Model so that it appears on our webpage.
2. Advantages: SemanticUI is in CSS that is easy to read for the user and it is already written out so you can essentially copy and paste a majority of it. SemanticUI also has a large variety of different components and designs.
Disadvantages: If you want to make changes to the given SemanticUI, it can get complicated to modify it to fit your code.

3. We need to wrap the addToCart function with another function in order to handle the event object being taken in as input.

4a. By accessing each individual object in the list using ProductData.product.map(p => (
            <Product
            name={p.name}
            cost={p.cost}
            stock={p.stock}))
    We can write the Product component.

4b. If the data is pulled from an object, then we don't have to recode anything if the object changes. That means our code can be the same no matter how the object changes. We wouldn't have to keep adding additional lines if we added another product.