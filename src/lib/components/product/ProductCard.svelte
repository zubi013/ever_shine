<script>
    import img from '$assets/BASE.jpg'
    import img2 from '$assets/2.jpg'
    import Icon from '$components/icon/Icon.svelte';
    import IconCartAdd from '$icons/IconCartAdd.svelte';
    import NumberInput from '$components/inputs/NumberInput.svelte';
    import { fade } from 'svelte/transition'

    let {title = 'Product',
    new_product = false,
    i = 0
    } = $props()


    const images = [
        img, img2
    ]
    
    

</script>


<div class="product-card" in:fade = {{delay:i*20}}>

    <div>

        <a href="/shop">
            <div class="img-container shadow shadow-hover {new_product ? 'new_mark' : ''}">
                
                <img src={ img } alt="">
                <img src={ img2 } alt="">
                
            </div>
        </a>
        <h2>{ title }</h2>

    </div>
    
    <div class="card-footer">

        <p>133.09zł</p>
        <!-- <NumberInput style = 'margin-left:auto'/> -->
        <button>
            <Icon height=1.8em width=1.8em>
                <IconCartAdd></IconCartAdd>
            </Icon>
        </button>

    </div>


</div>


<style>
    .product-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* font-size: 0.7rem; */
    }
    h2 {
        font-size: 0.7em;
        font-weight: var(--fw-medium);
        width: 100%;
        margin-bottom: 0.3em;
    }
    p {
        font-weight: var(--fw-bold);
        margin: 0;
    }
    .product-card:hover img {
        scale: 1.1;
    }
    .img-container {
        position: relative;
        aspect-ratio: 1;

        overflow: hidden;
        border-radius: 8px;
        
        /* background-color: white; */
    }
    img:nth-child(2){
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
    }
    .img-container:hover img:nth-child(2) {
        opacity: 1;
        transition: visibility 0.5s ease-in 1s, opacity 0.5s ease-in 1s;
        visibility: visible;
    }
    .new_mark::after {
        content: 'NEW';
        position: absolute;
        background-color: var(--clr-accent-1);
        right: 10%;
        top: 10%;
        translate: 50% -50%;
        padding: 0.2em 50%;
        rotate: 45deg;
        font-size: 1em;
        font-weight: bold;
    }
    img {
        transition-duration: 0.2s;
        transition-timing-function: ease-out;

        object-fit: contain;
        width: 100%;
        height: 100%;
        background-color: white;
    }
    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        border: none;
        background-color: transparent;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
    }
    button::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 120%;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }

</style>