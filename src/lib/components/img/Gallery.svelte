<script module>
    import { get } from "svelte/store";

    function getLoopedIndex(index, max_index) {

    }
</script>
<script>

let {width = 200, height = 200,
    elements = []
} = $props()
</script>
<div class="gallery">
    <div>
        {#each elements as {snippet, props}}
            {@render snippet(props)}
        {/each}
    </div>
</div>

<style>
    .gallery {
        position: absolute;
    }
    .gallery>div {
        position: relative;
    }
</style>
