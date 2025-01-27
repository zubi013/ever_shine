<script>
    import Icon from "$components/icon/Icon.svelte";
    import IconArrowBack from "$icons/IconArrowBack.svelte";
    import IconArrowForward from "$icons/IconArrowForward.svelte";
    import img from '$assets/BASE.jpg'
    import img2 from '$assets/2.jpg'
    import img3 from '$assets/LOGO.jpg'
    import ImgComp from "./ImgComp.svelte";
    let {width, height, children, infinite = true,
        buttons_active = true,
        slide_trucking = true,
        transition_duration = 0.5,
    } = $props()

    let index_show = $state(0)
    
    const elements = []

    function change_index(increment) {
        if(infinite) {
            return () => {
                let new_index = index_show + increment;
                let max_index = elements.length - 1
                
                switch (new_index) {
                    case max_index+1:
                        index_show = 0;
                        break;
                    case -1:
                        index_show = max_index;
                        break;
                    default:
                        index_show = new_index
                }
            }
        } else {
            return () => {
                let new_index = index_show + increment;
                if (elements[new_index]) index_show = new_index
            }
        }
    }
    
    let slider_style = $derived.by(() => {
        let styles = [];

        if(index_show) {
            let calc_inside = '-' + (width + ' - ').repeat(index_show-1) +  width;
            styles.push(`left: calc(${calc_inside})`);
        } else {
            styles.push('left: 0');
        }

            styles.push(`transition: ${ transition_duration }s`)

            styles.push(`width: ${ elements.length * 100 }%`)

            styles.push(`grid-template-columns: repeat(${ elements.length }, 1fr)`)

        return styles.join('; ')
    });


</script>

<div class="container"
    style="width: { width }; height: { height };">

    <div class="slider" style={slider_style}>
        {@render children?.()}
    </div>

    {#if slide_trucking}
        <div class="mark-container">
            {#each Array(elements.length) as _, index (index)}
                <div class= 'marks { index == index_show ? 'active-mark' : '' }'></div>
            {/each}
        </div>
    {/if}

    {#if buttons_active}
        <button onclick={change_index(-1)} class="back-switch">
            <Icon fill='black'><IconArrowBack/></Icon>
        </button>
        <button onclick={change_index(1)} class="forward-switch">
            <Icon fill='black'><IconArrowForward/></Icon>
        </button>
    {/if}
</div>

<style>
    .container {
        position: relative;
        /* border: 2px solid black; */
        overflow: hidden;
    }
    .slider {
        position: absolute;
        height: 100px;
        display: grid;
        grid-auto-flow: column; 
    }
    button:hover {
        background-color: rgba(255, 255, 255, 0.5);
        opacity: 1;
        /* backdrop-filter: opacity(20%); */
    }
    button {
        height: 100%;
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        border: none;
        background-color: transparent;
        opacity: 20%;
        cursor: pointer;
    }

    .back-switch {
        left: 0;
    }
    .forward-switch {
        right: 0;
    }
    .mark-container {
        display: flex;
        gap: 10px;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 50%;
        translate: -50% 50%;
        opacity: 0.6;
    }
    .marks {
        width: 10px;
        height: 10px;
        background-color: var(--clr-gray-l);
        border-radius: 100px;
        transition: 0.3s;
        
    }
    .active-mark {
        width: 30px;
        transition: 0.3s;
        background-color: var(--clr-gray-d);
    }
    
</style>