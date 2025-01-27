<script>
    import { onMount } from "svelte";
    
    import Icon from "$components/icon/Icon.svelte";
    import ProductCard from "$components/product/ProductCard.svelte";
    import ShopNav from "$components/shop_nav/ShopNav.svelte";
    import IconClose from "$icons/IconClose.svelte";
    
    let p = [
        {title: 'sdasdad', new_product: true},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: true},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
        {title: 'sdasdad', new_product: false},
    ]

    let products = $state([])
    let last_index = $state(0)

    let body_size = $state();

    let body_h = $derived.by(() =>{ return body_size?.[0].
        blockSize});

    function loadProducts() {
        last_index = products.length - 1
        products.push(...p)
    }
    function onscroll() {
        let s = window.innerHeight + window.scrollY
        if( s >= body_h ) loadProducts()  
    }
    onMount(loadProducts)

    
</script>

<svelte:body bind:borderBoxSize={ body_size }/>
<svelte:window { onscroll }/>

<ShopNav/>

<div class="product-display">
    {#each products as {title, new_product}, i}
        
    <ProductCard title={i} {new_product} i = {i - last_index}/>

    {/each}
</div>

<style>

    .product-display {
        display: grid;
        gap: 20px;
        max-width: 100%;
        width: fit-content;
        grid-auto-flow: row;
        grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
        margin: auto;
        padding: 10px;
        box-sizing: border-box;
    }

</style>