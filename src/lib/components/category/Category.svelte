<script>
    import Icon from "$components/icon/Icon.svelte";
    export let title = 'Category';
    export let icon_size = '3em'
</script>

    
    <button>
        <Icon height={ icon_size } width={ icon_size } fill='inherit'>
            <slot/>
        </Icon>
        <h2>{ title }</h2>
    </button>


<style>
    button {
        display: grid;
        
        text-align: center;
        font-weight: var(--fw-bold);
        font-size: 0.5em;
        justify-items: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    h2 {
        text-wrap: balance;
        overflow-wrap: break-word;
        width: max-content;
        max-width: 15ch;
        min-width: 15ch;
    }
    button:hover {
        color: var(--clr-accent-1);
        fill: var(--clr-accent-1);
    }
</style>