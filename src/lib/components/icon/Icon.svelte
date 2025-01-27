<script>
    export let fill = "var(--clr-text)";
    export let height = "24px";
    export let width = "24px";
    export let offsetX = 0;
    export let offsetY = 0;
    export let cls = '';
    export let style = '';
    let x = 0 + Number(offsetX);
    let y = -960 + Number(offsetY);
    let viewBox = `${x} ${y} 960 960`

</script>

<svg xmlns="http://www.w3.org/2000/svg"
{height}
{viewBox}
{width}
{fill}
{style}
class={cls}>
    <slot/>
</svg>