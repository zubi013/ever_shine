<script>
    let visible = $state('true');

    function onclick() {
        visible = !visible;
    }

</script>
{#if visible}
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis id quaerat corrupti doloribus reprehenderit commodi pariatur sequi mollitia consequuntur delectus, quam iste architecto magni ut. Debitis architecto aperiam unde.</p>
        <button { onclick }>Accept</button>
    </div>
{/if}

<style>
    div {
        position: fixed;
        bottom: 0;
        background-color: black;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        box-sizing: border-box;
        gap: 1rem;
        z-index: 1000;
    }
    p {
        color: whitesmoke;
        font-size: 0.8rem;
        margin: 0;
    }
    button {
        background-color: var(--clr-accent-1);
        padding: 0.5em 1em;
        border: none;
        border-radius: 1em;
        font-weight: var(--fw-light);
    }
</style>
