<script>
    import * as m from "$lib/paraglide/messages"
    
    import NavbarBtn from "./NavbarBtn.svelte";

    import { page } from "$app/stores";
    import Logo from "../logo/Logo.svelte";
    import SearchProduct from "../inputs/SearchProduct.svelte";
    import Lang from "../lang/Lang.svelte";
    import Cart from "$components/cart/Cart.svelte";
    import User from "$components/user/User.svelte";
    import NavbarDropdownMenu from "./ToggleMenu.svelte";
    import Dropdown from "$components/dropdown/Dropdown.svelte";

    let active_page = $derived($page.route.id);

    const navs = [
        {
            title: m.nav_home(),
            href: '/'
        },
        {
            title: m.nav_shop(),
            href: '/shop'
        },
        {
            title: m.nav_contact(),
            href: '/contact'
        },
    ]
    let logo;
    let y = $state('')

    const dd_options = {
        CLOSE: null,
        CART: 'cart',
        USER: 'user',
        SEARCH: 'search'
    }
    let dropdown_type = $state()
    function changeDD(type) {
        if(dropdown_type == type) return dropdown_type = dd_options.CLOSE;
        dropdown_type = type
        
    }
</script>

<svelte:window bind:scrollY={y} on:click={()=>{console.log('lol')}}/>

<header>
    <nav>
        <ul>
            <!-- <p>y:{y}</p> -->
            <Logo bind:this={logo} style='margin-right:auto; height: 1.5rem;'/>
            
            {#each navs as { title, href }}
                <li class="only-desktop">
                    <NavbarBtn href = { href } title = { title } active_page = { active_page } cls = "only-desktop"/>
                </li>
            {/each}
    
            <li class="only-desktop" style="margin: 5px;">
                <SearchProduct/>
            </li>

            
            <li style='margin-left: auto;'>
                <User onclick={() => { changeDD(dd_options.USER) }}/>
            </li>
            <li class="only-desktop">
                <Lang/>
            </li>
            <li>
                <Cart onclick={() => { changeDD(dd_options.CART) }}/>
            </li>
            <li class="only-mobile">
                <NavbarDropdownMenu />
            </li>
        </ul>
        {#if dropdown_type}
            
        <Dropdown>{ dropdown_type }</Dropdown>
        {/if}
    </nav>
</header>

<style>
    
    header {
        position: sticky;
        top: -1px;
        margin-top: 10px;
        margin-bottom: 10px;
        z-index: 10000;
        background-color: var(--clr-bg-nav-transparent);
        backdrop-filter: blur(5px);
        padding-right: var(--scrollbar-w-fix);
        padding-left: 10px;
    }
    ul {
        margin: 0;
        padding-left: 0;
        list-style: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: calc(max(1px, 0.5vw) * 3);
    }
    li {
        margin: 0;
    }
    nav {
        position: relative;
    }
</style>

<!-- <header>
    <Logo/>
    <nav>

        <ul>

            {#each navs as { title, href }}
                <NavbarBtn href = { href } title = { title } active_page = { active_page }/>
            {/each}
    
            <li><SearchProduct/></li>

        </ul>

    </nav>
    <ul class="right-menu">
        <li>
            <Lang/>
        </li>
        <li>
            <User style='cursor="pointer"'/>
        </li>
        <li>
            <Cart/>
        </li>
    </ul>
</header>

<style>
    header {
        margin-top: 10px;
        margin-bottom: 10px;
        /* padding: 0 20px; */
        padding-right: 15px;
        display: flex;
        align-items: center;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 10000;
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: max-content;
        height: fit-content;
        gap: 30px;
        
    }
    li {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .right-menu {
        gap: 10px;
    }
    /* .right-menu>li:nth-child(2) {
        margin-right: 5px;
    } */
</style> -->