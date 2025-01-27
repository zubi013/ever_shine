<script>

    import * as m from "$lib/paraglide/messages"
    import Icon from "$components/icon/Icon.svelte";
    import IconSearch from "$icons/IconSearch.svelte";

</script>

<form>
    <label for="search">
        <input
            type="text"
            placeholder={ m.nav_search() }
            name="search"
        >
        
        <button tabindex="-1">
            <Icon fill='var(--clr-gray-d)' height=80% width=80%>
                <IconSearch/>
            </Icon>
        </button>
    </label>
</form>



<style>
    label {
        display: inline-block;
        position: relative;
        /* height: fit-content;
        width: fit-content; */
    }
    button {
        all: unset;
        position: absolute;
        width: 1.5rem;
        height: 2rem;
        padding: 0;
        right: 0;
        top: 50%;
        translate: 0 -50%;

        display: flex;
        justify-content: left;
        align-items: center;
        cursor: pointer;
    }
    input {
        border-radius: 2rem;
        border: none;
        outline: 2px solid var(--clr-bg-nav);
        background-color: var(--clr-gray-l);
        font-size: 0.7rem;
        /* font-size: 10px; */
        padding: 0.6em;
        padding-left: 0.7rem;
        padding-right: 1.8rem;
        box-sizing: content-box;
    }
    input::placeholder {
        color: var(--clr-gray-d);
    }
    input:focus {
        outline-color: var(--clr-accent-1);
    }
</style>

