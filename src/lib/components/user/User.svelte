<script>
    import Icon from "$components/icon/Icon.svelte";
    import IconUser from "$icons/IconUser.svelte";
    let {onclick = ()=>{}} = $props()
</script>
<button { onclick }>
    <p class="only-desktop">username</p>
    <Icon>
        <IconUser/>
    </Icon>
</button>

<style>
    p {
        margin: 0;
        margin-right: 0.5rem;
    }
    button {
        background-color: transparent;
        border: none;
        padding: 0;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        cursor: pointer;
    }
</style>