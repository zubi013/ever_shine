<script>
    import Icon from "$components/icon/Icon.svelte";
    import IconCart from "$icons/IconCart.svelte";

    let {onclick = ()=>{}} = $props()

    let products = [
        'sdadasd',
        'adsadsada'
    ]

</script>

<button { onclick }>
    <Icon offsetX=-50>
        <IconCart/>
    </Icon>
    {#if products.length}
        <!-- <div>{ products.length }</div> -->
        <div>1</div>
    {/if}
</button>

<style>
    button {
        background-color: transparent;
        border:none;
        padding: 0;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        position: relative;
        cursor: pointer;
    }
    div {
        border-radius: 100px;
        left: 7px;
        bottom: 7px;
        translate: -50% 50%;
        font-size: 0.6rem;
        font-weight: var(--fw-bold);
        position: absolute;
        background-color: var(--clr-accent-1);
        /* padding: 1em; */
        display: grid;
        place-items: center;
        aspect-ratio: 1/1;
        height: 0.8rem;
        padding: 2px;
    }

</style>