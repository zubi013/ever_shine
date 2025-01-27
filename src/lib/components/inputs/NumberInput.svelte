<script>
    function onbeforeinput(e) {
        if(isNaN(e.data)) return e.preventDefault()
        const value = Number(e.target.value +e.data)
        if( value < min || value > max ) return e.preventDefault()
    }
    let {min = 1, max = 999, style} = $props();

    let inputEl;

    function changeValue(change) {
        return () => {
            let new_value = Number(inputEl.value) + change
            if( new_value < min || new_value > max ) return
            inputEl.value = new_value
        }
    }
</script>
<div { style }>
    <input
    type="text"
    value=1
    {onbeforeinput}
    bind:this = { inputEl }>

    <button onclick={changeValue(1)} class="button-up">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5ch" viewBox="280 -760 400 660" width="1.5ch" fill="black"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </button>
    <button onclick={changeValue(-1)} class="button-down">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5ch" viewBox="280 -760 400 660" width="1.5ch" fill="black"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </button>
</div>
<style>
    div {
        position: relative;
    }
    input {
        width: 3ch;
        min-width: 3ch;
        box-sizing: content-box;
        margin-left: auto;
        padding: 0.3em;
        border-radius: 0.3em;
        border: none;
        background-color: var(--clr-gray-l);
    }
    input:focus, div:hover input{
        width: 5ch;
    }
    div:hover button {
        display: flex;
    }
    button {
        display: none;
        position: absolute;
        width: calc(2ch + 0.3em);
        height: 50%;
        padding: 0;
        margin: 0;
        border: none;
        justify-content: center;
        align-items: center;
        right: 0;
        background-color: transparent;
        /* cursor: pointer; */
    }
    .button-up {
        top: 0;
        rotate:180deg;
    }
    .button-down {
        bottom: 0;
    }
</style>