<script>
    import { availableLanguageTags, languageTag  } from "$lib/paraglide/runtime";
    import { goto } from '$app/navigation';
    import { page } from "$app/stores";
    import { i18n } from "$lib/i18n.js";
    let pathname = $derived($page.url.pathname)
    function oninput(e) {
        goto(`/${ e.target.value }${ i18n.route($page.url.pathname) }`)
        // lang = languageTag()
        // console.log()
    }
    let language = languageTag()
</script>

<!-- <form action="/"> -->
<!-- {languageTag()} -->
<select name="lang" title="lang"
{ oninput }>

    {#each availableLanguageTags as lang}

        <option value={ lang }
        selected = {lang == language}
        >{ lang.toUpperCase() }</option>
    {/each}
</select>
<!-- </form> -->
<style>
    select {
        border: none;
        font-family: inherit;
        font-weight: var(--fw-medium);
        text-align: right;
        background-color: transparent;
        cursor: pointer;
    }
</style>