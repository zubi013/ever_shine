<div>
    <slot/>
</div>

<style>
    div {
        position: absolute;
        min-width: 2em;
        min-height: 2em;
        width: fit-content;
        /* background-color: darkblue; */
        bottom: 0;
        right: 0;
        translate: 0 100%;
        border-radius: 8px;
        outline: 2px solid black;
    }

</style>