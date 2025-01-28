<script module>
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    let lang = 'en';
    let docs_info = [
        {title: 'Statute', name: 'test.pdf'},
        {title: 'Privacy Policy', name: 'test.pdf'},
        {title: 'Important information', name: 'test.pdf'},
        {title: 'Shipping costs', name: 'test.pdf'},
    ]
    let social_media = [
        {icon:'fb.svg', href:'https://www.facebook.com/evershinepl', name: '/evershinepl'},
        {icon:'insta.svg', href:'https://www.instagram.com/evershinepoland', name: '/evershinepoland'},
    ]
</script>


<footer>
    
    <ul>
        {#each social_media as { icon, href, name }}
        <li>
            <a { href } target="_blank">
                <img src={`./../../icons/social/${icon}`} alt="" srcset="">{ name }
            </a>
        </li>
        {/each}
    </ul>
    <ul>
        {#each docs_info as doc}
        <li>
            <!-- <a
            href={`./../../docs/${ lang }/${ doc.name }`}
            target="_blank">{ doc.title }
            </a> -->
            <a href="/">
            { doc.title }
            </a>
        </li>
        {/each}
    </ul>

    <button on:click={backToTop}>
        back to top
    </button>
</footer>

<style>

    footer {
        background-color: var(--clr-gray-l);
        padding: 1px;
        padding-bottom: 40px;
        bottom: 0;
    }
    footer>ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
        flex-wrap: wrap;
    }
    img {
        height: 2rem;
        margin-right: 0.3rem;
    }
    a {
        display: flex;
        align-items: center;
        padding: 2rem;
    }

    li:hover {
        color: var(--clr-accent-1);
    }

</style>