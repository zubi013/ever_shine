<script>
    import Category from "$components/category/Category.svelte";
    import IconCart from "$icons/IconCart.svelte";

    let categories = [
        {
            title: 'All',
            id:''
        },
        {
            title: 'Manicure',
            id:''
        },
        {
            title: 'Nail Art',
            id:''
        },
        {
            title: 'Lashes',
            id:''
        },
        {
            title: 'Care',
            id:''
        },
        {
            title: 'Nail tools',
            id:''
        },
        {
            title: 'Glitter Tattoos',
            id:''
        },
    ]

</script>
<nav class='flex-center'>
    <ul>
        {#each categories as {title, id} }
            <li><Category {title}><IconCart/></Category></li> 
        {/each}
    </ul>
</nav>


<style>
    ul {
        list-style: none;
        display: flex;
        gap: 10px;
        padding: 0;
    }
    nav {
        margin: auto;
        width: min-content;
        overflow-x: auto;
    }
</style>