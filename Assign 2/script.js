document.addEventListener('DOMContentLoaded', () => {
    const addProductButton = document.getElementById('add-product');
    const sortPriceButton = document.getElementById('sort-price');
    const sortRatingButton = document.getElementById('sort-rating');
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');

    let products = [];

    function renderGraph(graph, type) {
        graph.innerHTML = `<h2>${type} Graph</h2>`;
        products.forEach(product => {
            const bar = document.createElement('div');
            bar.className = 'bar';

            const barElement = document.createElement('div');
            barElement.style.width = `${product[type] * 10}px`;
            barElement.textContent = `${product[type]}`;

            const name = document.createElement('span');
            name.textContent = product.name;

            bar.appendChild(barElement);
            bar.appendChild(name);

            graph.appendChild(bar);
        });
    }

    function updateGraphs() {
        renderGraph(priceGraph, 'price');
        renderGraph(ratingGraph, 'rating');
    }

    function addProduct() {
        const name = document.getElementById('product-name').value.trim();
        const price = parseFloat(document.getElementById('product-price').value);
        const rating = parseFloat(document.getElementById('product-rating').value);

        if (name && !isNaN(price) && !isNaN(rating)) {
            products.push({ name, price, rating });
            updateGraphs();

            document.getElementById('product-name').value = '';
            document.getElementById('product-price').value = '';
            document.getElementById('product-rating').value = '';
        } else {
            alert('Please enter valid product details.');
        }
    }

    function sortProducts(by) {
        products.sort((a, b) => a[by] - b[by]);
        updateGraphs();
    }

    addProductButton.addEventListener('click', addProduct);
    sortPriceButton.addEventListener('click', () => sortProducts('price'));
    sortRatingButton.addEventListener('click', () => sortProducts('rating'));
});
