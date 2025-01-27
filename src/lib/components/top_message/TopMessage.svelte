<script>
    import Icon from "$components/icon/Icon.svelte";
    import IconClose from "$icons/IconClose.svelte";

    


    let visible = $state('true');
    let message = 'dsada';

    function onclick() {
        visible = !visible;
    }

</script>

{#if visible && message}
    <p>
        
        { message }

        <button {onclick}>
            <Icon>
                <IconClose/>
            </Icon>
        </button>

    </p>
{/if}


<style>
    p {
        text-align: center;
        background-color: var(--clr-accent-1);
        position: relative;
        padding: 0.2em 1em;
        margin: 0;
        font-weight: var(--fw-medium);
    }
    button {
        all: unset;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
</style>