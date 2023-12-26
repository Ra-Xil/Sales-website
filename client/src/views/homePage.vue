<template>
    <div class="home">
        <h1>Welcome to My Website!</h1>
        <p>Enjoy exploring our content.</p>

        <div class="featured-items">
            <h2>Featured Items</h2>
            <ul>
                <li v-for="(item, index) in featuredItems" :key="index">
                    {{ item.name }} - {{ item.description }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            featuredItems: [
                { name: 'Product 1', description: 'Description for Product 1' },
                { name: 'Product 2', description: 'Description for Product 2' },
                { name: 'Product 3', description: 'Description for Product 3' }
                // Add more featured items as needed
            ]
        };
    }
};
</script>
  
<style>
.home {
    text-align: center;
    margin: 20px;
}

.featured-items {
    margin-top: 30px;
}

.featured-items ul {
    list-style: none;
    padding: 0;
}

.featured-items li {
    margin-bottom: 10px;
}
</style>
  