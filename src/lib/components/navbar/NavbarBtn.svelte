<script>

    export let title;
    export let href;
    export let active_page = null;

</script>

<a href={ href }>
    <div class:active={ active_page === href }>
            { title }
    </div>
</a>

<style>
    .active {
        box-shadow: 0 1px 0 var(--clr-text);
    }
    a {
        padding: 5px;
        box-sizing: border-box;
        display: block;
        cursor: pointer;
    }

    div {
        margin: 0;
        font-size: 0.9rem;
    }
</style>