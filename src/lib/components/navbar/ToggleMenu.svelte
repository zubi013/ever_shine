<script>
    let open = $state(false);
    function onclick() {
        open = !open;
    }
</script>

<button
    aria-label="Menu"
    { onclick }
    class = { open ? 'open' : ''}
    >
    <div></div>
    <div></div>
    <div></div>
</button>

<style>
    button {
        position: relative;
        width: 34px;
        padding: 5px;
        height: 34px;
        border: none;
        background-color: transparent;
        box-sizing: border-box;
        margin: 0;
    }
    div {
        position: absolute;
        width: 18px;
        height: 2px;
        background-color: black;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        transition: translate 0.1s linear, rotate 0.1s linear 0.1s;
    }
    .open>div {
        transition: translate 0.1s linear 0.1s, rotate 0.1s linear;
    }
    div:nth-child(1) {
        rotate: 45deg;
    }
    div:nth-child(2) {
        rotate: -45deg;
    }
    div:nth-child(3) {
        rotate: -45deg;
    }
    .open>div:nth-child(1) {
        rotate: 0deg;
        translate: -50% calc(-50% + 5px);
    }
    .open>div:nth-child(2) {
        rotate: 0deg;
    }
    .open>div:nth-child(3) {
        rotate: 0deg;
        translate: -50% calc(-50% + -5px);
    }
</style>