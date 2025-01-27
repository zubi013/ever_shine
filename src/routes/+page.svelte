<script>
    import * as m from "$lib/paraglide/messages"
    import ProductCard from '$components/product/ProductCard.svelte';
    import CategoryShow from "$components/category/CategoryShow.svelte";
    import CategoryGrid from "$components/category/CategoryGrid.svelte";
    import CATEGORIES from "$components/category/categories"
    
    CATEGORIES.map((cat) => {
        cat.items = [
            '1','2 ',
            '1','2',
            '1','2',
            '1','2',
            '1','2',
            '1','2',
        ]
        return cat
    })
    let produscts_showcase_items = [
        {title: m.new_products, items: [
            '1','2 ',
            '1','2',
            '1','2',
            '1','2',
            '1','2',
            '1','2',
        ], full_width: true},
        {title: m.recommendation_products, items: [
            '1','2 ',
            '1','2',
            '1','2',
            '1','2',
            '1','2',
            '1','2',
        ], full_width: true},
    ]
    
    produscts_showcase_items.push(...CATEGORIES)

</script>


<div>
    <h1>HERO</h1>
</div>
<CategoryGrid />
<div class="products-showcase-main">
    {#each produscts_showcase_items as {title, items, full_width}}
    <CategoryShow
        title = { title() }
        { items }
        { full_width }
    />
    {/each}
</div>

<style>
    .products-showcase-main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: auto;
        width: min(2000px, 100%);
        box-sizing: border-box;
        padding: 5px;
        column-gap: 5%;
    }
</style>

