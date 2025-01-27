<script>
    
    import CATEGORIES from "$components/category/categories"
    import IconCart from "$icons/IconCart.svelte";
    import Category from "./Category.svelte";
    $inspect(CATEGORIES)
</script>

<div class="container">
    <h2>Nagłówek<br>roboczy</h2>
    <div>
        {#each CATEGORIES as {title}}
        <div class="flex-center">
            <Category title = {title()} ><IconCart/></Category>
        </div>   
        {/each}
    </div>
</div>
<style>
    .container {
        position: relative;
        z-index: 0;
        padding: 1px;
    }
    h2 {
        text-align: center;
    }
    .container>div {
        min-width: min(60%, 600px);
        width: min-content;
        margin:auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        
        font-size: 1.6rem;
    }
    .container::before {
        position: absolute;
        content: '';
        width: 101vw;
        height: 100%;
        background-color: var(--clr-gray-l);
        z-index: -1;
    }
    .container>div>div {
        flex-basis: 33%;
        aspect-ratio: 1;
    }
</style>