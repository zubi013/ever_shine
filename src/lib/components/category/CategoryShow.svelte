<script>
    import Icon from "$components/icon/Icon.svelte";
    import ProductCard from "$components/product/ProductCard.svelte";
    import IconCart from "$icons/IconCart.svelte";
    let {
        title,
        href,
        items = [],
        full_width
    } = $props()
    let wrapper_size = $state(null);
    let max_index = $derived.by(() => {

        if(wrapper_size) {
            let width = Math.floor(wrapper_size[0].inlineSize)
            return ((width - 100) / 220)
        }
        return 0
    })


</script>


<div class="wrapper"
class:full_width
bind:contentBoxSize = { wrapper_size } >

    <a href={ href? href : '' }>
        <Icon height=2em width=2em>
            <IconCart/>
        </Icon>
        <h2>{ title }</h2>
    </a>

    <div class="bigger-shadow">
        {#each items as item, i}
        {#if max_index >= i}
        
        <div class="cards">
            <ProductCard title={ item } {i}/>
        </div>
            
        {/if}
        {/each}

        <div class="more-container">
            <div class="shadow shadow-hover">
                <a href={ href? href : '' }>
                    <p>see more</p>
                </a>
            </div>
            <div class="text-placeholder"></div><div class="text-placeholder"></div>
        </div>

    </div>
</div>




<style>
    
    .wrapper {
        /* outline: 1px solid black; */
        padding: 18px;
        box-sizing: border-box;
        overflow: hidden;
    }
    @media only screen and (width < 60rem){
        .wrapper {
            grid-column: 1/3;
        }
    }
    .full_width {
        grid-column: 1/3;
    }
    .wrapper>a {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    .wrapper>div {
        /* position: absolute; */
        display: flex;
        gap: 20px;
        max-width: 100%;
        padding: 10px;
        box-sizing: border-box;
        font-size: 1rem;
        border-radius: 18px 0 0 18px;
        outline: 1px solid var(--clr-gray-l);
        position: relative;
        background-color: var();
    }
    .cards {
        width: 200px;
    }
    .more-container {
        width: 150px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    .more-container>div {
        box-sizing: border-box;

        aspect-ratio: 3/4;

        border-radius: 8px 0 0 8px;
        
    }
    .more-container a {
        position: relative;
        width: 100%;
        height: 100%;
        padding-left: 10px;
        display: flex;
        align-items: center;
        /* background-color: red; */
        z-index: 1000;
    }
    .wrapper>div::after {
        position: absolute;
        content: '';
        height: calc(100% + 40px);
        width: 200px;
        top: -20px;
        right: -20px;
        /* background-color: red; */
        background: linear-gradient(90deg, rgb(255, 255, 255, 0) 40%, rgb(255, 255, 255)80%);
        
    }
    .more-container p {
        opacity: 0.6;
    }
    .more-container a:hover p {
        opacity: 1;
        color: var(--clr-accent-1);
    }
    .text-placeholder {
        position: relative;
        font-size: 1rem;
        height: 1.8em;
        width: 100%;
        /* background-color: red; */
    }
    .text-placeholder::after {
        content: '';
        position: absolute;
        /* background-color: red; */
        background: linear-gradient(90deg, var(--clr-gray-l) 30%, rgb(255, 255, 255, 0)90%);
        height: 0.7em;
        border-radius: 1em 0 0 1em;
        width: 100%;
        /* left: -150px; */
        top: 0.7em;
    }
    .text-placeholder:nth-last-child(1):after {
        width: 5ch;
        height: 1em;

        top: 0.3em;
    }
</style>