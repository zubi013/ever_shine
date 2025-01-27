<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

    import '$lib/css/main.css'
    import '$lib/css/lightmode.css';
    import '$lib/css/darkmode.css';
    import Navbar from "$lib/components/navbar/Navbar.svelte";
    import TopMessage from "$lib/components/top_message/TopMessage.svelte";
    import Footer from '$components/footer/Footer.svelte';
    import CookieMessage from '$components/cookie_message/CookieMessage.svelte';
    let darkmode = true
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<ParaglideJS {i18n}>



<div class="lightmode">
    <TopMessage />
    <Navbar />
    <div class="page-content">
        <slot/>
    </div>
    <Footer />
    <CookieMessage />
</div>


</ParaglideJS>

<style>
    .page-content {
        padding-right: var(--scrollbar-w-fix);
        padding-left: calc(var(--scrollbar-w-fix) - 11px);
        background-color: var(--clr-bg);
    }
    div {
        background-color: var(--clr-bg-nav);
    }
</style>